import io
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
FIXTURE = tempfile.TemporaryDirectory()
os.environ['KNOWLEDGE_DATA_DIR'] = FIXTURE.name
import server
import cloud_secrets
server.SECRET_STORE = cloud_secrets
server.init()


def synthetic_pdf(label, bold=False):
    from pypdf import PdfWriter
    from pypdf.generic import DictionaryObject, NameObject, DecodedStreamObject
    writer = PdfWriter()
    page = writer.add_blank_page(width=400, height=500)
    font = DictionaryObject({NameObject('/Type'): NameObject('/Font'),
        NameObject('/Subtype'): NameObject('/Type1'),
        NameObject('/BaseFont'): NameObject('/Helvetica-Bold' if bold else '/Helvetica')})
    page[NameObject('/Resources')] = DictionaryObject({NameObject('/Font'):
        DictionaryObject({NameObject('/F1'): writer._add_object(font)})})
    stream = DecodedStreamObject()
    stream.set_data(('40 300 280 120 re S\nBT /F1 12 Tf 40 280 Td ('+label+') Tj ET').encode())
    page[NameObject('/Contents')] = writer._add_object(stream)
    output = io.BytesIO(); writer.write(output)
    return output.getvalue()


class CloudTests(unittest.TestCase):
    def test_credentials_on_first_save(self):
        for workspace in ('research', 'news'):
            config = server.CONFIG if workspace == 'research' else server.DATA/'settings-news.json'
            config.unlink(missing_ok=True)
            values = {v:'synthetic-canary-'+v for v in cloud_secrets.ENV.values()}
            with patch.dict(os.environ, values):
                public = server.save_settings({'workspace':workspace, 'max_items':2})
                self.assertTrue(all(public[k+'_configured'] for k in cloud_secrets.SECRET_FIELDS))
                self.assertNotIn('synthetic-canary', json.dumps(public))
                self.assertNotIn('synthetic-canary', config.read_text())
                self.assertFalse(set(cloud_secrets.SECRET_FIELDS) & set(json.loads(config.read_text())))
                for change in ({'api_key':'changed'}, {'clear_api_key':True}, {'base_url':'https://example.com'}):
                    with self.assertRaises(ValueError):
                        server.save_settings({'workspace':workspace, **change})

    def test_pdf_caption_modes(self):
        from PIL import Image
        for n, label, bold, expected in (
            (1,'Figure 1: A synthetic diagram.',False,'full_page'),
            (2,'Figure 2: A bold synthetic diagram.',True,'crop'),
            (3,'Figure 3. First, consider the method.',False,None),
            (4,'We refer to Figure 4: in running prose.',False,None),
            (5,'Table 5: Synthetic values.',False,'full_page'),
        ):
            iid, _ = server.add_item({'title':f'Fixture diagram {n}', 'external_id':f'fixture:{n}'})
            (server.DATA/(iid+'.pdf')).write_bytes(synthetic_pdf(label,bold))
            visuals = server.extract_paper_visuals(iid)
            if expected is None:
                self.assertEqual(visuals, []); continue
            self.assertEqual(len(visuals), 1)
            visual = visuals[0]
            self.assertEqual(visual.get('extraction_mode','crop'), expected)
            with Image.open(server.DATA/'visuals'/iid/(visual['id']+'.png')) as image:
                image.verify()
            if expected == 'full_page':
                self.assertEqual(visual['bbox'], [0,0,400,500])
                self.assertIn('Full PDF page', visual['label'])

    def test_init_and_preflight_without_workers(self):
        with tempfile.TemporaryDirectory() as data:
            env = {**os.environ, 'KNOWLEDGE_DATA_DIR':data}
            before = subprocess.run([sys.executable, str(ROOT/'cloud_entry.py'), 'preflight'], env=env,capture_output=True,text=True)
            self.assertNotEqual(before.returncode,0)
            self.assertIn('Database not found',before.stderr)
            for command in ('init','preflight'):
                result = subprocess.run([sys.executable,str(ROOT/'cloud_entry.py'),command],env=env,capture_output=True,text=True,check=True)
                self.assertFalse(json.loads(result.stdout)['automatic_work_started'])


if __name__ == '__main__':
    unittest.main()
