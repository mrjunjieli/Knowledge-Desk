/* UI-only localization. API values, input contents and paper source material are immutable. */
(()=>{
const entries=`每日推送记录|Daily delivery history
按推荐日期统计；已读与未读反映当前状态，收藏和不感兴趣单独计数。|Grouped by recommendation date. Read and unread reflect current status; saved and dismissed are counted separately.
采集与筛选进行中|Collection and screening in progress
采集或筛选部分失败|Collection or screening partially failed
候选论文仍待筛选|Candidates are still awaiting screening
当天推荐已完成|Daily recommendations completed
本次采集完成，没有新增合适推荐|Collection completed; no new suitable recommendations
采集流程失败|Collection failed
采集流程被中断|Collection was interrupted
已有历史推荐记录|Historical recommendations recorded
未记录当天采集结果，无法确认是否运行|No collection result recorded; unable to confirm whether it ran
已采集候选，但未记录筛选完成结果|Candidates collected; screening completion was not recorded
当天没有推荐记录|No recommendations recorded for this day
显示论文|Show papers
未读|Unread
PDF 署名提取|Extracting PDF authors and affiliations
仅补充英文版|Generate missing English version
补充英文版本|Generate English version
英文版本已保存|English version saved
旧版报告需要更新后才能补充英文。|Update this legacy report before generating its English version.
报告已更新，请重新补充英文。|The report has changed. Please generate its English version again.
Review 已保存；入库后联网补全作者档案|Review saved; author profiles will be looked up after adding the paper to your library
Review 已保存；作者档案后台补全|Review saved; author profiles are being completed in the background
后台排队中|Queued in the background
后台处理中|Processing in the background
英文版本尚未生成，请更新报告生成中英双语版本。|The English version is not available yet. Update the report to generate both languages.
英文版本|English version
论文分析|Paper analysis
英文版本未完整生成，原报告保留。|The English version did not finish. The previous report is retained.
英文版本格式无效，原报告保留。|The English version has an invalid format. The previous report is retained.
英文版本缺少段落，原报告保留。|The English version is missing sections. The previous report is retained.
英文版本改变了公式或链接，原报告保留。|The English version changed equations or links. The previous report is retained.
Language / 语言|Language
读取论文并生成报告|Reading the paper and generating a report
连续三次处理失败，请检查模型连接或论文来源|Three attempts failed. Check the model connection or paper source
处理失败，后台将自动重试|Processing failed; the background worker will retry
首页作者与单位仍有缺项，独立任务将重试；Review 不受影响|Some authors or affiliations are missing. The separate extraction task will retry; the review is unaffected
署名材料仍有歧义，已保留可核实部分；需补充证据或手动重试|Author information remains ambiguous. Verified information is retained; provide more evidence or retry manually
作者资料处理完成|Author profile processing complete
链接导入论文|Import paper from URL
已收藏，后台自动解析|Saved; analysis continues in the background
Review 已保存|Review saved
候选检索 Agent|Candidate search agent
论文归属 Agent|Paper attribution agent
身份复核 Agent|Identity verification agent
查找图中的论文|Find papers in the graph
查找图中的作者|Find authors in the graph
已保存任务，等待后台处理|Task saved; waiting for background processing
只读取 PDF 第一页并匹配署名编号|Reading the first PDF page and matching affiliation markers
补全作者身份资料|Completing author identity profiles
首页作者与单位已保存|Authors and affiliations saved
已保存；旧报告未重新生成|Saved; existing reports were not regenerated
已检测到本地 Codex|Local Codex detected
建议生成|Advice generated
暂无此项数据，保持原顺序|No data for this field; keeping the original order
此项数值相同，顺序不变|Values are equal; order unchanged
部分正文|Partial text
长文已截断，仅分析部分正文|Long text was truncated; only the supplied portion was analyzed
感兴趣|Interested
身份待核实，未按同名合并|Identity unverified; not merged by name
文库共同署名|Coauthored in your library
内容详情|Content details
新闻来源独立保存。|News sources are stored separately.
新闻工作区|News workspace
论文工作区|Paper workspace
独立审稿|Independent review
论文解读|Paper explanation
证据核验|Evidence verification
核验完成|Verification complete
发现待核对问题|Issues need verification
材料不足，仍需核对|Insufficient material; verification required
AI 初审返回不完整，未采纳该批结果。|AI screening was incomplete; this batch was not accepted.
AI 初审返回未知或重复论文。|AI screening returned unknown or duplicate papers.
AI 初审返回格式无效。|AI screening returned an invalid format.
API 地址必须以 https:// 或 http:// 开头|The API URL must start with https:// or http://
API 地址需要 http:// 或 https://|The API URL requires http:// or https://
Agent 模型配置无效|Invalid agent model configuration
Agent 配置无效|Invalid agent configuration
Agent 配置过长|Agent configuration is too long
Claude 兼容接口不支持通用 reasoning_effort，请使用服务商默认，或按其文档配置自定义思考参数。|Claude-compatible APIs do not support generic reasoning_effort. Use the provider default or configure reasoning parameters according to its documentation.
Codex 使用额度或并发受限，请稍后重试。|Codex usage or concurrency limit reached. Try again later.
Codex 正在处理其他分析任务；请稍后测试，设置已保存。|Codex is processing another analysis. Test again later; settings have been saved.
DeepSeek 原生搜索工具执行失败|DeepSeek native search failed
DeepSeek 原生搜索需要使用官方 DeepSeek 模型 API；更换服务商后请选择独立搜索服务。|Native search requires the official DeepSeek API. Select a separate search service when changing model providers.
DeepSeek 搜索未返回可用网页来源|DeepSeek search returned no usable web sources
DeepSeek 搜索连接失败或超时，请稍后重试。|DeepSeek search could not connect or timed out. Try again later.
OpenAI 官方接口必须使用 HTTPS。|The official OpenAI API requires HTTPS.
PDF 上传仅适用于论文库|PDF upload is available only in the paper library
PDF 文件编码无效|Invalid PDF file encoding
PDF 文本不足，可能是扫描版；需要 OCR 后重试|Insufficient PDF text. It may be scanned; run OCR and try again.
PDF 文本不足，需要 OCR|Insufficient PDF text; OCR required
PDF 页数过多，请上传论文正文|Too many PDF pages. Upload the main paper.
alphaXiv 填写 all 表示全领域，或填写逗号分隔的英文主题|For alphaXiv, enter “all” or comma-separated topics in English
alphaXiv 页面未返回可读取的论文列表；可能暂无结果或页面结构已变化。|alphaXiv returned no readable paper list. Results may be unavailable or the page structure may have changed.
不是网页文本|Not a text webpage
不能检索本机或内网地址|Local and private network URLs cannot be searched
主页必须是 HTTP/HTTPS 链接|The homepage must be an HTTP/HTTPS URL
仅支持 arXiv 论文；其他论文可粘贴正文或导入 PDF。|Only arXiv papers are supported here. For other papers, paste the text or import a PDF.
任务状态已更新，请查看最新消息后再移除|Task status changed. Review the latest message before dismissing it.
作者不属于当前页面|This author does not belong to the current page
作者名单应包含 1 至 1000 条记录|The author list must contain 1 to 1,000 entries
作者名称不能为空|Author name cannot be empty
作者搜索仅适用于论文|Author search is available only for papers
候选不是网页文本|The candidate is not a text webpage
候选网页过大|The candidate webpage is too large
关注作者导入已停用|Followed-author import is disabled
关系图数量应为2至100|Graph size must be between 2 and 100
内容不存在|Content not found
内容超过大小限制|Content exceeds the size limit
切换 API 地址后需要重新填写该角色密钥。|Enter this role’s key again after changing its API URL.
切换服务商后请填写该服务的新 API Key，原密钥不会发送给其他服务。|Enter the new provider’s API key. The existing key will not be sent to another provider.
初审仅适用于论文模块|Screening is available only in the paper workspace
别名必须是列表|Aliases must be a list
只允许公开网站地址|Only public website URLs are allowed
只支持 HTTP/HTTPS 来源|Only HTTP/HTTPS sources are supported
复制角色配置无效|Invalid role configuration copy
多 Agent 开关无效|Invalid multi-agent setting
密钥引用无效，请重新配置。|Invalid key reference. Configure it again.
密钥未保存：macOS 钥匙串拒绝访问。原配置未更改。|Key not saved: macOS Keychain denied access. Existing settings are unchanged.
尚无可下载的 PDF 地址|No downloadable PDF URL available
尚未保存 API Key，请先填写并保存。|No API key saved. Enter and save one first.
尚未配置完整的 API 地址、模型和密钥|API URL, model and key are not fully configured
引用关系只在 Research Paper 中维护|Citation links are managed only in Research Paper
引用接口返回的数据数量不匹配|The citation API returned an unexpected number of records
引用查询目前需要 arXiv ID。|Citation lookup currently requires an arXiv ID.
当前论文正在回复，请等待完成|A reply for this paper is in progress. Wait for it to finish.
扫描版 PDF 暂不能自动识别，请先进行 OCR|Scanned PDFs need OCR before import
接口已响应，但未返回有效文字；请检查模型或接口兼容性。|The API responded but returned no usable text. Check model or API compatibility.
接口未返回可用模型，请使用预设候选或手动填写。|The API returned no usable models. Use presets or add a model manually.
接口未返回有效的模型列表，请使用预设候选或手动填写。|The API returned no valid model list. Use presets or add a model manually.
搜索响应过大|Search response is too large
收藏或标为已读后，才会联网检索作者档案|Author profiles are searched online after papers are saved or marked as read
收藏文件夹仅适用于论文|Collection folders are available only for papers
文件夹不存在，请刷新后重试|Folder not found. Refresh and try again.
文件夹名称应为1至50字|Folder names must be 1–50 characters
文件夹无效|Invalid folder
新版报告未返回有效格式，原报告已保留。|The new report returned an invalid format. The previous report is retained.
无效兴趣反馈|Invalid preference feedback
无效标签维度|Invalid tag category
无效阅读状态|Invalid reading status
无法解析 PDF，请检查文件是否完整|Unable to parse the PDF. Check that the file is complete.
无法访问 macOS 钥匙串，请解锁钥匙串并允许本地服务访问。|Unable to access macOS Keychain. Unlock it and allow the local service access.
无法读取论文链接，请检查地址或改为上传 PDF。|Unable to read the paper URL. Check it or upload a PDF instead.
暂不支持该来源|This source is not supported
服务未返回兼容的模型列表，请使用预设候选或手动填写。|The service returned no compatible model list. Use presets or add a model manually.
未找到本地 Codex，请先安装 Codex CLI 并登录。|Local Codex was not found. Install Codex CLI and sign in first.
未找到这篇论文|Paper not found
未知内容类型|Unknown content type
未知工作空间|Unknown workspace
未知提醒类型|Unknown notification type
未知搜索服务|Unknown search service
未能从网页识别论文标题，请使用论文详情页链接或上传 PDF。|No paper title could be identified. Use a paper detail URL or upload a PDF.
未返回 PDF|No PDF returned
本地 Codex 分析超时，请降低思考强度后重试。|Local Codex analysis timed out. Lower the reasoning effort and try again.
本地 Codex 未完成分析，请检查模型权限或本地登录状态。|Local Codex did not finish. Check model access or local sign-in status.
本地 Codex 没有返回分析结果。|Local Codex returned no analysis result.
本地 Codex 登录不可用，请在 Codex CLI 中使用 ChatGPT 账号登录。|Local Codex sign-in is unavailable. Sign in to Codex CLI with your ChatGPT account.
来源不存在|Source not found
来源未返回 PDF，稍后可重试|The source returned no PDF. Try again later.
来源没有返回 PDF|The source returned no PDF
标签不存在|Tag not found
标签不存在，请刷新后重试|Tag not found. Refresh and try again.
标签名称请使用中文；英文名称可作为别名保存|Use a Chinese canonical tag name; English names can be saved as aliases
标签库仅适用于论文|The tag library is available only for papers
标签整理仅适用于论文|Tag organization is available only for papers
标签格式不正确|Invalid tag format
标签结果缺少论文|Tag results are missing papers
标签论文 ID 不正确|Invalid paper ID in tag results
标签返回结构不正确|Invalid tag result structure
标题不能为空|Title cannot be empty
核验意见格式无效，原报告保留。|Verification comments have an invalid format. The previous report is retained.
模型列表过大，请手动填写模型名称。|Model list is too large. Enter the model name manually.
模型响应未完成，请重试或检查输出额度。|The model response did not finish. Retry or check output limits.
模型回复未完成|The model response did not finish
模型未返回可用文字，请检查权限或重试。|The model returned no usable text. Check access or try again.
模型没有执行原生搜索；没有返回搜索结果，不能将模型文字当作联网结果。|The model did not run native search. No search results were returned; model text is not web evidence.
模型没有返回有效JSON，请重试。|The model returned invalid JSON. Try again.
模型没有返回有效报告。|The model returned no valid report.
模型返回结构不完整，请重试。|The model returned an incomplete structure. Try again.
此服务请使用服务商默认或其支持的思考档位。|Use the provider default or a supported reasoning effort.
此模型不支持关闭思考，请选择其他强度。|This model does not support disabling reasoning. Choose another effort.
此链接不是论文网页或 PDF，请改为上传 PDF。|This URL is not a paper page or PDF. Upload a PDF instead.
每日时间请填写 HH:MM|Enter the daily time as HH:MM
没有可分析的正文或摘要，请先添加内容。|No text or abstract to analyze. Add content first.
没有可读取的原文 PDF|No readable original PDF
索引作者姓名不匹配|The indexed author name does not match
索引作者链接不匹配|The indexed author link does not match
网页太大|Webpage is too large
网页未提供足够的论文内容，请上传全文 PDF。|The webpage has insufficient paper content. Upload the full PDF.
署名独立核验输出不完整|Independent affiliation verification is incomplete
自定义映射应为 JSON 对象：每个强度对应一组请求参数，不能覆盖模型、消息、地址或密钥。|Custom mappings must be a JSON object mapping effort levels to request parameters. They cannot override the model, messages, URL or key.
获取模型列表连接失败或超时，请检查 API 地址后重试。|Fetching models failed or timed out. Check the API URL and try again.
论文不存在|Paper not found
论文内容超过15 MB，请改为上传较小的 PDF。|Paper content exceeds 15 MB. Upload a smaller PDF.
论文来源支持 arXiv、Hugging Face 和 alphaXiv|Supported paper sources are arXiv, Hugging Face and alphaXiv
论文解读阶段没有包含所需完整章节，原报告已保留。|The explanation omitted required sections. The previous report is retained.
论文链接导入仅适用于论文库|Paper URL import is available only in the paper library
论文问答失败，请检查模型连接或稍后重试。|Paper chat failed. Check the model connection or try again later.
证据核验返回格式不完整，原报告保留。|Evidence verification returned an incomplete format. The previous report is retained.
该作者不属于当前页面|This author does not belong to the current page
该内容不属于当前页面|This content does not belong to the current page
该别名已属于其他标签，请使用合并功能|This alias belongs to another tag. Use merge instead.
该资料来源暂不可用，等待重试|This source is temporarily unavailable; awaiting retry
请上传不超过15 MB的有效 PDF|Upload a valid PDF no larger than 15 MB
请使用1至20字的中文标签名称|Use a Chinese canonical tag name of 1–20 characters
请先保存 DeepSeek 模型 API Key；无需独立搜索 Key|Save your DeepSeek model API key first; no separate search key is required
请先保存一个有效 API 配置|Save a valid API configuration first
请先保存独立的联网搜索 Key|Save a separate web search key first
请先收藏论文，再选择文件夹|Save the paper before selecting a folder
请先生成论文总结与 Review。|Generate the paper summary and review first.
请先移除 PDF 密码|Remove the PDF password first
请先选择并保存 DeepSeek 原生搜索|Select and save DeepSeek native search first
请先选择并配置 AI 服务（API 或本地 Codex）。|Select and configure an AI service (API or local Codex) first.
请先配置 AI 总结密钥。|Configure an AI summary key first.
请先配置 AI 服务。|Configure an AI service first.
请先配置 AI 模型|Configure an AI model first
请先配置独立 AI Key，才能生成综合 Review。|Configure an AI API key before generating a review.
请先配置论文 AI Key|Configure the paper AI key first
请先配置论文模块的 AI Key，才能进行 AI 初审。|Configure the paper workspace AI key before screening.
请只合并相同维度的标签；可以先调整维度|Merge tags of the same category only; adjust categories first if needed
请填写公开论文的 HTTP/HTTPS 链接|Enter a public HTTP/HTTPS paper URL
请填写有效的 API 基础地址，不要包含密钥、查询参数或片段。|Enter a valid API base URL without keys, query parameters or fragments.
请填写来源名称与查询或地址|Enter a source name and query or URL
请输入1–3000字的问题|Enter a question of 1–3,000 characters
请输入有效的 arXiv ID 或论文链接|Enter a valid arXiv ID or paper URL
请选择 API 或本地 Codex。|Select API or local Codex.
请选择两篇不同论文并填写引用依据|Select two different papers and provide citation evidence
请选择共用模型或分别配置|Choose a shared model or separate configurations
请选择有效的 DeepSeek 模型|Select a valid DeepSeek model
请选择有效的思考参数格式。|Select a valid reasoning parameter format.
请选择有效的思考强度。|Select a valid reasoning effort.
请选择有效的接口协议。|Select a valid API protocol.
请选择有效的搜索服务|Select a valid search service
请选择本地 Codex 支持的模型与思考强度。|Select a model and reasoning effort supported by local Codex.
资料页面要求验证，不能作为身份依据|The profile page requires verification and cannot be used as identity evidence
输出未完整生成|Output generation did not finish
输出格式无效|Invalid output format
这个档案尚无账号动态；请先导入带账号名称的内容。|This profile has no updates. Import content with an account name first.
这条任务消息已不存在|This task message no longer exists
这篇论文暂无可用 HTML 全文，请导入 PDF 或粘贴正文。|No HTML full text is available. Import a PDF or paste the text.
进行中的任务完成后才可以移除消息|A running task must finish before its message can be dismissed
连接测试等待 3 分钟仍未收到回复，测试已停止；设置已保存。请检查 Codex 连接后重试。|No response after three minutes. The test stopped and settings were saved. Check the Codex connection and retry.
钥匙串中的密钥不存在，请重新填写并保存。|The key is missing from Keychain. Enter and save it again.
链接必须为 HTTP/HTTPS|URLs must use HTTP/HTTPS
问答仅适用于论文|Chat is available only for papers
阅读建议尚未完整生成，原报告保留。|Reading advice did not finish. The previous report is retained.
阅读建议格式不完整，原报告已保留。|Reading advice has an incomplete format. The previous report is retained.
阅读建议缺少依据，原报告已保留。|Reading advice lacks evidence. The previous report is retained.
阶段未完成，原报告保留；请检查该角色连接或输出限制。|stage did not finish. The previous report is retained. Check this role’s connection or output limits.
阶段未返回有效JSON，原分析已保留。|stage returned invalid JSON. The previous analysis is retained.
阶段结构不完整，原分析已保留。|stage returned an incomplete structure. The previous analysis is retained.
需要可识别的 Google Scholar 作者主页链接|A recognizable Google Scholar author profile URL is required
首页没有可读文字，需要 OCR；不会猜测作者与单位|The first page has no readable text. OCR is required; authors and affiliations will not be guessed.
首页署名需要 AI 补充提取，请先配置模型|First-page author information needs AI extraction. Configure a model first.
AI 评价是辅助判断，请结合原文核实。|AI evaluations are advisory. Verify them against the original paper.
AI 阅读建议|AI reading advice
Google Scholar 主页|Google Scholar profile
Google Scholar 提醒邮件（.eml）|Google Scholar alert email (.eml)
Hugging Face Daily Papers，每日论文发现列表。|Hugging Face Daily Papers, a daily discovery feed.
PDF 文件|PDF file
PDF 未能明确对应单位|The PDF did not clearly identify the affiliation
all 表示全领域热点，包含多模态、NLP、大语言模型及其他领域；也可填写英文主题，用逗号分隔。|Use “all” for trends across fields, including multimodal learning, NLP and language models, or enter comma-separated topics in English.
all 表示全领域热点；也可用英文逗号分隔指定主题。不需要登录。|Use “all” for trends across fields, or specify comma-separated topics. No login is required.
alphaXiv 热点论文|alphaXiv trending papers
arXiv ID 或链接|arXiv ID or URL
arXiv 分类 / 关键词|arXiv categories / keywords
上传 PDF|Upload PDF
上传后默认收藏。正文、作者与单位、总结和 Review 自动解析；支持含文字的 PDF，最大 15 MB，扫描版需先 OCR。|Uploads are saved to your library automatically. Text, authors, affiliations, summary and review are processed in the background. Text-based PDFs up to 15 MB are supported; scanned PDFs need OCR first.
上传或收藏论文后，这里会显示你的阅读概览。|Upload or save papers to see your reading overview here.
与你的论文相似|Similar to your papers
与已有标签同名时，会自动合并，相关论文同步更新。|Using an existing tag name merges the tags and updates the associated papers.
为什么需要|Why it is needed
主要优点|Key strengths
主要问题|Major issues
主题与采集设置已保存|Topics and collection settings saved
事件概览|Event overview
事实与判断|Facts and interpretations
今天，值得读什么|What is worth reading today?
今日|Today
从邮箱下载提醒邮件后导入。保留邮件正文，并尝试识别其中的 arXiv 论文链接；暂未连接 Gmail 自动读取。|Download and import an alert email. Its body is retained and arXiv links are extracted where possible. Automatic Gmail import is not connected.
以发表时的原文为准。|As stated in the paper at publication.
任务|Task
作者 / 账号（用逗号分隔）|Authors / accounts (comma-separated)
作者主页|Author homepage
作者资料已保存|Author profile saved
作者（逗号分隔）|Authors (comma-separated)
例如 1706.03762 或 https://arxiv.org/abs/…|For example: 1706.03762 or https://arxiv.org/abs/…
例如 ASR、TSE|For example: ASR, TSE
例如 ASR、TSE；留空使用上方选择|For example: ASR, TSE; leave blank to use the selected folder
例如 high、extra|For example: high, extra
例如：大语言模型研究|For example: Large language model research
例如：论文第 12 页，参考文献 [24]|For example: page 12, reference [24]
例：cat:cs.LG、cat:cs.CV，或 all:"retrieval augmented generation"。|Examples: cat:cs.LG, cat:cs.CV, or all:"retrieval augmented generation".
保存位置|Save location
保存内容|Save content
保存引用关系|Save citation link
保存材料|Save source text
保存笔记|Save notes
保存资料|Save profile
信息来源与过程|Sources and process
修改原文后会清除旧总结，避免结论和材料不一致。|Editing the source text clears the old summary to avoid inconsistencies.
修改名称|Rename
修改标签名称|Rename tag
候选网页|Candidate page
做什么|What it does
先了解这篇论文|Understand the paper
先导入标题、作者和摘要。全文和 AI 总结可在论文详情页按需获取。|Import the title, authors and abstract first. Fetch full text and generate an AI summary from the paper page.
入库后自动联网补全；可以手动重新检索或更正资料。|Profiles are enriched online after a paper enters your library. You can search again or edit details manually.
公开候选已就绪；未验证账号权限。|Public model candidates are ready; account access has not been verified.
公开预设候选，未验证账号权限。|Public model presets; account access has not been verified.
关键结果|Key results
其他审稿意见|Additional review comments
其他研究|Other research
具体贡献|Contributions
内容已保存|Content saved
内容：|Content:
写下自己的判断…|Write your own assessment…
决定从 arXiv 获取哪些候选论文。例如：cat:cs.SD OR cat:eess.AS。采集后再按推荐兴趣主题筛选。|Determines which candidates are fetched from arXiv, for example cat:cs.SD OR cat:eess.AS. Candidates are then screened against your interests.
准备好材料，再开始阅读|Prepare your sources and start reading
分类暂未提供|Category unavailable
切换模型后自动更新；不影响已有报告。|Updates when you switch models; existing reports are unchanged.
创建|Create
创新与贡献|Novelty and contributions
创新性|Novelty
创新性与边界|Novelty and scope
删除档位|Remove effort option
前日|Two days ago
加入文库时间：新 → 旧|Added to library: newest first
动态|Updates
动机|Motivation
单位信息待补充|Affiliation pending
原始材料|Original source material
原始链接|Original URL
发送参数|Request parameters
发送参数必须是 JSON 对象。|Request parameters must be a JSON object.
只补充建议，复用现有报告。|Adds reading advice using the existing report.
可以获取公开列表，或点击 ＋ 添加模型。|Fetch a public list or select + to add a model.
可拖动旋转的三维关系网络|Interactive 3D relationship graph
可按需生成综合 Review。|Generate a review when needed.
可核查的证据|Verifiable evidence
合作|Collaboration
合作作者|Coauthors
同名标签已合并，论文标签已同步|Matching tags merged and papers updated
在每日推荐中收藏或标为已读后，论文会出现在这里。|Save a recommended paper or mark it as read to add it here.
在设置中填写 AI 接口地址、模型与独立 API Key。支持 DeepSeek 及其他兼容接口。|Enter an AI endpoint, model and API key in Settings. DeepSeek and other compatible APIs are supported.
填写 GitHub 搜索表达式。结果按累计 Stars 排序，不等同于每日 Trending。|Enter a GitHub search query. Results are sorted by total stars, not daily trending rank.
填写公开 RSS / Atom 地址；账号平台没有公开 feed 时可手动导入。|Enter a public RSS / Atom URL. Import manually if the platform has no public feed.
填写对应搜索服务的 Key；搜索结果交给当前模型分析。|Enter the search provider’s key. Results are analyzed by the current model.
填写新闻网站的公开 RSS / Atom 地址。|Enter the news site's public RSS / Atom URL.
多 Agent 核验记录|Multi-agent verification record
多 Agent 设置已保存|Multi-agent settings saved
大概意思|Overview
存在冲突|Conflicting evidence
学术索引|Academic index
学术索引档案|Academic index profile
学术索引身份匹配不代表履历完整，当前机构可能随时间变化。|An index match does not establish a complete biography. Current affiliations may change over time.
学术索引身份已匹配|Matched in academic index
完成|Complete
完整正文|Full text
实验分别说明了什么|What the experiments establish
实验设置|Experimental setup
对照是什么|Baselines
导入任务已提交，后台自动读取并分析，可在任务中心查看进度|Import started. Reading and analysis continue in the background; see the task center for progress.
导入内容|Import content
导入文件|Import file
导入论文|Import paper
尚无多 Agent 核验记录。新入库或重新检索资料时自动执行。|No multi-agent verification record yet. Verification runs when a paper enters the library or profiles are searched again.
尚无正文|No source text yet
尚无足够兴趣反馈|Not enough preference feedback yet
尚未保存摘要，点击查看论文。|No abstract saved. Open the paper to read it.
尚未明确|Not yet established
尚未添加正文|No text added yet
尚未生成 AI 总结。|No AI summary generated yet.
尚未获取引用次数|Citation count not retrieved
尚未记录核实依据。|No verification evidence recorded.
局限|Limitations
局限与未知|Limitations and unknowns
展开实验设置、结果与图表|Show experiment setup, results and figures
展开方法步骤与原文图|Show method steps and original figures
已从本地候选中移除；不会删除服务商的模型。|Removed from the local list. The provider's model is unchanged.
已保存；留空保留，换搜索服务需填写新 Key|Saved. Leave blank to retain; enter a new key when changing search providers.
已取消收藏|Removed from saved papers
已取消收藏，恢复中性反馈|Unsaved; preference reset to neutral
已完成精读|Close reading complete
已应用手动档位，请保存 AI 设置|Manual effort options applied. Save your AI settings.
已开始，可在最近任务查看进度|Started. See recent tasks for progress.
已恢复为中性反馈|Preference reset to neutral
已执行|Executed
已收藏并保存正文；配置模型后会自动继续分析|Paper and text saved. Analysis resumes after a model is configured.
已收藏，后台正在自动解析论文|Saved. The paper is being analyzed in the background.
已收藏，已移出每日推荐|Saved and removed from daily recommendations
已收藏，文件夹已保存|Paper saved to the selected folder
已更新已有内容|Existing content updated
已有密钥；留空保留|A key is saved; leave blank to retain it
已有综合 Review|Review available
已标记不感兴趣，并移出每日推荐。|Marked not interested and removed from daily recommendations.
已核实身份|Identity verified
已读，已移入论文库|Marked as read and added to your library
已进入后台队列，轮到这篇论文后会自动读取 PDF 并生成总结。|Queued. The PDF will be read and summarized when its turn arrives.
引用|Cites
引用与被引用|Citations and references
引用依据（参考文献编号、页码等）|Citation evidence (reference number, page, etc.)
引用关系已保存|Citation link saved
引用数量：多 → 少|Citations: highest first
引用者|Citing paper
当前为本地 Codex；分别配置模式需要 API 模型。|Local Codex is selected. Separate role configurations require API models.
当前关系图中没有匹配项|No matches in this graph
当前文库尚无已核实的连线。孤立节点已隐藏，新增关系后会自动出现在这里。|No verified connections in your library yet. Isolated nodes are hidden; new connections appear automatically.
当前机构|Current institution
当前材料没有足够信息逐项解释实验。|The available material is insufficient to explain each experiment.
当前材料证据不足。|Insufficient evidence in the available material.
当前没有这类任务|No tasks of this type
影响|Impact
待回答的问题|Open questions
必要术语，用白话解释|Key terms in plain language
成果类型|Output type
我的文库中的论文|Papers in my library
研究方向|Research direction
研究方向历史|Research direction history
更新研究方向|Update research directions
已开始更新研究方向|Research directions update started
采集流水|Collection ledger
收集与推荐流程|Collection flow
我的笔记|My notes
手动导入|Manual import
打开论文会保留在每日推荐；收藏、标为已读或不感兴趣后移出。未处理的论文按推荐日期保留。|Opening a paper keeps it in daily recommendations. Saving it, marking it read or marking it not interested removes it. Unhandled papers remain under their recommendation date.
把兴趣留在这里|Keep what interests you
指标怎么理解|Understanding the metrics
推荐|Recommendation
搜索知识库|Search knowledge base
摘要或正文|Abstract or full text
支持 arXiv 查询语法。|Supports arXiv query syntax.
支持 arXiv、Hugging Face、alphaXiv 的论文链接，以及公开 PDF 和论文详情页。导入后默认收藏、自动解析；缺少全文时会标明材料范围。|Supports arXiv, Hugging Face and alphaXiv paper links, public PDFs and paper pages. Imports are saved and analyzed automatically; limited source coverage is clearly labeled.
支持含文字的 PDF；扫描版需要先 OCR。文件上限 15 MB。|Supports text-based PDFs up to 15 MB. Scanned PDFs need OCR first.
支持的结论：|Supported conclusion:
收藏到此文件夹|Save to this folder
收藏或标为已读后，论文会出现在这里。|Save a paper or mark it as read to see it here.
收藏或标为已读后，论文的标签会出现在这里。|Tags appear here after you save papers or mark them as read.
收藏论文|Save paper
整理收藏|Organize saved paper
文件夹由你整理，与论文标签独立。|Folders are organized by you, independently of paper tags.
文件已导入|File imported
文件超过 15 MB|File exceeds 15 MB
文件超过15 MB|File exceeds 15 MB
文库中已核实的引用|Verified citations in your library
文库中的论文|Papers in your library
新增|New
新增信息|New information
新建收藏文件夹|New collection folder
新闻|News
新闻 RSS / Atom|News RSS / Atom
新闻分析|News analysis
方法|Method
方法与机制|Method and mechanism
方法怎么工作|How the method works
无法读取文件|Unable to read the file
无补充说明|No additional details
昨日|Yesterday
是否值得读|Is it worth reading?
是否支持研究目标|Does the evidence support the research goal?
暂无相似内容。|No similar content found.
暂时无法获取任务，稍后自动重试|Tasks are temporarily unavailable. Retrying shortly.
暂未找到这位作者|Author not found
暂未识别模型能力，使用服务商默认。|Model capabilities are unknown. Using provider defaults.
更新引用关系|Update citation links
最关键的问题|Most important issues
最近任务|Recent tasks
未完成|Incomplete
未开始精读|Not started
未检测到本地 Codex，请先安装并登录|Local Codex was not found. Install it and sign in first.
未知与待核实|Unknowns and items to verify
本次报告生成信息|Report generation details
材料不完整，AI 不能据此确认完整实验、创新度或社区影响。|Source material is incomplete. AI cannot establish the full experiments, novelty or community impact.
材料已保存|Source text saved
材料类型未记录|Source type not recorded
材料范围|Source coverage
来源地址|Source URL
来源暂未记录|Source not recorded
查找关系节点|Find a graph node
查看原始 PDF|View original PDF
查看原始来源|View original source
查看原文|View source
查看原文证据|View source evidence
查看我的论文库|View my library
查看核实来源|View verification sources
查看论文库|View library
查询当前模块已收录内容，不修改数据。|Search saved content in this workspace without modifying it.
标签名称已更新，论文标签已同步|Tag renamed and associated papers updated
标签（用逗号分隔）|Tags (comma-separated)
标题|Title
标题、摘要与标签的相似度；不是引用或质量评分。|Similarity of titles, abstracts and tags; not a citation or quality score.
核实依据|Verification evidence
核对原文位置|Check source location
核心思路|Core approach
核心想法|Core idea
核心问题|Core problem
核心难点|Key challenge
核查署名单位原文|Check affiliation in the original paper
根据已有报告补充，未重新阅读全文|Added using the existing report; the full text was not read again
档位名称不能重复。|Effort option names must be unique.
档位名称使用字母、数字、下划线或短横线；default 为保留项。|Use letters, digits, underscores or hyphens for option names. “default” is reserved.
检验的问题：|Question tested:
模型引文未通过原文匹配，数字与判断请通过原文入口核对。|The model's quotations did not match the source. Verify numbers and conclusions against the original paper.
模型没有提供可验证引文，以上结论仍需人工核查。|The model provided no verifiable quotations. These conclusions need manual verification.
次要问题|Minor issues
正在上传并保存 PDF…|Uploading and saving PDF…
正在执行真实联网搜索，可在任务中心查看进度…|Searching the web. See the task center for progress…
正在根据已有分析生成阅读建议…|Generating reading advice from the existing analysis…
正在生成 AI 总结，完成后会自动显示。|Generating the AI summary. It will appear when ready.
正在计算内容相似度…|Calculating content similarity…
正在请求模型，验证真实回复…|Contacting the model to verify a response…
正在读取原文署名|Reading author information from the paper
正文或摘要|Full text or abstract
此公式暂未能渲染，保留原始 LaTeX|This equation could not be rendered. Original LaTeX is shown.
没有符合当前筛选的推荐|No recommendations match these filters
没有证明什么|What this does not establish
添加已核实引用|Add verified citation
点击“保存并测试连接”验证是否可用。|Select “Save and test connection” to verify availability.
点击“生成综合 Review”进行分析。|Select “Generate review” to analyze.
点击图片放大查看。|Select an image to enlarge it.
热点来源已添加|Trending source added
独立评价|Independent assessment
现有做法有什么问题|Limitations of existing approaches
生成综合 Review|Generate review
生成阅读建议|Generate reading advice
用一个例子理解|Understand through an example
目前进展|Current progress
真正的难点|The key challenge
研究什么任务|Research task
研究动机|Research motivation
社区价值|Value to the community
社区每日论文列表，作为发现线索，不代表质量评价。|Community daily paper feeds are discovery signals, not quality assessments.
笔记已保存|Notes saved
等待 AI Review|Awaiting AI review
等待原文署名提取|Awaiting author information extraction
筛选条件优先于数量。你可以查看完整论文库、调整主题，或对等待审核的候选进行 AI 初审。|Selection criteria take priority over quantity. Browse your library, adjust interests or run AI screening on pending candidates.
箭头由引用论文指向被引用论文；节点大小表示引用数量。|Arrows point from citing to cited papers; node size reflects citation counts.
精读中|Reading closely
精读进度|Reading progress
结果与证据|Results and evidence
编辑分析材料|Edit source material
编辑正文|Edit text
编辑资料|Edit profile
署名邮箱|Email in the paper
背景|Background
至少需要两篇论文|At least two papers are required
节点大小表示文库论文数量；连线表示共同署名。灰绿色节点的身份尚待核实。|Node size reflects paper count in your library; edges represent coauthorship. Gray-green nodes have unverified identities.
获取|Fetch
获取 HTML 正文|Fetch HTML full text
被引用论文|Cited paper
被引用|Cited by
要解决的问题|Problem to solve
观察到什么|Observations
解读模型（各角色见下方）|Explanation model (see each role below)
订阅已保存，点击刷新来源开始采集|Subscription saved. Refresh sources to start collecting.
订阅来源已移除，收录内容保留|Subscription removed; collected content retained
让值得关注的研究浮上来。按你的主题与兴趣筛选，不为凑数而推荐。|Discover worthwhile research selected for your topics and interests, without filling a quota.
论文|Paper
论文标题|Paper title
论文标题（可留空，自动解析）|Paper title (optional; extracted automatically)
设置已保存。|Settings saved.
设置已保存，连接测试在后台运行，可以继续使用网站|Settings saved. Connection testing runs in the background; you can keep using the site.
证据不足|Insufficient evidence
证据通过|Evidence supported
试试调整搜索词或筛选条件。|Try adjusting your search or filters.
该条未取得可逐字核对的原文引句，应视为待核实意见。|No verbatim source quotation was verified for this point. Treat it as unverified.
请先收藏论文或标为已读。|Save the paper or mark it as read first.
请填写新服务的 API Key；保存前不会更改当前配置。|Enter the new provider’s API key. Current settings remain unchanged until saved.
请返回论文或关系网络重新选择。|Return to a paper or the graph to select an author.
读取失败，可重试|Reading failed; retry available
贡献|Contribution
输入|Input
输入新的密钥后保存；留空保存会保留原密钥。|Enter a new key and save. Leaving it blank retains the existing key.
输出|Output
还没有后台任务|No background tasks yet
还没有运行任务|No tasks have run yet
这些证据是否支持研究目标|Does the evidence support the research goal?
这份总结基于摘要，完整实验与结论仍需核对原文。|This summary is based on the abstract. Check full experiments and conclusions against the original paper.
这份报告使用旧 Prompt 生成；尚未按你最新的九部分 Prompt 更新。|This report used an older prompt and has not been updated to your nine-part prompt.
这份报告尚未生成阅读建议，不自动猜测推荐等级。|No reading advice has been generated. A recommendation level will not be guessed.
这是旧版分析，原内容已保留；更新后按概览、方法步骤、逐项实验和独立审稿重新讲解。|This older analysis is retained. Updating it will generate an overview, method explanation, experiment analysis and independent review.
这条关系的依据|Evidence for this connection
适用范围|Scope of applicability
部分来源采集失败|Some sources failed to collect
配置 AI 接口|Configure AI connection
配置独立 AI Key 后，可进行 AI 初审与综合 Review。|Configure an AI API key to enable screening and reviews.
采集论文后，在后台生成综合 Review。|Reviews are generated in the background after collection.
重新检索资料|Search profiles again
重新生成综合 Review|Regenerate review
阅读状态已保存|Reading status saved
需要作者回答的问题|Questions for the authors
新建文件夹|New folder
添加新闻|Add news
询问 AI|Ask AI
分析未完成，可重试|Analysis incomplete; retry available
无法连接来源，请检查网络或代理设置。|Unable to connect to the source. Check your network or proxy settings.
模型 API连接失败，请检查网络或代理设置。|Unable to connect to the model API. Check your network or proxy settings.
模型 API请求超时，请检查网络或代理设置。|The model API request timed out. Check your network or proxy settings.
论文来源连接失败，请检查网络或代理设置。|Unable to connect to the paper source. Check your network or proxy settings.
论文来源请求超时，请检查网络或代理设置。|The paper source request timed out. Check your network or proxy settings.
档案当前机构|Current institution in profile
返回我的论文库|Back to my library
AI 总结辅助阅读，具体判断请结合原文核实。|AI summaries support reading. Verify conclusions against the original paper.
用户原始九部分论文解读与 Review Prompt|Your nine-part paper explanation and review prompt
PDF 文字|PDF text
HTML 正文|HTML full text
基于本次原文分析|Based on this analysis of the original paper
论文 AI 聊天|Paper AI chat
关闭论文聊天|Close paper chat
复用这篇论文的本地正文和报告，保留近期对话。每次提问会使用当前配置的模型额度。|Uses this paper’s saved text and report, along with recent conversation. Each question uses your configured model quota.
可以询问方法、公式、实验结果，或让 AI 换一种方式解释。|Ask about methods, equations or results, or ask AI to explain them differently.
你的问题|Your question
例如：这个方法与之前的方法有什么区别？|For example: How does this method differ from previous methods?
发送问题|Send question
你|You
回复失败|Reply failed
默认思考强度|Default reasoning effort
Token 未返回|Token usage unavailable
AI 正在回答，你可以继续阅读论文…|AI is responding. You can continue reading…
语音识别|Speech recognition
语音合成|Speech synthesis
语音对话|Spoken dialogue
语音智能体|Voice agents
语音增强|Speech enhancement
声源分离|Source separation
说话人识别|Speaker recognition
语音安全|Speech security
音频理解|Audio understanding
音频生成|Audio generation
音乐理解|Music understanding
音乐生成|Music generation
空间声学|Spatial acoustics
多模态|Multimodal learning
语言模型|Language models
智能体|Agents
模型优化|Model optimization
数据集与评测|Datasets and evaluation
视觉与机器人|Vision and robotics
跨领域研究|Cross-disciplinary research
语言与基础模型|Language and foundation models
音乐分析|Music analysis
模型压缩|Model compression
强化学习|Reinforcement learning
作者资料已处理|Author information processed
独立审稿阶段返回结构不完整，原报告保留|The independent review returned an incomplete structure. The previous report has been retained
报告生成未完成，已停止自动重试，请检查配置后手动更新|Report generation did not finish. Automatic retries have stopped. Check the configuration, then update manually
多角色审阅未完成，已停止自动重试，请检查配置后手动更新|Multi-role review did not finish. Automatic retries have stopped. Check the configuration, then update manually
生成失败|Generation failed
已完成|Completed
上传 PDF 或粘贴论文链接，自动收藏并解析|Upload a PDF or paste a paper link to save and analyze it automatically
推荐线索|Recommendation signals
最近加入|Recently added
查看|View
常用标签|Popular tags
最近加入的论文|Recently added papers
收藏待阅读|Saved for later
PDF 上传|PDF upload
复位|Reset view
探索文库|Explore your library
从一个节点开始|Start with a node
选择图中的节点，查看它的直接联系和相关论文。|Select a node to explore its connections and related papers.
连接最多的论文|Most connected papers
3D · 拖动旋转 · Shift 拖动平移 · 滚轮缩放|3D · Drag to rotate · Shift-drag to pan · Scroll to zoom
仅收录文库论文使用的大方向标签，总计最多 20 个，每篇论文最多 3 个。|Broad topics from your library only: up to 20 topics overall and 3 per paper.
查看每日论文来自哪些网站，编辑 arXiv 采集分类与查询条件，或管理热点来源。|Manage daily paper sources, arXiv categories and queries, and trending feeds.
采集数量是候选数量；筛选后当天最多新增 50 篇推荐，其中热点最多 10 篇。|Collection counts refer to candidates. Up to 50 recommendations are added per day, including up to 10 trending papers.
网站：|Website:
内容：daily|Feed: daily
内容：all|Feed: all
Hugging Face · 热点论文|Hugging Face · Trending papers
alphaXiv · 全领域热点|alphaXiv · Trending across fields
声学与语音 · cs.SD / eess.AS|Acoustics and speech · cs.SD / eess.AS
与已反馈论文内容相近，作为辅助排序信号|Similarity to papers you rated is used as an additional ranking signal
最近更新未成功，保留旧值。来源或 API 返回 HTTP 429；请稍后重试。|The latest update failed; previous values are retained. The source or API returned HTTP 429. Try again later.
采集论文后自动在后台生成综合 Review，无需打开论文。先尝试获取全文；缺少全文时明确标为摘要分析。已有 Review 复用，不重复生成。使用上方选择的 AI 服务与模型额度。|Automatically generate reviews after collection. Full text is fetched first; abstract-only analyses are labeled. Existing reviews are reused. Uses the AI provider and model selected above.
AI 服务可用后有效。先排除重复、已处理及材料不足的论文，再分批分析候选；已审查且材料、主题和模型未变化的论文复用结果，减少费用。开启后未通过 AI 初审的论文留在候选库，不进入每日推荐。AI 服务不可用或关闭时，只进行规则初筛。|When AI is available, remove duplicates, handled papers and insufficient material before screening candidates in batches. Reuse unchanged results to reduce costs. Candidates that fail AI screening stay out of daily recommendations. Otherwise, only rule-based screening runs.
使用上方已保存的官方 DeepSeek 模型与 Key。每次最多搜索一次，相同查询缓存一天；测试会发出真实请求并消耗额度。更换模型服务商后需重新选择搜索来源。|Uses the saved official DeepSeek model and key. At most one search per request; identical queries are cached for a day. Tests use quota. Select a search source again after changing providers.

待阅读|To read
AI 初审|AI screening
热点|Trending
部分作者单位尚未取得|Some author affiliations are still unavailable
单位：等待原文署名提取|Affiliations: awaiting extraction from the paper
全局任务中心|Global task center
任务筛选|Filter tasks
移除此条消息|Dismiss this message
显示上限|Maximum nodes
正在读取关系…|Loading connections…
收录新闻|News items
启用来源|Enabled sources
收录时间：新 → 旧|Added: newest first
没有匹配内容|No matching items
添加新闻 RSS 或手动内容，开始你的新闻阅读。|Add an RSS feed or a news item to start reading.
设置订阅|Set up sources
留住有用的信息|Keep useful information
收藏方便以后查找；打开标为已读，移除后仍可恢复。|Save items for later. Opening marks them as read; removed items can be restored.
记录兴趣，移入论文库|Record your interest and add to the library
移出推荐，不加入论文库|Remove from recommendations without adding to the library
配置独立 AI Key 后，可生成新闻分析。|Configure a separate AI key to generate news analysis.
搜索内容|Search content
排序方式|Sort order
AI 总结服务|AI analysis service
使用方式|Connection method
模型 API|Model API
本地 Codex（ChatGPT 登录）|Local Codex (ChatGPT login)
已检测到本地 Codex。使用本机 Codex 的 ChatGPT 登录和额度，无需填写 API Key。模型仍在云端运行。|Local Codex detected. Uses its ChatGPT login and quota; no API key is needed. The model still runs in the cloud.
Codex 模型|Codex model
建议先用 GPT-6.1 Sol / 高。强度越高通常越慢、额度消耗越多。这里的选择只影响网站的分析任务。|Suggested starting point: GPT-6.1 Sol / High. Higher effort usually takes longer and uses more quota. These settings apply only to this website's analysis tasks.
选择常用模型服务商，或接入其他兼容 API。密钥保存在 macOS 钥匙串，仅由本地后台读取，不返回页面。|Choose a provider or another compatible API. Keys are stored in macOS Keychain, read only by the local backend, and never returned to the page.
OpenAI 官方|OpenAI
智谱 GLM|Zhipu GLM
小米 MiMo|Xiaomi MiMo
豆包 / 火山方舟|Doubao / Volcengine Ark
通义千问 / 阿里云百炼|Qwen / Alibaba Cloud Model Studio
其他兼容 API|Other compatible API
接口协议|API protocol
自动识别地址|Detect from URL
OpenAI 兼容 · Chat Completions|OpenAI-compatible · Chat Completions
OpenAI 兼容 · Responses|OpenAI-compatible · Responses
MiMo 套餐与区域|MiMo plan and region
按量付费|Pay as you go
Token Plan · 中国|Token Plan · China
Token Plan · 新加坡|Token Plan · Singapore
Token Plan · 欧洲|Token Plan · Europe
套餐使用专属 Key；地址以你的控制台为准。|Plans use a dedicated key. Use the URL shown in your provider console.
每行是一项候选。左侧填写档位名称，右侧填写服务商规定的请求参数；可添加、修改或删除。|Each row defines an option: enter its name on the left and the provider's request parameters on the right. Add, edit or remove rows as needed.
档位名称|Effort name
发送参数（JSON）|Request parameters (JSON)
添加档位|Add effort option
应用|Apply
应用后点击“保存 AI 设置”，为当前地址、模型和协议保存。|After applying, select Save AI settings to save for this URL, model and protocol.
使用已核实的服务商与模型适配规则。 切换模型后自动更新；不影响已有报告。|Using verified provider and model rules. Updates when you switch models; existing reports are unchanged.
MiMo 官方适配：支持思考开关，不发送强度档位。 切换模型后自动更新；不影响已有报告。|MiMo supports enabling or disabling reasoning, without an effort level. Updates when you switch models; existing reports are unchanged.
MiMo 官方适配：支持思考开关，不发送强度档位。|MiMo supports enabling or disabling reasoning, without an effort level.
接口未提供可识别的思考档位，使用服务商默认；需要时可手动配置兼容参数。|No recognized effort options were provided. Uses the provider default; configure compatibility parameters manually if needed.
更换模型时仍可使用统一的思考强度。默认按兼容接口发送；如果服务商使用不同参数，可在这里选择格式或填写映射。|Reasoning settings can be adapted to different models. Select another parameter format or supply a mapping if your provider requires it.
思考参数格式|Reasoning parameter format
自动适配|Automatic
兼容格式 · reasoning_effort|Compatible · reasoning_effort
嵌套格式 · reasoning.effort|Nested · reasoning.effort
思考开关 + 强度（DeepSeek 格式）|Reasoning toggle and effort (DeepSeek format)
自定义各档位参数|Custom effort parameters
各档位的参数映射（JSON）|Effort parameter mapping (JSON)
填写服务商文档规定的参数。上面的预算仅是格式示例，不代表所有模型都支持。未配置的档位会提示错误。|Use parameters documented by your provider. Budget values above are examples, not universal capabilities. Undefined options will produce an error.
将发送的思考参数：|Reasoning parameters to send:
测试在后台发送一次简短请求，最多等待 3 分钟，不影响其他操作。API 测试使用所选思考强度；Codex 测试使用低思考强度，不改变论文分析设置。|The background test sends one short request and waits up to 3 minutes. API tests use the selected effort; Codex tests use low effort without changing paper analysis settings.
API 使用独立密钥和额度；本地 Codex 使用 ChatGPT 登录额度。论文采集后自动在后台生成 Review；新闻总结按需点击生成。|APIs have separate keys and quotas; local Codex uses its ChatGPT login quota. Paper reviews run after collection; news summaries are generated on request.
每天自动刷新启用的来源|Automatically refresh enabled sources daily
每日时间（北京时间）|Daily time (Beijing time)
每个来源最多获取条数|Maximum items per source
应用后台运行时才会采集。启动后若已过设定时间，会补做当天采集。新内容按来源标识去重。|Collection runs while the service is active. Missed daily runs are performed after startup. Source identifiers are used to remove duplicates.
导出不包含 API Key。密钥保存在 macOS 钥匙串，不写入配置文件。|Exports exclude API keys. Keys stay in macOS Keychain and are not written to the configuration file.
程序检索网页，再把资料交给当前模型。DeepSeek、OpenAI、小米、Kimi 等兼容 API 共用此流程。DeepSeek 原生搜索复用官方模型 Key；Brave、Tavily 使用独立搜索 Key。|The app retrieves web evidence for the selected model. Compatible providers share this workflow. Native DeepSeek search uses its official model key; Brave and Tavily use separate search keys.
DeepSeek · 原生全网搜索（复用模型 Key）|DeepSeek · Native web search (model key)
Brave · 全网搜索|Brave · Web search
Tavily · 全网搜索|Tavily · Web search
仅检索学术索引，不执行全网搜索。|Searches academic indexes only, not the wider web.
保存并测试联网搜索|Save and test web search
个人主页与履历只保存能核对的原文证据。同名、未收录、请求失败会显示对应状态，不猜测单位。|Profile facts are saved only with verifiable source evidence. Namesakes, missing records and failed requests have separate statuses; affiliations are never guessed.
输入模型名称|Enter a model name
编辑模型名称|Edit model name
新增模型|Add model
从候选列表删除模型|Remove model from the list
填写你的总结服务密钥|Enter your analysis API key
收藏并选择文件夹，记录兴趣并移出每日推荐|Save to a folder, record your interest and remove from daily recommendations
选择收藏文件夹或取消收藏|Choose a folder or remove from saved
标为已读，移入论文库|Mark as read and add to the library
记录为不感兴趣，移出每日推荐|Mark as not interested and remove from recommendations
恢复为中性反馈|Restore neutral feedback
查看每日论文来自哪些网站，编辑 arXiv 分类或管理热点来源。|Manage websites, arXiv categories and trending paper sources.
用于采集后的相关性筛选和推荐排序。修改兴趣主题不会自动改变 arXiv 采集范围；分类与查询条件请在下方对应来源中编辑。Hugging Face 与 alphaXiv 热点保持跨领域发现。|Interests guide screening and ranking after collection. They do not change arXiv queries; edit those in the source below. Hugging Face and alphaXiv trending feeds cover multiple fields.
例如：语音识别、语音增强、音乐生成|For example: speech recognition, speech enhancement, music generation
以上是筛选后进入每日推荐的数量，不是采集数量。不足上限时不凑数。|These limits apply to recommendations after screening, not collection. Fewer papers are shown when fewer qualify.
查询范围|Search scope
保存后生效|Applies after saving
打开|Open
暂无论文|No papers yet
暂无标签|No tags yet
收藏文件夹与标签互相独立。|Collection folders and tags are independent.
原文依据|Original source
原始论文|Original paper
正文|Full text
显示|Show
未找到|Not found
数量|Count
继续阅读|Continue reading
文库概览|Library overview
整理文库|Organize library
待阅读收藏|Saved unread papers
上传论文|Upload paper
查看全部|View all
已选|Selected
修改标签|Rename tag
新的标签名称|New tag name
合并标签|Merge tags
关闭聊天|Close chat
提问|Ask a question
问题|Question
新对话|New conversation
输入你的问题…|Type your question…
清空|Clear
刷新|Refresh
已保存|Saved
启用|Enable
已暂停|Paused
连接成功|Connected
连接失败|Connection failed
读取中…|Loading…
加载中…|Loading…
正在生成…|Generating…
尚未生成|Not generated yet
生成分析|Generate analysis
更新分析|Update analysis
高 · high|High · high
中 · medium|Medium · medium
低 · low|Low · low
很高 · xhigh|Very high · xhigh
最高 · max|Maximum · max
极高 · ultra|Ultra · ultra
极低 · minimal|Minimal · minimal

跳到主要内容|Skip to main content
主功能切换|Switch workspace
论文阅读与研究|Paper reading and research
新闻与信息|News and information
私人知识工作台|Personal knowledge workspace
本地工作空间|Local workspace
数据保存在这台电脑|Your data stays on this computer
管理|Manage
论文工作区|PAPER WORKSPACE
新闻工作区|NEWS WORKSPACE
每日收件箱|Daily inbox
每日推荐|Daily recommendations
我的论文库|My library
论文库|Paper library
新闻收件箱|News inbox
新闻库|News library
新闻与事件|News and events
账号动态|Account updates
作者与账号|Authors and accounts
标签库|Tags
关系网络|Connections
订阅来源|Sources
每日信息源|Paper sources
AI 与采集设置|AI and collection settings
获取最新论文|Fetch latest papers
刷新来源|Refresh sources
刷新新闻|Refresh news
添加内容|Add content
添加论文|Add paper
添加新闻|Add news
内容详情|Details
论文详情|Paper details
让值得读的研究，成为新的灵感。|Turn worthwhile research into new ideas.
今日新增|New today
篇论文|papers
每日 arXiv|Daily arXiv
热点论文|Trending papers
今天待处理|To read today
今日主题|Today's topics
之前未处理|Earlier unread papers
暂无待处理论文|No papers waiting to be read
这里只显示已标为已读或收藏的论文，可按标签查找。|Only read or saved papers appear here. Browse them by tag.
独立的新闻阅读空间，从信息中整理线索。|A separate space for reading and organizing news.
文库论文|Library papers
收录论文|Collected papers
全部|All
未读|Unread
已读|Read
收藏|Saved
已收藏|Saved
不感兴趣|Not interested
标为已读|Mark as read
恢复论文|Restore paper
恢复|Restore
搜索|Search
重置|Reset
来源|Source
标签|Tag
作者|Author
排序|Sort
所有来源|All sources
所有标签|All tags
所有作者|All authors
发表时间：新 → 旧|Published: newest first
发表时间：旧 → 新|Published: oldest first
加入时间：新 → 旧|Added: newest first
引用数量：高 → 低|Citations: highest first
输入标题、作者或标签，即时筛选|Filter by title, author or tag
阅读论文|Read paper
发表日期|Published
引用数量|Citations
加入文库|Added to library
收藏时间|Saved on
时间未记录|Time not recorded
日期未知|Date unknown
暂无数据|No data
引用更新状态|Citation update status
数据来源：|Data source: 
最近成功获取：|Last successful update: 
尚未成功获取引用数据|Citation data has not been retrieved
最近更新未成功，保留旧值。|The latest update failed; the previous value is retained. 
收藏文件夹|Collection folder
全部文件夹|All folders
未分类|Unfiled
新建文件夹|New folder
文件夹名称|Folder name
选择收藏文件夹|Choose a collection folder
取消收藏|Remove from saved
保存|Save
取消|Cancel
确定|Confirm
编辑|Edit
删除|Delete
关闭|Close
返回|Back
任务中心|Task center
Research Paper 与 News 的后台任务|Background tasks for Research Paper and News
进行中|In progress
失败|Failed
已完成|Completed
处理中|Processing
排队中|Queued
每 4 秒自动更新|Updates every 4 seconds
关闭任务中心|Close task center
清除记录|Dismiss
论文综合 Review|Paper review
首页作者与单位|Authors and affiliations
补全作者资料|Enrich author profiles
每周引用更新|Weekly citation update
每日引用更新|Citation update
每日采集|Daily collection
采集来源|Fetch sources
AI 连接测试|AI connection test
论文总结|Paper explanation
审稿人 Review|Reviewer assessment
AI 论文总结与 Review|AI paper explanation and review
更新总结与 Review|Update explanation and review
生成总结与 Review|Generate explanation and review
询问 AI|Ask AI
点击看原始论文|Open original paper
推荐来源|Recommendation source
作者与单位|Authors and affiliations
更新作者与单位|Update authors and affiliations
署名依据|Affiliation source
论文署名单位|Affiliation in this paper
档案当前机构|Current institution in profile
尚无作者元数据|No author metadata
尚未读取原文首页|The first page has not been processed
首页尚未确认该作者单位|The author's affiliation has not been confirmed
首页署名提取未完成，可重试|Affiliation extraction is incomplete; retry is available
正在提取 PDF 首页署名单位|Extracting first-page affiliations
署名证据尚有歧义，待补充材料核实|Affiliation evidence is ambiguous; further evidence is needed
尚未保存独立摘要，请通过上方原始论文入口查看。|No separate abstract is saved. Open the original paper above.
这篇论文值得读吗？|Is this paper worth reading?
非常值得|Highly recommended
值得|Recommended
非常不值得|Strongly not recommended
不值得|Not recommended
暂无法判断|Not enough evidence
适合谁|Who it is for
先读哪里|Where to start
保留意见|Reservations
研究概览|Research overview
方法与原文图|Methods and figures
实验结果与表格|Results and tables
阅读建议|Reading recommendation
主张、证据与缺口|Claims, evidence and gaps
审稿意见|Reviewer comments
实验的进一步解读|Interpreting the experiments
总体评价|Overall assessment
研究启示|Research takeaways
按章节精读论文|Chapter-by-chapter paper explanation
补充审阅与改进建议|Additional review and suggested improvements
读懂这篇论文|Understand this paper
深入分析：公式、实验与审阅|In depth: equations, experiments and review
读者优先论文讲解|Reader-first paper explanation
生成详情|Generation details
查看 Prompt|View prompt
思考强度|Reasoning effort
本次报告 Token|Tokens used for this report
查看 Token 明细|Token breakdown
仅摘要|Abstract only
RSS 片段|RSS excerpt
手动文本|Manual text
HTML 正文|HTML full text
PDF 文字|PDF text
元数据|Metadata
邮件正文|Email body
查看原始来源|Open original source
模型|Model
未记录|Not recorded
后台排队中|Queued in background
后台处理中|Processing in background
处理完成|Processing complete
部分资料待补全|Some details still need verification
处理失败，可重试|Processing failed; retry available
作者介绍|Author profile
教育与经历|Education and experience
教育经历|Education
职业经历|Professional experience
学术主页|Academic profiles
个人 / 机构主页|Personal / institutional homepage
资料来源与核实依据|Sources and verification evidence
管理作者资料|Manage author profile
身份已核实|Identity verified
身份待核实|Identity pending verification
当前机构尚未确认|Current institution unconfirmed
暂未找到可核实的公开经历。|No verifiable public experience found yet.
暂未确认公开主页。|No public profile confirmed yet.
论文署名单位（不代表当前任职）|Affiliations in papers (not necessarily current employment)
查看核实来源|View verification source
返回论文|Back to paper
返回论文库|Back to library
研究方向|Research direction
研究方向历史|Research direction history
更新研究方向|Update research directions
已开始更新研究方向|Research directions update started
采集流水|Collection ledger
收集与推荐流程|Collection flow
我的笔记|My notes
笔记最多50000字|Notes must be at most 50,000 characters
笔记版本无效|Invalid note version
笔记内容无效|Invalid note content
笔记仅适用于论文|Notes are only available for papers
笔记已在其他页面修改，请保留草稿并刷新后重试|This note changed in another tab. Keep your draft and refresh before retrying.
返回每日推荐|Back to recommendations
返回关系网络|Back to connections
作者档案|Author profile
论文档案|Paper profile
论文引用|Paper citations
作者关系|Author connections
从一篇论文、一位作者，探索文库中的联系。|Explore connections between papers and authors in your library.
文库中最常出现的作者|Most frequent authors in your library
仅显示已读或收藏论文中的关系。|Only connections among read or saved papers are shown.
清除选中|Clear selection
放大|Zoom in
缩小|Zoom out
重置视角|Reset view
暂无关系|No connections yet
AI 整理论文标签|Organize paper tags with AI
重命名|Rename
标签名称|Tag name
查看每日论文来自哪些网站，编辑 arXiv 分类或管理热点来源。|Manage paper sources, arXiv queries and trending feeds.
新闻来源独立保存。|News sources are stored separately.
主题与采集|Topics and collection
推荐兴趣主题|Recommendation interests
每天自动采集启用的来源|Automatically fetch enabled sources daily
每日采集时间（北京时间）|Daily collection time (Beijing time)
本地服务运行时才会自动采集。|Automatic collection runs while the local service is running.
保存主题与采集设置|Save topics and collection settings
添加来源|Add source
立即采集|Fetch now
采集中…|Fetching…
编辑来源|Edit source
暂停|Pause
移除|Remove
尚未采集|Not fetched yet
正在请求来源…|Requesting source…
编辑信息源|Edit source
添加订阅来源|Add source
来源类型|Source type
名称|Name
内容类型|Content type
来源分类|Source group
保存来源|Save source
arXiv 采集分类与查询条件|arXiv categories and search query
来源查询或地址|Source query or URL
手动收录|Manually added
总结服务可以随时替换，知识库持续保留。|Change your AI provider at any time while keeping your library.
模型服务|Model provider
API 地址|API URL
模型名称|Model name
获取模型列表|Fetch models
选择模型，也可编辑或添加名称|Select a model, or edit or add a name
请获取列表或添加模型|Fetch models or add a model
服务商默认|Provider default
开启思考|Enable reasoning
关闭思考|Disable reasoning
极低|Minimal
很高|Very high
最高|Maximum
极高|Ultra
低|Low
中|Medium
高|High
API 思考强度|API reasoning effort
手动编辑|Edit manually
恢复自动识别|Restore automatic detection
模型兼容设置（可选）|Model compatibility (optional)
模型兼容设置（可选）|Model compatibility (optional)
编辑密钥|Edit key
取消编辑|Cancel editing
密钥已保存并锁定；点击编辑密钥可更换。|Your key is saved and locked. Select Edit key to replace it.
填写密钥后点击保存。|Enter a key and save.
保存 AI 设置|Save AI settings
保存并测试连接|Save and test connection
模型候选无需 Key；查询账号模型与实际调用可能需要 Key。|Preset models do not require a key. Account-specific lists and requests may require one.
已保存 API Key|API key saved
尚未保存 API Key|No API key saved
正在获取…|Fetching…
请求格式|API format
自动识别|Auto-detect
当前请求格式：|Current API format: 
三角色论文审阅|Three-role paper review
启用三角色审阅|Enable three-role review
模型分配|Model assignment
三个角色共用当前 AI 模型|Use the current AI model for all roles
为每个角色分别配置 API 模型|Configure a separate API model for each role
论文解读|Paper explanation
独立审稿|Independent review
证据核验|Evidence verification
使用当前已保存配置|Use current saved settings
输入或选择模型名称|Enter or select a model
填写此角色的密钥|Enter the key for this role
已保存；留空保持原密钥|Saved; leave blank to keep the existing key
保存时复用当前已保存密钥|Use the current saved key when saving
保存多 Agent 设置|Save multi-agent settings
论文解读 → 独立审稿 → 证据核验。每篇论文使用独立上下文；开启后仅影响新生成的报告，旧报告不会自动重做。|Explanation → independent review → evidence verification. Each paper has its own context. Only new reports use this setting; existing reports are not regenerated.
共用模式沿用主模型设置中已保存的模型和思考设置；分别配置可以使用不同服务商，也可以填写相同的模型。|Shared mode uses your saved main model and reasoning settings. Separate mode supports different providers or the same model for multiple roles.
每次报告包含三次模型调用，Token 分角色记录。密钥仅保存到本机钥匙串，不回传浏览器。|Each report makes three model calls, with token usage recorded per role. Keys stay in the local keychain and are never returned to the browser.
核验完成|Verification complete
发现待核对问题|Issues require verification
材料不足，仍需核对|Insufficient material; verification needed
Token 未返回|Token usage not provided
状态未知|Unknown status
引用元数据|Citation metadata
Semantic Scholar API Key（可选）|Semantic Scholar API key (optional)
未配置时尝试公开接口，可能受限流影响|Without a key, the public endpoint is used and may be rate-limited
保存设置|Save settings
导出知识库|Export library
导出不包含 API Key。密钥保存在本机受文件权限限制的配置文件中。|Exports exclude API keys. Keys are stored securely on this computer.
文库论文的引用次数每七天自动更新一次，首次入库后检查；引用关系同时核对本地原文。服务运行时执行，失败保留已有数据。|Library citation counts update every seven days, with an initial check after adding a paper. Links are also checked against local references. The service must be running; failed updates retain existing data.
作者联网检索|Author web lookup
搜索来源|Search provider
搜索服务 API Key|Search API key
学术索引（Semantic Scholar）|Academic index (Semantic Scholar)
仅 Brave / Tavily 需要；不是模型 Key|For Brave / Tavily only; not your model key
每日推荐与初审|Daily recommendations and screening
每日新增推荐上限（总计）|Daily new recommendations (total limit)
其中热点推荐上限|Trending recommendations (within total)
采集后使用 AI 初审主题与摘要证据|Screen topics and abstract evidence with AI after collection
综合 Review|Full review
上传 PDF|Upload PDF
论文链接|Paper URL
或新建文件夹|Or create a folder
导入并自动解析|Import and analyze
上传并自动解析|Upload and analyze
选择 PDF 文件|Choose a PDF file
选择文件|Choose file
保存到文件夹|Save to folder
论文聊天|Paper chat
发送|Send
清空对话|Clear conversation
正在思考…|Thinking…
连接成功，已收到模型真实回复|Connection successful; received a model response
设置已保存|Settings saved
请求失败|Request failed
网络错误|Network error
正在识别模型支持的思考设置…|Detecting supported reasoning settings…
`;
const dict=Object.fromEntries(entries.trim().split('\n').map(x=>{const i=x.indexOf('|');return[x.slice(0,i),x.slice(i+1)]}));
let language='zh';try{language=localStorage.getItem('knowledge-ui-language')==='en'?'en':'zh'}catch{}
const originals=new WeakMap(),attributes=new WeakMap();
const longPhrases=Object.keys(dict).filter(k=>k.length>=8).sort((a,b)=>b.length-a.length);
const protectedSelector='[translate="no"],[data-language-version],script,style,textarea,pre,code,.katex,.card-title,.paper-heading>h1,.detail-title,.card-abstract,.paper-abstract p,.card-authors button,.card-affiliations:not(.missing-affiliation),.paper-author button,.author-profile-header h1,.author-institution:not(.missing-affiliation),.author-fact p,.author-signed-item p,.author-paper-link,.companion-paper-link,.task-item-title,.task-title,.task-paper-link,.report-markdown,.analysis-points,.network-3d text,#network-inspector h2';
function translate(text){
 const trimmed=text.trim();if(dict[trimmed])return text.replace(trimmed,dict[trimmed]);
 const decorated=trimmed.match(/^([✓✕×＋+☆★☷⏳⚠◐←↑↗💬\s]*)(.*?)([↗→…\s]*)$/u);if(decorated&&dict[decorated[2]])return text.replace(trimmed,decorated[1]+dict[decorated[2]]+decorated[3]);
 let value=text;
 value=value.replace(/推荐总数：/g,'Recommended: ').replace(/新增候选：/g,'New candidates: ').replace(/已读：/g,'Read: ').replace(/未读：/g,'Unread: ').replace(/已收藏：/g,'Saved: ').replace(/不感兴趣：/g,'Not interested: ');
 value=value.replace(/查看检索候选（(\d+)）/g,'View search candidates ($1)');
 value=value.replace(/主题「([^」]+)」：收藏 (\d+) 篇、不感兴趣 (\d+) 篇，(提高|降低)推荐权重/g,(_,topic,yes,no,direction)=>`Topic “${dict[topic]||topic}”: ${yes} saved, ${no} not interested; recommendation weight ${direction==='提高'?'increased':'decreased'}`)
 .replace(/作者 ([^：]+)：收藏 (\d+) 篇、不感兴趣 (\d+) 篇/g,(_,name,yes,no)=>`Author ${name}: ${yes} saved, ${no} not interested`)
 .replace(/（身份待核实，影响减半）/g,' (identity unverified; influence halved)')
 .replace(/与已反馈论文内容相近，作为辅助排序信号/g,'Similar to papers you rated; used as an additional ranking signal')
 .replace(/尚无足够兴趣反馈/g,'Not enough preference feedback yet');
 if(/^修改标签：/.test(value))return 'Rename tag: '+translate(value.slice(5));
 if(/^移除.*的任务消息$/.test(value))return 'Dismiss task message: '+translate(value.slice(2,-5));
 value=value.replace(/新版报告未完整生成（([^）]+)），原报告已保留。/g,'New report incomplete ($1). Previous report retained.')
 .replace(/来源或 API 返回 HTTP (\d+)；请稍后重试。/g,'Source or API returned HTTP $1. Please try again later.')
 .replace(/DeepSeek 搜索返回 HTTP (\d+)；请检查模型、额度或接口权限。/g,'DeepSeek search returned HTTP $1. Check the model, quota or access.')
 .replace(/论文链接返回 HTTP (\d+)；若需登录或付费，请改为上传 PDF。/g,'Paper URL returned HTTP $1. Upload a PDF if login or payment is required.')
 .replace(/文库中 (\d+) 篇论文/g,'$1 papers in your library')
 .replace(/(\d+) 位合作者/g,'$1 coauthors').replace(/(\d+) 条引用关系/g,'$1 citation links')
 .replace(/(\d+) 篇文库论文中共同署名/g,'Coauthored $1 library papers').replace(/(\d+) 篇文库论文/g,'$1 library papers').replace(/(\d+) 篇关联论文/g,'$1 related papers')
 .replace(/文库内关联 /g,'Connected in library: ').replace(/文库共同署名 /g,'Coauthored in library: ').replace(/ · 文库 /g,' · Library: ');

 for(const key of longPhrases)if(value.includes(key))value=value.split(key).join(dict[key]);
 value=value.replace(/返回我的论文库/g,'Back to my library').replace(/作者与单位 ·/g,'Authors and affiliations ·')
 .replace(/用户原始九部分论文解读与 Review Prompt/g,'Your nine-part paper explanation and review prompt')
 .replace(/所选 (\S+) → 实际 (\S+)/g,'Selected $1 → Effective $2')
 .replace(/生成时间：/g,'Generated: ').replace(/PDF 文字/g,'PDF text').replace(/HTML 正文/g,'HTML full text')
 .replace(/输入：/g,'Input: ').replace(/输出：/g,'Output: ').replace(/其中思考：/g,'Reasoning: ')
 .replace(/（已计入输出，不重复相加）/g,' (included in output; not counted twice)')
 .replace(/判断把握：高/g,'Confidence: high').replace(/判断把握：中/g,'Confidence: medium').replace(/判断把握：低/g,'Confidence: low')
 .replace(/基于本次原文分析/g,'Based on this analysis of the original paper');
 value=value.replace(/已保存 API Key/g,'API key saved').replace(/模型回复：/g,'Model response: ')
 .replace(/发表时间：新 → 旧/g,'Published: newest first').replace(/arXiv 分类：/g,'arXiv categories: ')
 .replace(/链接导入/g,'Imported link').replace(/▱ 未分类/g,'▱ Unfiled')
 .replace(/arXiv 采集分类与查询条件：/g,'arXiv categories and query: ')
 .replace(/最近采集：/g,'Last collection: ').replace(/获取 (\d+) 篇/g,'Fetched $1 papers')
 .replace(/新增候选 (\d+) 篇/g,'$1 new candidates').replace(/已有 (\d+) 篇/g,'$1 existing papers')
 .replace(/(\d+) 个论文/g,'$1 papers').replace(/(\d+) 条关系/g,'$1 connections')
 .replace(/箭头由引用论文指向被引用论文；节点大小表示引用数量。/g,'Arrows point from citing to cited papers; node size reflects citation counts.')
 .replace(/已隐藏 (\d+) 个孤立节点。/g,'$1 isolated nodes hidden.');
 // Only explicit interface fragments, never arbitrary word replacement.
 const fragments=['处理完成','后台排队中','后台处理中','报告生成未完成，已停止自动重试，请检查配置后手动更新','论文解读','独立审稿','证据核验','身份待核实，未按同名合并','处理失败，可重试','分析未完成，可重试','无法连接来源，请检查网络或代理设置。','模型 API连接失败，请检查网络或代理设置。','模型 API请求超时，请检查网络或代理设置。','论文来源连接失败，请检查网络或代理设置。','论文来源请求超时，请检查网络或代理设置。','部分资料待补全','作者资料已处理','独立审稿阶段返回结构不完整，原报告保留','多角色审阅未完成，已停止自动重试，请检查配置后手动更新','生成失败','返回每日推荐','返回论文库','返回关系网络','任务中心','AI 论文总结与 Review','首页作者与单位','论文综合 Review','每周引用更新','补全作者资料','当前请求格式：','数据来源：','最近成功获取：','设置已保存','连接成功，已收到模型真实回复'];
 for(const key of fragments)value=value.split(key).join(dict[key]);
 value=value.replace(/^打开论文：/,'Open paper: ').replace(/^arXiv · 分类：/,'arXiv · Categories: ').replace(/^热点来源：/,'Trending source: ').replace(/^发表：/,'Published: ').replace(/(\d{4})年(\d+)月(\d+)日/g,'$1-$2-$3').replace(/(\d+)月(\d+)日(?:星期[一二三四五六日])?/g,'$1/$2');
 value=value.split(' · ').map(part=>dict[part.trim()]?part.replace(part.trim(),dict[part.trim()]):part).join(' · ');
 return value.replace(/(\d+) 个作者/g,'$1 authors').replace(/(\d+)\s*篇待处理/g,'$1 papers to read').replace(/(\d+)\s*篇论文/g,'$1 papers').replace(/(\d+)\s*篇/g,'$1 papers').replace(/(\d+)\s*位作者/g,'$1 authors').replace(/(\d+)\s*个标签/g,'$1 tags').replace(/(\d+)\s*进行中/g,'$1 active').replace(/(\d+)\s*失败/g,'$1 failed').replace(/(\d+)\s*次/g,'$1').replace(/^显示\s*(\d+)\s*\/\s*(\d+)/,'Showing $1 / $2');
}
function apply(){
 observer.disconnect();
 // Preserve implicit option values before translating their visible labels.
 for(const option of document.querySelectorAll('option:not([value])'))option.setAttribute('value',option.value);
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode;if(node.parentElement.closest(protectedSelector))continue;
  let record=originals.get(node);if(!record||node.nodeValue!==record.rendered)record={original:node.nodeValue};
  record.rendered=language==='en'?translate(record.original):record.original;
  if(node.nodeValue!==record.rendered)node.nodeValue=record.rendered;originals.set(node,record);
 }
 for(const el of document.querySelectorAll('[placeholder],[aria-label],[title]')){
  if(el.closest(protectedSelector.replace('textarea,','')))continue;
  const records=attributes.get(el)||{};
  for(const attr of ['placeholder','aria-label','title']){if(!el.hasAttribute(attr))continue;let record=records[attr];const value=el.getAttribute(attr);if(!record||value!==record.rendered)record={original:value};record.rendered=language==='en'?translate(record.original):record.original;if(value!==record.rendered)el.setAttribute(attr,record.rendered);records[attr]=record}attributes.set(el,records);
 }
 for(const el of document.querySelectorAll('[data-language-version]'))el.hidden=el.dataset.languageVersion!==language;
 document.documentElement.lang=language==='en'?'en':'zh-CN';
 const select=document.getElementById('ui-language');if(select)select.value=language;
 observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']});
}
let scheduled=false;const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;apply()})}});
window.UII18N={locale:()=>language==='en'?'en-US':'zh-CN',translate,add:values=>{Object.assign(dict,values);apply()},apply};
document.addEventListener('DOMContentLoaded',()=>{
 const select=document.getElementById('ui-language');select.value=language;
 select.addEventListener('change',()=>{language=select.value;try{localStorage.setItem('knowledge-ui-language',language)}catch{}apply();document.dispatchEvent(new Event('ui-language-change'))});apply();
});
})();

/* END UI LOCALIZATION BUNDLE */
function reportGenerationInfo(summary,fallbackCoverage){
 const names={default:'服务商默认',none:'关闭思考',minimal:'极低 · minimal',low:'低 · low',medium:'中 · medium',high:'高 · high',xhigh:'很高 · xhigh',max:'最高 · max',ultra:'极高 · ultra'};
 const r=summary.reasoning,u=summary.usage||{},format=n=>Number.isFinite(n)?n.toLocaleString():'未记录';
 const sum=(field,detail)=>{if(Number.isFinite(detail?u[field]?.[detail]:u[field]))return detail?u[field][detail]:u[field];const values=(u.stages||[]).map(v=>detail?v[field]?.[detail]:v[field]);return values.length&&values.every(Number.isFinite)?values.reduce((a,b)=>a+b,0):undefined};
 const input=sum('prompt_tokens'),output=sum('completion_tokens'),thinking=sum('completion_tokens_details','reasoning_tokens'),total=sum('total_tokens');
 const intensity=r?.effective?(names[r.effective]||r.effective):'未记录';
 return `${summary.schema_version===4?'<p class="notice">这份报告使用旧 Prompt 生成；尚未按你最新的九部分 Prompt 更新。</p>':''}<details class="report-generation-details"><summary>生成详情</summary><div class="report-generation-info" aria-label="本次报告生成信息">${summary.prompt_name?`<p class="report-prompt-name">Prompt：${esc(summary.prompt_name)} <button type="button" data-action="report-prompt">查看 Prompt</button></p>`:''}<dl class="report-meta"><div><dt>模型</dt><dd>${esc(summary.model||'未记录')}</dd></div><div><dt>思考强度</dt><dd>${esc(intensity)}</dd>${r?.requested&&r.requested!==r.effective?`<small>所选 ${esc(r.requested)} → 实际 ${esc(r.effective)}</small>`:''}</div><div><dt>本次报告 Token</dt><dd>${format(total)}</dd></div></dl><p class="report-generated-at">生成时间：${summary.generated?fmtTime(summary.generated):'未记录'} · ${esc(coverage[summary.coverage]||coverage[fallbackCoverage]||'材料类型未记录')}${summary.truncated?' · 部分正文':''}</p>${Number.isFinite(input)||Number.isFinite(output)||Number.isFinite(thinking)?`<details class="report-token-details"><summary>查看 Token 明细</summary><p>输入：${format(input)} · 输出：${format(output)}${Number.isFinite(thinking)?` · 其中思考：${format(thinking)}（已计入输出，不重复相加）`:''}</p></details>`:''}</div></details>`;
}
function renderPaperMath(tex,display=false){
  try{return katex.renderToString(tex,{displayMode:display,throwOnError:true,trust:false,strict:'ignore',maxExpand:1000,maxSize:20});}
  catch{return `<code class="math-fallback" title="此公式暂未能渲染，保留原始 LaTeX">${esc(tex)}</code>`;}
}
// Tokenize formulas before Markdown can consume backslashes, braces and underscores.
marked.use({extensions:[
 {name:'paperMathBlock',level:'block',start(src){return src.search(/\$\$|\\\[/);},tokenizer(src){
   const m=/^ {0,3}(?:\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\])[ \t]*(?:\n|$)/.exec(src);
   if(m)return {type:'paperMathBlock',raw:m[0],text:m[1]??m[2]};
 },renderer(token){return renderPaperMath(token.text,true);}},
 {name:'paperMathInline',level:'inline',start(src){return src.search(/\$|\\[([]/);},tokenizer(src){
   const display=/^(?:\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\])/.exec(src);
   if(display)return {type:'paperMathInline',raw:display[0],text:display[1]??display[2],display:true};
   const inline=/^(?:\$(?!\$)((?:\\[\s\S]|[^\\$\n])+?)\$(?!\$)|\\\(([\s\S]*?)\\\))/.exec(src);
   if(inline)return {type:'paperMathInline',raw:inline[0],text:inline[1]??inline[2],display:false};
 },renderer(token){return renderPaperMath(token.text,token.display);}}
]});
function reportMarkdown(text){
  const renderer=new marked.Renderer();
  renderer.html=({text})=>esc(text);
  renderer.image=({href,text})=>/^\/paper-assets\/[a-f0-9]{20}\/(?:figure|table)-\d+-p\d+\.png$/.test(href)?`<figure class="paper-original-visual"><a href="${esc(href)}" target="_blank" rel="noopener"><img src="${esc(href)}" alt="${esc(text)}" loading="lazy"></a><figcaption>${esc(text)}</figcaption></figure>`:esc(text);
  renderer.link=function({href,tokens}){const content=this.parser.parseInline(tokens);return /^(?:https?:\/\/|#[A-Za-z0-9_-]|\/paper-assets\/)/.test(href)?`<a href="${esc(href)}" target="_blank" rel="noopener">${content}</a>`:content};
  return marked.parse(text,{renderer,gfm:true});
}
function bilingualContent(zh,en,markdown=false){
 const tag=markdown?'div':'span',render=markdown?reportMarkdown:esc;
 if(!en)return `<${tag} data-language-version="zh">${render(zh||'')}</${tag}><${tag} data-language-version="en" hidden>The English version is not available yet. Update the report to generate both languages.</${tag}>`;
 return `<${tag} data-language-version="zh">${render(zh||'')}</${tag}><${tag} data-language-version="en" hidden>${render(en)}</${tag}>`;
}
function readingRecommendationCard(item){
 const a=item.summary?.reading_recommendation;
 if(!a){const pending=state.jobs.some(j=>j.item_id===item.id&&j.kind==='阅读建议'&&['queued','running'].includes(j.state));return `<section class="reading-advice-card advice-pending"><h3>这篇论文值得读吗？</h3><p>${pending?'正在根据已有分析生成阅读建议…':'这份报告尚未生成阅读建议，不自动猜测推荐等级。'}</p>${item.summary&&!pending?`<button class="secondary" data-job="reading-advice" data-id="${esc(item.id)}">生成阅读建议</button><small>只补充建议，复用现有报告。</small>`:''}</section>`;}
 const styles={'非常值得':['strong','✦'],'值得':['yes','✓'],'不值得':['no','−'],'非常不值得':['avoid','⊘'],'暂无法判断':['uncertain','?']};const [style,icon]=styles[a.level]||styles['暂无法判断'];
 return `<section class="reading-advice-card advice-${style}" aria-label="AI 阅读建议"><div class="reading-advice-heading"><h3>这篇论文值得读吗？</h3><span class="reading-advice-verdict"><span aria-hidden="true">${icon}</span> ${esc(a.level)}</span></div><p class="reading-advice-reason">${bilingualContent(a.reason,a.reason_en)}</p><dl>${a.for_whom?`<div><dt>适合谁</dt><dd>${bilingualContent(a.for_whom,a.for_whom_en)}</dd></div>`:''}${a.focus?`<div><dt>先读哪里</dt><dd>${bilingualContent(a.focus,a.focus_en)}</dd></div>`:''}${a.caveat?`<div><dt>保留意见</dt><dd>${bilingualContent(a.caveat,a.caveat_en)}</dd></div>`:''}</dl><small>判断把握：${esc(a.confidence)} · ${a.basis==='已有报告'?'根据已有报告补充，未重新阅读全文':'基于本次原文分析'}${a.usage?.total_tokens?' · 建议生成 '+a.usage.total_tokens.toLocaleString()+' Token':''}</small></section>`;
}
function detailedPaperReport(summary){
 const titles=['研究概览','方法与原文图','实验结果与表格','阅读建议','主张、证据与缺口','审稿意见','实验的进一步解读','总体评价','研究启示'];
 const chapter=summary.prompt_version==='chapter-reading-v2',fresh=chapter||summary.prompt_version==='reader-first-v1',mainEnd=chapter?8:4;
 const heading=r=>fresh?bilingualContent(r.title,r.title_en):esc(titles[r.part-1]||r.title);
 const section=r=>`<details class="report-section"><summary>${heading(r)}</summary><div class="report-markdown">${bilingualContent(r.markdown,r.markdown_en,true)}</div></details>`;
 const intro=summary.report_sections.filter(r=>r.part<=mainEnd).map(r=>fresh?`<section class="reader-explanation"><h3>${heading(r)}</h3><div class="report-markdown">${bilingualContent(r.markdown,r.markdown_en,true)}</div></section>`:section(r)).join('');
 return `<section class="analysis-part reader-first"><h3>${fresh?'读懂这篇论文':'论文总结'}</h3>${intro}</section><details class="report-deep-dive"><summary>${chapter?'补充审阅与改进建议':'深入分析：公式、实验与审阅'}</summary>${summary.report_sections.filter(r=>r.part>mainEnd).map(r=>chapter?`<div class="report-markdown">${bilingualContent(r.markdown,r.markdown_en,true)}</div>`:section(r)).join('')}</details>`;
}

let state={items:[],sources:[],authors:[],settings:{},jobs:[]},view='inbox',filter='all',search='',selected=null,graphMode='papers',workspace=location.pathname==='/news'?'news':'research',sourceFilter='all',topicFilter='all',librarySort='published',graphLimit=50,paperGraphLimit=30,authorSort='count',authorFilter='all',dailySort='published',libraryFolder='all',libraryFocus='all';
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={todos:'待办与日程',pipeline:'收集与推荐流程',inbox:'每日收件箱',paper:'论文库',news:'新闻与事件',post:'账号动态',authors:'作者与账号',graph:'关系网络',sources:'订阅来源',topics:'标签库',settings:'AI 与采集设置'};
const kinds={paper:'论文',news:'新闻',post:'动态'},coverage={abstract:'仅摘要',feed:'RSS 片段',manual:'手动文本',html:'HTML 正文',pdf:'PDF 文字',metadata:'元数据',email:'邮件正文'};
const fmt=d=>d?new Date(d).toLocaleDateString(window.UII18N?.locale()||'zh-CN',{year:'numeric',month:'short',day:'numeric'}):'日期未知';
async function api(path,data){path+=(path.includes('?')?'&':'?')+'workspace='+workspace;if(data!==undefined)data={...data,workspace};const r=await fetch(path,data===undefined?{}:{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const v=await r.json();if(!r.ok)throw Error(v.error||'请求失败');return v}
function toast(s){$('#toast').textContent=s;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',5000)}
async function reload(render=true){const next=await api('/api/state');if(next.workspace!==workspace)return;state=next;if(render)draw()}
function title(t,desc){return `<div class="page-title"><div><div class="eyebrow">PERSONAL WORKSPACE</div><h1>${esc(t)}</h1><p class="muted">${esc(desc)}</p></div><div class="muted">${new Date().toLocaleDateString(window.UII18N?.locale()||'zh-CN',{month:'long',day:'numeric',weekday:'long'})}</div></div>`}
function go(v){view=v;selected=null;search='';filter='all';sourceFilter='all';topicFilter='all';authorFilter='all';location.hash=v;draw();window.scrollTo(0,0)}
function draw(){if(view!=='graph'||selected||location.hash.startsWith('#author/'))currentNetwork3D?.destroy();workspaceNav();document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===view;b.classList.toggle('active',active);if(b.closest('.sidebar')){if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')}});$('#crumb').textContent=labels[view]||'内容详情';if(workspace==='research'&&location.hash.startsWith('#author/'))return authorPage(decodeURIComponent(location.hash.slice(8)));if(selected)return detail();if(view==='todos')return window.renderTodos($('#content'));if(['inbox','paper','news','post'].includes(view))return list();if(view==='topics')return topicsPage();if(view==='pipeline')return collectionPipeline();if(view==='sources')return sources();if(view==='settings')return settings();if(view==='authors'){view='graph';graphMode='authors';location.hash='graph';return graph()}if(view==='graph')return graph()}
const topicDimensions={task:'任务',method:'方法',type:'成果类型'};
const sourceGroups={field:'每日 arXiv',hot:'热点论文',manual:'手动收录'};
function workspaceNav(){document.querySelector('.header-actions').hidden=view==='todos';const paper=workspace==='research';$('#switch-research').classList.toggle('active',paper&&view!=='todos');$('#switch-news').classList.toggle('active',!paper&&view!=='todos');$('#workspace-label').textContent=paper?'论文工作区':'新闻工作区';$('#module-name').textContent=paper?'Research Paper':'News';document.body.dataset.workspace=workspace;for(const b of document.querySelectorAll('[data-workspace]'))b.setAttribute('aria-pressed',String(b.dataset.workspace===workspace));$('#nav').innerHTML=(paper?[['inbox','◈','每日推荐'],['paper','▤','我的论文库'],['topics','◇','标签库'],['graph','⌘','关系网络'],['pipeline','⇢','收集与推荐流程']]:[['inbox','▦','新闻收件箱'],['news','◷','新闻库']]).map(([v,icon,l])=>`<button data-view="${v}">${icon} <span>${l}</span></button>`).join('');labels.inbox=paper?'每日推荐':'新闻收件箱';labels.paper='我的论文库';labels.sources=paper?'每日信息源':'订阅来源';document.querySelector('.sidebar [data-view="sources"] span').textContent=labels.sources;labels.authors='作者档案';$('#refresh').textContent=paper?'获取最新论文':'刷新新闻';$('#add').textContent=paper?'＋ 添加论文':'＋ 添加新闻';document.title=(paper?'Research Paper':'News')+' · 知序'}
function provenance(i){return [...new Set((i.discoveries||[]).map(d=>sourceGroups[d.source_group]||d.source_group))]}
function readingIcon(kind,active=false){const shapes={star:`<path d="m12 3 2.8 5.7 6.3.9-4.55 4.43 1.08 6.27L12 17.34l-5.63 2.96 1.08-6.27L2.9 9.6l6.3-.9Z" ${active?'fill="currentColor"':''}/>`,seen:'<circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7 5.3-5.4"/>',dislike:'<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',restore:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>'};return `<svg class="reading-action-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[kind]}</svg>`}
function readingAction(i,action,detail=false){let text,attributes,kind=action,active=false,hint;if(action==='star'){active=!!i.starred;text=active?'已收藏':'收藏';attributes=`data-star="${i.id}"`;hint=active?'选择收藏文件夹或取消收藏':'收藏并选择文件夹，记录兴趣并移出每日推荐'}else if(action==='seen'){active=!!i.seen_at;text=active?'已读':'标为已读';attributes=`data-seen="${i.id}"`;hint='标为已读，移入论文库'}else{active=!!i.removed;kind=active?'restore':'dislike';text=active?(detail?'恢复论文':'恢复'):'不感兴趣';attributes=`data-feedback="${active?'neutral':'not_interested'}" data-id="${i.id}"`;hint=active?'恢复为中性反馈':'记录为不感兴趣，移出每日推荐'}return `<button type="button" class="reading-action action-${kind} ${active?'is-active':''}" ${attributes} ${action!=='dislike'?`aria-pressed="${active}"`:''} aria-label="${esc(text)}" title="${esc(hint)}">${readingIcon(kind,active)}<span>${esc(text)}</span></button>`}
const fmtTime=d=>d?new Date(d).toLocaleString(window.UII18N?.locale()||'zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}):'时间未记录';
function paperCardDates(i){const count=i.citations==null?'暂无数据':i.citations+' 次';const fields=[['发表日期',fmt(i.published)],['引用数量',count],['加入文库',i.library_added_at?fmtTime(i.library_added_at):'时间未记录']];if(i.starred)fields.push(['收藏时间',i.starred_at?fmtTime(i.starred_at):'时间未记录']);if(i.seen_at)fields.push(['标为已读',fmtTime(i.seen_at)]);return `<div class="paper-library-meta"><div class="paper-meta-source"><span>来源</span><span>${esc(paperSources(i))}</span></div><dl class="paper-meta-grid">${fields.map(([label,value])=>`<div><dt>${label}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><div class="paper-meta-extras">${favoriteFolderBadge(i)}<details class="citation-detail"><summary>引用更新状态</summary><p>数据来源：${esc(i.citation_source||'Semantic Scholar')}<br>${i.citation_updated?'最近成功获取：'+esc(fmtTime(i.citation_updated)):'尚未成功获取引用数据'}${i.citation_error?'<br>最近更新未成功，保留旧值。'+esc(i.citation_error):''}</p></details></div></div>`}

function dailyPaperSource(i,daily){if(daily?.daily_group==='hot'){const names=[...new Set((i.discoveries||[]).filter(d=>d.source_group==='hot').map(d=>d.platform||d.name).filter(Boolean))];return '热点来源：'+(names.join(' / ')||'来源暂未记录')}const cats=[...new Set((i.tags||[]).filter(t=>/^[a-z-]+\.[A-Z]{2,}$/.test(t)))];return 'arXiv · 分类：'+(cats.join(' / ')||'分类暂未提供')}
function cardAuthors(i){const affiliations=[...new Set((i.authors||[]).map(a=>a.affiliation).filter(Boolean))];return `<div class="card-authors">${(i.authors||[]).map(a=>`<button data-author="${esc(a.id)}">${esc(a.name)}${a.affiliation?`<sup>${affiliations.indexOf(a.affiliation)+1}</sup>`:''}</button>`).join('<span aria-hidden="true"> · </span>')}${affiliations.length?`<div class="card-affiliations">${affiliations.map((unit,n)=>{const author=i.authors.find(a=>a.affiliation===unit);return `<span><sup>${n+1}</sup> ${esc(unit)}${author.affiliation_source?.startsWith('https://')?` <a href="${esc(author.affiliation_source)}" target="_blank" rel="noopener" aria-label="核查署名单位原文">↗</a>`:''}</span>`}).join('')}${i.authors.some(a=>!a.affiliation)?'<small class="missing-affiliation">部分作者单位尚未取得</small>':''}</div>`:`<div class="card-affiliations missing-affiliation">单位：${esc(i.processing?.state==='error'?'读取失败，可重试':i.processing?.state==='running'?'正在读取原文署名':i.processing?.state==='partial'?'PDF 未能明确对应单位':'等待原文署名提取')}</div>`}</div>`}
function recommendationText(i,daily,reason){
 if(daily?.daily_screening!=='ai')return esc(reason);
 const base=daily.daily_base_reason||reason;
 return bilingualContent(base,daily.daily_reason_en||'The English screening explanation is not available for this older recommendation.')+(i.recommendation_reason&&i.recommendation_reason!=='尚无足够兴趣反馈'?' · '+esc(i.recommendation_reason):'');
}
function card(i){if(workspace!=='research')return newsCard(i);const abstract=i.abstract||(i.coverage==='abstract'?i.body:''),daily=state.daily?.items.find(p=>p.id===i.id),inDaily=view==='inbox',reason=daily?.daily_reason||(i.recommendation_reason!=='尚无足够兴趣反馈'?i.recommendation_reason:'');return `<article data-open-paper="${i.id}" tabindex="0" aria-label="打开论文：${esc(i.title)}" class="card paper-card ${i.seen_at?'seen':'unseen'} "><div class="card-top"><div>${inDaily?`<span class="tag origin ${daily?.daily_group==='hot'?'origin-hot':'origin-arxiv'}">${daily?.daily_group==='hot'?'热点':'每日 arXiv'}</span>`:provenance(i).map(g=>`<span class="tag origin">${esc(g)}</span>`).join('')}</div><span class="paper-card-status">${i.seen_at?'已读':'待阅读'}</span></div><h3><button class="card-title" data-item="${i.id}">${esc(i.title)}</button></h3>${cardAuthors(i)}<p class="card-abstract">${esc(abstract||'尚未保存摘要，点击查看论文。')}</p><div class="topic-tags">${groupedTopics(i)}</div>${inDaily?`<div class="card-footer"><span class="paper-discovery-source">${esc(dailyPaperSource(i,daily))}</span><span>发表：${fmt(i.published)}</span></div>`:paperCardDates(i)}${paperHeat(i)}${reason?`<div class="recommendation-reason"><span class="reason-label">${daily?.daily_screening==='ai'?'AI 初审':'推荐线索'}</span>${recommendationText(i,daily,reason)}</div>`:''}<div class="paper-card-bottom"><button class="read-paper" data-item="${i.id}">阅读论文 <span aria-hidden="true">↗</span></button><div class="card-reading-actions">${readingAction(i,'star')}${readingAction(i,'seen')}${readingAction(i,'dislike')}</div></div></article>`}
function newsCard(i){const body=i.summary?.main_idea||i.body||'尚未添加正文';const daily=state.daily?.items.find(p=>p.id===i.id);return `<article ${workspace==='research'?`data-open-paper="${i.id}" tabindex="0" aria-label="打开论文：${esc(i.title)}"`:""} class="card ${i.seen_at?'seen':'unseen'}"><div class="card-top"><div>${workspace==='research'?'':`<span class="tag ${i.kind}">${kinds[i.kind]}</span><span class="seen-label">${i.removed?'不感兴趣':i.starred?'已收藏':i.seen_at?'已读':'未读'}</span>`}${provenance(i).map(g=>`<span class="tag origin">${esc(g)}</span>`).join('')}</div><div class="card-reading-actions">${readingAction(i,'star')}${readingAction(i,'seen')}${readingAction(i,'dislike')}</div></div><h3><button class="card-title" data-item="${i.id}">${esc(i.title)}</button></h3><p>${esc(body.slice(0,200))}${body.length>200?'…':''}</p><div class="topic-tags">${groupedTopics(i)}</div><div class="card-footer"><span>${esc(workspace==='research'?paperSources(i):i.source)} · ${fmt(i.published)}</span><span>${esc(i.authors.map(a=>a.name).slice(0,3).join(' · '))}</span><span>${esc(coverage[i.coverage])}</span><span>${i.summary?'已有综合 Review':'等待 AI Review'}</span>${i.seen_at?`<span>打开 ${i.read_count||0} 次 · 最近阅读 ${fmt(i.last_read_at||i.seen_at)}</span>`:''}</div>${workspace==='research'&&(daily||i.recommendation_reason!=='尚无足够兴趣反馈')?`<div class="recommendation-reason"><span class="reason-label">${daily?.daily_screening==='ai'?'AI 初审':'推荐线索'}</span>${esc(daily?.daily_reason||i.recommendation_reason)}</div>`:''}</article>`}
function batchDate(date,today){if(!date)return '推荐';const age=Math.round((new Date(today+'T00:00:00+08:00')-new Date(date+'T00:00:00+08:00'))/86400000);return age===0?'今日':age===1?'昨日':age===2?'前日':date.slice(5).replace('-','月')+'日'}
function recommendationDate(date){return date?new Date(date+'T00:00:00+08:00').toLocaleDateString(window.UII18N?.locale()||'zh-CN',{timeZone:'Asia/Shanghai',month:'long',day:'numeric'}):'日期未知'}
function deliveryStatus(day){return ({running:'采集与筛选进行中',partial:'采集或筛选部分失败',pending:'候选论文仍待筛选',delivered:'当天推荐已完成',empty:'本次采集完成，没有新增合适推荐',failed:'采集流程失败',interrupted:'采集流程被中断',historical:'已有历史推荐记录',unverified:'未记录当天采集结果，无法确认是否运行',screening_unverified:'已采集候选，但未记录筛选完成结果'})[day?.status]||'未记录当天采集结果，无法确认是否运行'}
async function deliveryHistory(){
 try{
 const days=await api('/api/delivery-history');
 modal('每日推送记录',`<p class="subtle">按推荐日期统计；已读与未读反映当前状态，收藏和不感兴趣单独计数。</p><div class="delivery-history">${days.map((d,n)=>`<details ${n<2?'open':''}><summary><strong>${esc(recommendationDate(d.date))}</strong><span>推荐总数：${d.total} · 已读：${d.read} · 未读：${d.unread}</span></summary><p>${esc(deliveryStatus(d))}</p><p class="subtle">新增候选：${d.candidates_added} · 已收藏：${d.saved} · 不感兴趣：${d.dismissed}</p>${d.runs.map(r=>`<p class="subtle">${fmtTime(r.started)} — ${r.finished?fmtTime(r.finished):'进行中'} · ${esc(deliveryStatus({status:r.state}))}</p>`).join('')}<label>显示论文 <select class="delivery-filter"><option value="all">全部</option><option value="read">已读</option><option value="unread">未读</option></select></label><ul>${d.papers.map(p=>`<li data-read="${p.read?'read':'unread'}"><button type="button" class="delivery-paper" data-history-item="${esc(p.id)}" translate="no">${esc(p.title)}</button><span>${p.read?'已读':'未读'}${p.starred?' · 已收藏':''}${p.removed?' · 不感兴趣':''}</span></li>`).join('')}</ul>${!d.total?'<p class="subtle">当天没有推荐记录</p>':''}</details>`).join('')}</div>`);
 $('#dialog-body').querySelectorAll('.delivery-filter').forEach(el=>el.onchange=()=>el.closest('details').querySelectorAll('li[data-read]').forEach(li=>li.hidden=el.value!=='all'&&li.dataset.read!==el.value));
 $('#dialog-body').querySelectorAll('[data-history-item]').forEach(el=>el.onclick=()=>{$('#dialog').close();location.hash='item/'+el.dataset.historyItem});
 }catch(e){toast(e.message)}
}
document.addEventListener('click',e=>{if(e.target.closest('[data-delivery-history]'))deliveryHistory()});
function dailyOverview(d){const today=d.today||{total:0,remaining:0,counts:{},topics:[]},backlog=(d.backlog||[]).filter(b=>b.remaining>0);return `<section class="daily-hero daily-overview"><div class="overview-title"><div><div class="eyebrow">YOUR DAILY READING</div><h1>每日推荐<span class="hero-title-dot">.</span></h1><p class="hero-subtitle">让值得读的研究，成为新的灵感。</p></div><div class="overview-source-entry"><span class="hero-date">${esc(recommendationDate(d.date))}</span><button class="secondary" data-delivery-history>每日推送记录</button><button class="secondary" data-view="sources">每日信息源 <span aria-hidden="true">↗</span></button></div></div><div class="daily-metrics"><div class="daily-metric metric-primary"><span>今日新增</span><div><strong>${today.total}</strong><small>篇论文</small></div></div><div class="daily-metric"><span><i class="metric-dot"></i>每日 arXiv</span><strong>${today.counts.field||0}</strong></div><div class="daily-metric"><span><i class="metric-dot hot"></i>热点论文</span><strong>${today.counts.hot||0}</strong></div><div class="daily-metric"><span>今天待处理</span><strong>${today.remaining}</strong></div></div>${!today.total?`<p class="delivery-empty-status" role="status">${esc(deliveryStatus(d.delivery_today))}</p>`:''}${today.topics?.length?`<div class="overview-topics"><span class="subtle">今日主题</span><div>${today.topics.map(t=>`<span class="tag">${esc(t.name)}</span>`).join('')}</div></div>`:''}${backlog.length?`<div class="backlog-summary"><h3>之前未处理</h3><div class="backlog-batches">${backlog.map(b=>`<button type="button" data-jump-day="${esc(b.date)}">${esc(recommendationDate(b.date))}<strong>${b.remaining} 篇</strong></button>`).join('')}</div></div>`:''}</section>`}
function dailyList(d){const groups=new Map();for(const i of d.items||[]){const date=i.recommended_date||d.date;if(!groups.has(date))groups.set(date,[]);groups.get(date).push(i)}$('#content').innerHTML=dailyOverview(d)+researchDirections()+`<div class="daily-paper-list">${groups.size?[...groups].sort(([a],[b])=>b.localeCompare(a)).map(([date,papers])=>`<section class="daily-paper-batch" id="papers-day-${esc(date)}" tabindex="-1"><h2 class="batch-heading">${esc(recommendationDate(date))}<span>${papers.length} 篇待处理</span></h2><div class="list">${papers.map(card).join('')}</div></section>`).join(''):'<div class="empty"><h2>暂无待处理论文</h2></div>'}</div>`}

function list(){
 const paper=workspace==='research',daily=paper&&view==='inbox',d=state.daily||{items:[],counts:{},excluded:{},limit:50,hot_limit:10,pending:0,qualified:0,mode:'rules'};
 if(daily)return dailyList(d);
 if(paper&&!['all','seen','starred'].includes(filter))filter='all';
 const library=state.items.filter(i=>paper?i.kind==='paper'&&!i.removed&&(i.starred||i.seen_at||i.status==='read'):true),all=daily?d.items:library,active=all.filter(i=>!i.removed),topics=[...new Set((daily?active:library).flatMap(i=>i.topics||[]))].sort(),authorOptions=[...new Map((daily?active:library).flatMap(i=>i.authors||[]).map(a=>[a.id,a])).values()].sort((a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base'}));
 const counts=d.counts||{};const excluded=Object.values(d.excluded||{}).reduce((a,b)=>a+b,0);
 $('#content').innerHTML=title(daily?'今天，值得读什么':labels[view],daily?'让值得关注的研究浮上来。按你的主题与兴趣筛选，不为凑数而推荐。':paper?'这里只显示已标为已读或收藏的论文，可按标签查找。':'独立的新闻阅读空间，从信息中整理线索。')+
 (daily?dailyOverview(d,library):
 `${paper?libraryActionBar():''}<div class="stats ${paper?'paper-library-stats':''}">${(paper?[['文库论文',library.length],['已读',library.filter(i=>i.seen_at||i.status==='read').length],['收藏',library.filter(i=>i.starred).length]]:[['收录新闻',active.length],['未读',active.filter(i=>!i.seen_at).length],['收藏',active.filter(i=>i.starred).length],['启用来源',state.sources.filter(s=>s.enabled).length]]).map(([l,n])=>`<div class="stat"><span>${l}</span><strong>${n}</strong></div>`).join('')}</div>`)+
 `<div class="reading-controls"><div class="toolbar"><div class="tabs">${(daily?[['all','每日推荐']]:paper?[['all','全部'],['seen','已读'],['starred','收藏']]:[['all','全部'],['unseen','未读'],['seen','已读'],['starred','收藏'],['removed','不感兴趣']]).map(([k,n])=>`<button data-filter="${k}" class="${filter===k?'selected':''}">${n}</button>`).join('')}</div><input id="search" type="search" name="paper-query" autocomplete="off" spellcheck="false" class="search" placeholder="输入标题、作者或标签，即时筛选" aria-label="搜索内容" value="${esc(search)}"><button type="button" class="secondary" id="search-submit">搜索</button><button type="button" class="secondary" id="clear-filters">重置</button></div><div class="toolbar filter-row">${paper?`<label class="filter-control" for="source-filter">来源<select id="source-filter" aria-label="来源"><option value="all">所有来源</option>${Object.entries(sourceGroups).map(([k,l])=>`<option value="${k}" ${sourceFilter===k?'selected':''}>${l}</option>`).join('')}</select></label>`:''}<label class="filter-control" for="topic-filter">标签<select id="topic-filter" aria-label="标签"><option value="all">所有标签</option>${topics.map(t=>`<option ${topicFilter===t?'selected':''}>${esc(t)}</option>`).join('')}</select></label>${paper?`<label class="filter-control" for="author-filter">作者<select id="author-filter" aria-label="作者"><option value="all">所有作者</option>${authorOptions.map(a=>`<option value="${esc(a.id)}" ${authorFilter===a.id?'selected':''}>${esc(a.name)}</option>`).join('')}</select></label>`:''}<label class="filter-control" for="sort">排序<select id="sort" aria-label="排序方式">${paper?'<option value="citations">引用数量：多 → 少</option><option value="published">发表时间：新 → 旧</option><option value="library_added_at">加入文库时间：新 → 旧</option>':'<option value="added">收录时间：新 → 旧</option><option value="published">发表时间：新 → 旧</option>'}</select></label><span id="result-count" class="subtle"></span></div></div><div class="grid"><div id="results" class="list"></div>${paper?libraryCompanion(library):`<aside class="side-panel"><div class="eyebrow">READING COMPANION</div><h3>${paper?'把兴趣留在这里':'留住有用的信息'}</h3><p>${paper?'打开论文会保留在每日推荐；收藏、标为已读或不感兴趣后移出。未处理的论文按推荐日期保留。':'收藏方便以后查找；打开标为已读，移除后仍可恢复。'}</p><div class="feedback-guide"><span>☆ 收藏</span><small>记录兴趣，移入论文库</small><span>不感兴趣</span><small>移出推荐，不加入论文库</small></div><div class="notice">${state.settings.ai_available?(paper?'采集论文后，在后台生成综合 Review。':'可按需生成综合 Review。'):paper?'配置独立 AI Key 后，可进行 AI 初审与综合 Review。':'配置独立 AI Key 后，可生成新闻分析。'}</div></aside>`}</div>`;
 function results(){const pool=filter==='removed'?library:all;let arr=pool.filter(i=>(!paper||libraryFocus!=='saved_unread'||i.starred&&!i.seen_at&&i.status!=='read')&&(!paper||libraryFolder==='all'||i.starred&&(libraryFolder==='unfiled'?!i.folder_id:i.folder_id===libraryFolder))&&(filter==='removed'?i.removed:daily?!i.removed:filter==='all'?true:!i.removed)&&(filter!=='unseen'||!i.seen_at)&&(filter!=='seen'||!!i.seen_at||(paper&&i.status==='read'))&&(filter!=='starred'||i.starred)&&(sourceFilter==='all'||!paper||(i.discoveries||[]).some(d=>d.source_group===sourceFilter))&&(topicFilter==='all'||(i.topics||[]).includes(topicFilter))&&(authorFilter==='all'||!paper||(i.authors||[]).some(a=>a.id===authorFilter))&&search.trim().toLowerCase().split(/\s+/).filter(Boolean).every(term=>[i.title,...(i.authors||[]).map(a=>a.name),...(i.tags||[]),...(i.topics||[])].join(' ').toLowerCase().includes(term)));const sort=$('#sort').value;if(daily)dailySort=sort;else librarySort=sort;if(sort==='today')arr=arr.filter(i=>i.published&&new Date(i.published).toLocaleDateString('en-CA',{timeZone:'Asia/Shanghai'})===new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Shanghai'}));arr.sort((a,b)=>sort==='library_added_at'?String(b.library_added_at||'').localeCompare(String(a.library_added_at||'')):sort==='recommended'?(daily?String(b.recommended_date||'').localeCompare(String(a.recommended_date||'')):0)||(b.daily_score??b.preference_score??0)-(a.daily_score??a.preference_score??0)||String(b.published||'').localeCompare(String(a.published||'')):sort==='published_asc'?String(a.published||'9999').localeCompare(String(b.published||'9999')):sort==='read_count'?(b.read_count||0)-(a.read_count||0):sort==='citations'?(b.citations??-1)-(a.citations??-1):String(b[sort==='today'?'published':sort]||'').localeCompare(String(a[sort==='today'?'published':sort]||'')));const sortLabel=$('#sort').selectedOptions[0].textContent;const field=sort==='published_asc'?'published':sort;const values=arr.map(i=>i[field]);const emptySort=!['recommended','today'].includes(sort)&&arr.length>1&&values.every(v=>v===null||v===undefined||v==='');const equalSort=!emptySort&&!['recommended','today'].includes(sort)&&arr.length>1&&new Set(values).size===1;$('#result-count').textContent=`显示 ${arr.length} / ${pool.length} 篇 · ${sortLabel}${paper&&libraryFocus==='saved_unread'?' · 收藏待阅读':''}${emptySort?' · 暂无此项数据，保持原顺序':equalSort?' · 此项数值相同，顺序不变':''}`;$('#results').innerHTML=arr.length?arr.map(card).join(''):`<div class="empty"><div class="empty-symbol">◌</div><h2>${daily?'没有符合当前筛选的推荐':'没有匹配内容'}</h2><p>${daily?'筛选条件优先于数量。你可以查看完整论文库、调整主题，或对等待审核的候选进行 AI 初审。':paper?(library.length?'试试调整搜索词或筛选条件。':'在每日推荐中收藏或标为已读后，论文会出现在这里。'):'添加新闻 RSS 或手动内容，开始你的新闻阅读。'}</p><button class="secondary" data-view="${paper?'paper':'sources'}">${paper?'查看论文库':'设置订阅'}</button></div>`}
 $('#sort').value=daily?dailySort:librarySort;if(!$('#sort').value)$('#sort').value='published';results();$('#search').oninput=e=>{search=e.target.value;results()};$('#search').onsearch=e=>{search=e.target.value;results()};$('#search-submit').onclick=()=>{search=$('#search').value;results()};$('#clear-filters').onclick=()=>{libraryFocus='all';libraryFolder='all';search='';sourceFilter=topicFilter=authorFilter='all';filter='all';list();$('#search').focus()};$('#sort').onchange=results;$('#topic-filter').onchange=e=>{topicFilter=e.target.value;results()};if($('#author-filter'))$('#author-filter').onchange=e=>{authorFilter=e.target.value;results()};if($('#source-filter'))$('#source-filter').onchange=e=>{sourceFilter=e.target.value;results()}
}
function jobHTML(){return state.jobs.slice(-5).reverse().map(j=>`<div class="job"><b>${esc(j.kind)}</b> · ${{queued:'排队中',running:'处理中',done:'已完成',error:'失败'}[j.state]}${j.state==='error'||j.message==='部分来源采集失败'?`<p class="muted">${esc(j.message)}</p>`:''}${j.result&&Array.isArray(j.result)?j.result.map(r=>`<div class="subtle">${esc(r.name||'导入内容')} ${r.error?esc(r.error):r.received!==undefined?'获取 '+r.received+' 篇 · 新增 '+r.added+' 篇':'新增 '+(r.added??r.id??'')}</div>`).join(''):''}</div>`).join('')||'<p>还没有运行任务</p>'}
async function openItem(id){try{await api('/api/opened',{id});await reload(false);selected=id;location.hash='item/'+id;detail();window.scrollTo(0,0);const item=state.items.find(i=>i.id===id),pending=state.jobs.some(j=>j.item_id===id&&['queued','running'].includes(j.state));if(workspace==='research'&&item?.external_id?.startsWith('arxiv:')&&item.authors.some(a=>!a.affiliation)&&(!item.author_metadata_updated||Date.now()-new Date(item.author_metadata_updated).getTime()>7*86400000)&&!pending){await api('/api/author-metadata',{id})}}catch(e){toast(e.message)}}

function paperSources(i){const names=[...new Set((i.discoveries||[]).map(d=>d.platform||d.name))];const cats=(i.tags||[]).filter(t=>/^[a-z-]+\.[A-Z]{2,}$/.test(t));return (names.join(' / ')||i.source||'手动导入')+(cats.length?' · arXiv 分类：'+[...new Set(cats)].join(' / '):'')}
function paperAuthors(i){const signature=(state.jobs||[]).find(j=>j.item_id===i.id&&j.kind==='首页作者与单位'&&['queued','running','error'].includes(j.state)),missing=signature?(signature.state==='error'?'首页署名提取未完成，可重试':'正在提取 PDF 首页署名单位'):(i.author_metadata_updated?'首页尚未确认该作者单位':'尚未读取原文首页');return `<div class="paper-author-list"><div class="author-section-heading"><span class="subtle">作者与单位 · ${i.authors.length} 位作者</span>${i.external_id?.startsWith('arxiv:')?`<button class="secondary" data-job="author-metadata" data-id="${i.id}">更新作者与单位</button>`:''}</div><div>${i.authors.map(a=>{const p=state.authors.find(x=>x.id===a.id),institution=a.affiliation||p?.affiliation;return `<div class="paper-author"><button data-author="${esc(a.id)}">${esc(a.name)}</button><small><span ${institution?'translate="no"':''}>${esc(institution||a.affiliation_note||missing)}</span>${a.affiliation?' · <span>论文署名单位</span>':institution?' · <span>档案当前机构</span>':''}</small>${a.affiliation_source?.startsWith('https://')?`<a class="affiliation-evidence" href="${esc(a.affiliation_source)}" target="_blank" rel="noopener">署名依据 ↗</a>`:''}</div>`}).join('')||'<p class="subtle">尚无作者元数据</p>'}</div></div>`}
function topicsPage(){const ts=state.topic_library||[];$('#content').innerHTML=title('标签库','仅收录文库论文使用的大方向标签，总计最多 20 个，每篇论文最多 3 个。')+`<div class="toolbar topic-library-toolbar"><button class="secondary" data-action="classify-topics">AI 整理论文标签</button><span class="subtle">${ts.length} 个标签</span></div><section class="taxonomy-section"><div class="topic-library">${ts.map(t=>`<span class="library-topic-editable"><button class="topic-link library-topic-chip" data-topic="${esc(t.name)}">${esc(t.name)} <small>${t.count} 篇</small></button><button class="topic-rename-icon" type="button" data-edit-topic="${esc(t.name)}" aria-label="修改标签：${esc(t.name)}" title="修改名称">✎</button></span>`).join('')||'<p class="muted">收藏或标为已读后，论文的标签会出现在这里。</p>'}</div></section>`}

function groupedTopics(i){const tags=[...new Set((i.topics||[]).filter(t=>t&&t!=='其他研究'&&t!=='尚未明确'))];return tags.map(t=>workspace==='research'?`<button class="tag topic-link" data-topic="${esc(t)}">${esc(t)}</button>`:`<span class="tag">${esc(t)}</span>`).join('')}


function topicModal(name){if(!(state.topic_library||[]).some(t=>t.name===name))return;modal('修改标签名称',`<form id="topic-form"><div class="field"><label for="topic-new-name">标签名称</label><input id="topic-new-name" name="new_name" value="${esc(name)}" maxlength="20" required></div><p class="muted">与已有标签同名时，会自动合并，相关论文同步更新。</p><button class="primary" type="submit">保存</button><p id="topic-rename-error" class="muted" role="status"></p></form>`);$('#topic-new-name').focus();$('#topic-new-name').select();$('#topic-form').onsubmit=async e=>{e.preventDefault();const button=e.target.querySelector('button[type="submit"]');button.disabled=true;try{const result=await api('/api/topics',{name,new_name:$('#topic-new-name').value});if(topicFilter===name)topicFilter=result.name;$('#dialog').close();await reload();toast(result.merged?'同名标签已合并，论文标签已同步':'标签名称已更新，论文标签已同步')}catch(error){$('#topic-rename-error').textContent=error.message;button.disabled=false}}}

function analysisText(value){const lines=String(value||'当前材料证据不足。').split(/\n/).map(l=>l.trim()).filter(Boolean);if(lines.some(l=>/^[-•]\s*/.test(l)))return `<ul class="analysis-points">${lines.map(l=>`<li>${esc(l.replace(/^[-•]\s*/,''))}</li>`).join('')}</ul>`;return lines.map(l=>`<p>${esc(l)}</p>`).join('')}
function paperVisuals(summary,section){if(summary.schema_version<3)return '';return (summary.visuals||[]).filter(v=>v.section===section&&v.kind&&v.bbox).map(v=>`<figure class="paper-original-visual"><a href="${esc(v.url)}" target="_blank" rel="noopener"><img src="${esc(v.url)}" loading="lazy" alt="${esc(v.label)} · ${v.extraction_mode==='full_page'?'原文整页 / Full PDF page':'原文单独裁图'}"></a><figcaption><strong>${esc(v.label)} · 第 ${v.page} 页</strong>${v.extraction_mode==='full_page'?'<p>保留原文整页，避免误裁图表。 / Full source page retained to avoid an unreliable crop.</p>':''}<p>${esc(v.explanation||'点击图片放大查看。')}</p><a href="${esc(v.source)}#page=${v.page}" target="_blank" rel="noopener">查看原始 PDF ↗</a></figcaption></figure>`).join('')}
function guidedPaperReading(summary){const r=summary.reading||{},used=new Set();const visual=id=>{if(!id||used.has(id))return '';const v=(summary.visuals||[]).find(v=>v.id===id);if(!v)return '';used.add(id);return paperVisuals({...summary,visuals:[v]},v.section)};const block=(label,value)=>`<div class="review-reading-block"><h4>${label}</h4>${analysisText(value)}</div>`;return `<section class="analysis-part reading-overview"><div class="analysis-part-heading"><h3>先了解这篇论文</h3></div>${block('核心想法',summary.main_idea)}${block('研究什么任务',summary.problem)}${block('现有做法有什么问题',summary.motivation)}${r.task_example?`<div class="reading-example"><strong>用一个例子理解</strong>${analysisText(r.task_example)}</div>`:''}${block('真正的难点',summary.challenge)}</section><section class="analysis-part"><div class="analysis-part-heading"><h3>方法怎么工作</h3></div>${analysisText(summary.method)}<details class="reading-expand"><summary>展开方法步骤与原文图</summary>${(r.method_steps||[]).map((s,n)=>`<article class="method-step"><div class="method-step-heading"><span class="step-index">${n+1}</span><h4>${esc(s.title)}</h4><span class="phase-label">${esc(s.phase)}</span></div><dl class="reading-facts"><dt>输入</dt><dd>${esc(s.input)}</dd><dt>做什么</dt><dd>${esc(s.operation)}</dd><dt>输出</dt><dd>${esc(s.output)}</dd><dt>为什么需要</dt><dd>${esc(s.why)}</dd></dl>${visual(s.visual_id)}<details class="reading-source"><summary>核对原文位置</summary><p>${esc(s.source)}</p></details></article>`).join('')}${block('具体贡献',summary.contribution)}${r.glossary?.length?`<div class="reading-glossary"><h4>必要术语，用白话解释</h4><dl>${r.glossary.map(g=>`<dt>${esc(g.term)}</dt><dd>${esc(g.meaning)}</dd>`).join('')}</dl></div>`:''}</details></section><section class="analysis-part"><div class="analysis-part-heading"><h3>实验分别说明了什么</h3></div>${analysisText(summary.results)}${(r.experiments||[]).map((e,n)=>`<article class="experiment-card"><div class="experiment-heading"><span class="phase-label">${esc(e.type)}</span><h4>${esc(e.title)}</h4></div><p class="experiment-question"><strong>检验的问题：</strong>${esc(e.question)}</p><p class="experiment-answer"><strong>支持的结论：</strong>${esc(e.interpretation)}</p><details class="reading-expand"><summary>展开实验设置、结果与图表</summary><dl class="reading-facts"><dt>实验设置</dt><dd>${esc(e.setup)}</dd><dt>对照是什么</dt><dd>${esc(e.comparator)}</dd><dt>指标怎么理解</dt><dd>${esc(e.metric)}</dd><dt>观察到什么</dt><dd>${esc(e.observation)}</dd><dt>没有证明什么</dt><dd>${esc(e.limitation)}</dd></dl>${visual(e.visual_id)}<p class="experiment-source">原文位置：${esc(e.source)}</p></details></article>`).join('')||'<p class="muted">当前材料没有足够信息逐项解释实验。</p>'}${block('这些证据是否支持研究目标',summary.motivation_validation)}</section><section class="analysis-part reviewer-part"><div class="analysis-part-heading"><h3>审稿人 Review</h3></div>${block('是否值得读',summary.worth_reading)}${block('主要优点',summary.strengths)}${block('最关键的问题',summary.major_issues)}<details class="analysis-secondary"><summary>其他审稿意见</summary>${[['minor_issues','次要问题'],['novelty','创新性与边界'],['community','社区价值'],['limitations','适用范围'],['review_questions','需要作者回答的问题'],['review','总体评价']].map(([k,label])=>block(label,summary[k])).join('')}</details></section>`}
function paperAnalysisParts(summary){if(summary.format==='markdown'&&summary.report_sections)return detailedPaperReport(summary);if(summary.schema_version>=4&&summary.reading)return guidedPaperReading(summary);const fields=[['main_idea','核心思路'],['motivation','研究动机'],['problem','要解决的问题'],['challenge','核心难点'],['method','方法'],['contribution','贡献'],['results','关键结果'],['motivation_validation','是否支持研究目标']];const review=[['worth_reading','是否值得读'],['strengths','主要优点'],['major_issues','主要问题']];const extra=[['minor_issues','次要问题'],['novelty','创新性'],['community','社区价值'],['limitations','局限'],['review_questions','待回答的问题'],['review','总体评价']];const block=([key,label])=>`<div class="review-reading-block"><h4>${label}</h4>${analysisText(summary[key])}${['method','results'].includes(key)?paperVisuals(summary,key):''}</div>`;return `<section class="analysis-part"><div class="analysis-part-heading"><h3>论文总结</h3></div>${fields.map(block).join('')}</section><section class="analysis-part"><div class="analysis-part-heading"><h3>审稿人 Review</h3></div>${review.map(block).join('')}<details class="analysis-secondary"><summary>其他审稿意见</summary>${extra.map(block).join('')}</details></section>`}
function detail(){if(workspace!=='research')return newsDetail();const i=state.items.find(i=>i.id===selected);if(!i){selected=null;return draw()}$('#crumb').textContent='论文详情';const summary=i.summary,abstract=i.abstract||(i.coverage==='abstract'?i.body:''),orig=i.external_id?.startsWith('arxiv:')?'https://arxiv.org/abs/'+i.external_id.slice(6):i.url;const job=state.jobs.find(j=>j.item_id===i.id&&j.kind==='论文综合 Review'&&['queued','running','error'].includes(j.state));$('#content').innerHTML=`<div class="paper-detail-layout${paperChatOpen?' chat-open':''}"><div class="paper-reading"><div class="paper-detail-toolbar"><button class="return-button" data-action="back">← 返回${labels[view]||'每日推荐'}</button><div class="paper-interest-actions"><button class="secondary" type="button" data-action="ask-paper-ai">💬 询问 AI</button><button class="secondary" type="button" data-note-open>我的笔记</button>${readingAction(i,'star',true)}${readingAction(i,'seen',true)}${readingAction(i,'dislike',true)}</div></div><section class="paper-heading"><h1>${esc(i.title)}</h1><div class="paper-topic-labels">${groupedTopics(i)}</div><div class="paper-source-row"><div><span class="subtle">推荐来源</span><p>${esc(paperSources(i))}</p></div>${orig?`<a class="original-paper-button" href="${esc(orig)}" target="_blank" rel="noopener">点击看原始论文 ↗</a>`:''}</div>${paperAuthors(i)}${i.processing?`<p class="processing-status" role="status">${esc(({queued:"⏳ 后台排队中",running:"⏳ 后台处理中",ready:"✓ 处理完成",partial:"◐ 部分资料待补全",error:"⚠ 处理失败，可重试"})[i.processing.state]||i.processing.state)} · ${esc(i.processing.details.stage||"")}${i.processing.details.material_error?` · ${esc(i.processing.details.material_error)}`:""}</p>`:""}</section><section class="paper-abstract"><h2>Abstract</h2><p>${esc(abstract||'尚未保存独立摘要，请通过上方原始论文入口查看。')}</p></section><section class="paper-ai-review"><div class="review-section-heading"><h2>AI 论文总结与 Review</h2>${(!job||job.state==='error')?`<button class="secondary" ${state.settings.ai_available?`data-job="review" data-id="${i.id}"`:'data-view="settings"'}>${state.settings.ai_available?(summary?'更新总结与 Review':'生成总结与 Review'):'配置 AI 接口'}</button>`:''}</div>${summary?`${reportGenerationInfo(summary,i.coverage)}${summary.report_sections?.some(x=>!x.markdown_en)||summary.reading_recommendation&&!summary.reading_recommendation.reason_en?`<button class="secondary" data-job="report-english" data-id="${i.id}">仅补充英文版</button>`:''}<p class="review-scope">${['abstract','feed','metadata'].includes(summary.coverage)?'这份总结基于摘要，完整实验与结论仍需核对原文。':'AI 总结辅助阅读，具体判断请结合原文核实。'}</p>${summary.schema_version<4?'<p class="review-scope">这是旧版分析，原内容已保留；更新后按概览、方法步骤、逐项实验和独立审稿重新讲解。</p>':''}${paperAnalysisParts(summary)}${readingRecommendationCard(i)}${summary.visual_error?`<p class="muted">${esc(summary.visual_error)}</p>`:''}${!summary.evidence?.length&&summary.rejected_evidence?'<p class="muted">模型引文未通过原文匹配，数字与判断请通过原文入口核对。</p>':''}${summary.evidence?.length?`<details class="review-evidence"><summary>查看原文证据</summary>${summary.evidence.map(e=>`<p><strong>${esc(e.claim)}</strong><br>“${esc(e.quote)}”</p>`).join('')}</details>`:''}`:`<p class="muted">${job?(job.state==='error'?'生成失败：'+esc(job.message):job.state==='queued'?'已进入后台队列，轮到这篇论文后会自动读取 PDF 并生成总结。':'正在生成 AI 总结，完成后会自动显示。'):'尚未生成 AI 总结。'}</p>`}</section></div><aside class="paper-chat-sidebar" aria-label="论文 AI 聊天">${paperSideTools(i)}</aside></div>`;loadPaperChat(i.id);loadPaperNote(i.id)}
function newsDetail(){const i=state.items.find(i=>i.id===selected);if(!i){selected=null;return draw()}$('#crumb').textContent='内容详情';const summary=i.summary;const sections=workspace==='news'?[['main_idea','事件概览'],['motivation','背景'],['problem','核心问题'],['method','信息来源与过程'],['results','目前进展'],['review','事实与判断'],['novelty','新增信息'],['community','影响'],['limitations','未知与待核实']]:[['main_idea','大概意思'],['motivation','动机'],['problem','要解决的问题'],['method','方法与机制'],['results','结果与证据'],['review','独立评价'],['novelty','创新与贡献'],['community','社区价值'],['limitations','局限与未知']];$('#content').innerHTML=`<button class="back" data-action="back">返回${labels[view]}</button><div><span class="tag ${i.kind}">${kinds[i.kind]}</span><span class="muted">${esc(i.source)}</span><h1 class="detail-title">${esc(i.title)}</h1><div class="topic-tags">${(i.topics||[]).map(t=>(workspace==='research'?`<button class="tag topic-link" data-topic="${esc(t)}">${esc(t)}</button>`:`<span class="tag">${esc(t)}</span>`)).join('')}${provenance(i).map(g=>`<span class="tag origin">${esc(g)}</span>`).join('')}<span class="seen-label">${i.removed?'不感兴趣':i.starred?'已收藏':i.seen_at?'已读':'未读'}</span></div><div class="detail-meta muted">${i.authors.map(a=>`<button data-author="${esc(a.id)}">${esc(a.name)}</button>`).join('')}<span>${fmt(i.published)}</span><span>${esc(coverage[i.coverage])}</span>${i.url?`<a target="_blank" rel="noopener" href="${esc(i.url)}">查看原始来源 ↗</a>`:''}</div></div><div class="actions"><button class="secondary" data-feedback="${i.starred?'neutral':'interested'}" data-id="${i.id}">${i.starred?'★ 已收藏 · 感兴趣':'☆ 收藏 · 感兴趣'}</button><button class="secondary" data-feedback="${i.removed?'neutral':'not_interested'}" data-id="${i.id}">${i.removed?'恢复论文':'不感兴趣'}</button><button class="primary" data-job="${workspace==='research'?'review':'summarize'}" data-id="${i.id}">${summary?'重新生成综合 Review':'生成综合 Review'}</button>${i.external_id.startsWith('arxiv:')?`<button class="secondary" data-job="fulltext" data-id="${i.id}">获取 HTML 正文</button><button class="secondary" data-job="citations" data-id="${i.id}">更新引用关系</button>`:''}<button class="secondary" data-action="edit-body">编辑正文</button></div><div class="notice ${['abstract','feed','metadata'].includes(i.coverage)?'warning':''}">当前分析材料：${esc(coverage[i.coverage])}。${['abstract','feed','metadata'].includes(i.coverage)?'材料不完整，AI 不能据此确认完整实验、创新度或社区影响。':'AI 评价是辅助判断，请结合原文核实。'}</div><div class="detail-grid"><div><section class="section"><h2>${workspace==='research'?'论文综合 Review':'新闻分析'}</h2>${summary?`<p class="subtle">${esc(summary.model)} · ${fmt(summary.generated)}${summary.truncated?' · 长文已截断，仅分析部分正文':''}</p>${sections.map(([k,n],idx)=>`<div class="reading-block"><h3><span class="number">${String(idx+1).padStart(2,'0')}</span>${n}</h3><p>${esc(summary[k])}</p></div>`).join('')}`:`<div class="empty"><h3>准备好材料，再开始阅读</h3><p>${state.settings.ai_available?'点击“生成综合 Review”进行分析。':'在设置中填写 AI 接口地址、模型与独立 API Key。支持 DeepSeek 及其他兼容接口。'}</p><button class="secondary" data-view="settings">配置 AI 接口</button></div>`}</section>${summary?`<section class="section"><h2>可核查的证据</h2>${summary.evidence.map(e=>`<div class="evidence"><b>${esc(e.claim)}</b><p>“${esc(e.quote)}”</p><a href="#paragraph-${e.paragraph}">原文段落 ${e.paragraph}</a></div>`).join('')||'<p class="muted">模型没有提供可验证引文，以上结论仍需人工核查。</p>'}${summary.rejected_evidence?`<p class="muted">已过滤 ${summary.rejected_evidence} 条无法匹配原文的引文。</p>`:''}</section>`:''}<section class="section"><h2>原始材料</h2><div class="original">${i.body.split('\n').filter(x=>x.trim()).map((p,n)=>`<p id="paragraph-${n+1}"><span class="subtle">${n+1}</span> ${esc(p)}</p>`).join('')||'尚无正文'}</div></section></div><aside><section class="section"><h3>精读进度</h3><select id="read-status" aria-label="精读进度">${[['unread','未开始精读'],['reading','精读中'],['read','已完成精读']].map(([k,l])=>`<option value="${k}" ${i.status===k?'selected':''}>${l}</option>`).join('')}</select><p class="muted">${i.citations===null?'尚未获取引用次数':`引用次数：${i.citations}`}<br>${esc(i.citation_source)} ${i.citation_updated?fmt(i.citation_updated):''}</p><div>${i.tags.map(t=>(workspace==='research'?`<button class="tag topic-link" data-topic="${esc(t)}">${esc(t)}</button>`:`<span class="tag">${esc(t)}</span>`)).join('')}</div></section><section class="section"><h3>我的笔记</h3><textarea id="notes" aria-label="我的笔记" placeholder="写下自己的判断…">${esc(i.notes)}</textarea><button class="secondary" id="save-notes">保存笔记</button></section><section class="section">${workspace==='research'?'<h3>与你的论文相似</h3><div id="similar-items">正在计算内容相似度…</div>':''}<h3 style="margin-top:20px">最近任务</h3>${jobHTML()}</section></aside></div>`;if(workspace==='research')loadSimilar(i.id);$('#read-status').onchange=async e=>{await api('/api/update',{id:i.id,status:e.target.value});await reload(false);toast('阅读状态已保存')};$('#save-notes').onclick=async()=>{await api('/api/update',{id:i.id,notes:$('#notes').value});await reload(false);toast('笔记已保存')}}
function modal(title,body){$('#dialog-title').textContent=title;$('#dialog-body').innerHTML=body;$('#dialog').showModal()}
function addModal(){if(workspace==='research')return pdfUploadModal();modal('添加新闻','<div id="import-form"></div>');importForm('manual')}
function importForm(type){document.querySelectorAll('[data-import]').forEach(b=>b.classList.toggle('selected',b.dataset.import===type));const el=$('#import-form');if(type==='pdf'){pdfUploadForm(el);return}if(type==='arxiv'){el.innerHTML=`<form id="import"><div class="field"><label>arXiv ID 或链接</label><input name="value" required placeholder="例如 1706.03762 或 https://arxiv.org/abs/…"></div><p class="muted">先导入标题、作者和摘要。全文和 AI 总结可在论文详情页按需获取。</p><button class="primary">导入论文</button></form>`;$('#import').onsubmit=async e=>{e.preventDefault();await submitJob('/api/arxiv',Object.fromEntries(new FormData(e.target)));$('#dialog').close()}}else if(type==='manual'){el.innerHTML=`<form id="import"><div class="two-col"><div class="field"><label>内容类型</label><select name="kind">${workspace==='research'?'<option value="paper">论文</option>':'<option value="news">新闻</option>'}</select></div><div class="field"><label>发表日期</label><input type="date" name="published"></div></div><div class="field"><label>标题</label><input required name="title"></div><div class="field"><label>原始链接</label><input name="url" type="url"></div><div class="field"><label>作者 / 账号（用逗号分隔）</label><input name="authors"></div><div class="field"><label>标签（用逗号分隔）</label><input name="tags"></div><div class="field"><label>摘要或正文</label><textarea name="body" required></textarea></div><div class="field"><label>材料范围</label><select name="coverage"><option value="manual">手动文本</option><option value="abstract">仅摘要</option><option value="html">完整正文</option></select></div><button class="primary">保存内容</button></form>`;$('#import').onsubmit=async e=>{e.preventDefault();try{const r=await api('/api/items',Object.fromEntries(new FormData(e.target)));$('#dialog').close();await reload(false);openItem(r.id);toast(r.new?'内容已保存':'已更新已有内容')}catch(x){toast(x.message)}}}else{el.innerHTML=`<form id="import">${type==='pdf'?`<div class="field"><label>论文标题</label><input name="title" required></div><div class="field"><label>作者（逗号分隔）</label><input name="authors"></div>`:''}<div class="field"><label>${type==='pdf'?'PDF 文件':'Google Scholar 提醒邮件（.eml）'}</label><input type="file" name="file" accept="${type==='pdf'?'.pdf':'.eml'}" required></div><p class="muted">${type==='pdf'?'支持含文字的 PDF；扫描版需要先 OCR。文件上限 15 MB。':'从邮箱下载提醒邮件后导入。保留邮件正文，并尝试识别其中的 arXiv 论文链接；暂未连接 Gmail 自动读取。'}</p><button class="primary">导入文件</button></form>`;$('#import').onsubmit=async e=>{e.preventDefault();const f=e.target.file.files[0];if(f.size>15000000)return toast('文件超过 15 MB');const reader=new FileReader();reader.onload=async()=>{try{const v=Object.fromEntries(new FormData(e.target));delete v.file;v.data=reader.result.split(',')[1];const r=await api('/api/'+type,v);$('#dialog').close();await reload(false);openItem(r.id);toast('文件已导入')}catch(x){toast(x.message)}};reader.readAsDataURL(f)}}}
async function submitJob(path,v){try{const j=await api(path,v);toast(j.kind+'已开始，可在最近任务查看进度');await reload()}catch(e){toast(e.message)}}
function sourceWebsite(x){return x.type==='hf'?['https://huggingface.co/papers','Hugging Face Daily Papers']:x.type==='alphaxiv'?['https://www.alphaxiv.org/?'+new URLSearchParams({sort:'Trending',...(x.query.trim().toLowerCase()==='all'?{}:{subcategories:JSON.stringify(x.query.split(',').map(t=>t.trim()).filter(Boolean))})}),'alphaXiv · 全领域热点']:['https://arxiv.org','arXiv']}
function collectionSettings(){const s=state.settings;return `<section class="section"><h2>主题与采集</h2><form id="collection-settings-form"><div class="field"><label>推荐兴趣主题</label><input name="interest_topics" value="${esc(s.interest_topics||'')}" placeholder="例如：语音识别、语音增强、音乐生成"></div><p class="subtle">用于采集后的相关性筛选和推荐排序。修改兴趣主题不会自动改变 arXiv 采集范围；分类与查询条件请在下方对应来源中编辑。Hugging Face 与 alphaXiv 热点保持跨领域发现。</p><label class="checkbox"><input type="checkbox" name="auto_refresh" ${s.auto_refresh?'checked':''}>每天自动采集启用的来源</label><div class="field"><label>每日采集时间（北京时间）</label><input type="time" name="daily_time" value="${esc(s.daily_time)}"></div><p class="subtle">本地服务运行时才会自动采集。</p><button class="primary" type="submit">保存主题与采集设置</button><span id="collection-save-result" role="status" aria-live="polite"></span></form></section>`}
function sources(){ $('#content').innerHTML=title(workspace==='research'?'每日信息源':'订阅来源',workspace==='research'?'查看每日论文来自哪些网站，编辑 arXiv 采集分类与查询条件，或管理热点来源。':'新闻来源独立保存。')+`${workspace==='research'?`<p class="muted">采集数量是候选数量；筛选后当天最多新增 ${state.daily?.limit||50} 篇推荐，其中热点最多 ${state.daily?.hot_limit??10} 篇。</p>${collectionSettings()}`:''}<div class="actions"><button class="primary" data-action="source">添加来源</button><button class="secondary" data-action="refresh" ${state.jobs.some(j=>['采集来源','每日采集'].includes(j.kind)&&['queued','running'].includes(j.state))?'disabled':''}>${state.jobs.some(j=>['采集来源','每日采集'].includes(j.kind)&&['queued','running'].includes(j.state))?'采集中…':'立即采集'}</button></div>${state.sources.map(x=>`<section class="section"><h3>${esc(x.name)}</h3>${workspace==='research'?`<p>网站：<a href="${esc(sourceWebsite(x)[0])}" target="_blank" rel="noopener">${esc(sourceWebsite(x)[1])} ↗</a></p>`:''}<p>${x.type==='arxiv'?'arXiv 采集分类与查询条件：':'内容：'}${esc(x.query)}</p><span class="tag">${esc(sourceGroups[x.source_group]||'新闻')}</span><button data-edit-source="${x.id}" class="secondary">编辑来源</button><button data-toggle-source="${x.id}" class="secondary">${x.enabled?'暂停':'启用'}</button><button data-delete-source="${x.id}" class="secondary">移除</button><div class="source-collection-status">${x.last_status==='running'?'<p>正在请求来源…</p>':x.last_status==='done'?`<p>最近采集：${fmtTime(x.refreshed)} · 获取 ${x.last_received} 篇 · 新增候选 ${x.last_added} 篇 · 已有 ${Math.max(0,x.last_received-x.last_added)} 篇</p>`:x.last_status==='error'?`<p>最近尝试：${fmtTime(x.last_attempt)} · 采集失败${x.refreshed?' · 上次成功：'+fmtTime(x.refreshed):''}</p>`:x.refreshed?`<p>上次成功采集：${fmtTime(x.refreshed)} · 旧记录没有获取数量</p>`:'<p>尚未采集</p>'}</div>${x.error?`<p class="notice error">${esc(x.error)}</p>`:''}</section>`).join('')}`;const form=$('#collection-settings-form');if(form)form.onsubmit=async e=>{e.preventDefault();const button=e.target.querySelector('button[type=submit]');button.disabled=true;try{const v=Object.fromEntries(new FormData(e.target));v.auto_refresh=e.target.auto_refresh.checked;state.settings=await api('/api/settings',v);$('#collection-save-result').textContent=' ✓ 已保存';toast('主题与采集设置已保存')}catch(x){$('#collection-save-result').textContent=' '+x.message;toast(x.message)}finally{button.disabled=false}}} 
function sourceModal(id){const existing=state.sources.find(s=>s.id===id);modal(existing?'编辑信息源':'添加订阅来源',`<form id="source-form"><div class="field"><label>来源类型</label><select name="type" id="source-type">${workspace==='research'?'<option value="arxiv">arXiv 分类 / 关键词</option><option value="hf">Hugging Face Daily Papers</option><option value="alphaxiv">alphaXiv 热点论文</option>':'<option value="rss">新闻 RSS / Atom</option>'}</select></div><div class="field"><label>名称</label><input name="name" required placeholder="例如：大语言模型研究"></div><div class="field"><label id="query-label">${workspace==='research'?'arXiv 采集分类与查询条件':'来源地址'}</label><input name="query" id="source-query" required placeholder='cat:cs.CL AND all:"large language model"'></div><div class="field"><label>内容类型</label><select name="kind">${workspace==='research'?'<option value="paper">论文</option>':'<option value="news">新闻</option>'}</select></div>${workspace==='research'?`<div class="field"><label>来源分类</label><select name="source_group">${Object.entries(sourceGroups).map(([k,l])=>`<option value="${k}" ${k==='field'?'selected':''}>${l}</option>`).join('')}</select></div>`:''}<p id="source-help" class="muted">例：cat:cs.LG、cat:cs.CV，或 all:"retrieval augmented generation"。</p><button class="primary">保存来源</button></form>`);$('#source-type').onchange=e=>{const t=e.target.value;$('#query-label').textContent=t==='arxiv'?'arXiv 采集分类与查询条件':'来源查询或地址';$('#source-query').value=t==='hf'?'daily':t==='alphaxiv'?'all':'';$('#source-query').placeholder=t==='rss'?'https://example.com/feed.xml':t==='alphaxiv'?'all':t==='github'?'topic:llm created:>2026-09-01':'cat:cs.CL';$('#source-help').textContent=t==='rss'?'填写公开 RSS / Atom 地址；账号平台没有公开 feed 时可手动导入。':t==='alphaxiv'?'all 表示全领域热点；也可用英文逗号分隔指定主题。不需要登录。':t==='hf'?'社区每日论文列表，作为发现线索，不代表质量评价。':t==='github'?'填写 GitHub 搜索表达式。结果按累计 Stars 排序，不等同于每日 Trending。':'支持 arXiv 查询语法。';$('#source-form [name=kind]').value=workspace==='research'?'paper':'news';if($('#source-form [name=source_group]'))$('#source-form [name=source_group]').value=['hf','alphaxiv'].includes(t)?'hot':'field'};if(workspace==='news'){$('#source-query').placeholder='https://example.com/feed.xml';$('#source-help').textContent='填写新闻网站的公开 RSS / Atom 地址。'};if(existing){for(const key of ['type','name','query','kind','source_group']){const field=$('#source-form [name='+key+']');if(field)field.value=existing[key]}if(existing.type==='arxiv'){$('#query-label').textContent='arXiv 采集分类与查询条件';$('#source-help').textContent='决定从 arXiv 获取哪些候选论文。例如：cat:cs.SD OR cat:eess.AS。采集后再按推荐兴趣主题筛选。'}if(existing.type==='alphaxiv')$('#source-help').textContent='all 表示全领域热点，包含多模态、NLP、大语言模型及其他领域；也可填写英文主题，用逗号分隔。';if(existing.type==='hf')$('#source-help').textContent='Hugging Face Daily Papers，每日论文发现列表。'}$('#query-label').textContent=$('#source-type').value==='arxiv'?'arXiv 采集分类与查询条件':'来源查询或地址';$('#source-form').onsubmit=async e=>{e.preventDefault();try{await api('/api/source',{...Object.fromEntries(new FormData(e.target)),...(existing?{id:existing.id}:{})});$('#dialog').close();await reload();toast('订阅已保存，点击刷新来源开始采集')}catch(x){toast(x.message)}}}
function providerForURL(catalog,url){try{const h=new URL(url).hostname;if(['api.xiaomimimo.com','token-plan-cn.xiaomimimo.com','token-plan-sgp.xiaomimimo.com','token-plan-ams.xiaomimimo.com'].includes(h))return catalog.find(p=>p.id==='mimo');return catalog.find(p=>p.base_url&&new URL(p.base_url).hostname===h)}catch{return null}}
function settings(){const s=state.settings,catalog=s.api_providers||[],provider=providerForURL(catalog,s.base_url)?.id||'custom';$('#content').innerHTML=title('AI 与采集设置','总结服务可以随时替换，知识库持续保留。')+`<form id="settings-form"><section class="section"><h2>AI 总结服务</h2><div class="field"><label for="ai-engine">使用方式</label><select name="ai_engine" id="ai-engine"><option value="api" ${s.ai_engine!=='codex'?'selected':''}>模型 API</option><option value="codex" ${s.ai_engine==='codex'?'selected':''}>本地 Codex（ChatGPT 登录）</option></select></div><div id="codex-config"><p class="muted">${s.codex_installed?'✓ 已检测到本地 Codex':'未检测到本地 Codex，请先安装并登录'}。使用本机 Codex 的 ChatGPT 登录和额度，无需填写 API Key。模型仍在云端运行。</p><div class="two-col"><div class="field"><label for="codex-model">Codex 模型</label><select name="codex_model" id="codex-model">${(s.codex_models||[]).map(m=>`<option value="${esc(m.id)}" ${s.codex_model===m.id?'selected':''}>${esc(m.name)}</option>`).join('')}</select></div><div class="field"><label for="codex-effort">思考强度</label><select name="codex_effort" id="codex-effort"></select></div></div><p class="subtle">建议先用 GPT-6.1 Sol / 高。强度越高通常越慢、额度消耗越多。这里的选择只影响网站的分析任务。</p></div><div id="api-config"><p id="ai-key-status" class="muted">${s.api_key_configured?'✓ 已保存 API Key':'尚未保存 API Key'} · ${esc(s.model)}</p><p class="muted">选择常用模型服务商，或接入其他兼容 API。密钥保存在 macOS 钥匙串，仅由本地后台读取，不返回页面。</p><div class="field"><label for="ai-provider">模型服务</label><select id="ai-provider">${catalog.map(p=>`<option value="${esc(p.id)}" ${provider===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div><p id="provider-hint" class="subtle"></p><div class="two-col"><div class="field"><label for="api-protocol">接口协议</label><select name="api_protocol" id="api-protocol"><option value="auto">自动识别地址</option><option value="chat">OpenAI 兼容 · Chat Completions</option><option value="responses">OpenAI 兼容 · Responses</option><option value="anthropic">Claude / Anthropic · Messages</option></select><small id="protocol-hint" class="subtle"></small></div><div class="field" id="mimo-plan-field" hidden><label for="mimo-plan">MiMo 套餐与区域</label><select id="mimo-plan"><option value="api">按量付费</option><option value="cn">Token Plan · 中国</option><option value="sgp">Token Plan · 新加坡</option><option value="ams">Token Plan · 欧洲</option></select><small class="subtle">套餐使用专属 Key；地址以你的控制台为准。</small></div></div><div class="two-col"><div class="field"><label>API 地址</label><input name="base_url" required value="${esc(s.base_url)}"></div><div class="field model-picker"><div class="model-picker-heading"><label for="api-model-candidates">模型名称</label><button type="button" id="fetch-api-models" class="model-small-button">获取模型列表</button></div><div class="model-picker-row"><select name="model" required id="api-model-candidates"><option value="${esc(s.model)}">${esc(s.model)}</option></select><input id="model-name-editor" hidden maxlength="200" aria-label="编辑模型名称" placeholder="输入模型名称"><button type="button" id="model-edit" class="model-small-button">编辑</button><button type="button" id="model-add" class="model-small-button" aria-label="新增模型">＋</button><button type="button" id="model-delete" class="model-small-button" aria-label="从候选列表删除模型">删除</button></div><small id="api-model-status" class="subtle" role="status"></small></div></div><div class="field"><label for="api-effort">API 思考强度</label><div class="effort-control"><select name="api_effort" id="api-effort"></select><button type="button" class="secondary effort-edit" id="edit-efforts">手动编辑</button><button type="button" class="model-small-button" id="reset-efforts">恢复自动识别</button></div><div id="effort-editor" hidden><p class="subtle">每行是一项候选。左侧填写档位名称，右侧填写服务商规定的请求参数；可添加、修改或删除。</p><div class="effort-editor-head"><span>档位名称</span><span>发送参数（JSON）</span></div><div id="effort-editor-rows"></div><div class="actions"><button type="button" class="secondary" id="add-effort-row">＋ 添加档位</button><button type="button" class="primary" id="apply-effort-rows">应用</button><button type="button" class="secondary" id="cancel-effort-rows">取消</button></div><small id="effort-editor-error" role="alert"></small><p class="subtle">应用后点击“保存 AI 设置”，为当前地址、模型和协议保存。</p></div><small id="api-effort-hint" class="subtle"></small></div><details class="field"><summary>模型兼容设置（可选）</summary><p class="subtle">更换模型时仍可使用统一的思考强度。默认按兼容接口发送；如果服务商使用不同参数，可在这里选择格式或填写映射。</p><label for="api-reasoning-mode">思考参数格式</label><select name="api_reasoning_mode" id="api-reasoning-mode"><option value="auto">自动适配</option><option value="effort">兼容格式 · reasoning_effort</option><option value="reasoning">嵌套格式 · reasoning.effort</option><option value="deepseek">思考开关 + 强度（DeepSeek 格式）</option><option value="custom">自定义各档位参数</option></select><div id="api-custom-mapping"><label for="api-effort-mapping">各档位的参数映射（JSON）</label><textarea name="api_effort_mapping" id="api-effort-mapping" rows="7" maxlength="12000" placeholder='{"none":{"enable_thinking":false},"low":{"enable_thinking":true,"thinking_budget":1024},"high":{"enable_thinking":true,"thinking_budget":8192}}'>${esc(s.api_effort_mapping||'')}</textarea><p class="subtle">填写服务商文档规定的参数。上面的预算仅是格式示例，不代表所有模型都支持。未配置的档位会提示错误。</p></div><p class="subtle">将发送的思考参数：</p><pre id="api-reasoning-preview"></pre></details><div class="field"><label>API Key</label><div class="saved-key-control"><input name="api_key" type="password" autocomplete="new-password" ${s.api_key_configured?'disabled value="••••••••••••••••"':''} placeholder="填写你的总结服务密钥"><button type="button" id="edit-api-key" class="secondary" ${s.api_key_configured?'':'hidden'}>编辑密钥</button></div><small id="saved-key-hint" class="subtle">${s.api_key_configured?'密钥已保存并锁定；点击编辑密钥可更换。':'填写密钥后点击保存。'}</small></div></div><div class="actions ai-config-actions"><button type="submit" class="primary">保存 AI 设置</button><button type="submit" class="secondary" data-test-ai="true">保存并测试连接</button></div><p class="subtle">测试在后台发送一次简短请求，最多等待 3 分钟，不影响其他操作。API 测试使用所选思考强度；Codex 测试使用低思考强度，不改变论文分析设置。</p><div id="ai-test-result" role="status" aria-live="polite">${s.api_test?esc((s.api_test.ok?'✓ ':'✕ ')+s.api_test.message+' · '+fmtTime(s.api_test.checked_at)+(s.api_test.reply?' · 模型回复：'+s.api_test.reply:'')):''}</div><p class="subtle">API 使用独立密钥和额度；本地 Codex 使用 ChatGPT 登录额度。论文采集后自动在后台生成 Review；新闻总结按需点击生成。</p></section><section class="section">${workspace==='research'?`<h2>综合 Review</h2><p class="muted">采集论文后自动在后台生成综合 Review，无需打开论文。先尝试获取全文；缺少全文时明确标为摘要分析。已有 Review 复用，不重复生成。使用上方选择的 AI 服务与模型额度。</p>`:''}${workspace==='research'?`<h2>每日推荐与初审</h2><div class="two-col"><div class="field"><label>每日新增推荐上限（总计）</label><input name="daily_limit" type="number" min="1" max="50" value="${s.daily_limit||50}"></div><div class="field"><label>其中热点推荐上限</label><input name="hot_limit" type="number" min="0" max="10" value="${s.hot_limit??10}"></div></div><p class="muted">以上是筛选后进入每日推荐的数量，不是采集数量。不足上限时不凑数。</p><label class="checkbox"><input type="checkbox" name="auto_screen" ${s.auto_screen?'checked':''}>采集后使用 AI 初审主题与摘要证据</label><p class="muted">AI 服务可用后有效。先排除重复、已处理及材料不足的论文，再分批分析候选；已审查且材料、主题和模型未变化的论文复用结果，减少费用。开启后未通过 AI 初审的论文留在候选库，不进入每日推荐。AI 服务不可用或关闭时，只进行规则初筛。</p>`:''}${workspace==='news'?`<h2>每日采集</h2><label class="checkbox"><input type="checkbox" name="auto_refresh" ${s.auto_refresh?'checked':''}>每天自动刷新启用的来源</label><div class="two-col"><div class="field"><label>每日时间（北京时间）</label><input type="time" name="daily_time" value="${esc(s.daily_time)}"></div><div class="field"><label>每个来源最多获取条数</label><input type="number" min="1" max="50" name="max_items" value="${s.max_items||20}"></div></div><p class="muted">应用后台运行时才会采集。启动后若已过设定时间，会补做当天采集。新内容按来源标识去重。</p>`:''}</section><section class="section"><h2>引用元数据</h2><div class="field"><label>Semantic Scholar API Key（可选）</label><input type="password" name="scholar_key" placeholder="${s.scholar_key_configured?'已有密钥；留空保留':'未配置时尝试公开接口，可能受限流影响'}"></div><p class="muted">文库论文的引用次数每七天自动更新一次，首次入库后检查；引用关系同时核对本地原文。服务运行时执行，失败保留已有数据。</p></section><button class="primary">保存设置</button><button type="button" class="secondary" data-action="export">导出知识库</button><p class="subtle">导出不包含 API Key。密钥保存在 macOS 钥匙串，不写入配置文件。</p><section class="section"><h2>作者联网检索</h2><p class="subtle">程序检索网页，再把资料交给当前模型。DeepSeek、OpenAI、小米、Kimi 等兼容 API 共用此流程。DeepSeek 原生搜索复用官方模型 Key；Brave、Tavily 使用独立搜索 Key。</p><div class="field"><label>搜索来源</label><select name="search_provider">${[['academic','学术索引（Semantic Scholar）'],['deepseek','DeepSeek · 原生全网搜索（复用模型 Key）'],['brave','Brave · 全网搜索'],['tavily','Tavily · 全网搜索']].map(([v,n])=>`<option value="${v}" ${s.search_provider===v?'selected':''}>${n}</option>`).join('')}</select></div><div class="field" id="search-key-field"><label>搜索服务 API Key</label><input type="password" name="search_api_key" autocomplete="new-password" placeholder="${s.search_api_key_configured?'已保存；留空保留，换搜索服务需填写新 Key':'仅 Brave / Tavily 需要；不是模型 Key'}"></div><p id="search-provider-hint" class="subtle"></p><button type="button" class="secondary" id="test-native-search">保存并测试联网搜索</button><div id="search-test-result" role="status" aria-live="polite"></div><p class="subtle">个人主页与履历只保存能核对的原文证据。同名、未收录、请求失败会显示对应状态，不猜测单位。</p></section></form>`;const searchProvider=$('[name=search_provider]');function showSearchProvider(){const native=searchProvider.value==='deepseek',independent=['brave','tavily'].includes(searchProvider.value);$('#search-key-field').hidden=!independent;$('[name=search_api_key]').disabled=!independent;$('#test-native-search').hidden=!native;$('#search-provider-hint').textContent=native?'使用上方已保存的官方 DeepSeek 模型与 Key。每次最多搜索一次，相同查询缓存一天；测试会发出真实请求并消耗额度。更换模型服务商后需重新选择搜索来源。':independent?'填写对应搜索服务的 Key；搜索结果交给当前模型分析。':'仅检索学术索引，不执行全网搜索。'}searchProvider.onchange=showSearchProvider;showSearchProvider();$('#test-native-search').onclick=async()=>{const button=$('#test-native-search');button.disabled=true;try{const form=$('#settings-form'),values=Object.fromEntries(new FormData(form));if(form.auto_screen)values.auto_screen=form.auto_screen.checked;state.settings=await api('/api/settings',values);const job=await api('/api/search-test',{});$('#search-test-result').textContent='正在执行真实联网搜索，可在任务中心查看进度…';const poll=async()=>{try{const next=await api('/api/state'),j=next.jobs.find(x=>x.id===job.id);if(!$('#search-test-result'))return;if(j&&['done','error'].includes(j.state)){button.disabled=false;const r=j.result,u=r?.usage||{};$('#search-test-result').innerHTML=j.state==='error'?'<p class="notice error">'+esc(j.message)+'</p>':'<p class="notice">✓ 已返回真实网页 · '+esc(r.model)+' · 输入 '+(u.input_tokens||0)+' / 输出 '+(u.output_tokens||0)+' Token · 搜索 '+(u.server_tool_use?.web_search_requests||0)+' 次</p><div class="link-list">'+r.sources.map(x=>'<a target="_blank" rel="noopener" href="'+esc(x.url)+'">'+esc(x.title||x.url)+' ↗</a>').join('')+'</div>';return}setTimeout(poll,2000)}catch(x){button.disabled=false;if($('#search-test-result'))$('#search-test-result').textContent=x.message}};poll()}catch(x){$('#search-test-result').textContent=x.message;button.disabled=false}};const keyInput=$('#settings-form [name=api_key]'),editKey=$('#edit-api-key');function lockKey(configured){keyInput.disabled=configured;keyInput.value=configured?'••••••••••••••••':'';editKey.hidden=!configured;editKey.textContent='编辑密钥';$('#saved-key-hint').textContent=configured?'密钥已保存并锁定；点击编辑密钥可更换。':'填写密钥后点击保存。'}const providerSelect=$('#ai-provider'),baseInput=$('#settings-form [name=base_url]'),modelInput=$('#settings-form [name=model]');const protocolInput=$('#api-protocol'),mimoPlan=$('#mimo-plan');protocolInput.value=s.api_protocol||'auto';
function protocolHint(){let path='',host='';try{const u=new URL(baseInput.value);path=u.pathname;host=u.hostname}catch{}const mode=protocolInput.value==='auto'?(path.includes('/anthropic')||path.endsWith('/messages')?'anthropic':host==='api.openai.com'||path.endsWith('/responses')?'responses':'chat'):protocolInput.value;$('#protocol-hint').textContent='当前请求格式：'+({chat:'OpenAI Chat Completions',responses:'OpenAI Responses',anthropic:'Claude / Anthropic Messages'}[mode]);}
function providerHint(){ const p=catalog.find(p=>p.id===providerSelect.value);$('#provider-hint').textContent=p?.hint||'模型候选无需 Key；查询账号模型与实际调用可能需要 Key。';$('#mimo-plan-field').hidden=providerSelect.value!=='mimo';if(providerSelect.value==='mimo'){const match=baseInput.value.match(/token-plan-(cn|sgp|ams)\./);mimoPlan.value=match?match[1]:'api'}protocolHint();}
function syncAddress(){const found=providerForURL(catalog,baseInput.value);providerSelect.value=found?.id||'custom';setModelCandidates(found?.models||[]);providerHint();$('#api-model-status').textContent=found?'公开候选已就绪；未验证账号权限。':'可以获取公开列表，或点击 ＋ 添加模型。';}
function setMimoAddress(){const host=mimoPlan.value==='api'?'api.xiaomimimo.com':'token-plan-'+mimoPlan.value+'.xiaomimimo.com';baseInput.value='https://'+host+(protocolInput.value==='anthropic'?'/anthropic':'/v1');apiEffort.value='default';syncAddress();fillAPIEfforts();}
mimoPlan.onchange=setMimoAddress;protocolInput.onchange=()=>{if(providerSelect.value==='mimo')setMimoAddress();else{protocolHint();apiEffort.value='default';fillAPIEfforts()}};
let modelChoices=[],editingModel=false,oldModel='';
const modelEditor=$('#model-name-editor');
function modelListKey(){return 'knowledge-models:'+workspace+':'+baseInput.value.trim().replace(/\/$/,'')}
function persistModels(){try{localStorage.setItem(modelListKey(),JSON.stringify(modelChoices))}catch{}}
function renderModels(selected){modelInput.innerHTML=modelChoices.length?modelChoices.map(m=>`<option value="${esc(m)}">${esc(m)}</option>`).join(''):'<option value="">请获取列表或添加模型</option>';if(modelChoices.includes(selected))modelInput.value=selected;$('#model-edit').disabled=!modelChoices.length;$('#model-delete').disabled=!modelChoices.length;}
function finishModelEdit(cancel=false){if(!editingModel)return;const value=modelEditor.value.trim();if(!cancel&&!value){modelEditor.focus();return}if(!cancel){if(oldModel)modelChoices=modelChoices.filter(m=>m!==oldModel);modelChoices=[...new Set([...modelChoices,value])];persistModels();renderModels(value);apiEffort.value='default';fillAPIEfforts()}editingModel=false;modelEditor.hidden=true;modelInput.hidden=false;$('#model-edit').textContent='编辑';$('#model-add').hidden=false;$('#model-delete').textContent='删除';$('#model-delete').disabled=!modelChoices.length;$('#model-edit').disabled=!modelChoices.length;}
function setModelCandidates(models,remote=false){finishModelEdit(true);let list=models;try{const stored=JSON.parse(localStorage.getItem(modelListKey()));if(!remote&&Array.isArray(stored))list=stored.filter(m=>typeof m==='string')}catch{}const selected=modelInput.value;modelChoices=[...new Set([...list,...(selected?[selected]:[])])];renderModels(selected);if(remote)persistModels();$('#api-model-status').textContent=remote?`已获取 ${models.length} 个模型`:'选择模型，也可编辑或添加名称';}
function startModelEdit(add){editingModel=true;oldModel=add?'':modelInput.value;modelEditor.value=oldModel;modelInput.hidden=true;modelEditor.hidden=false;$('#model-edit').disabled=false;$('#model-edit').textContent='确定';$('#model-add').hidden=true;$('#model-delete').disabled=false;$('#model-delete').textContent='取消';modelEditor.focus();}
setModelCandidates(catalog.find(p=>p.id===provider)?.models||[]);
modelInput.onchange=()=>{apiEffort.value='default';fillAPIEfforts()};
$('#model-edit').onclick=()=>editingModel?finishModelEdit():startModelEdit(false);
$('#model-add').onclick=()=>startModelEdit(true);
$('#model-delete').onclick=()=>{if(editingModel){finishModelEdit(true);return}modelChoices=modelChoices.filter(m=>m!==modelInput.value);persistModels();renderModels();apiEffort.value='default';fillAPIEfforts();$('#api-model-status').textContent='已从本地候选中移除；不会删除服务商的模型。'};
modelEditor.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();finishModelEdit()}if(e.key==='Escape'){e.preventDefault();finishModelEdit(true)}};
$('#fetch-api-models').onclick=async()=>{const button=$('#fetch-api-models'),base=baseInput.value.trim();button.disabled=true;$('#api-model-status').textContent='正在获取…';try{const result=await api('/api/models',{base_url:base,api_key:keyInput.disabled?'':keyInput.value,api_protocol:protocolInput.value});if(baseInput.value.trim()===base){setModelCandidates(result.models,result.source==='api');fillAPIEfforts(true);if(result.source!=='api')$('#api-model-status').textContent=result.message||'公开预设候选，未验证账号权限。'}}catch(e){if(baseInput.value.trim()===base)$('#api-model-status').textContent=e.message}finally{button.disabled=false}};
baseInput.addEventListener('change',()=>{syncAddress();fillAPIEfforts()});baseInput.addEventListener('input',protocolHint);
const apiEffort=$('#api-effort'),reasoningMode=$('#api-reasoning-mode'),effortMapping=$('#api-effort-mapping');const effortNames={default:'服务商默认',enabled:'开启思考',none:'关闭思考',minimal:'极低 · minimal',low:'低 · low',medium:'中 · medium',high:'高 · high',xhigh:'很高 · xhigh',max:'最高 · max',ultra:'极高 · ultra'};apiEffort.innerHTML=(s.api_efforts||['default','none','minimal','low','medium','high','xhigh','max','ultra']).map(v=>`<option value="${v}">${effortNames[v]||v}</option>`).join('');if(s.api_effort&&![...apiEffort.options].some(o=>o.value===s.api_effort))apiEffort.add(new Option(s.api_effort,s.api_effort));apiEffort.value=s.api_effort||'default';reasoningMode.value=s.api_reasoning_mode||'auto';function effortScope(){return baseInput.value.trim().replace(/\/$/,'')+'|'+modelInput.value+'|'+protocolInput.value}
let lastEffortScope=effortScope();
function addEffortRow(name='',params={}){const row=document.createElement('div');row.className='effort-editor-row';row.innerHTML=`<input aria-label="档位名称" maxlength="40" placeholder="例如 high、extra" value="${esc(name)}"><textarea aria-label="发送参数" rows="2" placeholder='{"reasoning_effort":"high"}'>${esc(JSON.stringify(params))}</textarea><button type="button" class="secondary" aria-label="删除档位">删除</button>`;row.querySelector('button').onclick=()=>row.remove();$('#effort-editor-rows').append(row);}
$('#edit-efforts').onclick=()=>{const rows=$('#effort-editor-rows');rows.innerHTML='';let entries=capabilityData?.parameters||{};if(reasoningMode.value==='custom'){try{entries=JSON.parse(effortMapping.value)}catch{}}Object.entries(entries).filter(([k])=>k!=='default').forEach(([k,v])=>addEffortRow(k,v));if(!rows.children.length)addEffortRow();$('#effort-editor').hidden=false;$('#effort-editor-error').textContent='';};
$('#add-effort-row').onclick=()=>addEffortRow();$('#cancel-effort-rows').onclick=()=>$('#effort-editor').hidden=true;
$('#reset-efforts').onclick=()=>{reasoningMode.value='auto';effortMapping.value='';apiEffort.value='default';$('#effort-editor').hidden=true;fillAPIEfforts(true)};
$('#apply-effort-rows').onclick=async()=>{try{const mapping={};for(const row of $('#effort-editor-rows').children){const name=row.querySelector('input').value.trim();if(!/^[A-Za-z0-9_-]{1,40}$/.test(name)||name==='default')throw Error('档位名称使用字母、数字、下划线或短横线；default 为保留项。');if(Object.hasOwn(mapping,name))throw Error('档位名称不能重复。');const params=JSON.parse(row.querySelector('textarea').value);if(!params||Array.isArray(params)||typeof params!=='object')throw Error('发送参数必须是 JSON 对象。');mapping[name]=params}const raw=JSON.stringify(mapping);await api('/api/model-capabilities',{base_url:baseInput.value,model:modelInput.value,api_protocol:protocolInput.value,api_reasoning_mode:'custom',api_effort_mapping:raw});reasoningMode.value='custom';effortMapping.value=raw;$('#effort-editor').hidden=true;await fillAPIEfforts(true);toast('已应用手动档位，请保存 AI 设置')}catch(e){$('#effort-editor-error').textContent=e.message}};
let capabilityRequest=0,capabilityKey='',capabilityData=null;
function renderCapability(cap){const old=apiEffort.value,allowed=cap.efforts;apiEffort.innerHTML=allowed.map(v=>`<option value="${esc(v)}">${esc(effortNames[v]||v)}</option>`).join('');apiEffort.value=allowed.includes(old)?old:allowed.includes('enabled')&&old&&old!=='default'?'enabled':'default';$('#api-custom-mapping').hidden=reasoningMode.value!=='custom';effortMapping.disabled=reasoningMode.value!=='custom'||$('#ai-engine').value==='codex';$('#api-effort-hint').textContent=cap.note+' 切换模型后自动更新；不影响已有报告。';$('#api-reasoning-preview').textContent=JSON.stringify(cap.parameters[apiEffort.value]||{},null,2);}
async function fillAPIEfforts(force=false){const scope=effortScope();if(scope!==lastEffortScope){lastEffortScope=scope;const saved=state.settings.api_model_overrides?.[scope];reasoningMode.value=saved?.mode||'auto';effortMapping.value=saved?.mapping||'';$('#effort-editor').hidden=true}const v={base_url:baseInput.value.trim(),model:modelInput.value.trim(),api_protocol:protocolInput.value,api_reasoning_mode:reasoningMode.value,api_effort_mapping:effortMapping.value};const key=JSON.stringify(v);if(force!==true&&key===capabilityKey&&capabilityData){++capabilityRequest;renderCapability(capabilityData);return}const seq=++capabilityRequest;$('#api-effort-hint').textContent='正在识别模型支持的思考设置…';try{const cap=await api('/api/model-capabilities',v);if(seq!==capabilityRequest)return;capabilityKey=key;capabilityData=cap;renderCapability(cap)}catch(e){if(seq!==capabilityRequest)return;renderCapability({efforts:['default'],parameters:{default:{}},note:'暂未识别模型能力，使用服务商默认。'});}}
apiEffort.onchange=fillAPIEfforts;reasoningMode.onchange=fillAPIEfforts;effortMapping.addEventListener('input',fillAPIEfforts);fillAPIEfforts();modelInput.addEventListener('input',fillAPIEfforts);baseInput.addEventListener('input',fillAPIEfforts);const engine=$('#ai-engine'),codexModel=$('#codex-model'),effort=$('#codex-effort');function fillEfforts(value){const m=(s.codex_models||[]).find(m=>m.id===codexModel.value);const names={low:'低',medium:'中',high:'高',xhigh:'很高',max:'最高'};effort.innerHTML=(m?.efforts||[]).map(e=>`<option value="${e}" ${e===value?'selected':''}>${names[e]||e}</option>`).join('');if(![...effort.options].some(o=>o.value===value))effort.value=m?.efforts?.includes('high')?'high':m?.efforts?.[0]||''}fillEfforts(s.codex_effort);codexModel.onchange=()=>fillEfforts(effort.value);function showEngine(){const local=engine.value==='codex';$('#codex-config').hidden=!local;$('#api-config').hidden=local;baseInput.disabled=local;protocolInput.disabled=local;modelInput.disabled=local;providerSelect.disabled=local;apiEffort.disabled=local;reasoningMode.disabled=local;effortMapping.disabled=local||reasoningMode.value!=='custom';keyInput.disabled=local||s.api_key_configured;keyInput.required=false;codexModel.disabled=!local;effort.disabled=!local;$('#ai-key-status').textContent=local?'本地 Codex · '+codexModel.value+' · '+effort.value:(s.api_key_configured?'✓ 已保存 API Key':'尚未保存 API Key')+' · '+modelInput.value}engine.onchange=showEngine;showEngine();providerHint();providerSelect.onchange=()=>{const preset=catalog.find(p=>p.id===providerSelect.value);if(preset?.base_url){baseInput.value=preset.base_url;modelInput.innerHTML='';protocolInput.value='auto';reasoningMode.value='auto';apiEffort.value='default'}setModelCandidates(preset?.models||[]);providerHint();fillAPIEfforts();if(baseInput.value.trim().replace(/\/$/,'')!==state.settings.base_url.trim().replace(/\/$/,'')){keyInput.disabled=false;keyInput.value='';keyInput.required=true;editKey.hidden=true;$('#saved-key-hint').textContent='请填写新服务的 API Key；保存前不会更改当前配置。'}else{keyInput.required=false;lockKey(state.settings.api_key_configured)}};editKey.onclick=()=>{if(keyInput.disabled){keyInput.disabled=false;keyInput.value='';editKey.textContent='取消编辑';$('#saved-key-hint').textContent='输入新的密钥后保存；留空保存会保留原密钥。';keyInput.focus()}else lockKey(state.settings.api_key_configured)};$('#settings-form').onsubmit=async e=>{e.preventDefault();if(editingModel){finishModelEdit();if(editingModel)return}const v=Object.fromEntries(new FormData(e.target));if(e.target.auto_refresh)v.auto_refresh=e.target.auto_refresh.checked;if(e.target.auto_review)v.auto_review=e.target.auto_review.checked;if(e.target.auto_screen)v.auto_screen=e.target.auto_screen.checked;const testing=!!e.submitter?.dataset.testAi,buttons=[...e.target.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);try{const saved=await api('/api/settings',v);state.settings=saved;keyInput.required=false;lockKey(saved.api_key_configured);showEngine();$('#ai-key-status').textContent=saved.ai_engine==='codex'?'本地 Codex · '+saved.codex_model+' · '+saved.codex_effort:(saved.api_key_configured?'✓ 已保存 API Key':'尚未保存 API Key')+' · '+saved.model;$('#ai-test-result').textContent='设置已保存。'+(testing?'正在请求模型，验证真实回复…':'点击“保存并测试连接”验证是否可用。');toast('设置已保存');if(testing){const job=await api('/api/ai-test-start',{});state.jobs=state.jobs.filter(j=>j.id!==job.id).concat(job);showAITestProgress();toast('设置已保存，连接测试在后台运行，可以继续使用网站')}}catch(x){$('#ai-test-result').textContent='✕ '+x.message;toast(x.message)}finally{buttons.forEach(b=>b.disabled=false);showAITestProgress()}};showAITestProgress()}
function openAuthor(id){if($('#dialog').open)$('#dialog').close();const from=location.hash.startsWith('#author/')?(history.state?.authorReturn||'#graph'):location.hash||'#graph';selected=null;history.pushState({authorReturn:from,authorView:view,graphMode},'', '#author/'+encodeURIComponent(id));draw();window.scrollTo(0,0)}
function authorSourceText(text){return String(text||'').split(/(https?:\/\/[^\s;；]+)/g).map(part=>/^https?:\/\//.test(part)?`<a href="${esc(part)}" target="_blank" rel="noopener">${esc(part)} ↗</a>`:esc(part)).join('')}
function authorIdentityMarkup(a){
 const names={homepage:'个人 / 机构主页',scholar:'Google Scholar',orcid:'ORCID',s2:'学术索引',email:'署名邮箱'},seen=new Set();
 const links=(a.identity_links||[]).filter(x=>{const key=x.kind+':'+x.value;if(seen.has(key))return false;seen.add(key);return true});
 return links.length?'<div class="author-identity-evidence">'+links.slice(0,8).map(x=>`<div><strong>${esc(names[x.kind]||x.kind)}</strong><p>${esc(x.evidence)}</p><a href="${esc(x.source)}" target="_blank" rel="noopener">查看核实来源 ↗</a></div>`).join('')+'</div>':'';
}
function authorPage(id){
 const a=state.authors.find(x=>x.id===id||x.aliases?.includes(id)),from=history.state?.authorReturn||'#graph';
 const backLabel=from.startsWith('#item/')?'返回论文':from==='#paper'?'返回论文库':from==='#inbox'?'返回每日推荐':'返回关系网络';
 const back=`<button type="button" class="author-back secondary" data-author-back>← ${backLabel}</button>`;
 if(!a){$('#content').innerHTML=back+'<div class="empty"><h2>暂未找到这位作者</h2><p>请返回论文或关系网络重新选择。</p></div>';return}
 const papers=state.items.filter(i=>i.kind==='paper'&&!i.removed&&(i.starred||i.seen_at||i.status==='read')&&i.authors.some(x=>x.id===a.id));
 const signed=(a.paper_affiliations||[]).filter(x=>papers.some(i=>i.title===x.paper));
 let candidates=[];try{candidates=JSON.parse(a.candidates||'[]')}catch{}
 const link=(url,label,primary=false)=>/^https?:\/\//.test(url||'')?`<a class="author-profile-link ${primary?'is-primary':''}" href="${esc(url)}" target="_blank" rel="noopener">${label}<span aria-hidden="true">↗</span></a>`:'';
 const field=(name,label,multiline=false)=>`<div class="field"><label>${label}</label>${multiline?`<textarea name="${name}">${esc(a[name])}</textarea>`:`<input name="${name}" ${['homepage','scholar'].includes(name)?'type="url"':''} value="${esc(a[name])}">`}</div>`;
 $('#crumb').textContent='作者介绍';
 $('#content').innerHTML=`<article class="author-page">${back}<header class="author-profile-header"><div class="author-profile-avatar" aria-hidden="true">${esc(a.name.split(/\s+/).map(t=>t[0]).slice(0,2).join(''))}</div><div><p class="author-kicker">作者介绍</p><h1>${esc(a.name)}</h1><p class="author-institution">${esc(a.affiliation||'当前机构尚未确认')}</p><div class="author-profile-badges"><span>文库中 ${papers.length} 篇论文</span><span>${a.verified?(a.homepage?'身份已核实':'学术索引身份已匹配'):'身份待核实'}</span></div></div></header><div class="author-profile-layout"><div class="author-profile-main"><section class="author-panel"><h2>教育与经历</h2>${a.education?`<div class="author-fact"><h3>教育经历</h3><p>${esc(a.education)}</p></div>`:''}${a.history?`<div class="author-fact"><h3>职业经历</h3><p>${esc(a.history)}</p></div>`:''}${!a.education&&!a.history?'<p class="muted">暂未找到可核实的公开经历。</p>':''}</section>${signed.length?`<section class="author-panel"><h2>论文署名单位</h2><p class="subtle">以发表时的原文为准。</p>${signed.map(x=>`<div class="author-signed-item"><p>${esc(x.name)}</p><small>${esc(x.paper)}</small>${link(x.source,'查看原文')}</div>`).join('')}</section>`:''}<section class="author-panel"><div class="author-section-heading"><h2>我的文库中的论文</h2><span>${papers.length} 篇</span></div>${papers.length?papers.map(i=>`<button type="button" class="author-paper-link" data-item="${i.id}"><span>${esc(i.title)}</span><small>${fmt(i.published)} · ${i.starred?'已收藏':'已读'}</small></button>`).join(''):'<p class="muted">收藏或标为已读后，论文会出现在这里。</p>'}</section></div><aside class="author-profile-aside"><section class="author-panel"><h2>学术主页</h2><div class="author-profile-links">${link(a.homepage,'个人 / 机构主页',true)}${link(a.scholar,'Google Scholar')}${link(a.external,'学术索引档案')}${(a.identity_links||[]).some(x=>x.kind==='orcid')?link('https://orcid.org/'+a.identity_links.find(x=>x.kind==='orcid').value,'ORCID'):''}</div>${!a.homepage&&!a.scholar?'<p class="subtle">暂未确认公开主页。</p>':''}</section><details class="author-panel author-secondary"><summary>资料来源与核实依据</summary>${authorIdentityMarkup(a)}<p class="author-source-text">${authorSourceText(a.identity_evidence||'尚未记录核实依据。')}</p><p class="subtle">学术索引身份匹配不代表履历完整，当前机构可能随时间变化。</p></details><details class="author-panel author-secondary"><summary>管理作者资料</summary><p class="subtle">入库后自动联网补全；可以手动重新检索或更正资料。</p><button class="secondary" data-job="author-lookup" data-id="${esc(id)}" ${papers.length?'':'disabled'}>重新检索资料</button>${!papers.length?'<p class="subtle">请先收藏论文或标为已读。</p>':''}${candidates.length?`<details class="author-secondary"><summary>查看检索候选（${candidates.length}）</summary>${candidates.slice(0,8).map(c=>link(c.url,esc(c.title||c.name||'候选网页'))).join('')}</details>`:''}<details class="author-secondary"><summary>编辑资料</summary><form id="profile-form">${field('homepage','个人 / 机构主页')}${field('scholar','Google Scholar 主页')}${field('affiliation','当前机构')}${field('education','教育经历',true)}${field('history','职业经历',true)}${field('identity_evidence','核实依据',true)}<label class="checkbox"><input type="checkbox" name="verified" ${a.verified?'checked':''}>已核实身份</label><button class="primary">保存资料</button><p id="author-save-result" role="status"></p></form></details></details></aside></div></article>`;
 $('#profile-form').onsubmit=async e=>{e.preventDefault();const button=e.target.querySelector('button[type=submit],button.primary');button.disabled=true;try{await api('/api/profile',{...Object.fromEntries(new FormData(e.target)),id:a.id,verified:e.target.verified.checked});await reload();toast('作者资料已保存')}catch(x){$('#author-save-result').textContent=x.message;button.disabled=false}};
}

function resizeGraphLabels(){const svg=$('#network');if(!svg||svg.classList.contains('network-3d'))return;const scale=svg.getBoundingClientRect().width/1000;const size=Math.max(12,Math.min(40,12/Math.max(.2,scale)));svg.querySelectorAll('.graph-node text').forEach(text=>{text.setAttribute('font-size',size);const circle=text.parentElement.querySelector('circle');text.setAttribute('y',Number(circle.getAttribute('r'))+size+8)})}
window.addEventListener('resize',resizeGraphLabels);
let currentNetwork3D=null;
async function graph(){
 currentNetwork3D?.destroy();
 if(!['papers','authors'].includes(graphMode))graphMode='papers';
 if(location.hash==='#graph')history.replaceState({...history.state,graphMode},'',location.href);
 const mode=graphMode,limit=mode==='authors'?graphLimit:paperGraphLimit;
 $('#content').innerHTML=title('关系网络','从一篇论文、一位作者，探索文库中的联系。')+`<section class="network-explorer"><header class="explorer-header"><div class="tabs"><button data-graph="papers" class="${mode==='papers'?'selected':''}">论文引用</button><button data-graph="authors" class="${mode==='authors'?'selected':''}">作者关系</button></div><label class="explorer-limit">显示上限 <input id="graph-limit" type="number" min="2" max="100" value="${limit}"></label></header><div id="graph-content"><div class="notice">正在读取关系…</div></div></section>`;
 $('#graph-limit').onchange=e=>{const n=Math.max(2,Math.min(100,Number(e.target.value)||limit));if(mode==='authors')graphLimit=n;else paperGraphLimit=n;graph()};
 try{
  const g=await api('/api/graph?mode='+mode+'&limit='+limit);
  if(view!=='graph'||graphMode!==mode||(mode==='authors'?graphLimit:paperGraphLimit)!==limit||selected||location.hash.startsWith('#author/'))return;
  const {nodes,edges}=g;
  if(!nodes.length){$('#graph-content').innerHTML=`<div class="network-empty"><span>◎</span><h2>还没有可展示的${mode==='authors'?'合作':'引用'}关系</h2><p>当前文库尚无已核实的连线。孤立节点已隐藏，新增关系后会自动出现在这里。</p><button data-view="paper">查看我的论文库 ↗</button></div>`;return}
  $('#graph-content').innerHTML=`<div class="explorer-body"><div class="explorer-map"><div class="explorer-search"><input id="network-search" placeholder="查找图中的${mode==='authors'?'作者':'论文'}" aria-label="查找关系节点" autocomplete="off"><div id="network-results" hidden></div></div><div class="network-controls"><button data-network="out" aria-label="缩小">−</button><button data-network="in" aria-label="放大">＋</button><button data-network="reset">复位</button></div><svg id="network" role="img" aria-label="可拖动旋转的三维关系网络"></svg><div class="explorer-map-footer"><span><i></i> ${nodes.length} 个${mode==='authors'?'作者':'论文'} · ${edges.length} 条关系</span><span>3D · 拖动旋转 · Shift 拖动平移 · 滚轮缩放</span></div></div><aside id="network-inspector" class="network-inspector"></aside></div><footer class="explorer-footer">${mode==='authors'?'节点大小表示文库论文数量；连线表示共同署名。灰绿色节点的身份尚待核实。':'箭头由引用论文指向被引用论文；节点大小表示引用数量。'} 已隐藏 ${g.meta?.isolated_nodes||0} 个孤立节点。</footer>`;
  const paperLink=id=>{const item=state.items.find(p=>p.id===id);return item?`<button class="inspector-paper" data-item="${esc(id)}">${esc(item.title)} <span>↗</span></button>`:''};
  const showNode=id=>{
   const n=nodes.find(n=>n.id===id);if(!n)return;
   currentNetwork3D.select(id);
   const related=edges.filter(e=>e.src===id||e.dst===id).map(e=>({node:nodes.find(n=>n.id===(e.src===id?e.dst:e.src)),edge:e})).filter(x=>x.node).sort((a,b)=>(b.edge.weight||1)-(a.edge.weight||1));
   $('#network-inspector').innerHTML=`<div class="inspector-eyebrow">${mode==='authors'?'作者档案':'论文档案'}<button id="network-clear" aria-label="清除选中">×</button></div><h2>${esc(n.name)}</h2><div class="inspector-stats"><span><strong>${mode==='authors'?n.count:related.length}</strong>${mode==='authors'?'篇文库论文':'篇关联论文'}</span><span><strong>${related.length}</strong>${mode==='authors'?'位合作者':'条引用关系'}</span></div>${mode==='authors'?`<p class="inspector-affiliation">${esc(n.affiliation||n.paper_affiliations?.[0]?.name||'单位信息待补充')}</p><span class="inspector-status">${n.verified?'身份已核实':'身份待核实'}</span>`:''}<button class="inspector-open" ${mode==='authors'?'data-author':'data-item'}="${esc(n.id)}">打开${mode==='authors'?'作者主页':'论文详情'} ↗</button><h3>${mode==='authors'?'合作作者':'引用与被引用'}</h3><div class="inspector-related">${related.map(({node,edge})=>`<button data-explore="${esc(node.id)}"><span>${esc(node.name)}</span><small>${mode==='authors'?edge.weight+' 篇':edge.src===id?'引用 →':'← 被引用'}</small></button>`).join('')}</div>${mode==='authors'?'<h3>文库中的论文</h3>'+[...new Set(n.items||[])].map(paperLink).join(''):''}`;
   $('#network-clear').onclick=showOverview;bindExplore();
  };
  const bindExplore=()=>document.querySelectorAll('[data-explore]').forEach(b=>b.onclick=()=>showNode(b.dataset.explore));
  const showOverview=()=>{
   currentNetwork3D.select(null);
   $('#network-inspector').innerHTML=`<div class="inspector-eyebrow">探索文库</div><h2>从一个节点开始</h2><p class="inspector-description">选择图中的节点，查看它的直接联系和相关论文。</p><h3>${mode==='authors'?'文库中最常出现的作者':'连接最多的论文'}</h3><div class="inspector-related">${[...nodes].sort((a,b)=>mode==='authors'?b.count-a.count:edges.filter(e=>e.src===b.id||e.dst===b.id).length-edges.filter(e=>e.src===a.id||e.dst===a.id).length).slice(0,10).map(n=>`<button data-explore="${esc(n.id)}"><span>${esc(n.name)}</span><small>${mode==='authors'?n.count+' 篇':'查看'}</small></button>`).join('')}</div><p class="inspector-footnote">仅显示已读或收藏论文中的关系。</p>`;bindExplore();
  };
  currentNetwork3D=new PaperNetwork3D($('#network'),nodes,edges,mode,showNode,edge=>{showNode(edge.src);$('#network-inspector').insertAdjacentHTML('beforeend',`<div class="inspector-evidence"><h3>这条关系的依据</h3><p>${esc(edge.evidence||(mode==='authors'?'在 '+edge.weight+' 篇文库论文中共同署名':'文库中已核实的引用'))}</p>${(edge.papers||[]).map(paperLink).join('')}</div>`)});
  showOverview();
  document.querySelectorAll('[data-network]').forEach(b=>b.onclick=()=>b.dataset.network==='reset'?currentNetwork3D.reset():currentNetwork3D.zoomBy(b.dataset.network==='in'?1.3:1/1.3));
  $('#network-search').oninput=e=>{const q=e.target.value.trim().toLowerCase(),box=$('#network-results');box.hidden=!q;box.innerHTML=q?nodes.filter(n=>n.name.toLowerCase().includes(q)).slice(0,8).map(n=>`<button data-search-node="${esc(n.id)}">${esc(n.name)}</button>`).join('')||'<p>当前关系图中没有匹配项</p>':'';box.querySelectorAll('button').forEach(b=>b.onclick=()=>{showNode(b.dataset.searchNode);box.hidden=true;e.target.value=''})};
 }catch(e){if($('#graph-content'))$('#graph-content').innerHTML=`<div class="notice error">${esc(e.message)}</div>`}
}

function edgeModal(){const papers=state.items.filter(i=>i.kind==='paper');if(papers.length<2)return toast('至少需要两篇论文');const options=papers.map(i=>`<option value="${i.id}">${esc(i.title)}</option>`).join('');modal('添加已核实引用',`<form id="edge-form"><div class="field"><label>引用者</label><select name="src">${options}</select></div><div class="field"><label>被引用论文</label><select name="dst">${options}</select></div><div class="field"><label>引用依据（参考文献编号、页码等）</label><textarea name="evidence" required placeholder="例如：论文第 12 页，参考文献 [24]"></textarea></div><button class="primary">保存引用关系</button></form>`);$('#edge-form').onsubmit=async e=>{e.preventDefault();try{await api('/api/edge',Object.fromEntries(new FormData(e.target)));$('#dialog').close();await reload();toast('引用关系已保存')}catch(x){toast(x.message)}}}
document.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b)return;try{if(b.dataset.topic){libraryFocus='all';libraryFolder='all';$('#dialog').close();go('paper');topicFilter=b.dataset.topic;draw()}if(b.dataset.editTopic)topicModal(b.dataset.editTopic);if(b.dataset.view){$('#dialog').close();go(b.dataset.view)}if(b.dataset.filter){filter=b.dataset.filter;draw()}if(b.dataset.item){$('#dialog').close();openItem(b.dataset.item)}if(b.dataset.seen){const id=b.dataset.seen;await api('/api/viewed',{id});if(workspace==='research'&&selected===id){selected=null;view='inbox';location.hash='inbox';window.scrollTo(0,0)}await reload();toast('已读，已移入论文库')}if(b.dataset.star){const i=state.items.find(i=>i.id===b.dataset.star);if(workspace==='research'){favoriteFolderModal(i);return}await api('/api/feedback',{id:i.id,value:i.starred?'neutral':'interested'});await reload();toast(i.starred?'已取消收藏，恢复中性反馈':'已收藏，已移出每日推荐')}if(b.dataset.feedback){if(workspace==='research'&&b.dataset.feedback==='interested'){favoriteFolderModal(state.items.find(i=>i.id===b.dataset.id));return}await api('/api/feedback',{id:b.dataset.id,value:b.dataset.feedback});if(b.dataset.feedback==='not_interested'&&selected){selected=null;view='inbox';location.hash='inbox';}await reload();toast(b.dataset.feedback==='not_interested'?'已标记不感兴趣，并移出每日推荐。':b.dataset.feedback==='interested'?'已收藏，已移出每日推荐':'已恢复为中性反馈')}if(b.dataset.author)openAuthor(b.dataset.author);if(b.dataset.import)importForm(b.dataset.import);if(b.dataset.job){if(['account-summary','author-lookup'].includes(b.dataset.job))$('#dialog').close();await submitJob('/api/'+b.dataset.job,{id:b.dataset.id})};if(b.dataset.graph){graphMode=b.dataset.graph;graph()}if(b.dataset.editSource)sourceModal(b.dataset.editSource);if(b.dataset.toggleSource){const s=state.sources.find(s=>s.id===b.dataset.toggleSource);await api('/api/source',{id:s.id,enabled:!s.enabled});await reload()}if(b.dataset.deleteSource){await api('/api/source',{id:b.dataset.deleteSource,delete:true});await reload();toast('订阅来源已移除，收录内容保留')}const a=b.dataset.action;if(a==='report-prompt'){const p=await api('/api/paper-prompt?id='+encodeURIComponent(selected));modal(p.name,`<pre style="white-space:pre-wrap;max-height:65vh;overflow:auto">${esc(p.text)}</pre><p class="subtle">版本：${esc(p.hash.slice(0,12))}</p>`)}if(a==='classify-topics')await submitJob('/api/topic-classify',{});if(a==='add')addModal();if(a==='source')sourceModal();if(a==='hf-source'){await api('/api/source',{name:'Hugging Face · 热点论文',type:'hf',query:'daily',kind:'paper',source_group:'hot'});await reload();toast('热点来源已添加')} if(a==='screen')await submitJob('/api/screen',{});if(a==='refresh')await submitJob('/api/refresh',{});if(a==='back'){selected=null;location.hash=view;draw();window.scrollTo(0,0)}if(a==='edge')edgeModal();if(a==='edit-body'){const i=state.items.find(i=>i.id===selected);modal('编辑分析材料',`<form id="body-form"><div class="field"><label>正文或摘要</label><textarea name="body" style="min-height:300px" required>${esc(i.body)}</textarea></div><div class="field"><label>材料范围</label><select name="coverage">${Object.entries(coverage).map(([k,v])=>`<option value="${k}" ${i.coverage===k?'selected':''}>${v}</option>`).join('')}</select></div><p class="muted">修改原文后会清除旧总结，避免结论和材料不一致。</p><button class="primary">保存材料</button></form>`);$('#body-form').onsubmit=async e=>{e.preventDefault();await api('/api/update',{id:i.id,...Object.fromEntries(new FormData(e.target))});$('#dialog').close();await reload();toast('材料已保存')}}if(a==='export'){const data=await api('/api/export'),blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='knowledge-desk-'+new Date().toISOString().slice(0,10)+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}}catch(x){toast(x.message)}});
$('#add').onclick=addModal;$('#refresh').onclick=()=>submitJob('/api/refresh',{});$('#close-dialog').onclick=()=>$('#dialog').close();
const workspaceViews={research:'inbox',news:'inbox'};
let switchingWorkspace=false,pendingWorkspace=null;
async function switchWorkspace(target,writeHistory=true){if(switchingWorkspace){pendingWorkspace={target,writeHistory};return}if(target===workspace){if(view==='todos')go('inbox');return;}switchingWorkspace=true;workspaceViews[workspace]=view==='todos'?'inbox':view;document.querySelectorAll('[data-workspace]').forEach(b=>b.disabled=true);try{workspace=target;view=workspaceViews[target]||'inbox';selected=null;filter='all';search='';sourceFilter='all';topicFilter='all';authorFilter='all';if($('#dialog').open)$('#dialog').close();if(writeHistory)history.pushState({},'',(target==='news'?'/news':'/research')+'#'+view);workspaceNav();$('#content').innerHTML='<div class="notice">正在打开'+(target==='news'?'新闻工作区':'论文工作区')+'…</div>';await reload()}catch(e){$('#content').innerHTML='<div class="notice error">'+esc(e.message)+'</div>'}finally{switchingWorkspace=false;document.querySelectorAll('[data-workspace]').forEach(b=>b.disabled=false);if(pendingWorkspace){const p=pendingWorkspace;pendingWorkspace=null;await switchWorkspace(p.target,p.writeHistory)}}}
document.querySelectorAll('[data-workspace]').forEach(b=>b.onclick=()=>switchWorkspace(b.dataset.workspace));
async function syncNavigation(){const target=location.pathname==='/news'?'news':'research';if(target!==workspace)await switchWorkspace(target,false);const h=location.hash.slice(1);if(history.state?.graphMode)graphMode=history.state.graphMode;if(workspace==='research'&&h.startsWith('author/')){selected=null;view=history.state?.authorView||'graph';if($('#dialog').open)$('#dialog').close();await reload();return}if(h.startsWith('item/')){const id=h.slice(5);if(selected!==id)await openItem(id)}else{let v=labels[h]?h:'inbox';if(workspace==='news'&&['paper','authors','graph','post','topics','pipeline'].includes(v))v='inbox';if(!selected&&view===v&&!$('#content .author-page'))return;selected=null;view=v;if($('#dialog').open)$('#dialog').close();await reload()}}
window.addEventListener('hashchange',syncNavigation);window.addEventListener('popstate',syncNavigation);
async function loadSimilar(id){try{const entries=await api('/api/similar?id='+id);if(selected!==id||!$('#similar-items'))return;$('#similar-items').innerHTML='<p class="subtle">标题、摘要与标签的相似度；不是引用或质量评分。</p>'+(entries.length?entries.map(p=>`<p><button class="card-title" data-item="${p.id}">${esc(p.title)}</button><br><span class="subtle">内容相似度 ${Math.round(p.score*100)}%</span></p>`).join(''):'<p class="muted">暂无相似内容。</p>')}catch(e){if($('#similar-items'))$('#similar-items').textContent=e.message}}
function showAITestProgress(){if(view!=='settings'||!$('#ai-test-result'))return;const job=[...state.jobs].reverse().find(j=>j.kind==='AI 连接测试');const button=$('[data-test-ai]');if(!job)return;if(job.state==='running'){const elapsed=Math.max(0,Math.floor((Date.now()-Date.parse(job.started))/1000));$('#ai-test-result').textContent=`设置已保存。后台正在测试连接 · 已等待 ${elapsed} 秒 · 最多等待 3 分钟。你可以继续使用网站。`;if(button){button.disabled=true;button.textContent='正在测试…'}}else{const r=job.result;$('#ai-test-result').textContent=(job.state==='done'?'✓ ':'✕ ')+job.message+(r?.reply?' · 模型回复：'+r.reply:'');if(button){button.disabled=false;button.textContent='保存并测试连接'}}}
let knownJobs=new Map();setInterval(async()=>{try{const next=await api('/api/state');if(next.workspace!==workspace)return;const changed=next.jobs.some(j=>knownJobs.get(j.id)!==j.state);for(const j of next.jobs){if(knownJobs.has(j.id)&&knownJobs.get(j.id)!==j.state&&['done','error'].includes(j.state))toast(j.message&&j.message!=='完成'?j.message:j.kind+'完成');knownJobs.set(j.id,j.state)}state=next;showAITestProgress();if(changed&&view!=='todos'&&!$('#dialog').open&&!document.querySelector('textarea:focus,input:focus')&&(!selected||!$('#notes')||$('#notes').value===(state.items.find(i=>i.id===selected)?.notes||'')))draw()}catch{}},2500);
(async()=>{try{await reload(false);workspaceNav();const hash=location.hash.slice(1);if(history.state?.graphMode)graphMode=history.state.graphMode;if(hash.startsWith('item/')){selected=hash.slice(5);if(state.items.some(i=>i.id===selected))await api('/api/opened',{id:selected});await reload(false)}else if(hash.startsWith('author/'))view=history.state?.authorView||'graph';else if(labels[hash])view=hash;if(workspace==='news'&&['paper','authors','graph','post','topics','pipeline'].includes(view))view='inbox';draw()}catch(e){$('#content').innerHTML=`<div class="notice error">无法读取本地后台：${esc(e.message)}</div>`}})();
function associateLabels(){let n=0;document.querySelectorAll('label').forEach(label=>{if(label.control)return;const control=label.parentElement.querySelector('input,select,textarea');if(control){if(!control.id)control.id='field-'+(++n)+'-'+(control.name||'input');label.htmlFor=control.id}})}new MutationObserver(associateLabels).observe(document.body,{childList:true,subtree:true});associateLabels();

if(document.modelContext?.registerTool){try{document.modelContext.registerTool({name:'search_knowledge',title:'搜索知识库',description:'查询当前模块已收录内容，不修改数据。',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:async input=>{await reload(false);return state.items.filter(i=>JSON.stringify([i.title,i.body,i.tags]).toLowerCase().includes(input.query.toLowerCase())).map(i=>({id:i.id,title:i.title,kind:i.kind,url:i.url})).slice(0,30)}})}catch{}}

document.addEventListener('click',e=>{const card=e.target.closest('[data-open-paper]');if(!card||e.target.closest('button,a,input,select,textarea,summary,details')||window.getSelection()?.toString())return;openItem(card.dataset.openPaper)});document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-open-paper]')){e.preventDefault();openItem(e.target.dataset.openPaper)}});

const chatCache=new Map(),chatDrafts=new Map();let chatSending=false,paperChatOpen=false;
function paperChatPanel(i){return `<section class="paper-chat" id="paper-chat" data-chat-paper="${i.id}"><div class="chat-panel-heading"><h2>论文 AI 聊天</h2><button type="button" class="chat-close" data-action="close-paper-chat" aria-label="关闭论文聊天">×</button></div><p class="subtle">复用这篇论文的本地正文和报告，保留近期对话。每次提问会使用当前配置的模型额度。</p><div class="chat-messages" aria-live="polite">${chatMessageHTML(chatCache.get(i.id))}</div><form id="paper-chat-form"><label for="paper-chat-question">你的问题</label><textarea id="paper-chat-question" maxlength="3000" rows="3" placeholder="例如：这个方法与之前的方法有什么区别？">${esc(chatDrafts.get(i.id)||'')}</textarea><div class="chat-controls"><span class="chat-status" role="status"></span><button type="submit" class="primary">发送问题 ↗</button></div></form></section>`}
function chatMessageHTML(data){return data?.messages?.length?data.messages.map(m=>`<article class="chat-message chat-${esc(m.role)}"><strong class="chat-speaker">${m.role==='user'?'你':m.role==='error'?'回复失败':'AI'}</strong><div class="report-markdown">${m.role==='assistant'?reportMarkdown(m.content):esc(m.content).replace(/\n/g,'<br>')}</div>${m.role==='assistant'?`<small>${esc(m.metadata?.model||'')} · ${esc(m.metadata?.reasoning?.effective||'默认思考强度')} · ${Number.isFinite(m.metadata?.usage?.total_tokens)?m.metadata.usage.total_tokens.toLocaleString()+' Tokens':'Token 未返回'}</small>`:''}</article>`).join(''):'<p class="muted">可以询问方法、公式、实验结果，或让 AI 换一种方式解释。</p>'}
async function loadPaperChat(id){try{const data=await api('/api/paper-chat?id='+encodeURIComponent(id));chatCache.set(id,data);if(selected!==id||workspace!=='research')return;const panel=$('.paper-chat');if(!panel||panel.dataset.chatPaper!==id)return;const messages=panel.querySelector('.chat-messages'),signature=JSON.stringify(data.messages||[]),questionKey=JSON.stringify((data.messages||[]).filter(m=>m.role==='user'));if(messages._signature!==signature){const previousTop=messages.scrollTop,newQuestion=messages._questionKey!==questionKey;messages.innerHTML=chatMessageHTML(data);messages._signature=signature;messages._questionKey=questionKey;if(newQuestion)messages._anchorQuestion=true;requestAnimationFrame(()=>{if(!messages.isConnected)return;if(messages._anchorQuestion){const question=[...messages.querySelectorAll('.chat-user')].pop();if(question){const target=messages.scrollTop+question.getBoundingClientRect().top-messages.getBoundingClientRect().top-4;messages.scrollTop=target;if(messages.scrollHeight-messages.clientHeight>=target-2)messages._anchorQuestion=false}}else messages.scrollTop=previousTop})}panel.querySelector('button[type="submit"]').disabled=!!data.pending||chatSending;panel.querySelector('.chat-status').textContent=data.pending?'AI 正在回答，你可以继续阅读论文…':'';}catch(e){if(selected===id&&$('.chat-status'))$('.chat-status').textContent=e.message}}
document.addEventListener('input',e=>{if(e.target.id==='paper-chat-question')chatDrafts.set(selected,e.target.value)});
document.addEventListener('submit',async e=>{if(e.target.id!=='paper-chat-form')return;e.preventDefault();const id=selected,message=$('#paper-chat-question').value.trim();if(!message||chatSending)return;chatSending=true;e.target.querySelector('button').disabled=true;try{await api('/api/paper-chat',{id,message});chatDrafts.delete(id);if(selected===id&&$('#paper-chat-question'))$('#paper-chat-question').value='';}catch(error){toast(error.message)}finally{chatSending=false;await loadPaperChat(id)}});
setInterval(()=>{if(workspace==='research'&&selected&&chatCache.get(selected)?.pending)loadPaperChat(selected)},2500);

document.addEventListener("click",e=>{if(e.target.closest('[data-action="ask-paper-ai"]')){paperChatOpen=true;$(".paper-detail-layout")?.classList.add("chat-open");requestAnimationFrame(()=>{const messages=$(".chat-messages"),question=messages&&[...messages.querySelectorAll(".chat-user")].pop();if(question)messages.scrollTop+=question.getBoundingClientRect().top-messages.getBoundingClientRect().top-4});$("#paper-chat-question")?.focus({preventScroll:true})}if(e.target.closest('[data-action="close-paper-chat"]')){paperChatOpen=false;$(".paper-detail-layout")?.classList.remove("chat-open");$('[data-action="ask-paper-ai"]')?.focus({preventScroll:true})}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&paperChatOpen){paperChatOpen=false;$('.paper-detail-layout')?.classList.remove('chat-open')}});

// Move keyboard focus without changing the hash used by the workspace router.
document.querySelector('.skip-link')?.addEventListener('click', e => {
  e.preventDefault();
  const content = document.querySelector('#content');
  content.focus({preventScroll:true});
  content.scrollIntoView({block:'start'});
});



let taskCenterData={jobs:[],counts:{}},taskCenterFilter='all',taskCenterBusy=false;
const taskNames={running:'处理中',queued:'排队中',error:'失败',done:'已完成'};
function renderTaskCenter(){
 const count=taskCenterData.counts||{},active=(count.running||0)+(count.queued||0);$('#task-center-count').textContent=active?' · '+active+' 进行中':count.error?' · '+count.error+' 失败':'';
 $('#task-center-toggle').classList.toggle('has-errors',!!count.error&&!active);
 document.querySelectorAll('[data-task-filter]').forEach(b=>b.classList.toggle('selected',b.dataset.taskFilter===taskCenterFilter));
 const jobs=taskCenterData.jobs.filter(j=>taskCenterFilter==='all'||taskCenterFilter==='active'&&['running','queued'].includes(j.state)||j.state===taskCenterFilter);
 const list=$('#task-center-list'),scroll=list.scrollTop;
 list.innerHTML=jobs.length?jobs.map(j=>`<article class="global-task task-${esc(j.state)}"><div class="global-task-heading"><strong>${esc(j.kind)}</strong><div class="global-task-controls"><span>${esc(taskNames[j.state]||j.state)}</span>${['done','error'].includes(j.state)?`<button type="button" class="task-dismiss" data-dismiss-task="${esc(j.id)}" data-message-version="${esc(j.message_version)}" aria-label="移除${esc(j.kind)}的任务消息" title="移除此条消息">×</button>`:''}</div></div>${j.title?`<button class="task-paper-link" type="button" data-task-item="${esc(j.item_id)}" data-task-workspace="${esc(j.workspace)}">${esc(j.title)} ↗</button>`:''}<p class="task-meta">${j.workspace==='news'?'News':'Research Paper'} · ${esc(fmtTime(j.updated||j.started))}</p><p class="task-description">${esc(j.message||taskNames[j.state])}</p>${j.retry_at?`<p class="task-meta">预计重试：${esc(fmtTime(j.retry_at))}</p>`:''}</article>`).join(''):'<p class="task-empty">'+(taskCenterFilter==='all'?'还没有后台任务':'当前没有这类任务')+'</p>';
 list.scrollTop=scroll;
}
async function refreshTaskCenter(){if(taskCenterBusy)return;taskCenterBusy=true;try{const r=await fetch('/api/tasks');if(!r.ok)throw Error();taskCenterData=await r.json();renderTaskCenter();$('#task-center-status').textContent='每 4 秒自动更新'}catch{$('#task-center-status').textContent='暂时无法获取任务，稍后自动重试'}finally{taskCenterBusy=false}}
function toggleTaskCenter(open){const panel=$('#task-center-panel');panel.hidden=!open;$('#task-center-toggle').setAttribute('aria-expanded',String(open));if(open)refreshTaskCenter()}
$('#task-center-toggle').onclick=()=>toggleTaskCenter($('#task-center-panel').hidden);
$('#task-center-close').onclick=()=>{toggleTaskCenter(false);$('#task-center-toggle').focus()};
document.addEventListener('click',async e=>{const dismiss=e.target.closest('[data-dismiss-task]');if(dismiss){dismiss.disabled=true;try{await api('/api/tasks/dismiss',{id:dismiss.dataset.dismissTask,version:dismiss.dataset.messageVersion});await refreshTaskCenter()}catch(error){toast(error.message);dismiss.disabled=false}return}const tab=e.target.closest('[data-task-filter]');if(tab){taskCenterFilter=tab.dataset.taskFilter;renderTaskCenter()}const link=e.target.closest('[data-task-item]');if(link){try{if(workspace!==link.dataset.taskWorkspace)await switchWorkspace(link.dataset.taskWorkspace);toggleTaskCenter(false);await openItem(link.dataset.taskItem)}catch(error){toast(error.message)}}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#task-center-panel').hidden)toggleTaskCenter(false)});
refreshTaskCenter();setInterval(refreshTaskCenter,4000);

function folderChooserMarkup(current=''){return `<div class="field"><label for="favorite-folder">收藏文件夹</label><select id="favorite-folder" name="folder_id"><option value="">未分类</option>${(state.folders||[]).map(f=>`<option value="${esc(f.id)}" ${current===f.id?'selected':''}>${esc(f.name)}</option>`).join('')}</select></div><div class="field"><label for="new-favorite-folder">或新建文件夹</label><input id="new-favorite-folder" name="new_folder" maxlength="50" placeholder="例如 ASR、TSE；留空使用上方选择"></div>`}
async function resolveFavoriteFolder(form){const name=form.querySelector('[name="new_folder"]').value.trim();return name?(await api('/api/folders',{name})).id:form.querySelector('[name="folder_id"]').value}
function libraryActionBar(){const folders=state.folders||[],unfiled=state.items.filter(i=>i.kind==='paper'&&i.starred&&!i.removed&&!i.folder_id).length;return `<div class="library-upload-bar"><button type="button" class="primary" data-upload-paper>＋ 添加论文</button><span class="subtle">上传 PDF 或粘贴论文链接，自动收藏并解析</span></div><div class="favorite-folder-bar"><span>收藏文件夹</span><button type="button" data-library-folder="all" class="${libraryFolder==='all'?'selected':''}">全部</button><button type="button" data-library-folder="unfiled" class="${libraryFolder==='unfiled'?'selected':''}">未分类 <small>${unfiled}</small></button>${folders.map(f=>`<button type="button" data-library-folder="${esc(f.id)}" class="${libraryFolder===f.id?'selected':''}">${esc(f.name)} <small>${f.count}</small></button>`).join('')}<button type="button" data-new-favorite-folder>＋ 新建文件夹</button></div>`}
function favoriteFolderBadge(i){if(!i.starred)return '';const f=(state.folders||[]).find(f=>f.id===i.folder_id);return `<span class="favorite-folder-badge">▱ ${esc(f?.name||'未分类')}</span>`}
function favoriteFolderModal(i){if(!i)return;modal(i.starred?'整理收藏':'收藏论文',`<form id="favorite-folder-form"><p class="muted">${esc(i.title)}</p>${folderChooserMarkup(i.folder_id)}<p class="subtle">文件夹由你整理，与论文标签独立。</p><div class="actions"><button class="primary" type="submit">${i.starred?'保存位置':'收藏到此文件夹'}</button>${i.starred?'<button class="secondary" type="button" id="unstar-paper">取消收藏</button>':''}</div><p id="favorite-folder-error" class="muted" role="status"></p></form>`);$('#favorite-folder-form').onsubmit=async e=>{e.preventDefault();const button=e.target.querySelector('button[type="submit"]');button.disabled=true;try{const folder_id=await resolveFavoriteFolder(e.target);await api('/api/feedback',{id:i.id,value:'interested',folder_id});$('#dialog').close();await reload();toast('已收藏，文件夹已保存')}catch(error){$('#favorite-folder-error').textContent=error.message;button.disabled=false}};if($('#unstar-paper'))$('#unstar-paper').onclick=async()=>{try{await api('/api/feedback',{id:i.id,value:'neutral'});$('#dialog').close();await reload();toast('已取消收藏')}catch(error){$('#favorite-folder-error').textContent=error.message}}}
function pdfUploadModal(){modal('添加论文','<div class="tabs" id="paper-import-tabs"><button type="button" data-paper-import="pdf" class="selected">↑ 上传 PDF</button><button type="button" data-paper-import="link">↗ 论文链接</button></div><div id="pdf-upload-container" style="margin-top:20px"></div>');pdfUploadForm($('#pdf-upload-container'))}
function pdfUploadForm(container){container.innerHTML=`<form id="pdf-upload-form"><div class="field"><label for="paper-pdf-file">PDF 文件</label><input id="paper-pdf-file" type="file" name="file" accept="application/pdf,.pdf" required></div><div class="field"><label for="uploaded-paper-title">论文标题（可留空，自动解析）</label><input id="uploaded-paper-title" name="title" maxlength="500"></div>${folderChooserMarkup()}<p class="subtle">上传后默认收藏。正文、作者与单位、总结和 Review 自动解析；支持含文字的 PDF，最大 15 MB，扫描版需先 OCR。</p><button class="primary" type="submit">上传并自动解析</button><p id="pdf-upload-status" role="status" class="muted"></p></form>`;$('#pdf-upload-form').onsubmit=async e=>{e.preventDefault();const form=e.target,file=form.elements.namedItem('file').files[0],button=form.querySelector('button[type="submit"]');if(!file)return;if(file.size>15000000){$('#pdf-upload-status').textContent='文件超过15 MB';return}button.disabled=true;$('#pdf-upload-status').textContent='正在上传并保存 PDF…';try{const folder_id=await resolveFavoriteFolder(form);const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result.split(',')[1]);r.onerror=()=>reject(Error('无法读取文件'));r.readAsDataURL(file)});const result=await api('/api/pdf',{data,filename:file.name,title:form.elements.namedItem('title').value,folder_id});$('#dialog').close();await showImportedLibrary();toast(result.ai_available?'已收藏，后台正在自动解析论文':'已收藏并保存正文；配置模型后会自动继续分析')}catch(error){$('#pdf-upload-status').textContent=error.message;button.disabled=false}}}
document.addEventListener('click',e=>{if(e.target.closest('[data-upload-paper]'))pdfUploadModal();const folder=e.target.closest('[data-library-folder]');if(folder){libraryFocus='all';libraryFolder=folder.dataset.libraryFolder;filter=libraryFolder==='all'?'all':'starred';list()}if(e.target.closest('[data-new-favorite-folder]')){modal('新建收藏文件夹',`<form id="new-folder-form"><div class="field"><label for="new-folder-name">文件夹名称</label><input id="new-folder-name" name="name" maxlength="50" placeholder="例如 ASR、TSE" required></div><button class="primary">创建</button><p id="new-folder-error" role="status" class="muted"></p></form>`);$('#new-folder-form').onsubmit=async event=>{event.preventDefault();try{await api('/api/folders',{name:$('#new-folder-name').value});$('#dialog').close();await reload()}catch(error){$('#new-folder-error').textContent=error.message}}}});

function libraryCompanion(papers){const unread=papers.filter(i=>i.starred&&!i.seen_at&&i.status!=='read'),recent=[...papers].sort((a,b)=>String(b.library_added_at||b.added||'').localeCompare(String(a.library_added_at||a.added||''))).slice(0,3),counts=new Map;for(const i of papers)for(const t of new Set(i.topics||[]))counts.set(t,(counts.get(t)||0)+1);const topics=[...counts].sort((a,b)=>b[1]-a[1]).slice(0,5),folders=(state.folders||[]).filter(f=>f.count>0).sort((a,b)=>b.count-a.count).slice(0,5);return `<aside class="side-panel library-companion"><div class="eyebrow">READING COMPANION</div><h3>文库概览</h3><div class="companion-shortcuts"><button type="button" data-library-shortcut="saved_unread" aria-pressed="${libraryFocus==='saved_unread'}"><span>☆ 收藏待阅读</span><strong>${unread.length}</strong></button><button type="button" data-library-shortcut="recent"><span>最近加入</span><span>查看 ↗</span></button></div>${folders.length?`<section class="companion-section"><h4>收藏文件夹</h4>${folders.map(f=>`<button type="button" data-library-folder="${esc(f.id)}"><span>▱ ${esc(f.name)}</span><small>${f.count} 篇</small></button>`).join('')}</section>`:''}${topics.length?`<section class="companion-section"><h4>常用标签</h4><div class="companion-topic-links">${topics.map(([name,count])=>`<button type="button" data-topic="${esc(name)}">${esc(name)} <small>${count}</small></button>`).join('')}</div></section>`:''}${recent.length?`<section class="companion-section"><h4>最近加入的论文</h4>${recent.map(i=>`<button type="button" class="companion-paper-link" data-item="${i.id}">${esc(i.title)}<small>${fmt(i.library_added_at||i.added)}</small></button>`).join('')}</section>`:`<p class="subtle">上传或收藏论文后，这里会显示你的阅读概览。</p>`}</aside>`}
document.addEventListener('click',e=>{const shortcut=e.target.closest('[data-library-shortcut]');if(!shortcut)return;libraryFocus=shortcut.dataset.libraryShortcut==='saved_unread'?'saved_unread':'all';libraryFolder='all';filter='all';search='';sourceFilter=topicFilter=authorFilter='all';if(shortcut.dataset.libraryShortcut==='recent')librarySort='library_added_at';list()});

document.addEventListener('click',e=>{if(!e.target.closest('[data-author-back]'))return;if(history.state?.authorReturn)history.back();else go('graph')});

async function showImportedLibrary(){selected=null;view='paper';filter='all';libraryFolder='all';libraryFocus='all';search='';sourceFilter=topicFilter=authorFilter='all';librarySort='library_added_at';location.hash='paper';await reload()}
function paperLinkForm(container){container.innerHTML=`<form id="paper-link-form"><div class="field"><label for="paper-link-url">论文链接</label><input type="url" id="paper-link-url" name="url" required placeholder="https://arxiv.org/abs/…"></div>${folderChooserMarkup()}<p class="subtle">支持 arXiv、Hugging Face、alphaXiv 的论文链接，以及公开 PDF 和论文详情页。导入后默认收藏、自动解析；缺少全文时会标明材料范围。</p><button class="primary" type="submit">导入并自动解析</button><p id="paper-link-status" role="status"></p></form>`;$('#paper-link-form').onsubmit=async e=>{e.preventDefault();const form=e.target,button=form.querySelector('button[type=submit]');button.disabled=true;try{const folder_id=await resolveFavoriteFolder(form),job=await api('/api/paper-link',{url:form.url.value.trim(),folder_id});state.jobs=state.jobs.filter(j=>j.id!==job.id).concat(job);knownJobs.set(job.id,job.state);if($('#paper-link-form')===form&&$('#dialog').open)$('#dialog').close();await showImportedLibrary();refreshTaskCenter();toast('导入任务已提交，后台自动读取并分析，可在任务中心查看进度')}catch(x){$('#paper-link-status').textContent=x.message;button.disabled=false}}}
document.addEventListener('click',e=>{const tab=e.target.closest('[data-paper-import]');if(!tab)return;document.querySelectorAll('[data-paper-import]').forEach(b=>b.classList.toggle('selected',b===tab));if(tab.dataset.paperImport==='link')paperLinkForm($('#pdf-upload-container'));else pdfUploadForm($('#pdf-upload-container'))});

document.addEventListener("ui-language-change",()=>{ /* Keep forms, selections and chat drafts intact. */ window.UII18N?.apply(); });

document.addEventListener('click',e=>{const b=e.target.closest('[data-jump-day]');if(!b)return;const section=document.getElementById('papers-day-'+b.dataset.jumpDay);if(section){section.focus({preventScroll:true});section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}});
function paperHeat(i){const h=i.heat;if(!h)return '';const bi=bilingualContent;return `<details class="paper-heat"><summary>${bi('HF 社区热度','HF community heat')} · ${h.score==null?bi('数据不全','Unavailable'):h.score+' / 100'}</summary><p>${bi('点赞','Upvotes')}: ${h.upvotes??'—'} · ${bi('评论','Comments')}: ${h.comments??'—'}</p><p>${bi('采集时间','Snapshot')}: ${esc(h.fetched_at)}</p><p>${bi('本站计算的互动热度，不代表论文质量。','Site-calculated engagement score, not paper quality.')}</p><p>${bi('点赞占80分，评论占20分；采用对数压缩，分别在100赞和20条评论达到各自上限。','Upvotes contribute up to 80 points and comments up to 20, logarithmically scaled and capped at 100 upvotes and 20 comments.')}</p><a href="${esc(h.source_url)}" target="_blank" rel="noopener">Hugging Face ↗</a></details>`}

const paperNoteCache=new Map(),paperNoteDrafts=new Map();let paperSideTab='chat';
function paperSideTools(i){return `<div class="paper-side-tabs" role="group" aria-label="Paper tools"><button type="button" data-side-tab="chat" aria-pressed="${paperSideTab==='chat'}">${bilingualContent('论文 AI 聊天','Paper AI chat')}</button><button type="button" data-side-tab="notes" aria-pressed="${paperSideTab==='notes'}">${bilingualContent('我的笔记','My notes')}</button></div><div data-side-pane="chat" ${paperSideTab==='chat'?'':'hidden'}>${paperChatPanel(i)}</div><section class="paper-notes" data-side-pane="notes" ${paperSideTab==='notes'?'':'hidden'}><div class="chat-panel-heading"><h2>${bilingualContent('我的笔记','My notes')}</h2><button type="button" class="chat-close" data-action="close-paper-chat" aria-label="Close">×</button></div><p>${bilingualContent('笔记随论文保存，收藏后可在论文库继续查看和编辑。','Notes stay with this paper and remain available after saving it to your library.')}</p><form id="paper-note-form" data-paper="${i.id}"><label for="paper-note-text">${bilingualContent('阅读笔记','Reading notes')}</label><textarea id="paper-note-text" maxlength="50000" disabled translate="no"></textarea><div class="note-controls"><span id="paper-note-status" role="status">${bilingualContent('正在加载笔记…','Loading notes…')}</span><button type="submit" class="primary" disabled>${bilingualContent('保存笔记','Save notes')}</button></div></form></section>`}
function switchPaperSide(tab){paperSideTab=tab;document.querySelectorAll('[data-side-pane]').forEach(el=>el.hidden=el.dataset.sidePane!==tab);document.querySelectorAll('[data-side-tab]').forEach(el=>el.setAttribute('aria-pressed',el.dataset.sideTab===tab))}
async function loadPaperNote(id){try{const note=await api('/api/paper-note?id='+encodeURIComponent(id));paperNoteCache.set(id,note);const form=$('#paper-note-form');if(!form||form.dataset.paper!==id)return;const draft=paperNoteDrafts.get(id);form.querySelector('textarea').value=draft??note.content;form.querySelector('textarea').disabled=false;form.querySelector('button').disabled=false;$('#paper-note-status').innerHTML=draft!==undefined?bilingualContent('有未保存的修改','Unsaved changes'):bilingualContent('已加载','Loaded');window.UII18N?.apply()}catch(e){if($('#paper-note-form')?.dataset.paper===id)$('#paper-note-status').textContent=e.message}}
document.addEventListener('click',e=>{const tab=e.target.closest('[data-side-tab]');if(tab)switchPaperSide(tab.dataset.sideTab);if(e.target.closest('[data-note-open]')){paperChatOpen=true;$('.paper-detail-layout')?.classList.add('chat-open');switchPaperSide('notes');$('#paper-note-text')?.focus()}if(e.target.closest('[data-action="ask-paper-ai"]'))switchPaperSide('chat')});
document.addEventListener('input',e=>{if(e.target.id!=='paper-note-text')return;const id=e.target.form.dataset.paper;paperNoteDrafts.set(id,e.target.value);$('#paper-note-status').innerHTML=bilingualContent('有未保存的修改','Unsaved changes');window.UII18N?.apply()});
document.addEventListener('submit',async e=>{if(e.target.id!=='paper-note-form')return;e.preventDefault();const form=e.target,id=form.dataset.paper,content=form.querySelector('textarea').value,button=form.querySelector('button');button.disabled=true;try{const note=await api('/api/paper-note',{id,content,revision:paperNoteCache.get(id).revision});paperNoteCache.set(id,note);if(paperNoteDrafts.get(id)===content)paperNoteDrafts.delete(id);if(form.isConnected)$('#paper-note-status').innerHTML=paperNoteDrafts.has(id)?bilingualContent('有未保存的修改','Unsaved changes'):bilingualContent('笔记已保存','Notes saved')}catch(error){if(form.isConnected)$('#paper-note-status').textContent=error.message}finally{button.disabled=false;window.UII18N?.apply()}});
window.addEventListener('beforeunload',e=>{if(paperNoteDrafts.size){e.preventDefault();e.returnValue=''}});

function collectionPipeline(){
 const bi=bilingualContent,cfg=state.settings,d=state.daily||{},papers=state.items.filter(i=>i.kind==='paper'),positive=papers.filter(i=>i.feedback==='interested'),negative=papers.filter(i=>i.feedback==='not_interested');
 const link=(v,zh,en)=>`<button class="secondary" data-view="${v}">${bi(zh,en)} ↗</button>`;
 const step=(n,zh,en,body,actions='')=>`<section class="flow-step" id="flow-stage-${n}" ${n===1?'':'hidden'}><div class="flow-body"><div class="flow-detail-title"><span class="flow-number">${n}</span><h2>${bi(zh,en)}</h2></div>${body}<div class="actions">${actions}</div></div></section>`;
 const p=(zh,en)=>`<p>${bi(zh,en)}</p>`,value=(zh,en,v)=>`<div class="flow-value"><span>${bi(zh,en)}</span><strong>${esc(v)}</strong></div>`;
 const sources=state.sources.map(x=>`<li><div><strong>${esc(x.name)}</strong> <span class="tag">${bi(x.enabled?'已启用':'已暂停',x.enabled?'Enabled':'Paused')}</span></div><p>${bi('来源类型','Source type')}: ${esc(x.type)} · ${bi('查询或入口','Query or feed')}: <code translate="no">${esc(x.query)}</code></p><p>${bi('上次成功采集','Last successful fetch')}: ${esc(x.refreshed||'—')} · ${bi('获取候选','Candidates received')}: ${x.last_received??'—'} · ${bi('新增候选','New candidates')}: ${x.last_added??'—'}</p><button class="secondary" data-edit-source="${esc(x.id)}">${bi('修改这个来源','Edit this source')}</button></li>`).join('');
 $('#content').innerHTML=`<div class="collection-flow"><div class="flow-header"><div class="eyebrow">YOUR READING PIPELINE</div><h1>${bi('收集与推荐流程','Collection and recommendation flow')}</h1>${p('从找到论文，到成为你的知识。点击流程中的一步，查看规则与设置。','From discovering papers to building your knowledge. Select a step to inspect its rules and settings.')}<div class="actions"><button class="secondary" data-collection-history>${bi('采集流水','Collection ledger')}</button><button class="secondary" data-delivery-history>${bi('查看每日推送记录','View daily delivery history')}</button>${link('inbox','查看每日推荐','View recommendations')}</div></div><div class="flow-summary">${value('自动采集','Auto collection',cfg.auto_refresh?cfg.daily_time+' · UTC+8':'OFF')}${value('启用来源','Active sources',state.sources.filter(x=>x.enabled).length)}${value('今天新增','Added today',d.today?.total||0)}${value('今日推荐上限','Daily limit',cfg.daily_limit)}</div><div class="flow-map" aria-label="Collection stages">${[['采集来源','Sources','从哪里找','Where to look'],['候选检查','Eligibility','哪些能入选','What qualifies'],['主题初审','Screening','与你是否相关','What is relevant'],['兴趣排序','Ranking','哪些优先看','What comes first'],['每日推荐','Daily feed','每天推送多少','How many per day'],['阅读入库','Your library','保存知识与笔记','Keep knowledge & notes']].map((x,k)=>`<button type="button" data-flow-stage="${k+1}" aria-pressed="${k===0}"><span class="flow-node-number">0${k+1}</span><strong>${bi(x[0],x[1])}</strong><small>${bi(x[2],x[3])}</small></button>`).join('')}</div>
 ${step(1,'按计划采集来源','Fetch configured sources',p('arXiv 分类与检索式决定抓取范围；Hugging Face、alphaXiv 提供跨领域热点候选。只有启用的来源参加自动采集。','arXiv categories and queries define the retrieval scope. Hugging Face and alphaXiv supply cross-field trending candidates. Only enabled sources participate in automatic collection.')+`<div class="flow-values">${value('自动采集','Automatic collection',cfg.auto_refresh?'ON':'OFF')}${value('每日时间（北京时间）','Daily time (Beijing)',cfg.daily_time||'—')}${value('热点来源候选上限','Trending source candidate limit',cfg.max_items)}</div>`+p('本机服务运行时执行；关机或休眠时不能持续采集。采集数量是候选数量，不是最终推送数量。','Runs while the local service is active; shutdown or sleep prevents continuous collection. The fetched count is a candidate count, not the final recommendation count.')+`<details class="flow-source-details"><summary>${bi('查看来源与查询条件','Inspect sources and queries')} · ${state.sources.length}</summary><ul class="flow-sources">${sources||bi('尚未配置来源','No sources configured')}</ul></details>`,link('sources','修改来源与采集时间','Edit sources and schedule'))}
 ${step(2,'增量发现与全历史去重','Incremental discovery and historical deduplication',p('arXiv 按上次成功采集时间增量查询，并回溯14天补查延迟公开的论文；首次查询最近7天。回溯命中不等于新增：与所有历史候选按论文标识、链接和规范化标题去重，不只比较论文库。','arXiv queries incrementally from the last successful collection, with a 14-day overlap for delayed availability; the first query covers 7 days. Overlap hits are not new additions: paper identifiers, URLs and normalized titles are checked against all historical candidates, not just the library.')+p('arXiv 新发现论文不再因提交时间超过7天而被筛除。热点新候选保留7天时效限制；与历史记录重复时，只更新来源和热度，不重复推送，也不覆盖精读。','Newly discovered arXiv papers are no longer excluded simply because submission was over 7 days ago. New trending candidates retain a 7-day freshness limit. Historical duplicates only update sources and heat, without another delivery or overwriting reviews.')+p('每日流水记录每次发现的论文及新增或重复结果。已收藏、已读、不感兴趣的论文不再新增推荐；已推送的未处理论文保留原日期。关机后的补采依据上次成功进度，失败不会推进进度。','The daily ledger records each discovery and its new or duplicate outcome. Saved, read and dismissed papers are not newly recommended; unhandled recommendations retain their original date. Catch-up resumes from the last successful collection; failures do not advance progress.'),`<button class="secondary" data-collection-history>${bi('查看采集流水','View collection ledger')}</button>`)}
 ${step(3,'先读摘要，判断是否推荐','Screen the abstract for relevance',`<div class="flow-value"><span>${bi('你设置的关注主题','Your configured interests')}</span><p translate="no">${esc(cfg.interest_topics||'—')}</p></div>`+value('AI 摘要初审','AI abstract screening',cfg.auto_screen&&cfg.ai_available?'ON':'OFF')+p('读什么：这一步不会先下载每篇 PDF。新候选通常使用来源提供的标题和摘要；AI 实际收到的是标题和现有文本的前2500个字符。如果已经有全文，也只取这个片段，不代表读完全文。','What is read: this step does not first download every PDF. New candidates normally use the source title and abstract. AI receives the title and the first 2,500 characters of the available text. If full text already exists, only that excerpt is sent—not the entire paper.')+p('怎么判断：AI 根据研究问题、任务和方法与关注主题的关系，判断是否值得推荐，不只是匹配同一个关键词。它还参考最多12篇收藏论文和12篇不感兴趣论文的标题；这些历史样例没有附带全文。','How it decides: AI estimates relevance from the research problem, task and method, rather than requiring an exact keyword match. It also sees titles of up to 12 saved and 12 dismissed papers; those examples do not include full texts.')+p('得到什么：AI 给出相关性、摘要中的证据线索和推荐理由。只有建议推荐且相关性≥0.60、证据分≥0.45才通过；其余暂不进入每日推荐，但候选记录仍保留。热点允许跨领域探索。','Result: AI returns relevance, evidence signals in the abstract and a recommendation reason. A paper passes only when AI recommends it, relevance is at least 0.60 and evidence is at least 0.45. Other candidates remain recorded but are withheld from the daily feed. Trending papers allow cross-field discovery.')+p('判断的边界：摘要通常能说明论文研究什么，但可能省略关键细节，也可能被截断，因此初审可能误判；这不是全文质量审核。关闭 AI 初审或未配置可用模型时，才改用关键词及方法、实验线索规则；AI 请求失败不会伪装成已完成初审。','Limitations: abstracts usually identify the topic but can omit key details or be truncated, so screening can be wrong. This is not a full-paper quality review. With AI screening disabled or no configured model, keyword and method/experiment rules are used instead. A failed AI request is not treated as completed screening.')+p('关注主题影响筛选，不改变采集范围。想改变从哪里找论文，请修改来源查询。','Interests affect screening, not retrieval scope. Edit source queries to change where papers are found.'),link('sources','修改关注主题','Edit interests')+link('settings','修改初审与模型设置','Edit screening and model settings'))}
 ${step(4,'通过初审后，决定哪些优先看','Rank eligible papers for reading',`<div class="flow-values">${value('收藏反馈记录','Saved feedback records',positive.length)}${value('不感兴趣反馈记录','Dismissed feedback records',negative.length)}</div>`+p('读什么：排序不会再次下载或逐篇阅读 PDF。程序使用已有的主题标签、作者信息，以及标题、标签和现有文本前6000个字符；新候选的文本通常仍是摘要。','What is read: ranking does not download or reread each PDF. It uses existing topic labels, authors, titles, tags and the first 6,000 characters of available text. For new candidates, that text is normally still the abstract.')+p('怎么比较：收藏的论文提供正向信号。与它们主题相近、作者相同或文本用词相近的候选会提高排序分；这里的文本相似度是词语统计，不是 AI 再读一遍全文。作者身份尚未确认时，作者信号减半。','How it compares: saved papers supply positive signals. Candidates with related topics, matching authors or similar vocabulary receive a ranking boost. Text similarity here is statistical word overlap, not another AI full-text reading. Unconfirmed author identities receive half the author weight.')+p('不感兴趣如何生效：降低相同任务方向的权重，并限制负向文本比较在相同任务内；不会仅因为你不喜欢音乐应用，就直接给它用到的所有方法或作者扣分。标为已读不等于喜欢。','How dismissal works: it reduces task-topic weights and restricts negative text comparisons to shared tasks. Disliking a music application does not directly penalize every method or author it uses. Marking read is not a positive preference vote.')+p('得到什么：兴趣分与初审分一起决定推荐顺序，再由第五步按每日配额选入。兴趣排序本身不删除候选，也不能确认你一定喜欢它；标签、作者或摘要不准确时，排序也可能不准。','Result: preference and screening scores determine the order, then step 5 applies daily quotas. Ranking itself does not delete candidates or establish that you will like them. Inaccurate labels, author identities or abstracts can produce inaccurate rankings.')+`<details class="flow-source-details"><summary>${bi('评分细节与全文处理时机','Scoring details and when full text is read')}</summary>`+p('兴趣分由主题60%、作者25%、文本相似度15%组成；AI 模式的推荐分为相关性×0.7＋证据分×0.3＋兴趣分×0.2。HF 热度只展示社区关注度，当前不加入推荐排序。','Preference combines topics (60%), authors (25%) and text similarity (15%). With AI screening, the recommendation score is relevance × 0.7 + evidence × 0.3 + preference × 0.2. HF heat displays community attention and does not currently affect ranking.')+p('入选推荐后，才进入正文获取和精读流程；材料获取成功时基于全文生成报告。后续全文阅读建议也可能让论文暂缓展示。已有初审不会仅因兴趣反馈变化而全部重新调用模型。','After admission, source retrieval and close reading begin. Reports use full text when retrieval succeeds. A later full-paper reading recommendation may hold a paper back. Feedback changes do not automatically rerun every previous AI screening.')+`</details>`,link('paper','查看文库与反馈','View library and feedback')+link('topics','查看任务与方法标签','View task and method tags'))}
 ${step(5,'按配额进入每日推荐','Admit papers to daily recommendations',`<div class="flow-values">${value('每日新增上限','Daily admission limit',cfg.daily_limit)}${value('其中热点上限','Trending subset limit',cfg.hot_limit)}${value('今天实际新增','Actually added today',d.today?.total||0)}${value('今天待处理','Unhandled today',d.today?.remaining||0)}</div>`+p('初审合格后按推荐分排序，热点上限包含在总上限内。数量是上限，不为凑数降低要求。此前未处理论文不占今天新增配额。','Eligible candidates are ranked by recommendation score. The trending quota is part of the overall quota. Limits are ceilings, not targets; earlier unhandled papers do not consume today’s admission quota.')+p('完整阅读建议若为中高置信度的“不值得”或“非常不值得”，会暂缓展示。每天是否采集成功、是否有新增，可查看每日推送记录。','A full-paper reading recommendation of not worthwhile or strongly not worthwhile at medium/high confidence holds the paper back. Delivery history distinguishes successful collection from zero additions.'),link('settings','修改推荐数量上限','Edit recommendation limits'))}
 ${step(6,'阅读、笔记与论文库','Read, take notes, and build your library',p('推荐论文进入后台正文、首页作者单位和中英文精读处理。收藏或标为已读后进入论文库，并触发作者档案补全；引用关系只在文库范围维护，按每周计划更新。','Recommended papers enter background processing for source text, first-page affiliations, and bilingual close reading. Saving or marking read adds them to the library and triggers author-profile enrichment. Citation relationships are maintained within the library on a weekly schedule.')+p('笔记与论文绑定，重新生成精读不会覆盖笔记。任务中心显示各处理阶段的进行中、完成和失败状态。','Notes stay attached to the paper and are not overwritten by regenerated reports. The task center shows processing, completion, and failure states.'),link('paper','打开论文库','Open library'))}</div>`;
}

document.addEventListener('click',e=>{const b=e.target.closest('[data-flow-stage]');if(!b)return;document.querySelectorAll('[data-flow-stage]').forEach(x=>x.setAttribute('aria-pressed',x===b));document.querySelectorAll('.flow-step').forEach(x=>x.hidden=x.id!=='flow-stage-'+b.dataset.flowStage)});

async function collectionHistory(day){
 const bi=(zh,en)=>bilingualContent(zh,en,false);
 const d=await api('/api/collection-history'+(day?'?date='+encodeURIComponent(day):''));
 modal('采集流水',`<label>${bi('采集日期','Collection date')} <input type="date" id="collection-ledger-date" value="${esc(d.date)}"></label><p>${bi('新增','New')}: ${d.new} · ${bi('重复','Duplicates')}: ${d.duplicate}</p><p class="subtle">${bi('流水从本次功能启用后记录；旧论文已加入去重索引，历史逐日明细不作推测。筛选与推荐状态显示当前结果。','The ledger starts with this feature. Existing papers are included in deduplication, but past daily events are not invented. Screening and recommendation statuses reflect current results.')}</p>${d.runs.map(r=>`<p>${esc(r.source_name)} · ${fmtTime(r.started)} · ${r.state==='done'?bi('完成','Completed'):r.state==='error'?bi('失败','Failed'):bi('处理中','In progress')}${r.window_start?`<br><small>${bi('查询区间','Query window')}: ${fmtTime(r.window_start)} → ${fmtTime(r.window_end)}</small>`:''}${r.error?`<br>${esc(r.error)}`:''}</p>`).join('')}<ul class="collection-ledger">${d.events.map(r=>`<li><strong translate="no">${esc(r.title)}</strong><p>${esc(r.source_name)} · ${fmtTime(r.found)} · ${r.outcome==='new'?bi('新增候选','New candidate'):bi('历史重复：已跳过','Historical duplicate: skipped')}</p><small>${r.recommended_date?bi('已推荐','Recommended')+' · '+esc(r.recommended_date):r.removed?bi('不感兴趣','Not interested'):r.starred?bi('已收藏','Saved'):r.seen_at?bi('已读','Read'):r.decision?esc(r.decision):bi('尚未推荐','Not yet recommended')}</small>${(r.screening_reason||r.eligibility_reason)?`<details><summary>${bi('初审依据（原始记录）','Screening evidence (original record)')}</summary><p translate="no">${esc(r.screening_reason||r.eligibility_reason)}</p></details>`:''}</li>`).join('')}</ul>${!d.events.length?bi('当天尚无采集明细','No collection events for this day'):''}`);
 document.querySelector('#collection-ledger-date').onchange=e=>collectionHistory(e.target.value);
}
document.addEventListener('click',e=>{if(e.target.closest('[data-collection-history]'))collectionHistory()});

function researchDirections(snapshot=state.research_directions){
 const bi=(zh,en)=>bilingualContent(zh,en,false),payload=snapshot?.payload,rows=payload?.directions||[];
 const busy=state.jobs?.some(j=>j.kind==='更新研究方向'&&['queued','running'].includes(j.state));
 return `<section class="research-radar"><div class="radar-heading"><div><h2>${bi('近期研究方向','Research directions')}</h2><p>${bi('近30天样本 · 开放发现 · 点击查看依据','30-day sample · Open-topic discovery · View evidence')}</p></div><div class="actions"><button class="secondary" data-radar-scroll="-1" aria-label="Previous direction">←</button><button class="secondary" data-radar-scroll="1" aria-label="Next direction">→</button><button class="secondary" data-radar-history>${bi('历史记录','History')}</button><button class="secondary" data-radar-refresh ${busy?'disabled':''}>${busy?bi('正在更新','Updating'):bi('更新方向','Refresh')}</button></div></div>${snapshot?.created?`<p class="subtle radar-updated">${bi('更新于','Updated')} ${fmtTime(snapshot.created)}</p>`:''}${snapshot?.status?.state==='running'?`<p role="status">${bi('正在获取资料，继续展示上一版。','Fetching evidence; the previous edition remains available.')}</p>`:''}${['error','partial'].includes(snapshot?.status?.state)?`<p class="subtle">${bi('部分外部资料暂不可用；本版可能使用缓存资料。','Some external sources are unavailable; this edition may include cached evidence.')}</p>`:''}<div class="radar-track">${rows.map((r,k)=>`<button type="button" class="radar-card" data-radar-topic="${esc(r.id)}"><h3>${bi(r.name_zh,r.name_en)}</h3><div class="radar-count"><strong>${r.count}</strong> ${(snapshot?.payload?.method==='open-topic-evidence-v2'?bi('篇支持样本','supporting papers'):bi('篇相关论文','related papers'))}</div><small>${bi('近7天','Last 7 days')}: ${r.recent} · ${bi('此前7天','Previous 7 days')}: ${r.prior}</small></button>`).join('')||`<p class="empty">${bi('尚无方向快照。点击“更新方向”获取近30天的资料。','No snapshot yet. Refresh to gather evidence from the past 30 days.')}</p>`}</div></section>`;
}
let radarHistorySnapshots=[];
function radarDetail(topic,snapshot){
 const bi=(zh,en)=>bilingualContent(zh,en,false),r=topic;
 modal('研究方向',`<h2>${bi(r.name_zh,r.name_en)}</h2><p>${bi(r.about_zh,r.about_en)}</p><p>${bi('近30天发现','Observed over 30 days')} ${r.count} ${(snapshot?.payload?.method==='open-topic-evidence-v2'?bi('篇支持样本','supporting papers'):bi('篇相关论文','related papers'))} · ${bi('近7天','Last 7 days')} ${r.recent} · ${bi('此前7天','Previous 7 days')} ${r.prior}</p><p class="subtle">${bi('已采集样本','Collected sample')}: ${r.local} · ${bi('外部检索样本','External sample')}: ${r.external} · ${bi('两者可重叠，总数已去重。','Samples may overlap; the total is deduplicated.')}</p><h3>${bi('近期在研究什么：代表论文','Recent work: representative papers')}</h3><ul class="radar-evidence">${r.sources.map(x=>`<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" translate="no">${esc(x.title)} ↗</a><small>${x.quote?`<blockquote translate="no">${esc(x.quote)}</blockquote>`:''}${esc(x.published?.slice(0,10)||'')} · ${x.origins.includes('local')?bi('已采集','Collected'):bi('外部发现','External discovery')}</small></li>`).join('')}</ul><details><summary>${bi('资料范围与排序说明','Coverage and ranking')}</summary><p>${snapshot.payload.method==='open-topic-evidence-v2'?bi('模型从近期标题与摘要中归纳方向，不受固定类别限制。每个方向至少有2篇论文和可回查的原文摘录；自动检查引用存在，不等于确认所有归纳都正确。篇数仅统计本次样本中验证通过的支持论文，不代表全行业总量。','The model derives directions from recent titles and abstracts without a fixed category list. Each direction requires at least two papers and traceable quotations. Checking that quotations exist does not establish that every interpretation is correct. Counts cover validated supporting papers in this sample, not industry totals.'):bi('这是旧版固定分类快照，保留用于历史回看。','This is a legacy fixed-category snapshot retained for historical reference.')}</p><p>${bi('外部资料每天刷新，覆盖HF公开列表和arXiv多个宽分类。模型每天最多执行一次，最多分析120篇按日期和来源分散选取的论文片段；会消耗所选模型额度。证据不足或失败时保留上一版，因此仍可能漏掉样本外的新方向。','External evidence refreshes daily from HF and broad arXiv categories. The model runs at most once daily on up to 120 excerpts sampled across dates and sources, using your configured model quota. Insufficient evidence or failure retains the previous edition; directions outside the sample may still be missed.')}</p></details>`);
}
document.addEventListener('click',async e=>{
 const bi=(zh,en)=>bilingualContent(zh,en,false);
 const scroll=e.target.closest('[data-radar-scroll]');if(scroll){const track=document.querySelector('.radar-track');track?.scrollBy({left:Number(scroll.dataset.radarScroll)*274,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 if(e.target.closest('[data-radar-refresh]')){await api('/api/research-directions/refresh',{});toast('已开始更新研究方向');state=await api('/api/state');draw();}
 if(e.target.closest('[data-radar-history]')){const h=await api('/api/research-directions?history=1');radarHistorySnapshots=h.snapshots;modal('研究方向历史',`<div class="radar-history">${h.snapshots.map(s=>`<details><summary>${fmtTime(s.created)} · ${s.payload.directions.length} ${bi('个方向','directions')}</summary>${s.payload.directions.map(r=>`<button class="secondary" data-radar-old="${s.id}" data-radar-old-topic="${esc(r.id)}">${bi(r.name_zh,r.name_en)} · ${r.count}</button>`).join('')}</details>`).join('')||bi('暂无历史记录','No history yet')}</div>`);}
 const current=e.target.closest('[data-radar-topic]');if(current){const s=state.research_directions;radarDetail(s.payload.directions.find(r=>r.id===current.dataset.radarTopic),s);}
 const old=e.target.closest('[data-radar-old]');if(old){const s=radarHistorySnapshots.find(x=>x.id===Number(old.dataset.radarOld));radarDetail(s.payload.directions.find(r=>r.id===old.dataset.radarOldTopic),s);}
});
