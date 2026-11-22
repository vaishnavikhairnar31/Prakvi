import { sortCatalog, enterpriseServiceOrder, businessServiceOrder } from './catalogOrder';
import { ServiceItem } from '../types';
import { generatedImages } from '../assets/images';

const serviceCatalog: ServiceItem[] = [
  // 1. Staffing
  {
    id: 'staffing',
    slug: 'staffing',
    title: 'Staffing',
    category: 'enterprise',
    tagline: 'Expert Staffing Solutions for Businesses Across India',
    shortDesc:
      'Connect with highly skilled, pre-vetted IT, engineering, and healthcare professionals for permanent, temporary, contract, and executive roles.',
    fullDesc:
      'In today’s competitive job market, finding the right talent quickly is vital for business success. Whether you need niche IT specialists, temporary contract staff, executive search, or full recruitment outsourcing, Prakvi delivers. As a leading staffing agency in India, we connect companies with highly skilled, pre-vetted professionals ready to perform from day one. Backed by deep industry expertise, a vast candidate network, and data-driven recruitment, we help startups to large enterprises reduce hiring time, cut recruitment costs, and enhance workforce quality enabling you to focus on growth.',
    iconName: 'Users',
    badge: 'Staffing Capabilities',
    offeringsTitle: 'Our Staffing Services',
    offeringsSubtitle: 'Comprehensive staffing solutions tailored to your business needs.',
    businessChallenge:
      'Competitive talent markets, lengthy screening cycles, and niche technical or clinical skill shortages can slow down strategic delivery and inflate recruitment costs.',
    howWeHelp:
      'We combine deep industry expertise, a pre-vetted candidate network, and data-driven screening to deliver ready-to-perform professionals aligned to your technical and cultural goals.',
    capabilities: [
      {
        title: 'Healthcare Staffing Solutions',
        description:
          'Provides skilled healthcare professionals across permanent, temporary, and contract positions:',
        icon: 'Stethoscope',
        points: [
          'Permanent staffing for full-time healthcare roles',
          'Temporary placements to fill short-term needs',
          'Contract staffing to support project-based or seasonal needs',
        ],
      },
      {
        title: 'IT Consulting & Workforce Solutions',
        description:
          'Blends technology consulting with staffing to empower organizations in a dynamic marketplace.',
        icon: 'Code2',
        points: [
          'IT consulting backed by deep industry expertise',
          'Workforce planning and scaling tailored to tech projects',
          'Support across industries needing IT and staffing integration',
        ],
      },
    ],
    businessBenefits: [
      {
        title: 'Reduced Hiring Time',
        description: 'Pre-vetted talent pools accelerate candidate shortlisting and day-one productivity.',
        metric: 'Day-One Ready',
      },
      {
        title: 'Lower Recruitment Cost',
        description: 'Tailored permanent, contract, and specialized staffing models optimize workforce budgets.',
        metric: 'Cost-Effective',
      },
      {
        title: 'Multi-Industry Coverage',
        description: 'Specialized sourcing across Tech & Digital, Engineering, Healthcare & Pharma, Cybersecurity, and Data Science.',
        metric: '5+ Verticals',
      },
    ],
    processTitle: 'Why Choose Prakvi for Staffing Solutions?',
    processSubtitle: 'A proven 5-stage methodology that ensures successful hiring.',
    deliverySteps: [
      {
        step: '01',
        title: 'Client Needs Analysis',
        description:
          'The Prakvi team collaborates closely with clients to understand their specific hiring goals, required skillsets, industry context, and budget constraints.',
      },
      {
        step: '02',
        title: 'Candidate Sourcing & Screening',
        description:
          'Leveraging a broad talent pool and professional networks, they source suitable candidates and screen them via resumes, interviews, and reference checks.',
      },
      {
        step: '03',
        title: 'Client Shortlisting & Interview Coordination',
        description:
          'Qualified candidates are presented to the client. Prakvi coordinates interview logistics, feedback gathering, and follow-up with both parties.',
      },
      {
        step: '04',
        title: 'Offer & Onboarding Support',
        description:
          'Once a candidate is selected, Prakvi assists with contract negotiations, offer letters, and embeds support for onboarding, ensuring a smooth transition into the role.',
      },
      {
        step: '05',
        title: 'Ongoing Support & Relationship Management',
        description:
          'Continued engagement includes monitoring placement success, addressing issues, collecting feedback, and adapting staffing solutions over time.',
      },
    ],
    stackTitle: 'Staffing Capabilities',
    stackSummary:
      'Prakvi provides tailored workforce solutions to enhance efficiency, reduce costs, and drive long-term success across industries.',
    stackTabs: [
      {
        label: 'Permanent Hiring',
        items: ['Executive Search', 'Full-Time Hiring', 'Leadership Hiring', 'Team Augmentation', 'Enterprise Roles', 'Client Partnership'],
      },
      {
        label: 'Contract Staffing',
        items: [
          'IT Contracting',
          'Temporary Staffing',
          'Project-Based Roles',
          'Short-Term Talent',
          'Support Staff',
          'Flexible Contracts',
        ],
      },
      {
        label: 'Specialized Roles',
        items: ['Tech & Digital', 'Engineering', 'Healthcare & Pharma', 'Cybersecurity', 'Data Science', 'Operations'],
      },
      {
        label: 'Industries Served',
        items: ['Manufacturing', 'Automotive', 'BFSI', 'IT & Telecom', 'Security Services', 'R&D and Labs'],
      },
    ],
    faqs: [
      {
        question: 'What engagement models does Prakvi Staffing support?',
        answer:
          'We support permanent full-time hiring, executive search, IT contracting, temporary staffing, project-based teams, and flexible contract engagements.',
      },
      {
        question: 'Which industries does Prakvi serve for staffing?',
        answer:
          'Our staffing capabilities span IT & Telecom, Healthcare & Pharma, BFSI, Manufacturing, Automotive, Security Services, and R&D Labs.',
      },
    ],
    featuredImage: generatedImages.serviceStaffingTeam,
  },

  // 2. Mobility Practice (BYOD & CYOD)
  {
    id: 'mobility-practice',
    slug: 'mobility-practice',
    title: 'Mobility Practice (BYOD & CYOD)',
    category: 'enterprise',
    tagline: 'Empowering Businesses with Innovative Mobile Solutions',
    shortDesc:
      'Mobile strategy consulting, custom BYOD & CYOD frameworks, MDM/EMM endpoint security, and seamless access to corporate applications.',
    fullDesc:
      'The world is mobile-first, and businesses embracing it gain a competitive edge. Prakvi’s Mobility Practice Services in India provide mobile strategy consulting, app development, enterprise mobility solutions, and mobile security to boost engagement, productivity, and digital transformation. From custom mobile apps to BYOD/CYOD frameworks, MDM, and seamless integration, we deliver secure, scalable, and future-ready mobility solutions.',
    iconName: 'Smartphone',
    badge: 'BYOD & CYOD Practice',
    offeringsTitle: 'Our Mobility Practice Services',
    offeringsSubtitle: 'Comprehensive mobility solutions designed to enable secure, efficient, and future-ready workplaces.',
    businessChallenge:
      'Supporting personal and corporate mobile devices across distributed teams introduces data exposure risks, inconsistent policies, and fragmented management.',
    howWeHelp:
      'We implement tailored BYOD and CYOD policies backed by containerization, Microsoft Intune, Android Enterprise, and Apple Business Manager.',
    capabilities: [
      {
        title: 'Strategy & Implementation',
        description: 'Customized BYOD & CYOD frameworks for secure and efficient mobility adoption.',
        icon: 'Compass',
      },
      {
        title: 'Mobile Device & Endpoint Security',
        description: 'Advanced MDM, EMM, and zero-trust access controls to protect enterprise data.',
        icon: 'Shield',
      },
      {
        title: 'Policy Development & Compliance',
        description: 'Tailored policies that balance user flexibility with organizational governance.',
        icon: 'FileCheck2',
      },
      {
        title: 'Seamless Integration',
        description: 'Unified and secure access to corporate apps and data across all devices.',
        icon: 'Plug',
      },
      {
        title: 'Ongoing Support & Optimization',
        description: 'Continuous monitoring, performance tuning, and proactive security updates.',
        icon: 'Activity',
      },
    ],
    businessBenefits: [
      {
        title: 'BYOD Flexibility & Privacy',
        description: 'Work profiles and containerization separate corporate assets from personal employee data.',
        metric: 'Containerized',
      },
      {
        title: 'Standardized CYOD Control',
        description: 'Organization-approved device fleets with zero-touch provisioning and centralized maintenance.',
        metric: 'Centralized MDM',
      },
      {
        title: 'Continuous Endpoint Governance',
        description: 'Real-time compliance checks, conditional access, and encrypted application delivery.',
        metric: 'Zero-Trust Access',
      },
    ],
    processTitle: 'Why Choose Prakvi’s Mobility Practice?',
    processSubtitle: 'A proven 7-step methodology that ensures successful mobile governance delivery.',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Strategy',
        description:
          'Prakvi collaborates with you to assess current device usage, workplace roles, security, compliance requirements, and user needs to craft a tailored BYOD/CYOD strategy.',
      },
      {
        step: '02',
        title: 'Policy Design & Governance',
        description:
          'Clear policies are defined covering device eligibility, data ownership, permitted monitoring levels, acceptable use rules, and employee agreements.',
      },
      {
        step: '03',
        title: 'Device Selection & Enrollment',
        description:
          'BYOD employees register approved personal devices while CYOD users pick from organization-approved catalogs, enrolled cleanly into MDM/EMM/UEM solutions.',
      },
      {
        step: '04',
        title: 'Security & Compliance Controls',
        description:
          'We enforce containerization (Android Work Profiles, Knox), conditional access, encryption, patch management, and policy enforcement tools.',
      },
      {
        step: '05',
        title: 'Training & Change Management',
        description:
          'We prepare employees and support teams with training materials, peer support channels, and clear policy documentation to ease adoption.',
      },
      {
        step: '06',
        title: 'Ongoing Monitoring & Support',
        description:
          'Using unified endpoint management tools, we continuously monitor device compliance, app usage, security status, and policy adherence.',
      },
      {
        step: '07',
        title: 'Review & Optimization',
        description:
          'Based on analytics and usage patterns, we iterate policies, device offerings, and configuration standards to align with evolving business needs.',
      },
    ],
    stackTitle: 'Mobility Practice: BYOD and CYOD',
    stackSummary:
      'Prakvi’s Mobility Practice specializes in seamless BYOD (Bring Your Own Device) and CYOD (Choose Your Own Device) strategies, helping organizations implement flexible yet secure mobility policies tailored to their needs.',
    stackTabs: [
      { label: 'BYOD', items: ['Device Agnostic Access', 'User-Centric Policies', 'Cloud Sync & Management'] },
      { label: 'CYOD', items: ['Pre-Approved Devices', 'Custom Configuration', 'Centralized Maintenance'] },
      { label: 'Security', items: ['Secure Access Control', 'Biometric & MFA', 'Data Encryption'] },
      { label: 'Tools', items: ['Microsoft Intune', 'Mobile Device Management', 'Apple Business Manager', 'Android Enterprise'] },
    ],
    faqs: [
      {
        question: 'How does Prakvi balance BYOD convenience with data privacy?',
        answer:
          'We deploy containerization such as Android Work Profiles and Samsung Knox alongside clear data ownership policies so corporate apps stay encrypted without touching personal content.',
      },
      {
        question: 'Which UEM and MDM platforms do you support?',
        answer:
          'We manage Microsoft Intune, Apple Business Manager, Android Enterprise, and leading MDM/EMM/UEM stacks.',
      },
    ],
    featuredImage: generatedImages.serviceMobileDevices3d,
  },

  // 3. Business Intelligence
  {
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    category: 'enterprise',
    tagline: 'Transform Data into Actionable Insights with Prakvi’s Business Intelligence Solutions',
    shortDesc:
      'Interactive dashboards, ETL data pipelines, predictive modeling, and real-time enterprise reporting across modern cloud warehouses.',
    fullDesc:
      'In today’s data driven economy, businesses generate vast amounts of information, but without the right tools and expertise, it remains untapped potential. At Prakvi, we help organizations across India transform complex datasets into actionable insights with our Business Intelligence (BI) services. From interactive dashboards and advanced analytics to real-time reporting, we deliver tailored BI strategies that drive informed decisions, growth, and competitive advantage.',
    iconName: 'BarChart3',
    badge: 'BI Consulting & Analytics',
    offeringsTitle: 'Additional Services',
    offeringsSubtitle: 'Our comprehensive Business Intelligence solutions are customized to align with your unique business requirements.',
    businessChallenge:
      'Valuable operational data often remains trapped in disconnected databases without ETL automation or cohesive executive dashboards.',
    howWeHelp:
      'We build end-to-end ETL data pipelines, data warehouses, and self-service BI dashboards across Power BI, Tableau, Looker, Snowflake, and BigQuery.',
    capabilities: [
      {
        title: 'Data Analytics',
        description:
          'Descriptive, diagnostic, predictive, and prescriptive analytics paired with big data processing and self-service BI tools.',
        icon: 'BarChart2',
      },
      {
        title: 'Business Analytics',
        description:
          'Real-time data processing, custom dashboards, reporting, and predictive and prescriptive analysis tailored to leadership KPIs.',
        icon: 'PieChart',
      },
      {
        title: 'Cloud Services & Data Warehousing',
        description:
          '24/7 cloud monitoring, system optimization, and high-availability data warehouses across Snowflake, Redshift, and BigQuery.',
        icon: 'Cloud',
      },
      {
        title: 'Infrastructure Management',
        description:
          'IT asset monitoring, scalability planning, and performance tuning for reliable enterprise BI workloads.',
        icon: 'Server',
      },
      {
        title: 'Staffing & Workforce Solutions',
        description:
          'Flexible contract and full-time staffing for BI developers, data engineers, and analytics specialists.',
        icon: 'Users',
      },
      {
        title: 'Digital Marketing Intelligence',
        description:
          'SEO, content analytics, online campaign attribution, and CMS performance measurement.',
        icon: 'TrendingUp',
      },
    ],
    businessBenefits: [
      {
        title: 'Real-Time Executive Visibility',
        description: 'Self-service dashboards turn complex enterprise datasets into clear, instant reports.',
        metric: 'Live BI',
      },
      {
        title: 'Reliable ETL Automation',
        description: 'Automated pipelines built with Apache Airflow, Talend, Informatica, and Fivetran ensure clean data.',
        metric: 'Clean Pipelines',
      },
      {
        title: 'Modern Cloud Stack',
        description: 'Seamless compatibility with Microsoft SQL Server, Snowflake, BigQuery, Redshift, Power BI, and Tableau.',
        metric: 'Multi-Cloud BI',
      },
    ],
    processTitle: 'Why Choose Prakvi for Business Intelligence?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Assessment',
        description:
          'Understand client goals, data sources, and current maturity level. Identify key metrics and strategic objectives.',
      },
      {
        step: '02',
        title: 'Data Planning & Preparation',
        description:
          'Architect ETL pipelines, perform data cleaning, conversion, and ensure quality across systems.',
      },
      {
        step: '03',
        title: 'Analytics Design & Modeling',
        description:
          'Build descriptive, diagnostic, predictive, and prescriptive models tailored to business use cases.',
      },
      {
        step: '04',
        title: 'Dashboard & Reporting Setup',
        description:
          'Develop custom dashboards and self-service BI tools for stakeholders to access insights in real time.',
      },
      {
        step: '05',
        title: 'Deployment & Integration',
        description:
          'Implement BI frameworks and integrate with existing infrastructure; ensure smooth adoption.',
      },
      {
        step: '06',
        title: 'Monitoring & Optimization',
        description:
          'Ongoing performance tracking, fine-tuning of data flows and models, and iterative improvements.',
      },
      {
        step: '07',
        title: 'Training & Support',
        description:
          'Empower end-users through training programs, documentation, and user support for long-term success.',
      },
    ],
    stackTitle: 'Business Intelligence Stack',
    stackSummary:
      'At Prakvi, we turn raw data into actionable insights using a modern stack of BI tools, platforms, and data technologies.',
    stackTabs: [
      { label: 'Data Platforms', items: ['Microsoft SQL Server', 'Snowflake', 'Google BigQuery', 'Amazon Redshift'] },
      { label: 'Analytics & Visualization', items: ['Power BI', 'Tableau', 'Looker', 'Google Data Studio'] },
      { label: 'ETL Tools', items: ['Apache Airflow', 'Talend', 'Informatica', 'Fivetran'] },
      { label: 'Cloud & Infra', items: ['AWS', 'Azure', 'Google Cloud', 'On-Premise Infra'] },
    ],
    faqs: [
      {
        question: 'Which data warehouses and ETL tools do you work with?',
        answer:
          'We integrate Microsoft SQL Server, Snowflake, Google BigQuery, and Amazon Redshift using Apache Airflow, Talend, Informatica, and Fivetran.',
      },
      {
        question: 'Can you train our business teams on Power BI or Tableau?',
        answer:
          'Yes. Training & Support is an explicit stage of our BI methodology, ensuring analysts and executives can build and explore self-service reports confidently.',
      },
    ],
    featuredImage: generatedImages.serviceBiAnalytics3d,
  },

  // 4. Supply Chain Management
  {
    id: 'supply-chain-management',
    slug: 'supply-chain-management',
    title: 'Supply Chain Management',
    category: 'enterprise',
    tagline: 'Optimizing Your Supply Chain for Speed, Efficiency, and Resilience',
    shortDesc:
      'End-to-end logistics, inventory optimization, procurement, demand forecasting, and real-time supply chain technology integration.',
    fullDesc:
      'In today’s fast-paced marketplace, efficient supply chain management is vital for success. Prakvi’s SCM services in India optimize operations, cut costs, enhance visibility, and enable faster response to market changes. From procurement, inventory, and logistics to distribution and demand forecasting, we deliver end-to-end supply chain solutions using analytics, automation, and real-time insights for resilient, agile supply chains.',
    iconName: 'Truck',
    badge: 'SCM & Logistics',
    offeringsTitle: 'Our SCM Services',
    offeringsSubtitle: 'Empower your operations with comprehensive, tailor-made SCM services designed to fit your business perfectly.',
    businessChallenge:
      'Fragmented logistics, demand volatility, excess holding stock, and limited vendor visibility erode operating margins.',
    howWeHelp:
      'We align your supply chain to the 5-stage SCOR/best-practice framework (Planning → Sourcing → Manufacturing → Delivery → Returns) using AI optimization and ERP integration.',
    capabilities: [
      {
        title: 'Logistics & Transportation Management',
        description: 'Faster, cost-effective, and optimized route planning, carrier selection, and delivery execution.',
        icon: 'Truck',
      },
      {
        title: 'Inventory & Warehouse Optimization',
        description: 'Reduce excess stock, improve stock visibility and accuracy, and streamline warehouse storage.',
        icon: 'Package',
      },
      {
        title: 'Demand Forecasting & Planning',
        description: 'Data-driven insights, capacity planning, and production scheduling for smarter decision-making.',
        icon: 'TrendingUp',
      },
      {
        title: 'Supplier & Vendor Management',
        description: 'Stronger supplier relationships, better pricing, scorecards, and seamless procurement workflows.',
        icon: 'Handshake',
      },
      {
        title: 'SCM Technology Integration',
        description: 'AI, IoT, ERP integration, mobile SCM, and real-time supply chain analytics.',
        icon: 'Cpu',
      },
    ],
    businessBenefits: [
      {
        title: 'End-to-End Network Resilience',
        description: 'Transform fragmented logistics into responsive, demand-driven supply networks.',
        metric: '5-Stage SCM',
      },
      {
        title: 'Balanced Inventory Models',
        description: 'Maintain optimal just-in-time vs. safety stock levels from raw materials to finished goods.',
        metric: 'Optimized Stock',
      },
      {
        title: 'Real-Time Visibility',
        description: 'Unified ERP, transportation management, warehouse management, and last-mile tracking.',
        metric: 'Live Telemetry',
      },
    ],
    processTitle: 'Why Choose Prakvi for Supply Chain Management?',
    processSubtitle: 'Aligned with best-practice SCM frameworks: Planning → Sourcing → Manufacturing → Delivery → Returns.',
    deliverySteps: [
      {
        step: '01',
        title: 'Planning',
        description:
          'Define supply chain objectives and KPIs, forecast demand using analytics and ERP tools, design sourcing strategies and inventory buffers, and incorporate risk contingency plans.',
      },
      {
        step: '02',
        title: 'Sourcing',
        description:
          'Identify, evaluate, and negotiate with reliable suppliers; ensure quality, ethical compliance, and pricing efficiency; and build supplier scorecards and contingency networks.',
      },
      {
        step: '03',
        title: 'Manufacturing & Inventory Management',
        description:
          'Schedule production and manage assembly, testing, and packaging while tracking inventory from raw materials to finished goods with balanced lean and resilient stock.',
      },
      {
        step: '04',
        title: 'Delivery (Distribution & Logistics)',
        description:
          'Manage warehousing, order fulfillment, transport, and last-mile delivery with optimized route planning and carrier selection.',
      },
      {
        step: '05',
        title: 'Returns (Reverse Logistics)',
        description:
          'Handle customer returns efficiently, process refunds or replacements, inspect or refurbish items, and feed return insights back into quality improvements.',
      },
    ],
    stackTitle: 'Supply Chain Management (SCM)',
    stackSummary:
      'Prakvi transforms fragmented logistics into seamless, resilient networks that adapt to market volatility and drive tangible bottom-line results.',
    stackTabs: [
      { label: 'Planning', items: ['Demand Forecasting', 'Production Planning', 'Capacity Planning', 'Network Optimization'] },
      { label: 'Logistics', items: ['Transportation Management', 'Warehouse Management', 'Last Mile Delivery', 'Global Trade Management'] },
      { label: 'Inventory', items: ['Stock Visibility', 'Inventory Analytics', 'Replenishment Planning', 'Stock Allocation'] },
      { label: 'Technology', items: ['AI Optimization', 'ERP Integration', 'Real-Time Analytics', 'Risk Management', 'Mobile SCM', 'Cloud Deployment'] },
    ],
    faqs: [
      {
        question: 'Does Prakvi’s SCM practice cover reverse logistics and returns?',
        answer:
          'Yes. Our 5-stage SCM model includes dedicated Returns (Reverse Logistics) workflows covering inspections, refurbishing, restocking, and quality feedback.',
      },
      {
        question: 'Can you integrate SCM workflows with our existing ERP?',
        answer:
          'Yes, our technology layer supports direct ERP integration, real-time analytics dashboards, mobile SCM access, and cloud deployments.',
      },
    ],
    featuredImage: generatedImages.serviceArchitecture3d,
  },

  // 5. Workforce Solution
  {
    id: 'workforce-solution',
    slug: 'workforce-solution',
    title: 'Workforce Solution',
    category: 'enterprise',
    tagline: 'Build the Right Team, Drive the Right Results',
    shortDesc:
      'End-to-end workforce solutions, permanent and contract talent acquisition, onboarding integration, and strategic workforce planning.',
    fullDesc:
      'In a rapidly evolving business landscape, having the right talent at the right time is critical for success. At Prakvi, we deliver end-to-end workforce solutions and workforce management services that help organizations across India attract, hire, and retain top talent. Whether you need permanent workforce solutions, contract workforce, or vendor management staffing, our customized approach leverages deep market insights, advanced sourcing strategies, and a commitment to quality.\n\nFrom startups to large enterprises, we enable scalable workforce support, reduce hiring time, and improve talent retention.',
    iconName: 'UserCheck',
    badge: 'Strategic Workforce Solutions',
    offeringsTitle: 'Our Other Services Offered',
    offeringsSubtitle: 'We provide end-to-end workforce solutions customized to meet your specific business needs',
    businessChallenge:
      'Peak project workloads, complex compliance overhead, and fragmented hiring processes prevent organizations from scaling agile teams on demand.',
    howWeHelp:
      'We act as a strategic partner combining specialized talent acquisition, streamlined onboarding workflows, and ongoing workforce optimization.',
    capabilities: [
      {
        title: 'Professional Staffing Services',
        description: 'Flexible staffing for the changing needs of your organization and industry.',
        icon: 'Users',
        points: [
          'Temporary, contract, and direct-hire workforce',
          'Specialized talent acquisition for tech, analytics, and operations',
          'On-demand scaling for projects and peak workloads',
        ],
      },
      {
        title: 'Human Resource Management System (HRMS)',
        description: 'An integrated platform powered by AI to streamline HR functions.',
        icon: 'Cpu',
        points: [
          'Automated recruitment workflows',
          'Payroll and attendance tracking',
          'Performance evaluation and employee engagement modules',
        ],
      },
      {
        title: 'Enterprise Solutions / Tech & Workforce Consulting',
        description: 'Digital transformation services that combine technology consulting with workforce strategy.',
        icon: 'Layers',
        points: [
          'IT consulting for modern architecture and workflows',
          'Workforce planning tied to business transformation',
        ],
      },
    ],
    businessBenefits: [
      {
        title: 'Faster Time-to-Productivity',
        description: 'Seamless onboarding, documentation, and compliance handling get specialists contributing quickly.',
        metric: '7-Stage Model',
      },
      {
        title: 'Unified Workforce Governance',
        description: 'Streamlined candidate tracking, attendance governance, and KPI evaluation across active teams.',
        metric: 'KPI Governed',
      },
      {
        title: 'Cross-Functional Talent',
        description: 'Deep recruiting reach across IT & Engineering, Healthcare, Legal & Compliance, and Finance & Analytics.',
        metric: 'End-to-End',
      },
    ],
    processTitle: 'Why Choose Prakvi for Workforce Solutions?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Consultation & Needs Assessment',
        description:
          'Engage with client leadership to define workforce objectives, roles, skills, and engagement duration.',
      },
      {
        step: '02',
        title: 'Strategic Talent Design',
        description:
          'Create a flexible staffing blueprint—covering short-term, contract, or permanent placements aligned to project goals.',
      },
      {
        step: '03',
        title: 'Candidate Sourcing & Screening',
        description:
          'Tap into Prakvi’s talent pool, deploy targeted outreach, and conduct resume reviews, skills assessments, and interviews.',
      },
      {
        step: '04',
        title: 'Onboarding & Workforce Deployment',
        description:
          'Seamlessly integrate new resources into client teams, manage documentation, compliance, and expedite time-to-productivity.',
      },
      {
        step: '05',
        title: 'HRMS Integration (Optional)',
        description:
          'Deploy AI-powered HRMS to centralize tracking of recruitment, payroll, attendance, and performance metrics.',
      },
      {
        step: '06',
        title: 'Performance Monitoring & Scaling',
        description:
          'Monitor staff effectiveness and project alignment; adjust workforce size or skill sets as needs evolve.',
      },
      {
        step: '07',
        title: 'Ongoing Support & Relationship Management',
        description:
          'Maintain ongoing communication with stakeholders, handle contract renewals or conversions, and facilitate workforce optimization.',
      },
    ],
    stackTitle: 'Workforce Solutions',
    stackSummary:
      'Prakvi positions Workforce Solution as its lead service, offering more than just staffing it delivers a strategic partnership to optimize human capital, enhance operational efficiency, and drive project success.',
    stackTabs: [
      { label: 'Talent Acquisition', items: ['End-to-End Recruitment', 'Candidate Screening', 'Contract Staffing', 'Permanent Hiring'] },
      { label: 'Project-Based Hiring', items: ['Short-Term Projects', 'Dedicated Teams', 'Flexible Engagements'] },
      { label: 'Specialized Roles', items: ['IT & Engineering', 'Healthcare Professionals', 'Legal & Compliance', 'Finance & Analytics'] },
      { label: 'Tools & Platforms', items: ['LinkedIn Recruiter', 'Internal Talent Pool', 'Applicant Tracking System', 'Collaboration Tools'] },
    ],
    faqs: [
      {
        question: 'Can Prakvi integrate with our internal onboarding and project tools?',
        answer:
          'Yes. Our team aligns smoothly with your client onboarding, access compliance, and enterprise reporting workflows.',
      },
      {
        question: 'What specialized domains can you staff under Workforce Solutions?',
        answer:
          'We cover IT & Engineering, Healthcare Professionals, Legal & Compliance, and Finance & Analytics across permanent, contract, and project-based models.',
      },
    ],
    featuredImage: generatedImages.serviceStaffingTeam,
  },

  // 6. System Integration
  {
    id: 'system-integration',
    slug: 'system-integration',
    title: 'System Integration',
    category: 'enterprise',
    tagline: 'Connecting Systems for Seamless Business Operations',
    shortDesc:
      'Connect ERP, CRM, cloud platforms, APIs, and legacy enterprise environments into a unified, interoperable digital ecosystem.',
    fullDesc:
      'In the digital era, enterprises use multiple applications, platforms, and technologies, but without effective system integration, they operate in silos causing inefficiencies and data inconsistencies. Prakvi’s System Integration Services in India connect diverse IT systems, applications, and data sources into a unified, scalable, and secure environment. We offer ERP integration, CRM synchronization, API development, cloud integration, and legacy system modernization, ensuring interoperability, real-time data flow, and better productivity.',
    iconName: 'Plug',
    badge: 'ERP, CRM & API Integration',
    offeringsTitle: 'Our System Integration Services',
    offeringsSubtitle: 'Our comprehensive system integration services are designed to meet your unique business needs.',
    businessChallenge:
      'Isolated ERP, CRM, and logistics systems create manual reconciliation delays, broken data flows, and inconsistent customer or financial records.',
    howWeHelp:
      'We engineer clean APIs, Enterprise Service Bus (ESB) middleware, cloud-to-on-prem pipelines, and compliance-hardened integration layers.',
    capabilities: [
      {
        title: 'Application Integration',
        description: 'Connect diverse enterprise applications for seamless interoperability across departments.',
        icon: 'Plug',
      },
      {
        title: 'Cloud Integration',
        description: 'Unify cloud and on-premises systems for a hybrid, scalable architecture.',
        icon: 'Cloud',
      },
      {
        title: 'Data Integration & Migration',
        description: 'Ensure secure, efficient data flow and validated migration across enterprise platforms.',
        icon: 'Database',
      },
      {
        title: 'Enterprise Service Bus (ESB) Implementation',
        description: 'Enable fast, reliable communication between microservices using MuleSoft, Camel, and Boomi.',
        icon: 'Network',
      },
      {
        title: 'Security & Compliance Integration',
        description: 'Build a secure and regulation-compliant IT framework across every API and message queue.',
        icon: 'ShieldCheck',
      },
    ],
    businessBenefits: [
      {
        title: 'Unified Enterprise Ecosystem',
        description: 'Bridge SAP, Oracle E-Business Suite, Microsoft Dynamics, Salesforce, and logistics platforms.',
        metric: 'Zero Silos',
      },
      {
        title: 'Real-Time Interoperability',
        description: 'Modern ESB middleware, event queues, and REST/API endpoints keep records synchronized.',
        metric: 'Live Sync',
      },
      {
        title: 'Non-Disruptive Rollout',
        description: 'Structured testing, UAT validation, and observability tools guarantee reliable cutovers.',
        metric: '6-Stage QA',
      },
    ],
    processTitle: 'Why Choose Prakvi for System Integration?',
    processSubtitle: 'A proven 6-stage methodology ensuring reliable, interoperable enterprise systems.',
    deliverySteps: [
      {
        step: '01',
        title: 'Assessment & Strategy',
        description:
          'Conduct a comprehensive review of your existing systems and workflows and define integration goals and KPIs aligned with business outcomes.',
      },
      {
        step: '02',
        title: 'Architectural Design',
        description:
          'Design unified architecture and data mapping across platforms, establishing integration patterns across APIs, middleware, ETL workflows, and messaging queues.',
      },
      {
        step: '03',
        title: 'Implementation & Configuration',
        description:
          'Develop and configure API endpoints, data pipelines, and monitoring dashboards on secure, high-availability infrastructure.',
      },
      {
        step: '04',
        title: 'Testing & Validation',
        description:
          'Execute unit, system, and user acceptance testing to validate data accuracy, performance, and reliability across scenarios.',
      },
      {
        step: '05',
        title: 'Deployment & Roll-Out',
        description:
          'Plan and manage production deployment with minimal disruption while providing complete documentation and user training.',
      },
      {
        step: '06',
        title: 'Monitoring & Continuous Optimization',
        description:
          'Implement monitoring tools for system health and error alerts, periodically optimizing integration workflows from real-world usage data.',
      },
    ],
    stackTitle: 'System Integration Service',
    stackSummary:
      'Prakvi’s System Integration Service is your bridge to unified, seamless operational efficiency, enabling disparate platforms to communicate, collaborate, and contribute to a cohesive digital ecosystem.',
    stackTabs: [
      { label: 'Enterprise Systems', items: ['SAP', 'Oracle E-Business Suite', 'Microsoft Dynamics', 'Salesforce', 'Logistics Systems'] },
      { label: 'Integration Middleware', items: ['MuleSoft', 'Apache Camel', 'Dell Boomi', 'WSO2', 'IBM App Connect'] },
      { label: 'Data Platforms', items: ['Oracle', 'SQL Server', 'MySQL', 'MongoDB', 'Data Lakes'] },
      { label: 'Integration Tools', items: ['Git', 'Docker', 'AWS Integration Services', 'Azure Logic Apps', 'Google Cloud Functions', 'CI/CD Tools'] },
    ],
    faqs: [
      {
        question: 'Which ESB and integration middleware platforms do you support?',
        answer:
          'We specialize in MuleSoft, Apache Camel, Dell Boomi, WSO2, IBM App Connect, AWS Integration Services, and Azure Logic Apps.',
      },
      {
        question: 'Can you connect on-premises ERP installations with cloud SaaS applications?',
        answer:
          'Yes. Hybrid Cloud Integration is a core service area uniting SAP, Oracle EBS, Dynamics, and Salesforce with minimal disruption.',
      },
    ],
    featuredImage: generatedImages.serviceArchitecture3d,
  },

  // 7. Cloud Services
  {
    id: 'cloud-services',
    slug: 'cloud-services',
    title: 'Cloud Services',
    category: 'enterprise',
    tagline: 'Scalable, Secure, and Future Ready Cloud Solutions',
    shortDesc:
      'End-to-end cloud consulting, migration, multi-cloud deployment, security hardening, and 24/7 managed optimization across AWS, Azure, and GCP.',
    fullDesc:
      "In today's digital first world, Prakvi delivers end-to-end cloud services in India, offering speed, scalability, and security. Our cloud migration services, multicloud solutions, and managed cloud services help modernize IT infrastructure, cut costs, and boost innovation. Partnering with AWS, Azure, and Google Cloud, we ensure seamless deployment, optimization, and secure, business-driven cloud operations.",
    iconName: 'Cloud',
    badge: 'Cloud Migration & Management',
    offeringsTitle: 'Other Services Offered',
    offeringsSubtitle: 'We provide end-to-end cloud services customized to meet your specific business requirements.',
    businessChallenge:
      'Rigid legacy infrastructure, unplanned cloud spend, and complex compliance mandates hinder digital agility and application reliability.',
    howWeHelp:
      'We deliver structured cloud readiness assessments, zero-downtime workload migration, Docker/Kubernetes orchestration, and ongoing cost/security management.',
    capabilities: [
      {
        title: 'System Integration (Hybrid Architectures)',
        description: 'Ensure seamless connectivity between cloud and on-premises environments.',
        points: ['Hybrid cloud architecture design', 'Data integration across platforms', 'Secure migration and continuous synchronization'],
        icon: 'Plug',
      },
      {
        title: 'Cloud Advisory & Migration',
        description: 'Strategic guidance and execution across cloud use cases.',
        points: ['Cloud readiness assessments', 'Vendor and platform selection', 'Migration planning and execution'],
        icon: 'Cloud',
      },
      {
        title: 'Infrastructure Management',
        description: 'Ongoing support and optimization for your cloud and hybrid environments.',
        points: ['Cloud, hybrid and on-premises environment monitoring', 'Scalability and performance tuning', 'Security hardening and compliance support'],
        icon: 'ShieldCheck',
      },
    ],
    businessBenefits: [
      {
        title: 'Multi-Cloud Agility',
        description: 'Architect and manage portable workloads cleanly across AWS, Microsoft Azure, and Google Cloud.',
        metric: 'AWS · Azure · GCP',
      },
      {
        title: '9-Step Cloud Lifecycle',
        description: 'Comprehensive delivery from readiness evaluation through launch, monitoring, and continuous evolution.',
        metric: '9-Stage Delivery',
      },
      {
        title: 'Security & Compliance Built-In',
        description: 'Access controls, backup/DR, security audits, and performance optimization safeguard critical assets.',
        metric: '24/7 Managed',
      },
    ],
    processTitle: 'Why Choose Prakvi for Cloud Services?',
    processSubtitle: 'A proven methodology that ensures successful project delivery.',
    deliverySteps: [
      {
        step: '01',
        title: 'Strategic Planning & Assessment',
        description:
          'Collaborate closely with clients to define desired business outcomes, assess current infrastructure readiness, and select the optimal cloud roadmap.',
      },
      {
        step: '02',
        title: 'Cloud Readiness Evaluation',
        description:
          'Identify workloads fit for cloud migration, prepare architecture blueprints, and pinpoint risks and mitigation measures.',
      },
      {
        step: '03',
        title: 'Cloud Advisory & Platform Selection',
        description:
          'Evaluate leading providers (e.g., AWS, Azure, Google Cloud), choose environments that align with objectives, and develop a strategic plan for deployment.',
      },
      {
        step: '04',
        title: 'Migration & Integration Execution',
        description:
          'Seamlessly transfer data and applications, implement ETL pipelines where needed, and integrate cloud resources with existing systems—including hybrid deployment when applicable.',
      },
      {
        step: '05',
        title: 'System Integration & Orchestration',
        description:
          'Unify disparate systems into coherent architecture, ensuring secure, efficient data flow across cloud and on-prem platforms.',
      },
      {
        step: '06',
        title: 'Launch & Deployment',
        description:
          'Deploy workloads to your cloud environment, configure access controls, set up backup, disaster recovery, and ensure operational readiness.',
      },
      {
        step: '07',
        title: 'Monitoring & Optimization',
        description:
          'Implement ongoing performance monitoring, cost oversight, fault detection, and tuning to continuously improve the infrastructure.',
      },
      {
        step: '08',
        title: 'Security & Compliance Management',
        description:
          'Apply rigorous security controls, access management, audits, and compliance frameworks to safeguard data and operations.',
      },
      {
        step: '09',
        title: 'Support & Continuous Evolution',
        description:
          'Provide ongoing support services, capacity scaling, upgrades, and continuous architecture refinement as business needs evolve.',
      },
    ],
    stackTitle: 'Cloud Services',
    stackSummary:
      'Prakvi positions Cloud Services as its lead offering, delivering expert consulting, secure migration, and ongoing cloud management to help businesses harness the full power of the cloud.',
    stackTabs: [
      { label: 'Consulting', items: ['Cloud Strategy', 'Architecture Planning', 'Security Assessment'] },
      { label: 'Migration', items: ['Data Migration', 'App Migration', 'Legacy System Integration'] },
      { label: 'Management', items: ['Monitoring & Support', 'Performance Optimization', 'Compliance & Security'] },
      { label: 'Cloud Tools', items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'] },
    ],
    faqs: [
      {
        question: 'Which cloud providers does Prakvi support?',
        answer:
          'We partner across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), utilizing Docker and Kubernetes for portable workloads.',
      },
      {
        question: 'Do you support hybrid cloud models alongside legacy infrastructure?',
        answer:
          'Yes, our Hybrid Architectures capability designs secure connectivity and data synchronization between public clouds and on-premises environments.',
      },
    ],
    featuredImage: generatedImages.serviceCloud3d,
  },

  // 8. Business Analytics
  {
    id: 'business-analytics',
    slug: 'business-analytics',
    title: 'Business Analytics',
    category: 'enterprise',
    tagline: 'Turning Data into Actionable Business Analytics',
    shortDesc:
      'Tailored descriptive, predictive, and prescriptive analytics, statistical modeling, and automated performance reporting.',
    fullDesc:
      'In today’s data-driven world, raw information is abundant but only the right business analytics transforms it into a competitive advantage. Prakvi’s Business Analytics Services in India help organizations harness the power of advanced analytics, AI-driven insights, and industry expertise to improve decision-making, optimize operations, and accelerate growth. From predictive analytics and prescriptive analytics to real-time performance dashboards and data visualization, we deliver tailored, scalable solutions that turn data into measurable business value.',
    iconName: 'PieChart',
    badge: 'Data Insights & Predictive Analytics',
    offeringsTitle: 'Our Business Analytics Services',
    offeringsSubtitle: 'Our comprehensive Business Analytics services are customized to meet your unique business requirements.',
    businessChallenge:
      'Abundant raw data without structured cleaning, predictive modeling, or decision workflows leaves critical commercial insights hidden.',
    howWeHelp:
      'We deliver end-to-end statistical analysis, ML forecasting, scenario simulation, and real-time reporting dashboards.',
    capabilities: [
      {
        title: 'Descriptive Analytics',
        description: 'We analyze historical data to uncover trends and performance patterns.',
        icon: 'BarChart3',
      },
      {
        title: 'Predictive Analytics',
        description: 'Our team of experts leverages AI and machine learning to forecast future outcomes.',
        icon: 'Sparkles',
      },
      {
        title: 'Prescriptive Analytics',
        description: 'We implement data-backed strategies for optimal decision-making.',
        icon: 'Target',
      },
      {
        title: 'Real-Time Data Processing',
        description: 'We get you instant insights for agile business operations.',
        icon: 'Zap',
      },
      {
        title: 'Custom Dashboard & Reporting',
        description: 'We create and visualize data with interactive and dynamic analytics tools.',
        icon: 'Monitor',
      },
    ],
    businessBenefits: [
      {
        title: 'Predictive & Prescriptive Clarity',
        description: 'Move beyond historical charts to statistical forecasting and scenario optimization.',
        metric: 'AI & ML Models',
      },
      {
        title: 'Automated Data Pipelines',
        description: 'Embed standardized data cleaning, BigQuery/Snowflake storage, and live alerting.',
        metric: 'Live Reporting',
      },
      {
        title: 'Proven Data Science Stack',
        description: 'Powered by Python, R, SAS, SPSS, Power BI, Tableau, D3.js, and Snowflake.',
        metric: 'Full Stack BI',
      },
    ],
    processTitle: 'Why Choose Prakvi for Business Analytics?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Data Collection & Integration',
        description: 'Gather structured and unstructured data across systems and integrate them into a unified repository.',
        points: [
          'Connect ERP, CRM, cloud, and operational data sources',
          'Unify structured and unstructured inputs for analysis',
          'Bring integrated data into a trusted analytics repository',
        ],
      },
      {
        step: '02',
        title: 'Data Cleaning & Preparation',
        description: 'Ensure high data quality by standardizing formats, filling gaps, and removing inconsistencies.',
        points: [
          'Standardize formats and resolve missing values',
          'Validate quality, consistency, and readiness',
          'Prepare clean datasets for reliable analysis',
        ],
      },
      {
        step: '03',
        title: 'Descriptive Analysis',
        description: 'Visualize past performance, uncover trends, and monitor key metrics using descriptive techniques.',
        points: [
          'Surface patterns, relationships, and anomalies',
          'Use findings to shape the analytical approach',
          'Reveal trends that merit deeper investigation',
        ],
      },
      {
        step: '04',
        title: 'Predictive Modeling',
        description: 'Apply statistical and machine-learning models to forecast future behaviors and outcomes.',
        points: [
          'Build statistical and machine-learning forecasts',
          'Evaluate models against business outcomes',
          'Forecast customer, demand, and operational trends',
        ],
      },
      {
        step: '05',
        title: 'Prescriptive Insights',
        description: 'Translate predictions into actionable recommendations through optimization and scenario simulation.',
        points: [
          'Compare scenarios, constraints, and outcomes',
          'Turn forecasts into prioritized recommendations',
          'Identify practical actions to improve business results',
        ],
      },
      {
        step: '06',
        title: 'Deployment & Automation',
        description: 'Embed analytics into operational systems with live dashboards, alerts, and automated reporting workflows.',
        points: [
          'Integrate insights into dashboards and workflows',
          'Automate reporting, alerts, and scheduled refreshes',
          'Make analytics available where teams make decisions',
        ],
      },
      {
        step: '07',
        title: 'Monitoring & Refinement',
        description: 'Continuously evaluate model performance, refine analytics pipelines, and adapt to business changes.',
        points: [
          'Track model and analytics pipeline performance',
          'Refine insights as data and business needs evolve',
          'Respond to changing trends and business conditions',
        ],
      },
    ],
    stackTitle: 'Business Analytics',
    stackSummary:
      'A strategic service transforming your raw data into actionable intelligence, helping you make smarter, data-driven decisions.',
    stackTabs: [
      { label: 'Data Visualization', items: ['Power BI', 'Tableau', 'D3.js', 'Looker'] },
      { label: 'Analytics Tools', items: ['Python', 'R', 'SAS', 'SPSS'] },
      { label: 'Data Storage', items: ['BigQuery', 'Snowflake', 'Redshift', 'MySQL'] },
      { label: 'Platforms & Utilities', items: ['AWS Analytics', 'Azure Synapse', 'Google Data Studio', 'ETL Tools', 'Jupyter Notebook'] },
    ],
    faqs: [
      {
        question: 'What statistical and machine learning tools does Prakvi use?',
        answer:
          'Our data science practice uses Python, R, SAS, SPSS, Jupyter Notebook, Power BI, Tableau, D3.js, and Looker backed by BigQuery, Snowflake, and Redshift.',
      },
      {
        question: 'How do you handle unstructured or inconsistent source data?',
        answer:
          'Every project begins with unified collection and rigorous data cleaning to standardize formats, resolve gaps, and validate integrity before modeling.',
      },
    ],
    featuredImage: generatedImages.serviceBiAnalytics3d,
  },

  // 9. Infrastructure Management
  {
    id: 'infrastructure-management',
    slug: 'infrastructure-management',
    title: 'Infrastructure Management',
    category: 'enterprise',
    tagline: 'Reliable, Scalable, and Secure IT Infrastructure Management',
    shortDesc:
      'Optimize servers, networks, storage, data centers, and hybrid clouds with AI-powered monitoring, security hardening, and SLA uptime.',
    fullDesc:
      "In today's fast-paced digital economy, business success relies on stable, secure, and high-performing IT systems. At Prakvi, we offer comprehensive IT infrastructure management services in India to optimize performance, ensure scalability, and cut operational costs. From data centers, network management services, and server management services to cloud infrastructure management and storage management services, our certified experts use automation, AI-powered monitoring, and best-in-class tools to prevent downtime, improve efficiency, and maximize ROI across industries including IT, manufacturing, BFSI, retail, and healthcare.",
    iconName: 'Server',
    badge: 'IT Infrastructure Solutions',
    offeringsTitle: 'Additional Service Offerings',
    offeringsSubtitle: 'Our Infrastructure Management Services are meticulously designed to align with your specific business requirements.',
    businessChallenge:
      'Infrastructure vulnerabilities, unmonitored network bottlenecks, and manual maintenance increase downtime risk and escalate operational costs.',
    howWeHelp:
      'We implement continuous monitoring, load balancing, storage tuning, security audits, and auto-scaling infrastructure architectures.',
    capabilities: [
      {
        title: 'Cloud Services',
        description: 'Tailored strategies and deployments for modern, resilient cloud infrastructure.',
        points: ['Cloud strategy & consulting', 'Cloud migration & deployment', 'Cloud architecture & infrastructure management',
          'Cloud security & compliance', 'Third-party integrations'],
        icon: 'Cloud',
      },
      {
        title: 'System Integration Services',
        description: 'Bridging applications, databases, and hardware to eliminate silos and drive efficient data flow.',
        points: ['Application-to-hardware alignment', 'Database integration', 'Legacy modernization', 'Performance tuning'],
        icon: 'Plug',
      },
      {
        title: 'Enterprise Architecture & Consulting',
        description: 'Crafting frameworks that tightly align business strategy and IT systems for cohesive transformation.',
        icon: 'Layers',
        points: [
          'Enterprise architecture planning',
          'Technology roadmap development',
          'IT governance & compliance',
          'Digital transformation consulting',
        ],
      },
      {
        title: 'Project Management & Enterprise Solutions',
        description: 'Integrated delivery across business intelligence, CRM/ERP, mobility, and workforce systems.',
        points: ['BI and analytics', 'Workforce solutions', 'ERP / CRM implementation', 'Mobile & BYOD strategy'],
        icon: 'CheckSquare',
      },
    ],
    businessBenefits: [
      {
        title: 'Proactive Downtime Prevention',
        description: 'Automated health checks, network analysis, and threshold alerts resolve incidents early.',
        metric: '24/7 Monitoring',
      },
      {
        title: 'Security & Compliance Hardening',
        description: 'Access control, data encryption, threat detection, and periodic compliance reviews protect systems.',
        metric: 'Zero-Trust Ready',
      },
      {
        title: 'Multi-Industry Reliability',
        description: 'Proven infrastructure operations supporting IT, manufacturing, BFSI, retail, and healthcare.',
        metric: 'High Availability',
      },
    ],
    processTitle: 'Why Choose Prakvi for Infrastructure Management?',
    processSubtitle: 'A proven methodology that ensures successful project delivery.',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Assessment',
        description:
          'Conduct an initial audit of current infrastructure environments to identify vulnerabilities, inefficiencies, and growth constraints.',
        points: ['Initial audit of current infrastructure environments', 'Identify vulnerabilities, inefficiencies, and growth constraints'],
      },
      {
        step: '02',
        title: 'Design & Planning',
        description:
          'Architect an optimized infrastructure model with a clear security, compliance, and scalability roadmap.',
        points: ['Architect an optimized infrastructure model', 'Develop security, compliance, and scalability roadmap'],
      },
      {
        step: '03',
        title: 'Implementation & Integration',
        description:
          'Deploy monitoring tools and configuration automation with seamless integration across on-premises and cloud platforms.',
        points: ['Deploy monitoring tools, automation, and manage configurations', 'Seamless integration with existing systems or cloud platforms'],
      },
      {
        step: '04',
        title: 'Monitoring & Optimization',
        description:
          'Establish continuous performance tracking, threshold alerts, load balancing, and resource tuning for peak uptime.',
        points: ['Continuous performance tracking and threshold alerts', 'Load balancing, resource tuning, and optimization for uptime'],
      },
      {
        step: '05',
        title: 'Security & Compliance Management',
        description:
          'Enforce cybersecurity policies and regulatory controls alongside periodic security audits and compliance reviews.',
        points: ['Enforce cybersecurity policies and regulatory controls', 'Conduct periodic security audits and compliance reviews'],
      },
      {
        step: '06',
        title: 'Support & Continuous Improvement',
        description:
          'Provide ongoing technical support, maintenance, and security patching backed by feedback-driven capacity scaling.',
        points: ['Ongoing technical support, maintenance, and patching', 'Feedback-driven enhancements and growth alignment'],
      },
    ],
    stackTitle: 'IT Infrastructure Management',
    stackSummary:
      'End-to-end management of your IT infrastructure to ensure it is secure, highly scalable, and optimized for peak performance.',
    stackTabs: [
      { label: 'Monitoring', items: ['Infrastructure Monitoring', 'Health Checks', 'Network Analysis', 'Resource Management'] },
      { label: 'Optimization', items: ['Performance Tuning', 'Load Balancing', 'System Optimization', 'Storage Efficiency'] },
      { label: 'Security', items: ['Security Compliance', 'Access Control', 'Data Encryption', 'Threat Detection'] },
      { label: 'Scalability', items: ['Cloud Readiness', 'Auto Scaling', 'Modular Architecture', 'Growth Planning'] },
    ],
    faqs: [
      {
        question: 'Does Prakvi manage both on-premises servers and cloud infrastructure?',
        answer:
          'Yes. We support data centers, network management, server administration, storage management, and multi-cloud environments seamlessly.',
      },
      {
        question: 'Which sectors use Prakvi’s Infrastructure Management services?',
        answer:
          'We support enterprises across IT, manufacturing, BFSI, retail, and healthcare with automated monitoring and security compliance.',
      },
    ],
    featuredImage: generatedImages.serviceCloud3d,
  },

  // 10. Accounting
  {
    id: 'accounting',
    slug: 'accounting',
    title: 'Accounting',
    category: 'enterprise',
    tagline: 'Accurate, Compliant, and Scalable Accounting Solutions',
    shortDesc:
      'End-to-end bookkeeping, general ledger maintenance, payroll processing, tax compliance, financial reporting, and audit support.',
    fullDesc:
      'In a competitive business environment, precise accounting is key to financial stability and growth. Prakvi’s Accounting Services in India provide end-to-end solutions, including bookkeeping, payroll, tax compliance, and financial reporting. Serving startups, SMEs, and enterprises, we combine expertise, modern tools, and compliance to ensure accuracy, efficiency, and cost savings, letting you focus on running your business confidently.',
    iconName: 'Receipt',
    badge: 'Bookkeeping, Payroll & Tax',
    offeringsTitle: 'Our Accounting Services',
    offeringsSubtitle: 'Our comprehensive accounting services are customized to meet your specific business needs.',
    businessChallenge:
      'Disconnected ledgers, manual reconciliations, payroll errors, and complex statutory tax deadlines expose businesses to compliance risk and cash-flow blind spots.',
    howWeHelp:
      'Our accounting specialists standardize bookkeeping, automate payroll cycles, reconcile accounts, and manage timely statutory tax filings.',
    capabilities: [
      {
        title: 'Bookkeeping & Financial Reporting',
        description: 'We ensure simplified, clean, and up-to-date financial records with real-time reporting.',
        icon: 'FileSpreadsheet',
      },
      {
        title: 'Tax Planning & Compliance',
        description: 'Our team of experts minimizes liabilities and ensures tax compliance with proactive strategies.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Payroll Management',
        description: 'We offer seamless, accurate payroll processing for improved efficiency.',
        icon: 'Users',
      },
      {
        title: 'Audits & Risk Assessments',
        description: 'Our team of experts identifies financial risks and ensures internal controls are in place.',
        icon: 'Search',
      },
      {
        title: 'Accounts Payable & Receivable',
        description: 'Our professionals manage cash flow efficiently with structured financial management.',
        icon: 'Receipt',
      },
    ],
    businessBenefits: [
      {
        title: 'Clean, Audit-Ready Ledgers',
        description: 'Consistent daily and monthly journal entries keep financial records transparent year-round.',
        metric: '8-Step Process',
      },
      {
        title: 'Statutory & Tax Confidence',
        description: 'Timely tax calculation, return preparation, and regulatory compliance reduce audit exposure.',
        metric: '100% Compliant',
      },
      {
        title: 'Streamlined Payroll Execution',
        description: 'Automated compensation runs, statutory deductions, and payslip generation save HR and finance hours.',
        metric: 'Automated Payroll',
      },
    ],
    processTitle: 'Why Choose Prakvi for Accounting Services?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Assessment & Onboarding',
        description: 'We review your current financial workflows, systems, and reporting structures to tailor our approach.',
      },
      {
        step: '02',
        title: 'Data Collection & Setup',
        description: 'Gather financial data, access ledgers, bank statements, payroll records, and configure our preferred accounting platforms.',
      },
      {
        step: '03',
        title: 'Daily & Monthly Entries',
        description: 'Record transactions (sales, expenses, receipts) consistently, post journal entries, reconcile accounts, and keep ledgers current.',
      },
      {
        step: '04',
        title: 'Reconciliations & Adjustments',
        description: 'Match bank statements, vendor invoices, and payroll outputs; perform periodic reconciliations and year-end adjustments.',
      },
      {
        step: '05',
        title: 'Payroll Management',
        description: 'Automate and run payroll cycles, process salaries, deductions, benefits, issue payslips, and handle statutory compliances.',
      },
      {
        step: '06',
        title: 'Reporting & Analysis',
        description: 'Prepare standard financial statements and advanced analytics, review results with clients to highlight trends or action areas.',
      },
      {
        step: '07',
        title: 'Taxation & Compliance',
        description: 'Calculate tax obligations, prepare required returns, manage submissions before deadlines, and ensure statutory compliance.',
      },
      {
        step: '08',
        title: 'Continuous Review & Optimization',
        description: 'Periodically reassess processes, suggest optimizations, and implement automation to enhance accuracy and efficiency.',
      },
    ],
    stackTitle: 'Accounting',
    stackSummary:
      'Streamlined and reliable financial management tailored to your operational needs, designed to ensure accuracy, compliance, and strategic insight.',
    stackTabs: [
      {
        label: 'Bookkeeping',
        title: 'Bookkeeping & General Ledger Maintenance',
        description: 'Maintain up-to-date ledgers, journals, and financial records for smooth operations and financial transparency.',
        items: ['General Ledger Maintenance', 'Journal Entries', 'Accounts Payable & Receivable', 'Financial Transparency'],
      },
      {
        label: 'Tax',
        title: 'Tax Preparation & Filing',
        description: 'Ensure compliance with all applicable tax regulations; prepare timely filings to minimize risk and leverage eligible deductions.',
        items: ['Tax Preparation & Filing', 'Statutory Compliance', 'Deduction Optimization', 'Risk Minimization'],
      },
      {
        label: 'Payroll',
        title: 'Payroll Services',
        description: 'Automated, accurate payroll processing to streamline compensation, deductions, benefits, and regulatory filings.',
        items: ['Automated Payroll Runs', 'Salary & Deductions', 'Benefits Administration', 'Regulatory Filings'],
      },
      {
        label: 'Reporting',
        title: 'Financial Reporting & Analysis',
        description: 'Generate periodic financial statements (balance sheet, income, cash flow), with interpretation to inform smarter business decisions.',
        items: ['Balance Sheet & Income Statement', 'Cash Flow Interpretation'],
      },
      {
        label: 'Forensic',
        title: 'Forensic Accounting Support',
        description: 'In-depth investigations and financial audits to detect discrepancies, fraud, or irregularities and safeguard your assets.',
        items: ['Forensic Audits', 'Discrepancy Detection'],
      },
    ],
    faqs: [
      {
        question: 'Who are Prakvi’s Accounting Services built for?',
        answer:
          'We support startups, SMEs, and established enterprises with scalable bookkeeping, payroll, taxation, and periodic financial reporting.',
      },
      {
        question: 'Do you also provide forensic accounting and audit preparation?',
        answer:
          'Yes. Our team conducts in-depth internal controls reviews and forensic accounting investigations to detect discrepancies and protect financial assets.',
      },
    ],
    featuredImage: generatedImages.introEnterpriseCampus,
  },

  // 11. Enterprise Architecture
  {
    id: 'enterprise-architecture',
    slug: 'enterprise-architecture',
    title: 'Enterprise Architecture',
    category: 'enterprise',
    tagline: 'Build a Future Ready Enterprise with Strategic IT Architecture',
    shortDesc:
      'Design agile, TOGAF-aligned technology ecosystems uniting business capability mapping, cloud integration, data governance, and ERP/CRM.',
    fullDesc: "In today's rapidly evolving business landscape, enterprises need an agile, scalable, and strategy-aligned technology foundation. Prakvi's Enterprise Architecture Services in India help design, implement, and optimize IT ecosystems using proven enterprise architecture frameworks like TOGAF. Our certified architects create unified technology roadmaps that connect people, processes, applications, and infrastructure, enabling digital transformation, cloud integration, legacy modernization, and cross-functional collaboration to drive agility, cost efficiency, and innovation.",
    iconName: 'Layers',
    badge: 'TOGAF & Target Architecture',
    offeringsTitle: 'Other Services Offered',
    offeringsSubtitle: 'We provide end-to-end Enterprise Architecture services, customized to meet your unique business requirements',
    businessChallenge:
      'Disjointed IT investments, legacy technical debt, and siloed business capabilities slow down transformation and inflate operating costs.',
    howWeHelp:
      'Using TOGAF and Zachman principles, our certified architects map baseline vs. target states across business, data, application, and infrastructure domains.',
    capabilities: [
      {
        "title": "Information Technology Consulting",
        "description": "Tailored IT strategy architecture that aligns with your business objectives to facilitate transformation.",
        "icon": "Headphones",
        "points": [
          "Strategy design & planning",
          "Roadmap development",
          "Technology advisory",
          "Organizational alignment with tech initiatives"
        ]
      },
      {
        "title": "Infrastructure Management Services",
        "description": "End-to-end operations to keep your IT environment secure, scalable, and high performance.",
        "icon": "Server",
        "points": [
          "System provisioning & monitoring",
          "Security & compliance support",
          "Performance optimization & capacity planning",
          "Patch management & routine maintenance"
        ]
      },
      {
        "title": "System Integration Services",
        "description": "Unified architecture for cloud, hybrid, and legacy systems ensuring efficient data flow and interoperability.",
        "icon": "Plug",
        "points": [
          "Cloud-to-on-premise integration",
          "Data migration & ETL pipelines",
          "API connectivity across platforms",
          "Hybrid architecture design"
        ]
      },
      {
        "title": "Enterprise ERP & CRM Solutions",
        "description": "Implementation and customization of ERP and CRM systems to support enterprise-wide operational needs.",
        "icon": "Layers",
        "points": [
          "ERP adoption & rollout",
          "CRM customization & integration",
          "Business process automation"
        ]
      }
    ],
    businessBenefits: [
      {
        title: 'TOGAF & Zachman Rigor',
        description: 'Structured governance boards, documented architecture policies, and clear maturity assessments.',
        metric: 'TOGAF Aligned',
      },
      {
        title: 'Four-Domain Coherence',
        description: 'Unifies Business Strategy, Application Microservices, Data Governance, and Cloud/On-Prem Infra.',
        metric: '4 EA Domains',
      },
      {
        title: 'Actionable Phased Roadmaps',
        description: 'Initiatives prioritized by business impact, cost, and feasibility for measurable ROI.',
        metric: '6-Stage Delivery',
      },
    ],
    processTitle: 'Why Choose Prakvi for Enterprise Architecture?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        "step": "01",
        "title": "Assess & Align",
        "description": "Analyze the current business goals, strategies, and existing IT landscape to align the architecture with organizational objectives.",
        "points": [
          "Identify strategic priorities",
          "Conduct maturity and gap assessments",
          "Define baseline and target architectural states"
        ]
      },
      {
        "step": "02",
        "title": "Design Target Architecture",
        "description": "Develop a structured, future-state architecture that integrates business strategy and technical capabilities.",
        "points": [
          "Define architectural domains: business, data, application, infrastructure",
          "Design integration and deployment patterns (e.g., hybrid cloud, microservices)",
          "Establish security, resiliency, and observability principles"
        ]
      },
      {
        "step": "03",
        "title": "Governance & Frameworks",
        "description": "Implement governance mechanisms to guide architecture adoption and ensure compliance.",
        "points": [
          "Use industry frameworks (e.g., TOGAF, Zachman)",
          "Document architecture principles, policies, and standards",
          "Conduct architecture review boards"
        ]
      },
      {
        "step": "04",
        "title": "Roadmap & Planning",
        "description": "Translate architectural design into actionable steps to reach the target state.",
        "points": [
          "Build phased implementation roadmap",
          "Prioritize initiatives by impact and feasibility",
          "Estimate costs and resources"
        ]
      },
      {
        "step": "05",
        "title": "Implementation & Integration",
        "description": "Execute the architecture plan with a combination of internal and external systems.",
        "points": [
          "Coordinate ERP/CRM, integration, and infrastructure deployments",
          "Secure smooth data migration and API orchestration",
          "Enable hybrid or cloud-native system implementations"
        ]
      },
      {
        "step": "06",
        "title": "Monitoring & Evolution",
        "description": "Ensure the architecture remains effective and adapts over time.",
        "points": [
          "Monitor performance, scalability, security, and compliance",
          "Conduct periodic reviews and updates",
          "Drive continuous improvement based on feedback and evolving business needs"
        ]
      }
    ],
    stackTitle: 'Enterprise Architecture',
    stackSummary:
      'We design and implement robust Enterprise Architecture (EA) frameworks that bridge the gap between business strategy and technology.',
    stackTabs: [
      { label: 'Strategy', items: ['Business Capability Mapping', 'Value Stream Architecture', 'Target Operating Models', 'Strategic Alignment'] },
      { label: 'Application', items: ['Microservices', 'API Gateways', 'SOA', 'Application Integration'] },
      { label: 'Data', items: ['Data Governance', 'Data Modeling', 'Data Security', 'Data Lineage'] },
      { label: 'Infrastructure', items: ['Cloud Platforms (AWS, Azure, GCP)', 'On-Prem Infrastructure', 'Containerization', 'DevOps Toolchain'] },
    ],
    faqs: [
      {
        question: 'Which architecture frameworks does Prakvi apply?',
        answer:
          'Our certified enterprise architects utilize TOGAF and Zachman frameworks, pragmatic Architecture Review Boards (ARB), and domain-driven modeling.',
      },
      {
        question: 'How does Enterprise Architecture connect to our ERP and cloud platforms?',
        answer:
          'We design integrated target topologies spanning Strategy, Application Microservices/API Gateways, Data Governance, and AWS/Azure/GCP or on-prem infrastructure.',
      },
    ],
    featuredImage: generatedImages.serviceArchitecture3d,
  },

  // 12. IT Consulting
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT Consulting',
    category: 'enterprise',
    tagline: 'Transform Your Business with Expert IT Consulting',
    shortDesc:
      'Strategic IT consulting covering digital transformation roadmaps, legacy modernization, cloud migration, cybersecurity, and governance.',
    fullDesc:
      'In today’s fast-paced digital economy, technology drives innovation and growth. Prakvi’s IT Consulting Services in India help businesses strategize, implement, and optimize IT solutions aligned with their goals. Our experts provide IT strategy consulting, legacy system modernization, cloud migration, cybersecurity, and data-driven decision-making. We deliver tailored strategies to reduce costs, enhance productivity, and maximize ROI, future-proofing your technology investments.',
    iconName: 'Headphones',
    badge: 'Digital Transformation & Advisory',
    offeringsTitle: 'Our IT Consulting Approach',
    offeringsSubtitle: 'Tailored strategic advisory built to reduce operational cost, raise productivity, and maximize technology ROI.',
    businessChallenge:
      'Misaligned technology roadmaps, aging legacy applications, and evolving security mandates stall business growth and drain IT budgets.',
    howWeHelp:
      'We audit existing IT landscapes, craft actionable modernization blueprints, select optimal platforms, and oversee compliant deployment.',
    capabilities: [
      {
        title: 'Assessment & Discovery',
        description: 'We evaluate current IT infrastructure, identifying technical gaps, risks, and high-value opportunities.',
        icon: 'Search',
      },
      {
        title: 'Strategy Development',
        description: 'Our team designs a custom IT roadmap directly aligned with your commercial objectives.',
        icon: 'Compass',
      },
      {
        title: 'Implementation & Integration',
        description: 'We deploy modern software and cloud solutions cleanly with minimal operational disruption.',
        icon: 'Plug',
      },
      {
        title: 'Optimization & Monitoring',
        description: 'We continuously refine IT operations, workloads, and architecture for peak performance.',
        icon: 'Activity',
      },
      {
        title: 'Security & Compliance',
        description: 'Our specialists ensure all IT systems meet strict cybersecurity and regulatory governance requirements.',
        icon: 'ShieldCheck',
      },
    ],
    businessBenefits: [
      {
        title: 'Purpose-Built Roadmaps',
        description: 'Every platform recommendation and architecture plan maps directly to measurable business KPIs.',
        metric: '5-Stage Advisory',
      },
      {
        title: 'Full-Stack Technical Depth',
        description: 'Advisory grounded in real-world delivery across React, Node.js, Python, Java, .NET, AWS, Azure, and GCP.',
        metric: 'Full-Stack Ready',
      },
      {
        title: 'Compliance & Risk Assurance',
        description: 'Embedded governance, security frameworks, and ongoing KPI optimization protect long-term ROI.',
        metric: 'Future-Proofed',
      },
    ],
    processTitle: 'Why Choose Prakvi as Your IT Consulting Partner?',
    processSubtitle: 'Below is a concise overview of how Prakvi approaches IT consulting helping clients evolve their tech footprint with purpose',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Assessment',
        description: '',
        points: [
          'Audit current IT systems and capabilities',
          'Identify gaps, risks, and business alignment issues',
        ],
      },
      {
        step: '02',
        title: 'Strategic Planning & Roadmapping',
        description: '',
        points: [
          'Define IT vision and desired outcomes',
          'Develop clear deployment and transformation roadmap',
        ],
      },
      {
        step: '03',
        title: 'Solution Design & Advisory',
        description: '',
        points: [
          'Recommend cloud architectures, security frameworks, governance structures',
          'Select tools, platforms, and process improvements',
        ],
      },
      {
        step: '04',
        title: 'Implementation & Governance',
        description: '',
        points: [
          'Oversee deployment of IT solutions',
          'Enforce governance, compliance, and policy adherence',
        ],
      },
      {
        step: '05',
        title: 'Optimization & Continuous Improvement',
        description: '',
        points: [
          'Monitor performance against KPIs',
          'Provide advisory on scaling, efficiency, and next-phase improvements',
        ],
      },
    ],
    stackTitle: 'Information Technology Consulting',
    stackSummary:
      'Prakvi positions its IT Consulting as the strategic foundation for clients aiming to achieve sustainable technological advantage.',
    stackTabs: [
      { label: 'Application Layer', items: ['React', 'Vue.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3'] },
      { label: 'Business Logic', items: ['Node.js', 'Python', 'PHP', 'Java', 'Ruby', '.NET'] },
      { label: 'Data Management', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQLite'] },
      { label: 'DevOps & Infrastructure', items: ['Git', 'Docker', 'AWS', 'Azure', 'Google Cloud', 'Nginx'] },
    ],
    faqs: [
      {
        question: 'Does Prakvi assist with both strategy and hands-on implementation?',
        answer:
          'Yes. Our IT Consulting team stays engaged from Discovery & Roadmapping through Solution Design, Implementation Governance, and continuous KPI optimization.',
      },
      {
        question: 'What technology ecosystems do you advise on?',
        answer:
          'We advise across modern web and backend stacks, relational and NoSQL databases, legacy modernization, cloud migration (AWS, Azure, GCP), and cybersecurity governance.',
      },
    ],
    featuredImage: generatedImages.aboutInnovationStudio,
  },

  // 13. Project Management
  {
    id: 'project-management',
    slug: 'project-management',
    title: 'Project Management',
    category: 'enterprise',
    tagline: 'Deliver Projects On Time, Within Budget, and Beyond Expectations',
    shortDesc:
      'Strategic PMO governance across Agile, Scrum, and Waterfall methodologies ensuring milestone clarity, risk mitigation, and predictable ROI.',
    fullDesc:
      'In today’s competitive market, effective project delivery requires strategic planning, precise execution, and alignment with business goals. Prakvi’s Project Management Services in India help manage projects from initiation to closure using Agile, Scrum, and Waterfall methodologies. From IT project management and infrastructure rollouts to enterprise transformation, we ensure risk mitigation, stakeholder communication, quality assurance, and measurable value at every milestone.',
    iconName: 'CheckSquare',
    badge: 'PMO & Delivery Governance',
    offeringsTitle: 'Professional Project Management Services',
    offeringsSubtitle: 'Transforming complex enterprise ambitions into predictable, on-budget project outcomes.',
    businessChallenge:
      'Complex cross-team initiatives risk scope creep, missed milestones, unclear stakeholder ownership, and budget overruns without disciplined PMO governance.',
    howWeHelp:
      'Our certified project managers establish structured timelines, transparent dashboards, proactive risk registers, and disciplined QA closure.',
    capabilities: [
      {
        title: 'End-to-End Project Planning',
        description: 'Define clear objectives, structured WBS task breakdowns, realistic timelines, and resource allocation from day one.',
        icon: 'CalendarCheck',
      },
      {
        title: 'Strategic Execution',
        description: 'Align delivery across Agile, Scrum, or Waterfall cadences to hit scope, timeline, and ROI targets.',
        icon: 'Target',
      },
      {
        title: 'Risk Management',
        description: 'Proactively identify blockers and deploy structured mitigation and change management controls.',
        icon: 'Shield',
      },
      {
        title: 'Stakeholder Communication',
        description: 'Clear, consistent reporting cadences keeping leadership and project teams informed and aligned.',
        icon: 'MessageSquare',
      },
      {
        title: 'Performance Monitoring & Reporting',
        description: 'Real-time tracking of milestones, budgets, and quality metrics via live dashboards.',
        icon: 'BarChart2',
      },
      {
        title: 'Seamless Delivery & Handover',
        description: 'Smooth project closure backed by thorough documentation, QA validation, and post-launch support.',
        icon: 'CheckCircle2',
      },
    ],
    businessBenefits: [
      {
        title: 'Methodology Flexibility',
        description: 'Certified oversight calibrated across Agile sprints, Scrum teams, and structured Waterfall rollouts.',
        metric: 'Agile & Waterfall',
      },
      {
        title: 'Transparent Reporting',
        description: 'Integrated tracking in Jira, Trello, Microsoft Project, Slack, and live executive dashboards.',
        metric: 'Live Visibility',
      },
      {
        title: 'Verified Value Realization',
        description: 'Post-project KPI evaluation and lessons-learned reviews lock in continuous organizational improvement.',
        metric: '5-Stage Delivery',
      },
    ],
    processTitle: 'Why Choose Prakvi for Project Management?',
    processSubtitle: 'A disciplined 5-stage project lifecycle from scoping to formal closure.',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description: 'Clarify project vision, objectives, and constraints while defining scope, deliverables, timeline, and budget.',
      },
      {
        step: '02',
        title: 'Resource Allocation',
        description: 'Assign skilled personnel, tools, and funding while aligning internal stakeholders and external vendors to clear roles.',
      },
      {
        step: '03',
        title: 'Execution & Monitoring',
        description: 'Track progress continuously against schedule and budget with regular updates, live dashboards, and clear stakeholder communication.',
      },
      {
        step: '04',
        title: 'Risk & Change Management',
        description: 'Proactively identify potential risks, implement mitigation strategies, and manage scope changes cleanly to minimize disruption.',
      },
      {
        step: '05',
        title: 'Delivery & Evaluation',
        description: 'Finalize deliverables, conduct formal closure, measure outcomes against KPIs, and capture post-project improvements.',
      },
    ],
    stackTitle: 'Project Management',
    stackSummary:
      'With strategic oversight and skilled execution, Prakvi delivers enterprise projects on time, within budget, and beyond expectations.',
    stackTabs: [
      { label: 'Planning', items: ['Scope Definition', 'Task Breakdown', 'Timeline Planning', 'Resource Allocation'] },
      { label: 'Execution', items: ['Team Coordination', 'Process Management', 'Risk Mitigation'] },
      { label: 'Monitoring', items: ['Milestone Tracking', 'Progress Reports', 'Quality Assurance', 'Compliance Checks', 'Stakeholder Communication'] },
      { label: 'Tools', items: ['Jira', 'Trello', 'Microsoft Project', 'Slack', 'Reporting Dashboards'] },
    ],
    faqs: [
      {
        question: 'Can Prakvi project managers work inside our existing Jira or MS Project setup?',
        answer:
          'Yes. Our PMO leads integrate seamlessly with Jira, Trello, Microsoft Project, Slack, and your internal reporting dashboards.',
      },
      {
        question: 'What types of initiatives do you manage?',
        answer:
          'We manage software engineering launches, infrastructure rollouts, ERP/CRM implementations, and multi-team digital transformations.',
      },
    ],
    featuredImage: generatedImages.introEnterpriseCampus,
  },

  // 14. Web Design
  {
    id: 'web-design',
    slug: 'web-design',
    title: 'Web Design',
    category: 'business',
    tagline: 'Creative, Responsive, and User Centric Web Design Solutions',
    shortDesc:
      'Custom websites, responsive UI/UX design systems, SEO & speed optimization, eCommerce design, and CMS revamps that drive growth.',
    fullDesc:
      'Your website is more than an online presence—it\'s your digital storefront and first impression. Prakvi’s web design services in India create professional, responsive, and visually engaging websites. We deliver custom website design, corporate sites, and eCommerce solutions with fast loading,mobile-friendly layouts, and seamless navigation. From concept to launch, we design websites that reflect your brand and drive business growth.',
    iconName: 'PenTool',
    badge: 'Business Solutions · UI/UX',
    offeringsTitle: 'Our Web Design Expertise',
    offeringsSubtitle: 'Comprehensive, conversion-oriented web design services tailored to your brand.',
    businessChallenge:
      'Slow-loading pages, cluttered layouts, and poor mobile usability undermine brand trust and drive potential customers away.',
    howWeHelp:
      'We combine user research, Figma design systems, mobile-first layouts, technical SEO, and fast-loading frontend engineering.',
    capabilities: [
      {
        title: 'Custom Website Design',
        description: 'We craft unique, brand-aligned designs that capture your vision and resonate with your audience.',
        icon: 'Palette',
      },
      {
        title: 'Responsive & Mobile-First Development',
        description: 'Adaptable interfaces engineered for crisp visual clarity across smartphones, tablets, and desktop screens.',
        icon: 'Smartphone',
      },
      {
        title: 'UI/UX Optimization',
        description: 'Intuitive navigation, clear calls-to-action, and friction-free user flows that maximize engagement and conversions.',
        icon: 'Sparkles',
      },
      {
        title: 'SEO & Speed Optimization',
        description: 'Technical SEO best practices, clean semantic markup, and fast-loading architecture for stronger search visibility.',
        icon: 'Zap',
      },
      {
        title: 'eCommerce Web Design',
        description: 'High-converting, secure, and scalable online storefronts delivering effortless shopping experiences.',
        icon: 'ShoppingCart',
      },
      {
        title: 'CMS Development & Website Revamps',
        description: 'Custom CMS implementations (WordPress, Sanity, Contentful) and modern strategic revamps built for easy content control.',
        icon: 'LayoutGrid',
      },
    ],
    businessBenefits: [
      {
        title: 'Mobile-First Brand Authority',
        description: 'Cohesive typography, clear hierarchy, and responsive layouts make a memorable first impression.',
        metric: '7-Stage Design',
      },
      {
        title: 'SEO & Performance Built In',
        description: 'Accessibility, fast load speed, SSL security, and technical SEO ship alongside the visual system.',
        metric: 'Fast & Accessible',
      },
      {
        title: 'Seamless Dev & CMS Handoff',
        description: 'Clean specs from Figma, Adobe XD, and Webflow into React, Vue, Angular, or modern CMS platforms.',
        metric: 'Pixel Accurate',
      },
    ],
    processTitle: 'Why Choose Prakvi for Web Design?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Consultation',
        description: 'We begin by understanding your vision, user needs, and business goals through interviews, workshops, and market research.',
      },
      {
        step: '02',
        title: 'Visual Strategy & Information Architecture',
        description: 'Defining site structure, navigation flow, and high-level wireframes. Establish visual branding, typography, and color palette.',
      },
      {
        step: '03',
        title: 'Design & Prototyping',
        description: 'Creating high-fidelity mockups and clickable prototypes. Refining design through feedback loops until perfection.',
      },
      {
        step: '04',
        title: 'Development Coordination',
        description: 'Passing finalized visuals to development teams, ensuring pixel-perfect implementation and responsive behavior across devices.',
      },
      {
        step: '05',
        title: 'Quality Assurance & Testing',
        description: 'Rigorous testing of usability, cross-browser/device compatibility, accessibility compliance, and page performance.',
      },
      {
        step: '06',
        title: 'Launch & Deployment',
        description: 'Deploying your site with secure hosting, SSL certification, analytics setup, and SEO optimizations for visibility.',
      },
      {
        step: '07',
        title: 'Post-Launch Support & Optimization',
        description: 'Providing maintenance, content updates, A/B testing, and iterative enhancements informed by analytics and user behavior.',
      },
    ],
    stackTitle: 'Web Design Solutions',
    stackSummary:
      'We craft visually engaging, user-centric design systems that elevate brand presence and ensure seamless digital experiences.',
    stackTabs: [
      { label: 'UI Frameworks', items: ['React', 'Vue.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3'] },
      { label: 'Design Integration', items: ['Node.js Integration', 'Python APIs', 'PHP Templates', 'Java Backend', 'Ruby on Rails', '.NET Core'] },
      { label: 'Content Management', items: ['WordPress', 'Drupal', 'Joomla', 'Sanity.io', 'Firebase CMS', 'Contentful'] },
      { label: 'Design Tools', items: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin', 'Webflow'] },
    ],
    faqs: [
      {
        question: 'Can you redesign an existing slow or outdated corporate website?',
        answer:
          'Yes. Website Revamps and CMS upgrades are core offerings, pairing visual modernization with mobile-first responsiveness and SEO speed optimization.',
      },
      {
        question: 'Which design and CMS tools does Prakvi support?',
        answer:
          'We design in Figma, Sketch, Adobe XD, and Webflow, and integrate cleanly with React, Vue, Angular, WordPress, Sanity.io, and Contentful.',
      },
    ],
    featuredImage: generatedImages.serviceMarketingWeb3d,
  },

  // 15. Enterprise Solution
  {
    id: 'enterprise-solution',
    slug: 'enterprise-solution',
    title: 'Enterprise Solution',
    category: 'business',
    tagline: 'Scalable, Secure, and Intelligent Enterprise Solutions for Modern Businesses',
    shortDesc:
      'Custom web application development, responsive platforms, e-commerce engineering, REST/GraphQL APIs, database design, and 24/7 support.',
    fullDesc:
      'In today’s fast-paced digital economy, enterprises need scalable, secure, and future-ready solutions. Prakvi delivers end-to-end enterprise solutions in India to streamline operations, boost efficiency, and unlock growth. We offer ERP implementation, enterprise application integration, data analytics, and custom software development. Focused on security, performance, and adaptability, our solutions drive sustainable growth and quick market response.',
    iconName: 'Code2',
    badge: 'Business Solutions · Custom Engineering',
    offeringsTitle: 'Our Enterprise Solutions',
    offeringsSubtitle: 'Comprehensive, scalable, and secure solutions designed to meet the complex needs of modern enterprises',
    businessChallenge:
      'Off-the-shelf tools and aging web software restrict custom workflows, struggle under scale, and create integration bottlenecks.',
    howWeHelp:
      'We architect bespoke web applications, secure APIs, optimized databases, and reliable e-commerce platforms backed by 24/7 maintenance.',
    capabilities: [
      {
        title: 'Custom Web Development',
        description: 'Build unique, scalable web applications tailored to your specific business requirements using modern technologies.',
        icon: 'Code2',
      },
      {
        title: 'Responsive Web Design',
        description: 'Create stunning, mobile-first websites that provide optimal user experience across all devices and screen sizes.',
        icon: 'Monitor',
      },
      {
        title: 'E-commerce Solutions',
        description: 'Develop powerful online stores with secure payment processing, inventory management, and customer analytics.',
        icon: 'ShoppingBag',
      },
      {
        title: 'API Development',
        description: 'Build robust RESTful APIs and microservices to power your applications and enable seamless integrations.',
        icon: 'Plug',
      },
      {
        title: 'Database Design',
        description: 'Design and optimize database structures for maximum performance, scalability, and data integrity.',
        icon: 'Database',
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing maintenance, updates, and technical support to keep your web applications running smoothly.',
        icon: 'ShieldCheck',
      },
    ],
    businessBenefits: [
      {
        title: 'Full-Stack Scalability',
        description: 'Modern React, Vue, Angular frontends paired with Node.js, Python, Java, PHP, Ruby, or .NET backends.',
        metric: '6-Stage Agile',
      },
      {
        title: 'High-Integrity Data Layer',
        description: 'Tuned MongoDB, PostgreSQL, MySQL, Redis, and Firebase architectures built for enterprise concurrency.',
        metric: 'Resilient Data',
      },
      {
        title: '24/7 Lifecycle Care',
        description: 'Automated monitoring, backups, security audits, and iterative feature enhancements keep apps healthy.',
        metric: '24/7 Support',
      },
    ],
    processTitle: 'Why Choose Prakvi for Enterprise Solutions?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description:
          'We start by understanding your business goals, target audience, and technical requirements. This phase includes market research, competitor analysis, and creating a detailed project roadmap.',
      },
      {
        step: '02',
        title: 'Design & Prototyping',
        description:
          'Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience, visual appeal, and ensuring the design aligns with your brand identity.',
      },
      {
        step: '03',
        title: 'Development & Coding',
        description:
          'Using agile methodology, our developers build your application with clean, scalable code. We implement features iteratively and maintain constant communication throughout the process.',
      },
      {
        step: '04',
        title: 'Testing & Quality Assurance',
        description:
          'Comprehensive testing ensures your application works flawlessly across all devices and browsers. We perform functional, performance, and security testing before deployment.',
      },
      {
        step: '05',
        title: 'Deployment & Launch',
        description:
          'We handle the entire deployment process, from server setup to domain configuration. Your application goes live with proper monitoring and backup systems in place.',
      },
      {
        step: '06',
        title: 'Maintenance & Support',
        description:
          'Post-launch support includes regular updates, performance monitoring, security patches, and feature enhancements based on user feedback and analytics.',
      },
    ],
    stackTitle: 'Technology Stack',
    stackSummary: 'We use cutting-edge technologies to build modern, scalable applications',
    stackTabs: [
      { label: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3'] },
      { label: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Java', 'Ruby', '.NET'] },
      { label: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQLite'] },
      { label: 'Tools', items: ['Git', 'Docker', 'AWS', 'Azure', 'Google Cloud', 'Nginx'] },
    ],
    faqs: [
      {
        question: 'Can Prakvi build custom internal enterprise portals as well as customer-facing apps?',
        answer:
          'Yes. We build both custom internal ERP/workflow applications and public multi-tenant web or e-commerce platforms.',
      },
      {
        question: 'Do you provide post-launch SLAs and 24/7 support?',
        answer:
          'Yes. Every Enterprise Solution engagement includes ongoing maintenance, security patching, monitoring, and 24/7 technical support options.',
      },
    ],
    featuredImage: generatedImages.serviceArchitecture3d,
  },

  // 16. Digital Marketing
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'business',
    tagline: 'Digital Marketing Services That Grow Your Business in India',
    shortDesc:
      'Data-driven SEO, PPC advertising, social media growth, content marketing, conversion optimization (CRO), and reputation management.',
    fullDesc:
      'In today\'s fast-paced digital economy, customers are online making buying decisions every second. Prakvi offers end-to-end digital marketing services in India to build a strong, data-driven online presence. From SEO and social media marketing to paid advertising, we help brands connect with the right audience at the right time. Our tailored digital marketing solutions drive measurable growth for startups and enterprises alike.',
    iconName: 'Megaphone',
    badge: 'Business Solutions · Growth & SEO',
    offeringsTitle: 'Our Digital Marketing Services',
    offeringsSubtitle: 'We provide result driven digital marketing strategies to boost your online presence and drive business growth.',
    businessChallenge:
      'Unfocused ad spend, low organic search rankings, and generic messaging fail to reach high-intent decision makers online.',
    howWeHelp:
      'We execute coordinated SEO, targeted PPC campaigns, social outreach, content marketing, and continuous analytics-driven CRO.',
    capabilities: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'We optimize your website for higher search engine rankings, increased organic traffic, and better visibility, ensuring your brand stands out in competitive markets.',
        icon: 'Search',
      },
      {
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Strategic paid campaigns designed to target your audience effectively, maximize ROI, and drive qualified traffic to your business.',
        icon: 'Target',
      },
      {
        title: 'Social Media Marketing',
        description: 'Engage and grow your audience on platforms like Facebook, LinkedIn, Instagram, and Twitter with compelling content, campaigns, and brand building.',
        icon: 'Share2',
      },
      {
        title: 'Content Marketing',
        description: 'From blogs and articles to videos and infographics, we create content that educates, engages, and drives conversions, positioning your brand as an industry leader.',
        icon: 'PenLine',
      },
      {
        title: 'Email Marketing & Automation',
        description: 'Nurture leads and retain customers with personalized email campaigns designed to boost engagement and revenue.',
        icon: 'Mail',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Analyze user behavior, test strategies, and refine web elements to increase conversions using data-driven insights.',
        icon: 'TrendingUp',
      },
      {
        title: 'Online Reputation Management (ORM)',
        description: 'Protect and enhance your brand image with proactive strategies that ensure positive visibility across digital platforms.',
        icon: 'ShieldCheck',
      },
    ],
    businessBenefits: [
      {
        title: 'Full-Funnel Demand Generation',
        description: 'Coordinated organic SEO, PPC search/display ads, and LinkedIn/social campaigns capture intent at every stage.',
        metric: '8-Step Growth',
      },
      {
        title: 'Measurable Analytics Attribution',
        description: 'Real-time tracking of impressions, clicks, conversions, and ROAS via Google Analytics, SEMRush, and Ahrefs.',
        metric: 'ROAS Focused',
      },
      {
        title: 'Continuous A/B Optimization',
        description: 'Iterative creative testing, bidding adjustments, and funnel refinement compound campaign ROI over time.',
        metric: 'Data-Driven',
      },
    ],
    processTitle: 'Why Choose Prakvi for Digital Marketing in India?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Discovery & Strategy',
        description: 'Understand the client\'s goals, audience, and competitive landscape. This phase lays the groundwork for a tailored roadmap.',
      },
      {
        step: '02',
        title: 'Campaign Planning & Channel Selection',
        description: 'Design campaigns across preferred digital channels such as SEM, social media ads, email marketing, and SEO, with clear objectives like awareness, lead generation, or sales.',
      },
      {
        step: '03',
        title: 'Content Creation & Management',
        description: 'Develop optimized content that resonates with the target audience and aligns with SEO best practices and branding guidelines.',
      },
      {
        step: '04',
        title: 'Advertising Execution',
        description: 'Launch pay-per-click (PPC) and display advertising campaigns across search engines and social media platforms, targeting relevant audiences with high impact ads.',
      },
      {
        step: '05',
        title: 'Search Engine Optimization (SEO)',
        description: 'Implement on-page and off-page SEO efforts:',
        points: ['Keyword research', 'Technical SEO improvements', 'Backlink building', 'Local SEO tactics'],
      },
      {
        step: '06',
        title: 'Performance Tracking & Analytics',
        description: 'Use advanced analytics tools to monitor campaign KPIs, such as impressions, clicks, conversions, and return on ad spend, with real-time dashboards and reporting.',
      },
      {
        step: '07',
        title: 'Optimization & Iteration',
        description: 'Continuously refine campaigns based on data insights. A/B test creatives, adjust targeting and bidding, and fine-tune content for performance gains.',
      },
      {
        step: '08',
        title: 'Reporting & Review',
        description: 'Provide regular reports with measurable results and insights. Use these to review strategy and plan further steps for sustained growth.',
      },
    ],
    stackTitle: 'Digital Marketing',
    stackSummary:
      'Prakvi offers comprehensive digital marketing solutions from strategic planning to execution ensuring your brand achieves maximum online visibility and engagement.',
    stackTabs: [
      { label: 'SEO', items: ['On-Page SEO', 'Off-Page SEO', 'Mobile SEO', 'Technical SEO', 'SEO Audit', 'Keyword Research'] },
      { label: 'Social Media', items: ['Facebook Ads', 'Instagram Marketing', 'Twitter Campaigns', 'LinkedIn Outreach', 'YouTube Ads'] },
      { label: 'Content Marketing', items: ['Blog Writing', 'Video Marketing', 'Email Campaigns', 'Podcast Promotions', 'Guest Posting', 'Case Studies'] },
      { label: 'Tools', items: ['Google Analytics', 'SEMRush', 'Ahrefs', 'Moz', 'Hootsuite', 'Mailchimp'] },
    ],
    faqs: [
      {
        question: 'How soon do digital marketing and SEO campaigns show measurable insights?',
        answer:
          'PPC and social campaigns start generating tracked clicks and conversions immediately upon launch, while technical and content SEO compound organic authority month over month.',
      },
      {
        question: 'What reporting tools do you use to measure campaign ROI?',
        answer:
          'We monitor and report with Google Analytics, SEMRush, Ahrefs, Moz, Hootsuite, and Mailchimp via scheduled performance reviews.',
      },
    ],
    featuredImage: generatedImages.serviceMarketingWeb3d,
  },

  // 17. Mobile App Development
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'business',
    tagline: 'Custom Mobile App Development for iOS & Android',
    shortDesc:
      'Native iOS (Swift) & Android (Kotlin), React Native & Flutter cross-platform apps, enterprise workflow apps, PWAs, and ongoing support.',
    fullDesc:
      'In a mobile-first world, your app is your brand\'s direct connection with customers. Prakvi offers end-to-end mobile app development services in India, delivering seamless, engaging, and secure experiences. Whether native iOS, Android, or cross-platform, our expert team combines design, technology, and user-focused strategy to build apps that drive results. From concept to deployment and support, we ensure your app meets market demands and delivers measurable ROI.',
    iconName: 'Smartphone',
    badge: 'Business Solutions · iOS & Android',
    offeringsTitle: 'Mobile App Development Expertise',
    offeringsSubtitle: 'We offer comprehensive Mobile App Development solutions tailored to your business needs',
    businessChallenge:
      'Slow, inconsistent mobile apps with clunky UX or insecure APIs frustrate users and miss critical engagement opportunities.',
    howWeHelp:
      'We engineer high-speed native and cross-platform mobile apps complete with clickable prototyping, automated QA, store publishing, and ongoing optimization.',
    capabilities: [
      {
        title: 'Native Mobile App Development',
        description: 'We build high-performance native apps for iOS (Swift, Objective-C) and Android (Kotlin, Java) that deliver superior user experiences with optimized speed and functionality.',
        icon: 'Smartphone',
      },
      {
        title: 'Cross-Platform App Development',
        description: 'Maximize reach with cross-platform solutions using React Native, Flutter, and Xamarin, ensuring cost-effective and fast-to-market mobile applications.',
        icon: 'Layers',
      },
      {
        title: 'Enterprise Mobile Apps',
        description: 'Empower businesses with scalable, secure, and data-driven enterprise apps for workflow automation, team collaboration, and productivity enhancement.',
        icon: 'Building2',
      },
      {
        title: 'Mobile E-Commerce Solutions',
        description: 'We develop feature-rich e-commerce apps with seamless payment gateways, real-time inventory management, and AI-powered recommendations to drive sales.',
        icon: 'ShoppingBag',
      },
      {
        title: 'Custom Web & Hybrid Mobile Apps',
        description: 'Utilizing Progressive Web Apps (PWAs) and hybrid frameworks, we create fast, responsive, and engaging mobile experiences that work seamlessly across devices.',
        icon: 'GitBranch',
      },
      {
        title: 'Mobile App UI/UX Design',
        description: 'We craft visually appealing, intuitive, and user-friendly interfaces that enhance engagement, reduce friction, and improve app retention.',
        icon: 'Paintbrush',
      },
      {
        title: 'API & Third-Party Integrations',
        description: 'We integrate secure APIs, cloud services, AI/ML capabilities, and third-party tools for seamless functionality and enhanced app performance.',
        icon: 'Plug',
      },
      {
        title: 'Mobile App Maintenance & Support',
        description: 'Ensure long-term success with our ongoing support, security updates, and performance optimizations to keep your app running at peak efficiency.',
        icon: 'Wrench',
      },
    ],
    businessBenefits: [
      {
        title: 'Native & Cross-Platform Reach',
        description: 'Flexible delivery across Swift, Kotlin, React Native, and Flutter matched to timeline and performance goals.',
        metric: 'iOS & Android',
      },
      {
        title: 'App Store & Enterprise Ready',
        description: 'Complete support for public App Store / Google Play submissions as well as internal enterprise distribution.',
        metric: 'Store Ready',
      },
      {
        title: 'Full DevOps & CI/CD',
        description: 'Automated unit/integration testing, Firebase instrumentation, Git, Docker, and cloud backend APIs.',
        metric: '6-Stage Delivery',
      },
    ],
    processTitle: 'Why Choose Prakvi for Mobile App Development?',
    processSubtitle: 'A proven methodology that ensures successful project delivery',
    deliverySteps: [
      {
        step: '01',
        title: 'Consult & Strategize',
        description: '',
        points: [
          'Clarify business objectives, target audience, and platform needs (iOS, Android, hybrid).',
          'Define functionality, user journeys, and expected ROI.',
        ],
      },
      {
        step: '02',
        title: 'Design & Prototype',
        description: '',
        points: [
          'Create UI/UX wireframes and mockups.',
          'Build clickable prototypes for usability testing and early alignment.',
        ],
      },
      {
        step: '03',
        title: 'Architecture & Planning',
        description: '',
        points: [
          'Choose tech stack (native vs hybrid).',
          'Outline API integrations, data storage, and security considerations.',
        ],
      },
      {
        step: '04',
        title: 'Development & QA',
        description: '',
        points: [
          'Implement coding in the selected framework.',
          'Perform unit, integration, and automated testing to ensure reliability.',
        ],
      },
      {
        step: '05',
        title: 'Deployment',
        description: '',
        points: [
          'Prepare builds for public app stores or internal enterprise distribution.',
          'Assist in publishing and compliance submission.',
        ],
      },
      {
        step: '06',
        title: 'Support & Updates',
        description: '',
        points: [
          'Provide ongoing maintenance: bug fixes, platform updates, performance enhancements.',
          'Offer post-launch optimization based on user feedback and analytics.',
        ],
      },
    ],
    stackTitle: 'Mobile App Development Services',
    stackSummary:
      'Delivering intuitive, high-performance mobile solutions that bring your ideas to life and elevate your business by engaging users across platforms',
    stackTabs: [
      { label: 'iOS', items: ['Swift', 'Objective-C', 'Xcode'] },
      { label: 'Android', items: ['Kotlin', 'Java', 'Android Studio'] },
      { label: 'Cross-platform', items: ['React Native', 'Flutter', 'Firebase', 'JavaScript'] },
      { label: 'Tools & DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Backend APIs'] },
    ],
    faqs: [
      {
        question: 'Should we choose native (Swift/Kotlin) or cross-platform (React Native/Flutter)?',
        answer:
          'During our Architecture & Planning phase, we evaluate hardware depth, UX complexity, budget, and time-to-market to recommend the ideal stack.',
      },
      {
        question: 'Do you help publish the finished app to Apple App Store and Google Play?',
        answer:
          'Yes. Deployment covers build preparation, store compliance checks, publishing, or private enterprise MDM distribution.',
      },
    ],
    featuredImage: generatedImages.serviceMobileDevices3d,
  },
];

export const servicesData = sortCatalog(serviceCatalog, [...enterpriseServiceOrder, ...businessServiceOrder]);
