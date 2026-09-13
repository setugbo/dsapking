import type {
  NavigationItem,
  Pillar,
  TrainingProgramme,
  ConsultingService,
  PracticalStep,
  CareerService,
  ValueCard,
  WhyChooseItem,
  ResourceItem,
  FAQ,
  TrustItem,
  CorporateTrainingOption,
  EnquiryType,
} from '@marvinho/types';

export const siteConfig = {
  name: 'D KING SAP ACADEMY LTD',
  shortName: 'D KING',
  tagline: 'Building SAP Experts. Transforming Businesses.',
  positioning: 'Empowering Professionals. Transforming Businesses.',
  description:
    'D KING SAP ACADEMY LTD is an SAP training and consulting organization committed to developing skilled SAP professionals through practical education and supporting organizations with professional SAP services.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dkingacademy.com',
  email: '[COMPANY EMAIL]',
  phone: '[COMPANY PHONE NUMBER]',
  whatsapp: '+[WHATSAPP NUMBER]',
  address: {
    street: '[OFFICE ADDRESS]',
    city: '[CITY]',
    state: '[STATE]',
    country: 'Nigeria',
  },
  social: {
    linkedin: '[LINKEDIN URL]',
    instagram: '[INSTAGRAM URL]',
    facebook: '[FACEBOOK URL]',
    twitter: '[TWITTER URL]',
    youtube: '[YOUTUBE URL]',
  },
  businessHours: {
    weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 3:00 PM',
    sunday: 'Sunday: Closed',
  },
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Training',
    href: '/training',
    children: [
      { label: 'Training Overview', href: '/training' },
      { label: 'SAP S/4HANA Finance (FICO)', href: '/training/fico' },
      { label: 'SAP Materials Management (MM)', href: '/training/mm' },
      { label: 'SAP Sales & Distribution (SD)', href: '/training/sd' },
      { label: 'SAP Production Planning (PP)', href: '/training/pp' },
      { label: 'SAP Plant Maintenance (PM)', href: '/training/pm' },
      { label: 'SAP Human Capital Management (HCM)', href: '/training/hcm' },
      { label: 'SAP Business Warehouse (BW)', href: '/training/business-warehouse' },
      { label: 'SAP Basis Administration', href: '/training/basis' },
    ],
  },
  {
    label: 'Consulting',
    href: '/consulting',
    children: [
      { label: 'Consulting Overview', href: '/consulting' },
      { label: 'SAP Implementation', href: '/consulting/implementation' },
      { label: 'Configuration & Customization', href: '/consulting/configuration' },
      { label: 'Business Process Analysis', href: '/consulting/business-process-analysis' },
      { label: 'Data Migration', href: '/consulting/data-migration' },
      { label: 'SAP Integration', href: '/consulting/integration' },
      { label: 'System Testing', href: '/consulting/system-testing' },
      { label: 'Go-Live Support', href: '/consulting/go-live-support' },
      { label: 'Post-Implementation Support', href: '/consulting/post-implementation-support' },
    ],
  },
  { label: 'Practical Experience', href: '/practical-experience' },
  { label: 'Career Development', href: '/career-development' },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const heroTrustItems: TrustItem[] = [
  { label: 'SAP Training', description: 'Professional SAP programmes', icon: 'GraduationCap' },
  { label: 'Hands-On Practice', description: 'Practice on live SAP systems', icon: 'MonitorCog' },
  { label: 'Professional Development', description: 'Career-focused support', icon: 'TrendingUp' },
  { label: 'SAP Consulting', description: 'Enterprise SAP services', icon: 'Briefcase' },
  { label: 'Corporate Training', description: 'Organization-wide capability', icon: 'Building2' },
];

export const pillars: Pillar[] = [
  {
    id: 'pillar-training',
    number: '01',
    title: 'SAP Training',
    description:
      'Professional training across key SAP functional and technical areas, built to develop practical enterprise skills.',
    icon: 'GraduationCap',
    href: '/training',
  },
  {
    id: 'pillar-practical',
    number: '02',
    title: 'Practical Experience',
    description:
      'Hands-on learning through SAP systems, guided exercises and realistic business scenarios that bridge theory and practice.',
    icon: 'MonitorCog',
    href: '/practical-experience',
  },
  {
    id: 'pillar-consulting',
    number: '03',
    title: 'SAP Consulting',
    description:
      'Professional SAP services supporting organizations through implementation, configuration and business transformation.',
    icon: 'Briefcase',
    href: '/consulting',
  },
];

export const trainingProgrammes: TrainingProgramme[] = [
  {
    id: 'fico',
    title: 'SAP S/4HANA Finance (FICO)',
    shortName: 'FICO',
    slug: 'fico',
    category: 'functional',
    shortDescription:
      'Financial accounting and controlling — from general ledger and asset accounting to cost management and profitability reporting in SAP S/4HANA.',
    overview:
      'The SAP S/4HANA Finance (FICO) programme equips participants with practical skills in Financial Accounting (FI) and Controlling (CO). Participants work through company code setup, document posting, accounts payable and receivable, asset accounting and management accounting processes within SAP S/4HANA.',
    whatYouWillLearn: [
      'SAP S/4HANA navigation and Fiori fundamentals',
      'Company code and chart of accounts configuration',
      'General ledger accounting and document posting',
      'Accounts payable and accounts receivable processes',
      'Asset accounting fundamentals',
      'Cost center, internal order and profit center accounting',
      'SAP S/4HANA Universal Journal and Finance simplifications',
      'Integration of finance processes with MM and SD',
    ],
    practicalExperience: [
      'Set up a company code and chart of accounts on the practice server',
      'Post and reverse financial documents across business scenarios',
      'Execute the procure-to-pay and order-to-cash finance cycle',
      'Perform period-end closing and cost allocation exercises',
      'Generate and analyse standard financial reports',
    ],
    audience: [
      'Finance and accounting professionals',
      'Aspiring SAP FICO consultants',
      'University graduates seeking enterprise finance skills',
      'Business analysts working with finance processes',
    ],
    learningOutcomes: [
      'Configure core FI and CO organisational structures',
      'Execute and manage end-to-end financial processes',
      'Perform period-end closing activities',
      'Analyse management accounting information for business decisions',
      'Navigate SAP S/4HANA confidently',
    ],
    careerRelevance:
      'SAP FICO skills are in demand across finance, manufacturing, services and public sector organizations. Participants build a foundation for roles such as SAP FICO consultant, finance process owner and SAP-enabled financial analyst.',
    featured: true,
  },
  {
    id: 'mm',
    title: 'SAP Materials Management (MM)',
    shortName: 'MM',
    slug: 'mm',
    category: 'functional',
    shortDescription:
      'Procurement-to-payment, inventory management and materials master data — the engine of supply chain operations in SAP.',
    overview:
      'The SAP Materials Management (MM) programme covers the complete procurement and inventory cycle in SAP S/4HANA. Participants learn to manage materials and vendor master data, process purchase requisitions and purchase orders, perform goods movements and complete invoice verification.',
    whatYouWillLearn: [
      'SAP S/4HANA navigation for logistics users',
      'Organizational structures: plant, storage location, purchasing organization',
      'Material master and vendor master data management',
      'Purchase requisitions, purchase orders and source determination',
      'Goods receipt, goods issue and stock transfer processes',
      'Inventory management and physical inventory',
      'Invoice verification and the procurement-to-payment cycle',
      'Integration of MM with Finance and Sales',
    ],
    practicalExperience: [
      'Create and maintain material and vendor master data',
      'Execute a complete procurement-to-payment scenario',
      'Perform goods receipts, goods issues and stock transfers',
      'Complete physical inventory and stock count exercises',
      'Process invoices and analyse purchase documents',
    ],
    audience: [
      'Supply chain and procurement professionals',
      'Warehouse and inventory staff',
      'Aspiring SAP MM consultants',
      'Graduates pursuing operations careers',
    ],
    learningOutcomes: [
      'Set up and maintain MM master and organizational data',
      'Execute the full procurement-to-payment process',
      'Manage inventory movements and stock valuation',
      'Process invoice verification accurately',
      'Troubleshoot routine MM process issues',
    ],
    careerRelevance:
      'MM skills support roles in procurement, supply chain management and SAP MM consulting across trading, manufacturing and services industries.',
    featured: true,
  },
  {
    id: 'sd',
    title: 'SAP Sales & Distribution (SD)',
    shortName: 'SD',
    slug: 'sd',
    category: 'functional',
    shortDescription:
      'The order-to-cash journey — sales order processing, pricing, availability, delivery and billing in SAP.',
    overview:
      'The SAP Sales & Distribution (SD) programme focuses on the customer-facing side of the business. Participants develop skills in sales master data, inquiry and quotation processes, sales order handling, pricing, delivery and billing — completing the order-to-cash cycle in SAP S/4HANA.',
    whatYouWillLearn: [
      'Sales organizational structures and distribution channels',
      'Customer master and customer-material info records',
      'Inquiries, quotations and sales order processing',
      'Availability checks and delivery scheduling',
      'Pricing procedures and condition techniques',
      'Outbound delivery, picking and goods issue',
      'Billing documents and basic billing scenarios',
      'Integration of SD with MM and Finance',
    ],
    practicalExperience: [
      'Create and maintain customer master data',
      'Process an end-to-end order-to-cash scenario',
      'Apply condition-based pricing to sales documents',
      'Execute delivery and goods issue processes',
      'Generate billing documents and review partner outputs',
    ],
    audience: [
      'Sales, distribution and customer service professionals',
      'Order management teams',
      'Aspiring SAP SD consultants',
      'Graduates pursuing commercial careers',
    ],
    learningOutcomes: [
      'Configure typical SD sales processes',
      'Process the complete order-to-cash cycle',
      'Design and apply pricing conditions',
      'Manage delivery and billing activities',
      'Recognise the touchpoints between SD and other modules',
    ],
    careerRelevance:
      'SD competence opens paths in SAP SD consulting, sales operations and order management in organizations of all sizes.',
    featured: true,
  },
  {
    id: 'pp',
    title: 'SAP Production Planning (PP)',
    shortName: 'PP',
    slug: 'pp',
    category: 'functional',
    shortDescription:
      'From production master data and MRP to production orders — the planning and execution backbone of manufacturing.',
    overview:
      'The SAP Production Planning (PP) programme covers production master data, material requirements planning and production execution in SAP S/4HANA. Participants learn to work with bills of material, routings and work centers and to execute the production order lifecycle.',
    whatYouWillLearn: [
      'Production planning master data: materials, BOM, routing, work center',
      'Material requirements planning (MRP) fundamentals',
      'Production order creation, release and costing',
      'Goods issue, confirmations and goods receipt for production',
      'Capacity planning and scheduling basics',
      'Integration of PP with MM, SD and Finance',
      'S/4HANA manufacturing and planning fundamentals',
    ],
    practicalExperience: [
      'Create bills of material, routings and work centers',
      'Run MRP and analyse planning results',
      'Execute a complete production order lifecycle',
      'Perform backflushing and production confirmations',
      'Troubleshoot standard planning situations',
    ],
    audience: [
      'Production planners and manufacturing professionals',
      'Industrial engineers',
      'Aspiring SAP PP consultants',
      'Graduates pursuing operations careers',
    ],
    learningOutcomes: [
      'Create and maintain PP master data',
      'Run and interpret material requirements planning',
      'Execute and monitor production orders',
      'Understand capacity and scheduling fundamentals',
      'Integrate PP processes with adjacent modules',
    ],
    careerRelevance:
      'PP expertise supports careers in production planning, manufacturing operations and SAP PP consulting across discrete and process industries.',
    featured: false,
  },
  {
    id: 'pm',
    title: 'SAP Plant Maintenance (PM)',
    shortName: 'PM',
    slug: 'pm',
    category: 'functional',
    shortDescription:
      'Maintenance planning and execution — equipment, functional locations, notifications and work orders.',
    overview:
      'The SAP Plant Maintenance (PM) programme develops skills in technical asset management: functional locations, equipment master data, maintenance notifications and orders, and planned maintenance strategies within SAP.',
    whatYouWillLearn: [
      'Technical objects: functional locations and equipment',
      'Maintenance planning structures and task lists',
      'Maintenance notifications and maintenance orders',
      'Corrective, preventive and breakdown maintenance processes',
      'Maintenance plans and scheduling strategies',
      'Integration of PM with PP, MM and Finance',
    ],
    practicalExperience: [
      'Create functional locations and equipment records',
      'Process maintenance notifications and orders end-to-end',
      'Execute preventive maintenance using maintenance plans',
      'Raise material requirements from maintenance tasks',
      'Review cost and history information for equipment',
    ],
    audience: [
      'Maintenance engineers and technicians',
      'Facility and asset managers',
      'Aspiring SAP PM consultants',
      'Professionals in utilities, oil & gas and manufacturing',
    ],
    learningOutcomes: [
      'Set up technical object master data',
      'Plan and execute maintenance activities',
      'Manage maintenance notifications and orders',
      'Design preventive maintenance strategies',
      'Track maintenance costs and asset history',
    ],
    careerRelevance:
      'PM skills are valuable in asset-intensive industries and open roles in SAP PM consulting and maintenance management.',
    featured: false,
  },
  {
    id: 'hcm',
    title: 'SAP Human Capital Management (HCM)',
    shortName: 'HCM',
    slug: 'hcm',
    category: 'functional',
    shortDescription:
      'Core HR, organizational management and the hire-to-retire employee journey in SAP HCM.',
    overview:
      'The SAP Human Capital Management (HCM) programme introduces HR professionals to core personnel administration and organizational management in SAP. Participants learn employee master data management, personnel actions, organizational structures and related HR processes.',
    whatYouWillLearn: [
      'Personnel administration and employee master data',
      'Organizational management and org unit structures',
      'Personnel actions: hire, transfer, leave, termination',
      'Time management and attendance basics',
      'Payroll-relevant data and HR reporting',
      'Employee and manager self-service concepts',
      'Integration of HCM with organizational processes',
    ],
    practicalExperience: [
      'Create and maintain employee master records',
      'Execute personnel actions across the employee lifecycle',
      'Build and assign organizational units',
      'Maintain time and attendance data',
      'Generate standard HR reports and queries',
    ],
    audience: [
      'Human resources professionals',
      'HRIS and HR operations staff',
      'Aspiring SAP HCM consultants',
      'Graduates pursuing HR technology careers',
    ],
    learningOutcomes: [
      'Manage employee master data accurately',
      'Execute core personnel actions',
      'Design and maintain organizational structures',
      'Process time management information',
      'Support day-to-day HR operations in SAP',
    ],
    careerRelevance:
      'HCM skills support careers in HR operations, HRIS administration and SAP HCM/SuccessFactors consulting.',
    featured: false,
  },
  {
    id: 'business-warehouse',
    title: 'SAP Business Warehouse (BW)',
    shortName: 'BW',
    slug: 'business-warehouse',
    category: 'technical',
    shortDescription:
      'Data warehousing and reporting — modelling enterprise data from extraction to analysis with SAP BW.',
    overview:
      'The SAP Business Warehouse (BW) programme introduces enterprise data warehousing and analytical reporting. Participants learn to model data, extract and load information from SAP systems, and build reports that support business analysis.',
    whatYouWillLearn: [
      'SAP BW architecture and data warehousing concepts',
      'InfoAreas, InfoObjects, DataStore objects and InfoCubes',
      'Extraction, transformation and loading (ETL) processes',
      'Transformations, data transfer processes and data flows',
      'Reporting and analysis with BW queries and analytic views',
      'SAP BW on HANA fundamentals and modern analytics',
    ],
    practicalExperience: [
      'Design an InfoArea with core InfoObjects',
      'Model DataStore objects and InfoCubes',
      'Load data from source systems using standard extractors',
      'Create and analyse BW queries and reports',
      'Troubleshoot common data load situations',
    ],
    audience: [
      'Business intelligence and analytics professionals',
      'Data analysts and reporting specialists',
      'Aspiring SAP BW consultants',
      'IT professionals moving into data warehousing',
    ],
    learningOutcomes: [
      'Design core BW data models',
      'Execute extraction and data loading processes',
      'Build reporting queries for business analysis',
      'Maintain and monitor data flows',
      'Understand the role of BW in enterprise analytics',
    ],
    careerRelevance:
      'BW and analytics skills support careers in business intelligence, data warehousing and SAP analytics consulting.',
    featured: false,
  },
  {
    id: 'basis',
    title: 'SAP Basis Administration',
    shortName: 'Basis',
    slug: 'basis',
    category: 'technical',
    shortDescription:
      'SAP system administration — architecture, users and roles, transports, monitoring and security.',
    overview:
      'The SAP Basis Administration programme prepares IT professionals to manage SAP system landscapes. Participants cover system architecture, client administration, user and role administration, transport management, system monitoring and foundational security administration.',
    whatYouWillLearn: [
      'SAP system architecture and landscape design',
      'Client administration and system copy concepts',
      'User and role administration (SU01 and PFCG)',
      'Transport management and change deployment',
      'System monitoring, logs and performance basics',
      'Spool administration and background job management',
      'SAP S/4HANA and HANA database fundamentals',
      'Authorization and security administration basics',
    ],
    practicalExperience: [
      'Create and manage users and authorization roles',
      'Execute transport requests across a practice landscape',
      'Monitor systems and analyse application logs',
      'Schedule and manage background jobs',
      'Apply foundational security and housekeeping tasks',
    ],
    audience: [
      'IT system administrators',
      'Infrastructure and operations professionals',
      'Aspiring SAP Basis consultants',
      'Professionals transitioning into SAP technical roles',
    ],
    learningOutcomes: [
      'Manage users, roles and authorizations',
      'Administer transport and change processes',
      'Monitor SAP systems and resolve common issues',
      'Manage background jobs and print infrastructure',
      'Understand S/4HANA administration fundamentals',
    ],
    careerRelevance:
      'Basis skills underpin every SAP deployment and lead to careers in SAP infrastructure administration and technical consulting.',
    featured: false,
  },
];

export const consultingServices: ConsultingService[] = [
  {
    id: 'implementation',
    title: 'SAP Implementation',
    slug: 'implementation',
    shortDescription:
      'Structured SAP project delivery from assessment and blueprint to configuration, testing and go-live.',
    overview:
      'D KING supports organizations through the full SAP implementation journey. We combine structured project discipline with practical configuration knowledge to help organizations adopt SAP solutions that fit their business processes.',
    businessChallenge:
      'SAP projects are complex. Poor scoping, unclear processes and weak project governance are common reasons transformations struggle to deliver value on time and on budget.',
    approach: [
      'Kick off with a structured assessment of business requirements and process readiness',
      'Run blueprint workshops that map business processes to SAP capabilities',
      'Configure the system following fit-to-standard best practice',
      'Execute disciplined testing and user readiness activities',
      'Deliver a controlled go-live with structured support',
    ],
    typicalActivities: [
      'Project scoping and planning',
      'Business blueprint workshops',
      'System setup and configuration',
      'Integration and user acceptance testing',
      'Go-live preparation and execution support',
    ],
    businessValue: [
      'A structured, predictable project approach',
      'Process alignment with standard SAP best practice',
      'Reduced implementation risk',
      'A system your organization can operate and evolve',
    ],
  },
  {
    id: 'configuration',
    title: 'Configuration & Customization',
    slug: 'configuration',
    shortDescription:
      'SAP configuration that makes the system fit your business processes — without unnecessary development.',
    overview:
      'We configure SAP systems to reflect your operational realities, prioritizing standard configuration over unnecessary customization so the system remains stable, upgradable and maintainable.',
    businessChallenge:
      'Organizations often over-customize SAP, creating complex systems that are expensive to maintain and difficult to upgrade.',
    approach: [
      'Document and challenge current process requirements against SAP best practice',
      'Configure organizational structures and business rules in the implementation guide (IMG)',
      'Use standard functionality wherever it meets business needs',
      'Ensure every configuration decision is documented and testable',
    ],
    typicalActivities: [
      'IMG-based configuration across finance, logistics and administration',
      'Process-specific system settings and validation rules',
      'Configuration documentation and handover',
      'Support during integration and user testing',
    ],
    businessValue: [
      'A cleaner, more maintainable configuration',
      'Lower total cost of ownership',
      'Higher system stability and upgradeability',
      'Clear documentation for your team',
    ],
  },
  {
    id: 'business-process-analysis',
    title: 'Business Process Analysis',
    slug: 'business-process-analysis',
    shortDescription:
      'Document, analyse and improve the business processes that will run on SAP.',
    overview:
      'We help organizations understand their current processes, identify improvement opportunities and prepare clean, well-defined process maps that support SAP adoption and process optimization.',
    businessChallenge:
      'Complex or undocumented processes make SAP configuration and automation difficult, and often lead to rework and delay.',
    approach: [
      'Conduct structured interviews and workshops with process owners',
      'Document current-state processes clearly and objectively',
      'Identify gaps, redundancies and improvement opportunities',
      'Recommend a future-state process design aligned to SAP',
    ],
    typicalActivities: [
      'Process mapping and documentation',
      'Gap analysis and improvement recommendations',
      'Process workshop facilitation',
      'Future-state process design',
    ],
    businessValue: [
      'Clarity on how your business really operates',
      'Process improvements before and during SAP adoption',
      'Clean inputs for configuration and user training',
      'Alignment between business and IT teams',
    ],
  },
  {
    id: 'data-migration',
    title: 'Data Migration',
    slug: 'data-migration',
    shortDescription:
      'Move your data into SAP with quality — from audit and cleansing to extraction and validation.',
    overview:
      'We support the structured migration of master and transaction data from legacy systems into SAP, with the discipline required to protect data quality before, during and after cutover.',
    businessChallenge:
      'Poor or inconsistent legacy data is one of the biggest causes of go-live problems and post-implementation frustration.',
    approach: [
      'Audit source data and agree target data standards',
      'Design extraction and transformation rules',
      'Cleanse and validate data before loading',
      'Load in controlled phases with checkpoint reconciliations',
    ],
    typicalActivities: [
      'Data audit and quality assessment',
      'Extraction and transformation design',
      'Data cleansing and reconciliation',
      'Controlled uploads and cutover execution support',
    ],
    businessValue: [
      'Higher data quality at go-live',
      'Reduced rework and data-related support calls',
      'Faster, more reliable cutover',
      'A data foundation you can trust for reporting',
    ],
  },
  {
    id: 'integration',
    title: 'SAP Integration',
    slug: 'integration',
    shortDescription:
      'Connect SAP with your other systems to enable seamless end-to-end business flows.',
    overview:
      'We design and support integrations that connect SAP with surrounding applications — from enterprise systems to partner systems — so information flows reliably across your technology landscape.',
    businessChallenge:
      'Disconnected systems create manual work, data errors and delays across finance, logistics and operations.',
    approach: [
      'Map interfaces needed to support core business processes',
      'Design integration patterns based on data volumes and latency needs',
      'Implement reliable transport and error handling',
      'Monitor interfaces in operation',
    ],
    typicalActivities: [
      'Interface design and specification',
      'Integration implementation and configuration',
      'Interface testing and error handling',
      'Integration monitoring and support',
    ],
    businessValue: [
      'Seamless end-to-end business processes',
      'Reduced manual data entry and errors',
      'Better visibility across systems',
      'A foundation for further digitalization',
    ],
  },
  {
    id: 'system-testing',
    title: 'System Testing',
    slug: 'system-testing',
    shortDescription:
      'Structured unit, integration and user acceptance testing that builds go-live confidence.',
    overview:
      'We support SAP testing programs that validate configured processes, integrations and user readiness before go-live — so defects are found while they are still inexpensive to fix.',
    businessChallenge:
      'When testing is unstructured, defects surface during go-live and in the first weeks of operation, when they are costliest.',
    approach: [
      'Design a testing strategy scaled to project risk',
      'Prepare and review test scenarios and scripts',
      'Facilitate functional, integration and user acceptance testing',
      'Manage defect tracking and resolution sign-off',
    ],
    typicalActivities: [
      'Test strategy and planning',
      'Test script preparation and review',
      'Test execution coordination and support',
      'Defect management and sign-off reporting',
    ],
    businessValue: [
      'Higher confidence in the configured solution',
      'Fewer defects at go-live',
      'Cleaner, documented acceptance criteria',
      'A smoother transition to steady-state operations',
    ],
  },
  {
    id: 'end-user-training',
    title: 'End-User Training',
    slug: 'end-user-training',
    shortDescription:
      'Role-based SAP training that helps your people work confidently in the new system.',
    overview:
      'We deliver practical, role-based end-user training that equips teams with the SAP knowledge they need for their day-to-day responsibilities, aligned to your processes and training approach.',
    businessChallenge:
      'User adoption is the measure of SAP success. Training that is generic or rushed leaves teams frustrated and processes incomplete.',
    approach: [
      'Identify the roles and tasks that need training',
      'Prepare role-based training materials and scenarios',
      'Deliver train-the-trainer and direct user training',
      'Provide supporting documentation and refresher content',
    ],
    typicalActivities: [
      'Role-based training needs analysis',
      'Training material preparation',
      'Classroom and virtual training delivery',
      'End-user documentation and support handover',
    ],
    businessValue: [
      'Higher user adoption and confidence',
      'Fewer process errors and helpdesk calls',
      'Faster return to productivity after go-live',
      'Capability that stays with your organization',
    ],
  },
  {
    id: 'go-live-support',
    title: 'Go-Live Support',
    slug: 'go-live-support',
    shortDescription:
      'Controlled go-live execution and hypercare support for the critical first days of operation.',
    overview:
      'We help plan and execute a controlled go-live — from cutover preparation to hypercare support — so your transition from old to new is structured, communicative and supported.',
    businessChallenge:
      'Go-live is the highest-risk moment in an SAP journey. Uncontrolled cutovers and weak support can damage confidence and disrupt business.',
    approach: [
      'Prepare a detailed cutover plan with clear owners and checkpoints',
      'Run go-live rehearsals where practical',
      'Provide on-site and remote hypercare support',
      'Track and resolve issues with structured escalation',
    ],
    typicalActivities: [
      'Cutover planning and coordination',
      'Go-live run-book execution',
      'Hypercare support and issue management',
      'Post-go-live status reviews',
    ],
    businessValue: [
      'A controlled, low-drama go-live',
      'Rapid issue resolution in hypercare',
      'Clear communication for business users',
      'A solid foundation for post-go-live stabilization',
    ],
  },
  {
    id: 'post-implementation-support',
    title: 'Post-Implementation Support',
    slug: 'post-implementation-support',
    shortDescription:
      'Stabilization and optimization support that protects the value of your SAP investment.',
    overview:
      'After go-live, we support organizations through stabilization, fixing issues, optimizing processes and building the internal capability to operate SAP confidently into the future.',
    businessChallenge:
      'The months after go-live determine whether an SAP investment delivers long-term value. Unresolved issues and unoptimized processes erode benefits.',
    approach: [
      'Provide structured issue resolution and guidance',
      'Identify and implement process improvements',
      'Support knowledge transfer to internal teams',
      'Conduct periodic health checks and optimization reviews',
    ],
    typicalActivities: [
      'Post-go-live issue support',
      'Process and configuration optimization',
      'Documentation and knowledge transfer',
      'Periodic system health reviews',
    ],
    businessValue: [
      'Stable operations after go-live',
      'Continuous improvement of processes',
      'Growing internal SAP capability',
      'Long-term protection of your investment',
    ],
  },
  {
    id: 'support-maintenance',
    title: 'SAP Support & Maintenance',
    slug: 'support-maintenance',
    shortDescription:
      'Ongoing SAP support that keeps your system healthy, users productive and processes running.',
    overview:
      'We provide ongoing SAP support and maintenance services that keep systems stable and users productive — covering incident resolution, housekeeping, monitoring and minor enhancements.',
    businessChallenge:
      'Once SAP is live, day-to-day issues still need careful attention. Without structured support, small problems become operational and financial costs.',
    approach: [
      'Establish clear support processes and response expectations',
      'Resolve incidents and service requests methodically',
      'Perform regular maintenance, monitoring and housekeeping',
      'Support minor enhancements as your business evolves',
    ],
    typicalActivities: [
      'Incident resolution and guidance',
      'System monitoring and housekeeping',
      'Minor enhancements and configuration changes',
      'Periodic review and reporting',
    ],
    businessValue: [
      'Reliable day-to-day operations',
      'Fast, professional incident resolution',
      'A healthy, well-maintained system',
      'Flexible capacity as your needs change',
    ],
  },
];

export const practicalSteps: PracticalStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Learn the concepts. Every programme starts with clear explanations of SAP functionality, business processes and the role of each module.',
  },
  {
    number: '02',
    title: 'Configure',
    description:
      'Work with SAP configuration exercises. Apply what you have learned by setting up organisational structures and business rules in the system.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Perform business processes. Complete real transactions from master data creation to document posting, just as SAP users do in the workplace.',
  },
  {
    number: '04',
    title: 'Simulate',
    description:
      'Work through realistic business scenarios. Bring processes together in exercises that reflect the way organizations run end to end.',
  },
  {
    number: '05',
    title: 'Apply',
    description:
      'Participate in implementation-oriented projects. Consolidate your skills through guided project work that mirrors real SAP implementation activity.',
  },
];

export const practiceEnvironment = [
  'SAP S/4HANA Practice Server',
  'SAP GUI Access',
  'Dedicated User Credentials',
  'Practice Client Environment',
  'Configuration Exercises',
  'Business Process Simulations',
  'End-to-End Implementation Projects',
];

export const careerServices: CareerService[] = [
  {
    id: 'cv',
    title: 'CV and Resume Development',
    description:
      'Guidance to help you present your SAP knowledge and practical experience clearly to employers.',
    icon: 'FileText',
  },
  {
    id: 'interview',
    title: 'Interview Preparation',
    description:
      'Practice and coaching for SAP and enterprise-technology interviews, covering both technical and behavioural questions.',
    icon: 'MessageSquare',
  },
  {
    id: 'coaching',
    title: 'Career Coaching',
    description:
      'Conversations to help you define your SAP career direction, choose a module path and set realistic goals.',
    icon: 'Compass',
  },
  {
    id: 'internship',
    title: 'Internship Opportunities',
    description:
      'Access to internship opportunities where available, giving you real exposure to SAP-enabled work environments.',
    icon: 'Briefcase',
  },
  {
    id: 'placement',
    title: 'Job Placement Support',
    description:
      'Support with job applications, referrals and connecting you with organizations looking for SAP talent.',
    icon: 'Users',
  },
  {
    id: 'mentoring',
    title: 'Professional Mentoring',
    description:
      'Guidance from professionals who understand the SAP landscape and what it takes to grow a career in it.',
    icon: 'GraduationCap',
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: 'Experienced Professionals',
    description:
      'Training and consulting delivered by professionals who understand SAP systems and the business processes they support.',
    icon: 'Shield',
  },
  {
    title: 'Industry-Relevant Curriculum',
    description:
      'Programme content aligned to the way organizations actually use SAP in the workplace.',
    icon: 'BookOpen',
  },
  {
    title: 'Hands-On Training',
    description:
      'Learn by doing on practice SAP systems rather than by watching alone.',
    icon: 'MonitorCog',
  },
  {
    title: 'Real-Time Project Experience',
    description:
      'Practise realistic business scenarios and implementation-style exercises that prepare you for the workplace.',
    icon: 'Projector',
  },
  {
    title: 'Flexible Learning',
    description:
      'Training options designed to suit working professionals and full-time learners.',
    icon: 'CalendarClock',
  },
  {
    title: 'Career Support',
    description:
      'Ongoing guidance as you move from training into the SAP job market.',
    icon: 'TrendingUp',
  },
];

export const coreValues: ValueCard[] = [
  {
    title: 'Excellence',
    description: 'We pursue quality and continuous improvement in everything we teach and deliver.',
    icon: 'Award',
  },
  {
    title: 'Integrity',
    description: 'We act honestly and transparently with learners, organizations and partners.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Professionalism',
    description: 'We maintain high standards of conduct, delivery and communication.',
    icon: 'Briefcase',
  },
  {
    title: 'Innovation',
    description: 'We embrace new tools, methods and ideas to keep our training and consulting relevant.',
    icon: 'Lightbulb',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We are committed to the success and satisfaction of every learner and client.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Continuous Learning',
    description: 'We model the learning culture we teach — always growing, always improving.',
    icon: 'BookOpen',
  },
  {
    title: 'Teamwork',
    description: 'We collaborate across teams to deliver complete, dependable outcomes.',
    icon: 'Users',
  },
  {
    title: 'Accountability',
    description: 'We take ownership of our commitments and deliver on them.',
    icon: 'ClipboardCheck',
  },
];

export const corporateTrainingAudiences = [
  {
    title: 'Organizations Adopting SAP',
    description: 'Build foundational SAP capability ahead of an implementation.',
  },
  {
    title: 'Existing SAP Users',
    description: 'Deepen process knowledge and system confidence for current users.',
  },
  {
    title: 'Functional Teams',
    description: 'Module-specific training for finance, logistics, HR and technical teams.',
  },
  {
    title: 'End Users',
    description: 'Role-based training focused on the exact transactions teams perform daily.',
  },
  {
    title: 'Business Process Teams',
    description: 'Training aligned to process ownership, improvement and documentation.',
  },
  {
    title: 'IT Teams',
    description: 'Technical enablement for administration, monitoring and support functions.',
  },
];

export const corporateTrainingOptions: CorporateTrainingOption[] = [
  {
    id: 'end-user-training',
    title: 'End-User Training',
    description: 'Practical, role-based training that builds daily operating confidence in SAP.',
    audience: 'End users and functional teams',
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    description: 'In-depth module training for teams responsible for business processes and configuration.',
    audience: 'Functional consultants and process owners',
  },
  {
    id: 'process-training',
    title: 'Process-Specific Training',
    description: 'Training built around a specific business process such as procure-to-pay or order-to-cash.',
    audience: 'Cross-functional process teams',
  },
  {
    id: 'refresher-training',
    title: 'Refresher Training',
    description: 'Focused updates that keep existing SAP users sharp after changes or staff turnover.',
    audience: 'Existing SAP users',
  },
  {
    id: 'customized-workshops',
    title: 'Customized Workshops',
    description: 'Workshops designed around your organization\'s processes, data and objectives.',
    audience: 'Departments and project teams',
  },
  {
    id: 'post-implementation-training',
    title: 'Post-Implementation Training',
    description: 'Training delivered after go-live to stabilize adoption and close knowledge gaps.',
    audience: 'All user groups post go-live',
  },
];

export const resources: ResourceItem[] = [
  {
    id: 'training-manuals',
    title: 'SAP Training Manuals',
    description: 'Structured manuals that guide learners through SAP processes, transactions and exercises.',
    category: 'Training',
    type: 'Manual',
    url: '',
    downloadable: false,
  },
  {
    id: 'configuration-guides',
    title: 'Configuration Guides',
    description: 'Step-by-step configuration references for common SAP settings and organisational structures.',
    category: 'Configuration',
    type: 'Guide',
    url: '',
    downloadable: false,
  },
  {
    id: 'business-process-docs',
    title: 'Business Process Documentation',
    description: 'Clear documentation of common business processes supported by SAP.',
    category: 'Process',
    type: 'Document',
    url: '',
    downloadable: false,
  },
  {
    id: 'project-blueprints',
    title: 'Project Blueprints',
    description: 'Blueprint-style documents that show how SAP projects are scoped and structured.',
    category: 'Project',
    type: 'Template',
    url: '',
    downloadable: false,
  },
  {
    id: 'standard-operating-procedures',
    title: 'Standard Operating Procedures',
    description: 'Reference procedures for routine SAP operations and business process execution.',
    category: 'Process',
    type: 'Document',
    url: '',
    downloadable: false,
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials',
    description: 'Guided walkthroughs of key SAP concepts and day-to-day activities.',
    category: 'Training',
    type: 'Video',
    url: '',
    downloadable: false,
  },
  {
    id: 'interview-questions',
    title: 'Interview Questions and Answers',
    description: 'Practice questions covering SAP concepts, business processes and career readiness.',
    category: 'Career',
    type: 'Document',
    url: '',
    downloadable: false,
  },
  {
    id: 'sample-project-documents',
    title: 'Sample Project Documents',
    description: 'Examples of the documentation produced during SAP implementations.',
    category: 'Project',
    type: 'Sample',
    url: '',
    downloadable: false,
  },
  {
    id: 'implementation-templates',
    title: 'Implementation Templates',
    description: 'Reusable templates for project planning, testing, cutover and support activities.',
    category: 'Project',
    type: 'Template',
    url: '',
    downloadable: false,
  },
  {
    id: 'assessment-practice',
    title: 'Assessment Practice Papers',
    description: 'Practice assessments that help learners prepare for academy evaluations and mock examinations.',
    category: 'Assessment',
    type: 'Document',
    url: '',
    downloadable: false,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What SAP courses does D KING offer?',
    answer:
      'D KING SAP ACADEMY LTD offers professional training across major SAP functional and technical areas, including SAP S/4HANA Finance (FICO), Materials Management (MM), Sales & Distribution (SD), Production Planning (PP), Plant Maintenance (PM), Human Capital Management (HCM), Business Warehouse (BW) and Basis Administration.',
    category: 'training',
  },
  {
    id: 'faq-2',
    question: 'Are the programmes practical?',
    answer:
      'Yes. Training is designed to be highly practical. Participants apply concepts by carrying out SAP exercises — configuring settings, running transactions and working through realistic business scenarios — rather than only watching demonstrations.',
    category: 'practical',
  },
  {
    id: 'faq-3',
    question: 'Do students get access to SAP systems?',
    answer:
      'Participants use the academy\'s practical learning environment, which includes an SAP S/4HANA practice server, SAP GUI access, dedicated user credentials and a practice client environment for guided exercises and projects.',
    category: 'practical',
  },
  {
    id: 'faq-4',
    question: 'Is training available online?',
    answer:
      'Training is delivered in formats that suit different learners. Please contact the academy to confirm the current online and in-person delivery options for the programme you are interested in.',
    category: 'delivery',
  },
  {
    id: 'faq-5',
    question: 'Is physical training available?',
    answer:
      'Physical training is available where classroom facilities are used. Contact the academy to confirm venue details and schedules for your preferred programme.',
    category: 'delivery',
  },
  {
    id: 'faq-6',
    question: 'Do you provide corporate training?',
    answer:
      'Yes. D KING provides corporate training for organizations adopting SAP, existing SAP users, functional teams, end users, business process teams and IT teams — including customized workshops and post-implementation training.',
    category: 'corporate',
  },
  {
    id: 'faq-7',
    question: 'Do you provide SAP consulting services?',
    answer:
      'Yes. D KING offers SAP consulting services including implementation, configuration and customization, business process analysis, data migration, SAP integration, system testing, end-user training, go-live support, post-implementation support and support and maintenance.',
    category: 'consulting',
  },
  {
    id: 'faq-8',
    question: 'Do students receive certificates?',
    answer:
      'Successful participants receive a Certificate of Completion issued by D KING SAP ACADEMY LTD. This certificate confirms completion of the academy\'s programme and is separate from any external or vendor certifications.',
    category: 'certification',
  },
  {
    id: 'faq-9',
    question: 'Do you provide career support?',
    answer:
      'Yes. The academy supports participants with CV and resume development, interview preparation, career coaching, internship opportunities where available, job placement support and professional mentoring.',
    category: 'careers',
  },
  {
    id: 'faq-10',
    question: 'How can I register my interest?',
    answer:
      'You can register your interest by submitting an enquiry through the Contact page, selecting SAP Training as your enquiry type. The D KING team will follow up with programme details, schedules and next steps.',
    category: 'registration',
  },
];

export const enquiryTypes: EnquiryType[] = [
  { value: 'training', label: 'SAP Training' },
  { value: 'corporate-training', label: 'Corporate Training' },
  { value: 'consulting', label: 'SAP Consulting' },
  { value: 'career-development', label: 'Career Development' },
  { value: 'student-support', label: 'Student Support' },
  { value: 'general', label: 'General Enquiry' },
];

export const studentPortalMessage =
  'The D KING Student Portal will provide registered learners with access to their courses, learning progress, assignments, assessments, certificates and other learning resources.';

export const certificateStatement =
  'Successful participants receive a Certificate of Completion issued by D KING SAP ACADEMY LTD. This certificate is not an SAP vendor certification. Students pursuing external SAP certification are responsible for meeting vendor requirements.';