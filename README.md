# Knowledge Desk

A private Python research workspace for collecting papers, organizing reading,
notes and todos, and generating bilingual paper reviews through a separately
configured model service. This repository contains code and static assets only.

## Start a new workspace

Python 3.12 or newer is recommended.

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements-cloud.txt
.venv/bin/python cloud_entry.py init
.venv/bin/python cloud_entry.py preflight
.venv/bin/python cloud_entry.py serve
```

Open `http://127.0.0.1:8765` on the machine running the server. `serve` binds
loopback and does not start queues or scheduled jobs. Imports and favorites may
record queued work, but it remains pending in this mode. `init` creates a new
empty workspace; it does not migrate existing data. Use `KNOWLEDGE_DATA_DIR` to
select a private data directory outside the repository.

Do not expose this unauthenticated local server to the internet or disable its
Host/Origin checks. A remote deployment needs a separately verified private
access and authentication layer.

## Model credentials

Configure `SUMMARY_API_KEY` through the runtime's private credential mechanism.
On supported Codex Cloud environments, use **HTTP secrets** with allowed domain
`api.deepseek.com`; the HTTPS proxy substitutes the credential at the allowed
destination. The default model endpoint is `https://api.deepseek.com`.
Do not put real keys in this repository, an issue, chat, or browser settings.
`cloud_secrets.py` stores non-secret preferences only and rejects credential
changes through the application. Environment configuration changes may require
a new runtime; verify readiness before making model calls.

After configuring an authorized account, a bounded review can be requested with
`cloud_entry.py review --paper ID` (at most two distinct IDs). It requires papers
without saved reports. Review sends paper material and reading interests to the
configured model. Do not use private notes or chat histories as paper material.

`cloud_entry.py run` enables the full application's workers and scheduler. It is
an explicit operational action: reconcile existing data and queues first, and
keep only one active scheduler. It is not a preview command.

## Paper images

Bold-caption figures retain the existing crop heuristic. Regular-weight
`Figure N:` / `Table N:` captions use a clearly labelled original PDF page when
an individual crop cannot be established. This keeps the original evidence
visible without presenting an uncertain crop as precise extraction. It is a
fallback, not a universal figure segmentation system.

## Checks

```sh
.venv/bin/python -m unittest discover -s tests -v
```

Tests use synthetic PDFs and temporary databases. They do not contact a model
or require credentials. Live model quality, private browser access, full data
migration, long-term storage, and scheduling must be accepted separately.

The vendored KaTeX assets retain their license in `static/katex/LICENSE`.
