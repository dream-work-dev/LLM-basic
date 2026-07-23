export const siteConfig = {
  name: "Daniel Morgan",
  title: "Daniel Morgan | Portfolio",
  description:
    "Senior Full Stack Engineer portfolio showcasing experience in product platforms, payments, AI-assisted systems, and cloud-native delivery.",
  url: "https://daniel-morgan.vercel.app",
  email: "daniel.morgan0927@gmail.com",
  location: "Dublin, Ireland",
  linkedin: "https://www.linkedin.com/in/daniel-morgan-046440348",
  github: "https://github.com/skydragon0324",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  headline: "Senior Full Stack Engineer 👋",
  intro:
    "A passionate Senior Full Stack Engineer with 10+ years of experience building product platforms across rewarded advertising, fintech consulting, digital agency delivery, and high-traffic web applications based in Dublin, Ireland 📍.",
  roleTags: [
    "Product Platforms",
    "Payments & Payouts",
    "AI-Assisted Systems",
  ],
};

export const aboutContent = {
  summary:
    "Senior Full Stack Engineer with 10+ years of experience building product platforms across rewarded advertising, fintech consulting, digital agency delivery, and high-traffic web applications. Strong in React, Next.js, TypeScript, Node.js, Python, FastAPI, Java Spring Boot, cloud-native delivery on AWS/Azure, observability, experimentation, payment integrations, and AI-assisted product workflows. Experienced turning business-critical flows into reliable systems across rewards, payouts, onboarding, compliance reporting, analytics, and client-facing digital platforms.",
  tags: [
    "Full-Stack Engineer",
    "Payments Specialist",
    "Platform Builder",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "SSR",
      "PWAs",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "Java Spring Boot",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Cloud, Data & Reliability",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "Datadog",
      "Sentry",
    ],
  },
  {
    title: "Product, Payments & AI",
    skills: [
      "Stripe",
      "PayPal",
      "A/B Testing",
      "Amplitude",
      "Reward Ledgers",
      "Fraud Checks",
      "RAG",
      "LLM APIs",
      "CI/CD",
      "Azure DevOps",
    ],
  },
];

export const achievements = [
  "10+ years delivering product platforms across rewarded advertising, fintech consulting, and digital agency delivery.",
  "Integrated PayPal, Stripe, crypto payout providers, and gift card APIs with fraud checks and payout visibility.",
  "Implemented Amplitude-backed A/B tests across onboarding, offer ranking, and promotional campaigns.",
  "Built AI-assisted support workflows using RAG patterns, LLM APIs, and transaction history signals.",
  "Delivered regulatory reporting and secure onboarding platforms for financial-services clients at Deloitte.",
  "Improved Next.js performance, API response behavior, and observability for traffic-heavy growth campaigns.",
  "Bachelor of Computer Science from Dublin City University.",
];

export type ExperienceItem = {
  post: string;
  companyName: string;
  mode: string;
  location: string;
  startDate: string;
  endDate: string;
  logoText: string;
  logoColor: string;
  description: string[];
};

export const experiences: ExperienceItem[] = [
  {
    post: "Senior Full Stack Engineer",
    companyName: "Almedia",
    mode: "Full Time",
    location: "Dublin, Ireland",
    startDate: "Feb 2022",
    endDate: "Present",
    logoText: "A",
    logoColor: "from-emerald-500 to-teal-600",
    description: [
      "Built product features for Freecash using React, Next.js, TypeScript, and server-rendered workflows across offer discovery, reward tracking, missions, leaderboards, and account experiences.",
      "Developed Node.js and Python FastAPI services for reward attribution, balance updates, payout eligibility, and transaction state changes across high-volume user activity.",
      "Implemented WebSocket-based earning confirmations and balance synchronization so users could see reward outcomes immediately after completing offers.",
      "Integrated PayPal, Stripe, crypto payout providers, and gift card APIs with fraud checks, eligibility rules, transactional safeguards, and payout status visibility.",
      "Designed APIs and data flows connecting offer partners, tracking callbacks, user events, reward ledgers, and internal operations tools.",
      "Implemented Amplitude-backed A/B tests across onboarding, offer ranking, reward presentation, and promotional campaigns.",
      "Added Datadog and Sentry monitoring for API errors, GraphQL failures, payout exceptions, and revenue-critical workflows.",
      "Built AI-assisted support and investigation workflows using RAG patterns, LLM APIs, transaction history, and user behavior signals.",
    ],
  },
  {
    post: "Full Stack Engineer",
    companyName: "Deloitte",
    mode: "Full Time",
    location: "Dublin, Ireland",
    startDate: "Nov 2018",
    endDate: "Feb 2022",
    logoText: "D",
    logoColor: "from-green-600 to-lime-500",
    description: [
      "Delivered regulatory reporting platforms for financial-services clients using React, TypeScript, Python, and Java Spring Boot.",
      "Built transaction reconciliation dashboards for operations and compliance teams to investigate mismatched records and audit evidence.",
      "Implemented secure digital onboarding journeys with OAuth2/SAML SSO, MFA, document upload, reviewer workflows, and status notifications.",
      "Engineered REST APIs and microservices for case processing, approval routing, audit logging, and role-based access control.",
      "Delivered cloud deployments on Azure App Services, Azure Functions, AWS EC2, S3, and RDS with Docker-based build and release pipelines.",
      "Built React and Redux data visualization screens with drill-down KPIs, risk indicators, and operational reporting for audit users.",
    ],
  },
  {
    post: "Mid Level Full Stack Developer",
    companyName: "Annertech",
    mode: "Full Time",
    location: "Dublin, Ireland",
    startDate: "Jan 2016",
    endDate: "Oct 2018",
    logoText: "An",
    logoColor: "from-orange-500 to-amber-500",
    description: [
      "Delivered client-facing web platforms for public-sector, nonprofit, education, and commercial customers.",
      "Contributed to modernization of PHP and CMS-driven platforms by adding React, Node.js, and Python services.",
      "Built interactive front-end experiences with React, TypeScript, Vue, responsive layouts, and reusable components.",
      "Developed backend APIs with Python Flask and Node.js for forms, user accounts, document workflows, and integrations.",
      "Supported AWS-based hosting using EC2, S3, CloudFront, and RDS, contributing to CI/CD improvements.",
    ],
  },
  {
    post: "Junior Full Stack Developer",
    companyName: "Annertech",
    mode: "Full Time",
    location: "Dublin, Ireland",
    startDate: "Jun 2015",
    endDate: "Dec 2015",
    logoText: "An",
    logoColor: "from-orange-500 to-amber-500",
    description: [
      "Supported development of CMS-backed websites and web applications for client projects.",
      "Built front-end interfaces with React, Vue, JavaScript, HTML5, and CSS3 with responsive behavior.",
      "Assisted backend development using PHP, Node.js, and Python for forms, user actions, and REST endpoints.",
      "Helped improve site reliability through bug fixes, performance tuning, and regression testing.",
    ],
  },
  {
    post: "Bachelor of Computer Science",
    companyName: "Dublin City University",
    mode: "Education",
    location: "Dublin, Ireland",
    startDate: "2011",
    endDate: "2015",
    logoText: "DCU",
    logoColor: "from-blue-600 to-indigo-600",
    description: [
      "Completed Bachelor of Computer Science with a foundation in software engineering and full-stack development.",
    ],
  },
];
