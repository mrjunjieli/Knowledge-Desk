function reportMarkdown(text){
  const renderer=new marked.Renderer();
  renderer.html=({text})=>esc(text);
  renderer.image=({href,text})=>/^\/paper-assets\/[a-f0-9]{20}\/(?:figure|table)-\d+-p\d+\.png$/.test(href)?`<figure class="paper-original-visual"><a href="${esc(href)}" target="_blank" rel="noopener"><img src="${esc(href)}" alt="${esc(text)}" loading="lazy"></a><figcaption>${esc(text)}</figcaption></figure>`:esc(text);
  renderer.link=function({href,tokens}){const content=this.parser.parseInline(tokens);return /^(?:https?:\/\/|#[A-Za-z0-9_-]|\/paper-assets\/)/.test(href)?`<a href="${esc(href)}" target="_blank" rel="noopener">${content}</a>`:content};
  return marked.parse(text,{renderer,gfm:true});
}
function detailedPaperReport(summary){
 const titles=['研究概览','方法与原文图','实验结果与表格','阅读建议','主张、证据与缺口','审稿意见','实验的进一步解读','总体评价','研究启示'];
 const section=(r)=>`<details class="report-section" ${[1,8].includes(r.part)?'open':''}><summary>${esc(titles[r.part-1]||r.title)}</summary><div class="report-markdown">${reportMarkdown(r.markdown)}</div></details>`;
 return `<section class="analysis-part"><h3>论文总结</h3>${summary.report_sections.filter(r=>r.part<=4).map(section).join('')}</section><section class="analysis-part reviewer-part"><h3>审稿人 Review</h3>${summary.report_sections.filter(r=>r.part>4).map(section).join('')}</section>`;
}
