'use strict';

window.DEMO_NAV_GROUPS = [
  {
    id: 'overview',
    label: '概览',
    items: [
      { path: '/app', label: '首页概览', icon: 'gauge' },
    ],
  },
  {
    id: 'ai',
    label: '多 Agent 协作',
    items: [
      { path: '/app/ai/workbench', label: 'Agent–CRM 工作台', icon: 'robot', badge: 'Ontology' },
      { path: '/app/ai/followups', label: '跟进流程', icon: 'flow' },
      { path: '/app/ai/memory', label: '客户记忆与规则', icon: 'brain', badgeKey: 'pendingMemories' },
      { path: '/app/ai/evals', label: '本体论与评测基准', icon: 'scales' },
    ],
  },
  {
    id: 'service',
    label: '客户服务',
    items: [
      { path: '/app/inbox', label: '会话收件箱', icon: 'inbox', badgeKey: 'unreadInbox' },
      { path: '/app/radar', label: '风险雷达', icon: 'radar', badgeKey: 'radarCount' },
      { path: '/app/agenda', label: '日程预约', icon: 'calendar' },
      { path: '/app/templates', label: '快速回复', icon: 'file' },
    ],
  },
  {
    id: 'sales',
    label: '销售日常',
    items: [
      { path: '/app/kanban', label: '销售漏斗', icon: 'kanban' },
      { path: '/app/contacts', label: '联系人', icon: 'users' },
      { path: '/app/tasks', label: '跟进任务', icon: 'tasks', badgeKey: 'openTasks' },
    ],
  },
  {
    id: 'system',
    label: '分析与设置',
    items: [
      { path: '/app/metrics', label: '指标分析', icon: 'chart' },
      { path: '/app/settings', label: '工作区设置', icon: 'settings' },
    ],
  },
];

window.DEMO_STAGES = [
  { id: 'new', name: '新客户' },
  { id: 'contacted', name: '已联系' },
  { id: 'proposal', name: '方案沟通' },
  { id: 'won', name: '已成交' },
];

window.createInitialDemoState = function createInitialDemoState() {
  return {
    theme: 'light',
    sidebarCollapsed: false,
    activeConvId: 'conv-1',
    inboxFilter: 'all',
    inboxSearch: '',
    composerMode: 'reply',
    workbenchAgent: '跨境商机诊断 Agent',
    workbenchMode: 'controlled',
    outboundPaused: false,
    activeScenarioId: 'ontology-stalled',
    workbenchRuns: [],
    contacts: [
      {
        id: 'c-1',
        name: 'Marcus Weber',
        company: 'Nordwind Handels GmbH（德国）',
        email: 'marcus.weber@example.test',
        phone: '+49 152-0013-8001',
        source: '阿里巴巴国际站询盘',
        tags: ['重点', '智能家居'],
        memories: [
          { id: 'm-1', text: '仅接受 T/T 30% 定金 / 70% 见提单副本付款，拒绝 L/C 即期以外的其他结算方式', status: 'confirmed', source: '会话提取 · 2026-11-16' },
          { id: 'm-2', text: '目标市场为欧盟，全部 SKU 必须随附 CE 与 RoHS 认证文件，预算上限 ¥15,000（首批试单）', status: 'confirmed', source: '人工确认 · 2026-11-17' },
          { id: 'm-3', text: '希望本周五前收到含 FOB 宁波报价的形式发票（PI）与海运时效说明', status: 'candidate', source: '待审核候选记忆 · 来自收件箱' },
        ],
      },
      {
        id: 'c-2',
        name: 'Aisha Rahman',
        company: 'GulfBridge Trading（阿联酋）',
        email: 'aisha.rahman@example.test',
        phone: '+971 50-0013-8002',
        source: '官网英文站询盘',
        tags: ['3C 配件'],
        memories: [
          { id: 'm-4', text: '迪拜清关需要提供阿拉伯语产品标签与 HS 编码预归类证明，随货文件必须一致', status: 'confirmed', source: '人工确认 · 2026-11-15' },
        ],
      },
      {
        id: 'c-3',
        name: 'Sophie Laurent',
        company: 'Atelier Francé（法国）',
        email: 'sophie.laurent@example.test',
        phone: '+33 6 0013 8003',
        source: '广交会名片跟进',
        tags: ['重点', 'OEM 定制'],
        memories: [
          { id: 'm-5', text: '合同必须采用 INCOTERMS 2020 的 FCA 条款，尾款按打样确认后 30 天支付', status: 'confirmed', source: '会话提取 · 2026-11-14' },
          { id: 'm-6', text: '首单前需要先通过客户指定的第三方社会责任验厂（SMETA 4-Pillar）', status: 'candidate', source: '待审核候选记忆 · 来自跟进纪要' },
        ],
      },
      {
        id: 'c-4',
        name: 'Daniel Cruz',
        company: 'AndesImport S.A.C.（秘鲁）',
        email: 'daniel.cruz@example.test',
        phone: '+51 98-0013-8004',
        source: 'LinkedIn 开发信回复',
        tags: ['重点', '年度框架'],
        memories: [
          { id: 'm-7', text: '利马清关经常因 HS 归类争议滞港，年度框架必须写明退换货责任与滞港费用分担条款', status: 'confirmed', source: '人工确认 · 2026-11-12' },
        ],
      },
      {
        id: 'c-5',
        name: 'Emily Chen',
        company: 'Pacific Depot Inc.（美国）',
        email: 'emily.chen@example.test',
        phone: '+1 408-0013-8005',
        source: '老客户复购',
        tags: ['已签约'],
        memories: [
          { id: 'm-8', text: '已签约年度框架协议（DDP 洛杉矶），计划 Q1 追加户外品类 3 个 SKU 并沿用现有关税预缴账户', status: 'confirmed', source: '合同归档 · 2026-11-10' },
        ],
      },
    ],
    leads: [
      { id: 'l-1', title: 'Marcus Weber — 智能家居 EU 首批试单', stage: 'new', valueCents: 1280000, contactId: 'c-1', tags: ['待跟进'], staleHours: 4, owner: '演示账号' },
      { id: 'l-2', title: 'Aisha Rahman — 3C 配件季度补货询盘', stage: 'contacted', valueCents: 760000, contactId: 'c-2', tags: ['待跟进'], staleHours: 18, owner: '演示账号' },
      { id: 'l-3', title: 'Sophie Laurent — 美妆工具 OEM 定制', stage: 'proposal', valueCents: 2450000, contactId: 'c-3', tags: ['重点客户'], staleHours: 52, owner: '演示账号' },
      { id: 'l-4', title: 'Daniel Cruz — 年度框架协议', stage: 'proposal', valueCents: 5200000, contactId: 'c-4', tags: ['重点客户'], staleHours: 76, owner: '演示账号' },
      { id: 'l-5', title: 'Emily Chen — Q1 复购订单', stage: 'won', valueCents: 980000, contactId: 'c-5', tags: ['已成交'], staleHours: 0, owner: '演示账号' },
    ],
    tasks: [
      { id: 't-1', title: '回访 Marcus Weber：确认 EU 首批试单条款', dueLabel: '已逾期 2 小时', priority: 'urgent', status: 'pending', contactId: 'c-1', leadId: 'l-1' },
      { id: 't-2', title: '复核 Sophie Laurent 的 OEM 打样方案', dueLabel: '3 小时后到期', priority: 'high', status: 'in_progress', contactId: 'c-3', leadId: 'l-3' },
      { id: 't-3', title: '跟进 Daniel Cruz 年度框架协议', dueLabel: '明天 18:00', priority: 'medium', status: 'pending', contactId: 'c-4', leadId: 'l-4' },
      { id: 't-4', title: '整理 Aisha Rahman 的清关标签要求记录', dueLabel: '昨天已完成', priority: 'low', status: 'done', contactId: 'c-2', leadId: 'l-2' },
    ],
    conversations: [
      {
        id: 'conv-1',
        contactId: 'c-1',
        leadId: 'l-1',
        channel: 'WhatsApp',
        status: 'human',
        unread: 1,
        time: '16:22',
        preview: '演示买家：我想和真人业务员沟通，请不要让机器人继续回复。',
        messages: [
          { id: 'msg-1', type: 'inbound', sender: 'Marcus Weber', text: '你好，我们准备为德国市场下首批智能家居试单，预算大概 1.2 万到 1.5 万人民币之间，想了解交期和认证要求。', time: '16:15' },
          { id: 'msg-2', type: 'outbound', sender: 'AI 跨境客服 Agent', text: '您好 Marcus！智能家居品类出口欧盟需随附 CE 与 RoHS 认证文件，常规生产交期 3–4 周加上海运约 32 天。请问您希望本周五前收到含 FOB 宁波报价的形式发票（PI）吗？', time: '16:16', badge: '引用知识库 · 认证与交期规范 v2' },
          { id: 'msg-3', type: 'inbound', sender: 'Marcus Weber', text: '我想和真人业务员沟通，请不要让机器人继续回复。另外我们只接受 T/T 30% 定金、70% 见提单副本付款。', time: '16:22' },
          { id: 'msg-4', type: 'handoff', text: '触发人工接管护栏：买家明确要求人工沟通，已自动静默 AI 回复并同步提取买家记忆候选。', time: '16:22' },
          { id: 'msg-5', type: 'note', sender: '系统记忆提示', text: '检测到买家约束：「仅接受 T/T 30/70 付款」「要求人工沟通」。已加入客户记忆并阻塞自动外发。', time: '16:22' },
        ],
      },
      {
        id: 'conv-2',
        contactId: 'c-3',
        leadId: 'l-3',
        channel: 'WhatsApp',
        status: 'ai',
        unread: 0,
        time: '14:05',
        preview: '好的，麻烦把验厂安排和 FCA 条款合同草案一并发我，我同步给采购合规团队。',
        messages: [
          { id: 'msg-21', type: 'inbound', sender: 'Sophie Laurent', text: 'OEM 定制的方向没问题，但首单前我们需要通过第三方社会责任验厂，合同也要用 FCA 条款。', time: '13:58' },
          { id: 'msg-22', type: 'outbound', sender: 'AI 跨境销售 Agent', text: '收到 Sophie，考虑到验厂排期与 INCOTERMS 2020 FCA 条款，我这边先为您整理验厂安排与 FCA 条款合同草案。', time: '14:00', badge: '读取已确认记忆 · OEM 打样与贸易条款' },
          { id: 'msg-23', type: 'inbound', sender: 'Sophie Laurent', text: '好的，麻烦把验厂安排和 FCA 条款合同草案一并发我，我同步给采购合规团队。', time: '14:05' },
        ],
      },
      {
        id: 'conv-3',
        contactId: 'c-4',
        leadId: 'l-4',
        channel: 'WhatsApp',
        status: 'human',
        unread: 2,
        time: '昨天',
        preview: '利马这边清关经常卡在 HS 归类争议上，框架协议里必须写清滞港费用谁承担？',
        messages: [
          { id: 'msg-31', type: 'inbound', sender: 'Daniel Cruz', text: '年度框架协议的报价我们内部初审过了，但利马清关经常卡在 HS 归类争议上，框架协议里必须写清退换货责任和滞港费用怎么分担？', time: '昨天 17:40' },
          { id: 'msg-32', type: 'note', sender: 'Agent 诊断建议', text: '该商机金额 ¥52,000 且停滞超过 72 小时，建议附带滞港费用分担条款清单 + HS 预归类服务说明进行人工回访。', time: '昨天 17:42' },
        ],
      },
      {
        id: 'conv-4',
        contactId: 'c-2',
        leadId: 'l-2',
        channel: 'WhatsApp',
        status: 'ai',
        unread: 0,
        time: '11-16',
        preview: '阿拉伯语标签的印刷样品和 HS 预归类证明我已经转给清关行了。',
        messages: [
          { id: 'msg-41', type: 'inbound', sender: 'Aisha Rahman', text: '阿拉伯语标签的印刷样品和 HS 预归类证明我已经转给清关行了，周四给你反馈。', time: '11-16 11:20' },
          { id: 'msg-42', type: 'outbound', sender: 'AI 跨境客服 Agent', text: '太好了 Aisha！已为您登记周四跟进提醒，如清关文件有联调问题随时联系我们。', time: '11-16 11:21' },
        ],
      },
    ],
    templates: [
      { id: 'tpl-1', title: '跨境试单报价 PI 与交期（FOB 宁波）', category: '售前报价', content: '您好，本批次试单报价为 FOB 宁波条款，含 CE/RoHS 认证文件随附，生产交期 3–4 周 + 海运约 32 天，首批试单预算区间 ¥12,000–¥15,000。' },
      { id: 'tpl-2', title: '认证与清关合规文件清单', category: '跨境合规', content: '随信附上 CE/RoHS 认证证书、阿拉伯语标签模板与 HS 编码预归类证明，方便贵司清关行与合规团队审阅。' },
      { id: 'tpl-3', title: '人工接管致意', category: '客服转接', content: '您好，我是专属外贸客户经理，接下来的沟通由我直接为您跟进处理，请问贵司时区下午方便视频会议吗？' },
    ],
    agenda: [
      { id: 'ag-1', title: 'Marcus Weber · EU 首批试单视频会议（德国时区窗口）', time: '今天 14:30 - 15:00', owner: '演示账号', channel: 'Zoom（遵循买家时差窗口偏好）', status: '已预约' },
      { id: 'ag-2', title: 'Sophie Laurent · OEM 打样与验厂排期确认', time: '明天 10:00 - 10:45', owner: '演示账号', channel: 'Zoom', status: '待确认' },
      { id: 'ag-3', title: 'Daniel Cruz · 年度框架滞港条款评审', time: '周五 15:00 - 16:00', owner: '演示账号', channel: '线上演示', status: '已预约' },
    ],
    orgRules: [
      { id: 'rule-1', title: '入站询盘不等于外发同意', body: '海外买家首次入站询盘或表达转人工意愿时，禁止自动触发营销外发或 AI Agent 连续追问，必须经过人工审批或明确同意边界。', source: '系统内置规则 v4', status: 'active' },
      { id: 'rule-2', title: '严格遵循买家时差与联系窗口约束', body: '若买家记忆中存在明确联系时段限制（如「仅柏林时间 9:00–17:00」），所有跨时区跟进排期提案不得落在禁区时段内。', source: 'PR #29 记忆闭环', status: 'active' },
      { id: 'rule-3', title: '业务口径以本体论语义层为准', body: '统计高价值停滞询盘、转化率或回访优先级前，必须先调用 ontology_check_answerable 校验口径可回答性，禁止模型臆造 SQL。', source: 'PR #38 本体论规范', status: 'active' },
    ],
  };
};

window.DEMO_SCENARIOS = [
  {
    id: 'ontology-stalled',
    title: '本体论查询：核对高价值停滞询盘并生成跟进方案',
    prompt: '基于业务本体论核对高价值停滞询盘与买家记忆，生成可执行跟进方案（先校验口径再读取）。',
    agent: '跨境商机诊断 Agent',
    steps: [
      {
        name: '1. ontology_search_terms',
        status: 'ok',
        detail: { query: '高价值停滞询盘', matchedTerms: ['deal.stalled_high_value', 'deal.value_cents', 'conversation.last_inbound_at'] },
      },
      {
        name: '2. ontology_check_answerable',
        status: 'full',
        detail: { ontologyVersion: '1.0.0', answerability: 'full', role: 'ontology_reader (read-only)', visibility: 'org_scoped_rls' },
      },
      {
        name: '3. ontology_query (只读语义执行)',
        status: 'ok',
        detail: { template: 'stalled_deals_with_memory_v1', rowCount: 2, rowLimit: 50, rows: ['Daniel Cruz — 年度框架协议 (¥52,000, 停滞 76h)', 'Sophie Laurent — 美妆工具 OEM 定制 (¥24,500, 停滞 52h)'] },
      },
    ],
    evidence: {
      status: 'full',
      ontologyVersion: '1.0.0',
      scope: '演示工作区 (0dae91cc)',
      visibility: '全量可见询盘漏斗 · 行列隔离角色 ontology_reader',
      relations: 'crm_leads → contacts → customer_memories',
      sources: 'crm_leads, crm_stages, org_memory_entries',
      template: 'stalled_deals_with_memory_v1 · 2 条（上限 50 条）',
    },
    reply: '已完成语义核验与只读查询，发现 2 笔高价值停滞询盘：\n1. **Daniel Cruz — 年度框架协议（¥52,000，停滞 76 小时）**：买家关注利马清关 HS 归类争议下的滞港费用分担条款。\n2. **Sophie Laurent — 美妆工具 OEM 定制（¥24,500，停滞 52 小时）**：待补充验厂安排与 FCA 条款合同草案以推进首单。\n\n已为您生成可撤销的跟进任务提案，等待审批后写入 CRM。',
    proposal: {
      id: 'prop-ontology-1',
      title: '创建 2 条高优先级跟进任务并标记合规附件准备',
      summary: '为「Daniel Cruz — 年度框架协议」生成滞港费用分担条款清单回访任务；为「Sophie Laurent — 美妆工具 OEM 定制」生成验厂安排发送任务（不直接外发消息）。',
      actionType: 'create_tasks_batch',
      tasksToAdd: [
        { title: '发送滞港费用分担条款清单给 Daniel Cruz', dueLabel: '今天 17:30', priority: 'urgent', contactId: 'c-4', leadId: 'l-4' },
      ],
    },
  },
  {
    id: 'memory-boundary',
    title: '客户记忆闭环：准备 Marcus Weber 回访建议（含约束冲突检查）',
    prompt: '查看 Marcus Weber 的买家记忆与最近会话，起草一份不触犯付款与时差偏好的回访计划。',
    agent: '跨境记忆整理 Agent',
    steps: [
      {
        name: '1. memory_retrieve (客户记忆读取)',
        status: 'ok',
        detail: { contact: 'Marcus Weber', confirmedCount: 2, candidateCount: 1, constraints: ['仅接受 T/T 30/70 付款', '要求人工沟通', '首批试单预算上限 ¥15,000'] },
      },
      {
        name: '2. ontology_describe_outcome (验收边界检查)',
        status: 'ok',
        detail: { inboundIsConsent: false, outboundAllowed: false, reason: '买家在会话中要求人工沟通，禁止自动外发' },
      },
    ],
    evidence: {
      status: 'partial',
      ontologyVersion: '1.0.0',
      scope: '联系人 Marcus Weber (c-1)',
      visibility: '已确认记忆 2 条 · 待审候选 1 条',
      relations: 'contacts → conversations → customer_memories',
      sources: 'customer_memories, conversations',
      template: 'contact_memory_context_v1 · 3 条（上限 20 条）',
    },
    reply: '根据 Marcus Weber 的**已确认买家记忆**：\n- 付款约束：**仅接受 T/T 30% 定金 / 70% 见提单副本**，且**要求人工沟通**；\n- 预算约束：**首批试单上限 ¥15,000**（当前询盘 ¥12,800 在区间内）。\n\n同时发现 1 条待审核候选记忆：「希望本周五前收到含 FOB 宁波报价的形式发票（PI）」。建议由人工客户经理在今天 14:30 的预约视频会议中确认 PI 条款细节。',
    proposal: {
      id: 'prop-memory-1',
      title: '确认候选记忆并安排 14:30 人工回访任务',
      summary: '将「本周五前提供 FOB 宁波报价 PI」转为已确认记忆，并保持自动外发静默状态。',
      actionType: 'confirm_memory',
      contactId: 'c-1',
      memoryId: 'm-3',
    },
  },
];
