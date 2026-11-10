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
