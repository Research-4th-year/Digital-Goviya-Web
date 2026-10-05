// All website content lives here. Edit text, links, file names and photos in this one file.

const BASE =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
export const asset = (path) => `${BASE}${path.replace(/^\//, '')}`;

export const IMG = {
  logo: asset('assets/images/logo.png'),
  splash: asset('assets/images/app-splash.png'),
  welcome: asset('assets/images/app-welcome.png'),
  modules: asset('assets/images/app-modules.png'),
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'scope', label: 'Project Scope' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

/* ------------------------------- HOME ------------------------------- */
export const SITE = {
  title:
    "AI Driven Privacy Preserving Digital Ecosystem for Modernizing Sri Lanka's Paddy Supply Chain",
  intro:
    "An AI-driven, privacy-preserving digital ecosystem for Sri Lanka's paddy supply chain, combining a farming digital twin, explainable price forecasting, blockchain-secured warehouse coordination, and a farmer-miller marketplace.",
};

export const COMPONENTS = [
  {
    id: 'forecast',
    short: 'Price Forecasting',
    name: 'AI Driven Paddy Price Forecasting',
    blurb: 'XGBoost forecasts with causal explanations and AI Powered Explanations.',
  },
  {
    id: 'dashboard',
    short: 'Digital Twin',
    name: 'IOT Based Digital Dashboard for Paddy Farming',
    blurb: 'Yield prediction, crop health analysis, and RAG-based advisory for farmers.',
  },
  {
    id: 'market',
    short: 'Marketplace',
    name: 'AI Powered Farmer Miller Marketplace',
    blurb: 'Federated learning and LLM-based negotiation for fair, private farmer-miller trading.',
  },
  {
    id: 'warehouse',
    short: 'Warehouse Coordination',
    name: 'Secure, Disaster Aware Warehouse Coordination',
    blurb:
      'Blockchain, decentralized identity, and zero-knowledge proofs for trusted, disaster-aware redistribution.',
  },
];

export const APP_SCREENS = [
  { img: 'splash', title: 'Splash screen', text: 'Loads the latest market prices as the app opens.' },
  { img: 'welcome', title: 'Welcome', text: 'Pick English or Sinhala. You can change it later in Settings.' },
  {
    img: 'modules',
    title: 'Modules',
    text: 'Warehouse management, digital farming, marketplace, and paddy price forecasting in one place.',
  },
];

/* --------------------------- PROJECT SCOPE --------------------------- */
export const GAP = {
  statement:
    "Sri Lanka's paddy sector lacks a single, integrated digital system that connects farming, pricing, storage, and trading.",
  existing: [
    'Rule-based advice or isolated yield predictions',
    'Short-term statistical price forecasts (ARIMA/SARIMA) with no explanation of why prices move',
    'Manual and spreadsheet-based warehouse reporting',
    'Marketplaces that show prices but offer no privacy protection or negotiation support',
  ],
  noPriorWork: [
    'XGBoost-based forecasting with causal reasoning + AI Explanations',
    'Digital twins, Vision Transformers, RAG, and GNNs for farm-level decision support',
    'Federated learning and LLM-driven negotiation for a privacy-preserving farmer-miller marketplace',
    'Blockchain, decentralized identity, and zero-knowledge proofs for verifiable, disaster-aware warehouse coordination',
  ],
};

export const PROBLEM = {
  text:
    "Sri Lanka's paddy supply chain is fragmented. Farmers lack localized guidance, price forecasts are short-term and unexplained, warehouse monitoring relies on manual reporting, and marketplaces offer no privacy or negotiation support. This causes post-harvest losses, price volatility, and unfair market power.",
  effects: ['Post-harvest losses', 'Price volatility', 'Unfair market power'],
};

export const OBJECTIVES = [
  {
    id: 'forecast',
    label: 'Component 1',
    name: 'AI-Driven Paddy Price Forecasting',
    novelty:
      'First Sri Lanka-specific system combining long-range forecasting, causal ML to explain price changes, and AI Powered Human Readable Explanations.',
    main: 'Develop an explainable long-range paddy price forecasting framework for Sri Lanka.',
    subs: [
      'Collect and preprocess price.',
      'Implement XGBoost models and benchmark against Transformer and LSTM.',
      'Apply causal analysis to identify and explain key price drivers.',
      'Integrate forecasting, predictions and causal reasoning into one framework and evaluate it.',
    ],
  },
  {
    id: 'dashboard',
    label: 'Component 2',
    name: 'IOT Based Digital Dashboard for Paddy Farming',
    novelty:
      'First Sri Lanka-specific digital twin combining Temporal Fusion Transformers, Vision Transformers, RAG, and GNNs for farm-level decision support.',
    main:
      'Develop an intelligent digital twin that enables real-time yield prediction, crop health monitoring, and data-driven farmer advice.',
    subs: [
      'Build a multimodal dataset (imagery, soil, weather, yield) and preprocess it.',
      'Develop a Temporal Fusion Transformer for yield prediction and benchmark against LSTM and XGBoost.',
      'Design a Vision Transformer for crop health, pest, and disease detection.',
      'Build a RAG advisory system from agricultural manuals and fertilizer guidelines.',
      'Model inter-farm water networks and pest spread using GNNs.',
      'Develop a farmer interface with local language support.',
    ],
  },
  {
    id: 'market',
    label: 'Component 3',
    name: 'AI-Powered Farmer-Miller Marketplace',
    novelty:
      'First use of federated learning in a farmer-miller marketplace, with identity-preserving matching, a RAG-based assistant, and LLM-driven automated negotiation.',
    main:
      'Design a privacy-preserving AI marketplace that enables fair and intelligent price negotiation between farmers and millers.',
    subs: [
      'Analyze limitations of existing farmer-miller marketplaces.',
      'Design privacy-preserving data sharing using federated learning.',
      'Develop a price prediction model from historical data.',
      'Integrate a RAG-based LLM assistant for market and selling guidance.',
      'Implement secure matching based on price, quantity, and location.',
      'Simulate an LLM-based negotiation framework and evaluate performance, fairness, and privacy.',
    ],
  },
  {
    id: 'warehouse',
    label: 'Component 4',
    name: 'Secure, Disaster-Aware Warehouse Coordination',
    novelty:
      'First disaster-aware framework combining blockchain, decentralized identity, zero-knowledge proofs, and lightweight IoT for Sri Lankan paddy warehouses.',
    main:
      'Build a secure warehouse coordination system that enables trusted, rapid redistribution decisions during emergencies.',
    subs: [
      'Develop a blockchain ledger for warehouse events (stock movement, redistribution, disaster damage).',
      'Implement decentralized identity for warehouses and regional managers.',
      'Integrate zero-knowledge proofs to verify capacity claims without revealing exact values.',
      'Deploy lightweight IoT sensors with on-chain hashing and AI anomaly detection.',
      'Simulate the disaster response workflow, including warehouse ranking and signed redistribution orders.',
    ],
  },
];

export const METHOD = {
  overall:
    'A four-component system of systems built iteratively (data collection, model development, integration, evaluation), with each component prototyped and tested separately before being linked through shared APIs.',
  functional: [
    {
      id: 'forecast',
      title: 'Component 1: AI-Driven Paddy Price Forecasting',
      items: [
        'Collect and preprocess historical price.',
        'Produce long-range price forecasts with XGBoost.',
        'Identify and explain price drivers using causal analysis and counterfactual reasoning.',
      ],
    },
    {
      id: 'dashboard',
      title: 'Component 2: IOT Based Digital Dashboard for Paddy Farming',
      items: [
        'Ingest field imagery, soil data, weather, and yield records into a continuously updated virtual field model.',
        'Predict yield using a Temporal Fusion Transformer.',
        'Detect crop health, pest, and disease issues from images using a Vision Transformer.',
        'Model farm-to-farm water sharing and pest spread using GNNs.',
        'Generate farmer advisories through a RAG assistant grounded in Sri Lankan guidelines.',
        'Provide a farmer interface with local language support.',
      ],
    },
    {
      id: 'market',
      title: 'Component 3: AI-Powered Farmer-Miller Marketplace',
      items: [
        'Train price models across participants using federated learning without sharing raw data.',
        'Match farmers and millers securely by price, quantity, and location while hiding identities.',
        'Provide market and selling guidance through a RAG-based LLM assistant.',
        'Run automated price negotiation using LLM-based agents.',
      ],
    },
    {
      id: 'warehouse',
      title: 'Component 4: Secure, Disaster-Aware Warehouse Coordination',
      items: [
        'Record warehouse events (inbound/outbound stock, redistribution, damage) on a blockchain ledger.',
        'Authenticate warehouses and managers with decentralized identity and signed reports.',
        'Verify capacity claims with zero-knowledge proofs.',
        'Collect IoT sensor data, hash it on-chain, and detect anomalies with AI.',
        'Rank warehouses by distance, capacity, and reliability, and issue signed redistribution orders during disasters.',
      ],
    },
  ],
  nonFunctional: [
    { icon: 'privacy', title: 'Privacy and security', text: 'Farmer data stays private (federated learning, ZKP); records are tamper-proof and digitally signed.' },
    { icon: 'explain', title: 'Explainability', text: 'Forecasts, advisories, and negotiation outcomes must be understandable.' },
    { icon: 'accuracy', title: 'Accuracy', text: 'Models should outperform baselines (Transformer, LSTM, XGBoost).' },
    { icon: 'performance', title: 'Performance and scalability', text: 'Near real-time responses; able to support many farms and warehouses.' },
    { icon: 'reliability', title: 'Reliability and resilience', text: 'Continues to work during disasters and low-connectivity conditions.' },
    { icon: 'usability', title: 'Usability', text: 'Simple, mobile-friendly interface with local language support.' },
    { icon: 'interop', title: 'Interoperability', text: 'Components communicate via standard APIs.' },
    { icon: 'fairness', title: 'Fairness', text: 'Negotiation and matching must avoid price exploitation.' },
  ],
};

/* ---------------------------- MILESTONES ---------------------------- */
// Status is worked out from today's date. To force one, add  status: 'done' | 'current' | 'upcoming'
export const MILESTONES = [
  { date: '2025-11', label: '2025 Nov', title: 'Project Initiation', text: 'Team formation, project scope definition, and initial planning phase.' },
  { date: '2026-01', label: '2026 Jan', title: 'Topic Assessment Form (TAF) Submission', text: 'Formal topic evaluation and approval from academic committee.' },
  { date: '2026-03', label: '2026 Mar', title: 'Proposal Presentation', text: 'Initial project proposal presentation to stakeholders.' },
  { date: '2026-05', label: '2026 May', title: 'Progress Presentation 1', text: 'First major milestone presentation with technical demonstrations.' },
  { date: '2026-09', label: '2026 Sep', title: 'Progress Presentation 2', text: 'Second milestone review with advanced feature implementations.' },
  { date: '2026-09', label: '2026 Sep', title: 'Research Paper Submission', text: 'Comprehensive research documentation and academic paper submission.' },
  { date: '2026-10', label: '2026 Oct', title: 'Completion of Full System', text: 'Final system integration, testing, and optimization phase.' },
  { date: '2026-10', label: '2026 Oct', title: 'Research Portfolio Website Launch', text: 'Launch of the research portfolio website showcasing project outcomes.' },
  { date: '2026-10', label: '2026 Oct', title: 'Final Presentation', text: 'Final research presentation to stakeholders and academic committee.' },
];

/* ----------------------------- DOWNLOADS ----------------------------- */
// Put each file in  public/<file path below>.  Set available: true once the file is added.
export const DOWNLOADS = [
  {
    group: 'Proposals',
    items: [
      { title: 'AI-Driven Paddy Price Forecasting Project Proposal', file: 'downloads/proposals/R26_SE_007_IT22102096_RansaraNS.pdf', available: true },
      { title: 'IOT Based Digital Dashboard for Paddy Farming Project Proposal', file: 'downloads/proposals/R26_SE_007_IT22294784_KumarasinghaPAND.pdf', available: true },
      { title: 'AI-Powered Farmer-Miller Marketplace Project Proposal', file: 'downloads/proposals/R26_SE_007_IT22147950_Chamudi.K.S.I.pdf', available: true },
      { title: 'Secure, Disaster-Aware Warehouse Coordination Project Proposal', file: 'downloads/proposals/R26 SE 007_IT22372444_SenarathneS.M.B.V.B .pdf', available: true },
      { title: 'Topic Assessment', file: 'downloads/proposals/TAF_R26-SE-007.pdf', available: true },
    ],
  },
  {
    group: 'Presentations',
    items: [
      { title: 'Proposal Presentation', file: 'downloads/presentations/Proposal Presentation.pptx', available: true },
      { title: 'Progress Presentation 1', file: 'downloads/presentations/PP1 Presentation.pptx', available: true },
      { title: 'Progress Presentation 2', file: 'downloads/presentations/progress-presentation-2.pptx', available: false },
      { title: 'Final Presentation', file: 'downloads/presentations/final-presentation.pptx', available: false },
    ],
  },
  {
    group: 'Final Report',
    items: [
      { title: 'Individual Reports', file: 'downloads/reports/individual-reports.pdf', available: false },
      { title: 'Final Thesis', file: 'downloads/reports/final-thesis.pdf', available: false },
    ],
  },
  {
    group: 'Research Paper',
    items: [{ title: 'Research Paper', file: 'downloads/papers/Privacy_Preserving_Warehouse_Coordination_System_for_National_Paddy_Distribution_Using_Zero_Knowledge_Proofs_Graph_Attention_Networks_and_Permissioned_Blockchain.pdf', available: true }],
  },
];

/* ------------------------------- ABOUT ------------------------------- */
export const ABOUT_TEXT =
  "A dedicated team of researchers and engineers working together to develop an AI-driven, privacy-preserving digital ecosystem, pushing the boundaries of smart farming, explainable forecasting, and secure supply chain coordination for Sri Lanka's paddy sector.";

// Photos go in  public/assets/team/  (file names below). Use .jpg, or change the extension here.
export const SUPERVISORS = [
  { name: 'Dr. Mahima Weerasinghe', role: 'Supervisor', email: 'mahima.w@sliit.lk', linkedin: 'https://www.linkedin.com/in/mahimaweerasinghe/', photo: 'assets/team/sup-mahima.png' },
  { name: 'Mr. Eishan Weerasinghe', role: 'Co-Supervisor', email: 'eishan.w@sliit.lk', linkedin: 'https://www.linkedin.com/in/eishan-weerasinghe-08a2b8199/', photo: 'assets/team/co-sup-eishan.jpeg' },
  { name: 'Mr. Suranga Senanayake', role: 'External Supervisor', email: 'suranga@gmail.com', linkedin: '', photo: 'assets/team/ex-sup-suranga.png' },
];

export const TEAM = [
  { name: 'Ransara N.S.', role: 'Group Leader', leader: true, email: 'sasinransara@gmail.com', linkedin: 'https://www.linkedin.com/in/sasin-ransara/', photo: 'assets/team/sasin.png' },
  { name: 'Kumarasingha P.A.N.D.', role: 'Team Member', email: 'nerandadilhara@gmail.com', linkedin: 'https://www.linkedin.com/in/neranda-dilhara-kumarasingha-2433a4257/', photo: 'assets/team/neranda.png' },
  { name: 'Chamudi K. S. I.', role: 'Team Member', email: 'isharachamudi17@gmail.com', linkedin: 'https://www.linkedin.com/in/ishara-chamudi-a4796a2a8/', photo: 'assets/team/ishara.png' },
  { name: 'Senarathne S.M.B.V.B.', role: 'Team Member', email: 'buwaneka10000@gmail.com', linkedin: 'https://www.linkedin.com/in/buwaneka-vishwajith-645378206/', photo: 'assets/team/buwaneka.png' },
];

/* ------------------------------ CONTACT ------------------------------ */
export const CONTACT = {
  intro: "Have questions about our research? Want to collaborate? We'd love to hear from you.",
  email: 'sasinphoto@gmail.com',
  phone: '+94 71 685 3350',
  phoneLink: '+94716853350',
  location: 'Sliit, Malabe, Sri Lanka.',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=SLIIT+Malabe+Sri+Lanka',
  formEndpoint: '',
};
