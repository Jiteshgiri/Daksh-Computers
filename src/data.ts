import { Course, Review, Certificate, Facility } from './types';

export const coursesData: Course[] = [
  {
    id: 'basic-computer',
    name: 'Basic Computer',
    duration: '2 Months',
    eligibility: 'All (Beginners, School & College Students)',
    practicalTraining: 'Daily 1-hour hands-on practical session in our modern computer lab.',
    overview: 'Introduction to computer systems, operating systems, file architecture, digital drawings, text drafting, and internet basics.',
    topics: [
      'Computer Hardware & Components Basics',
      'Windows Operating System & Control Panel',
      'File & Directory Architecture',
      'MS Paint & Digital Art Basics',
      'Notepad & Text Formatting Essentials',
      'Wordpad Document Layouts',
      'Internet Browsing, Secure Surfing & Search Engines',
      'Email Creation, Sending & Inbox Management'
    ],
    benefits: 'Build fundamental computer literacy, gain digital confidence, and master essential tools for daily personal and professional tasks.',
    whoCanJoin: 'School students, senior citizens, home-makers, or absolute beginners looking to overcome computer hesitation.',
    careerOpportunities: [
      'Basic Office Assistant',
      'Data Entry Operator',
      'Personal Computer Operator',
      'Customer Service Representative'
    ],
    practicalSessions: 'Daily dedicated laboratory practice under personalized expert guidance.',
    certificateInformation: 'Professional Course Completion Certificate from दaksh Computers, Bhopal.'
  },
  {
    id: 'ms-office',
    name: 'MS Office',
    duration: '3 Months',
    eligibility: '10th Pass or Equivalent',
    practicalTraining: 'Daily hands-on lab sessions with real-world corporate document formatting, billing spreadsheet models, and slides.',
    overview: 'Master MS Word, MS Excel, and MS PowerPoint—the industry-standard productivity suite required in every professional office.',
    topics: [
      'MS Word: Advanced Page Setup, Mail Merge, Tables, Header/Footer & Professional Report Writing',
      'MS Excel: Cells & Ranges, Basic Formulas, Logical Functions, Conditional Formatting, Graphs & Charts',
      'Excel Data Management: Pivot Tables, VLOOKUP, HLOOKUP, Data Validation & Sorting',
      'MS PowerPoint: Slide Layouts, Graphic insertion, Animations, Slide Transitions, Theme Design & Presenter View'
    ],
    benefits: 'Acquire highly seeked professional administration skills, speed up typing, and learn database calculation in MS Excel.',
    whoCanJoin: 'Graduates, job-seekers, office clerks, business entrepreneurs, and administrative assistants.',
    careerOpportunities: [
      'Office Operations Assistant',
      'Administrative Executive',
      'Excel / Data Management Associate',
      'Client Billing Coordinator'
    ],
    practicalSessions: '100% hands-on laboratory exercises with case-studies on live reports and professional templates.',
    certificateInformation: 'MS Office Suite Professional Certification from दaksh Computers.'
  },
  {
    id: 'dca',
    name: 'DCA (Diploma in Computer Applications)',
    duration: '1 Year',
    eligibility: '12th Pass (Any Stream)',
    practicalTraining: 'Extensive multi-module training covering operating systems, complete office suites, DBMS, and digital layouts.',
    overview: 'A highly recognized, comprehensive diploma program designed to build strong theoretical and practical foundations in computing, databases, and application software.',
    topics: [
      'Semester 1: Computer Fundamentals & Information Technology',
      'Semester 1: Operating Systems (Windows, MS-DOS, Linux basics)',
      'Semester 1: MS Office Suite (Word, Excel, PowerPoint, Access)',
      'Semester 2: Database Management Systems (FoxPro / Access)',
      'Semester 2: Web Designing Basics (HTML, CSS)',
      'Semester 2: Internet Technology, Security & Multimedia Applications'
    ],
    benefits: 'Earn a government and corporate recognized computer diploma, validating complete computer capability for professional career entry.',
    whoCanJoin: '12th graduates seeking a standardized computing qualification for government or corporate jobs.',
    careerOpportunities: [
      'Computer Operator / Specialist',
      'Data Base Administrator',
      'Admin Coordinator',
      'IT Support Executive',
      'Public Sector Computer Assistant'
    ],
    practicalSessions: 'Structured computer labs, project planning, midterm practical exams, and mock interviews.',
    certificateInformation: 'Official Diploma in Computer Applications (DCA) from दaksh Computers, Bhopal.'
  },
  {
    id: 'pgdca',
    name: 'PGDCA (Post Graduate Diploma in Computer Applications)',
    duration: '1 Year',
    eligibility: 'Graduate in any Stream',
    practicalTraining: 'Advanced practical lab projects in backend programming, database normalization, system analysis, and computerized accounting.',
    overview: 'An advanced post-graduate diploma program designed to bridge the gap between graduate education and professional computer systems management, programming, and web technology.',
    topics: [
      'Semester 1: Advanced Computer Architecture & IT Systems',
      'Semester 1: Operating Systems & GUI Administration',
      'Semester 1: Database Management Systems & SQL Fundamentals',
      'Semester 2: Object-Oriented Programming using C++',
      'Semester 2: Web Development Technologies (HTML, CSS, JavaScript)',
      'Semester 2: Tally Prime & Computerized Financial Accounting'
    ],
    benefits: 'Adds prestigious PG credentials to your profile, opening avenues for advanced management and technical positions in IT.',
    whoCanJoin: 'Graduates of Arts, Commerce, Science, or Management wishing to establish a rewarding career in IT or administration.',
    careerOpportunities: [
      'Computer Systems Analyst',
      'Database Specialist',
      'Assistant IT Manager',
      'Computer Programmer',
      'Senior Financial Accounts Operator'
    ],
    practicalSessions: 'Advanced lab hours featuring system design blueprints, program compilation, and SQL database optimization.',
    certificateInformation: 'Official Post Graduate Diploma in Computer Applications (PGDCA) from दaksh Computers.'
  },
  {
    id: 'c-programming',
    name: 'C Programming',
    duration: '2 Months',
    eligibility: 'Basic computer understanding and logical skills',
    practicalTraining: 'Extensive compiler-based practical training with over 100 logical algorithm-to-code exercises.',
    overview: 'Learn C, the structural mother of modern computer programming. Master memory allocation, data types, logic operators, and clean console inputs.',
    topics: [
      'Programming Concepts, Flowcharts & Pseudo-code',
      'Tokens, Constants, Keywords & Variable Scopes',
      'Control Statements: IF-ELSE, Switch-Case & Loops',
      'User-defined Functions & Recursion Architecture',
      'Arrays (1D & Multi-dimensional) & String Manipulation',
      'Pointer Architecture, Memory Addresses & Dynamic Allocation',
      'Structures, Unions & Preprocessor Directives',
      'Console File Handling & Streams'
    ],
    benefits: 'Develop a strong programmer mindset, master core logic structures, and prepare for computer science engineering exams.',
    whoCanJoin: 'College engineering students, BCA/MCA aspirants, and programmers wanting to establish strong roots.',
    careerOpportunities: [
      'Junior Embedded Programmer',
      'Core Logic Developer',
      'Technical Interview Qualifier',
      'Compiler Lab Assistant'
    ],
    practicalSessions: 'Daily hands-on coding, dry-running, debugging, and pointer profiling in modern compilers.',
    certificateInformation: 'Programming Concepts & C Language Certification from दaksh Computers.'
  },
  {
    id: 'cpp-programming',
    name: 'C++',
    duration: '4 Months',
    eligibility: 'Basic C Programming knowledge',
    practicalTraining: 'Practical implementation of OOPs principles including classes, polymorphism, and modular file organization.',
    overview: 'Elevate your software coding using Object-Oriented Programming (OOP) paradigms in C++. Build highly optimized application modules.',
    topics: [
      'Introduction to OOPs vs Procedural Programming',
      'Classes, Encapsulation, and Object Instantiation',
      'Constructors & Destructors (Default, Parameterized, Copy)',
      'Inheritance Paradigms (Single, Multiple, Multi-level, Hierarchical, Hybrid)',
      'Polymorphism: Function & Operator Overloading',
      'Virtual Functions, Abstract Classes & Runtime Binding',
      'Exception Handling (Try, Catch, Throw) & File Streams',
      'Templates, Generics & Intro to Standard Template Library (STL)'
    ],
    benefits: 'Master OOP design patterns used globally in high-performance desktop apps, browsers, and AAA game engines.',
    whoCanJoin: 'IT, Computer Science and engineering students preparing for technical interviews or software roles.',
    careerOpportunities: [
      'Object-Oriented Software Developer',
      'Application Architect',
      'AAA Game Programming Trainee',
      'Systems Developer'
    ],
    practicalSessions: 'Advanced object modeling exercises, clean hierarchy design, and memory profiling labs.',
    certificateInformation: 'Object-Oriented C++ Programming Certification from दaksh Computers.'
  },
  {
    id: 'java',
    name: 'Java',
    duration: '4 Months',
    eligibility: 'Knowledge of basic programming syntax (C or C++)',
    practicalTraining: 'Daily JVM runtime debugging, OOP designing, and multithreading implementation in professional IDEs.',
    overview: 'Master Core Java, the robust, platform-independent language powering billions of enterprise servers, databases, and major android applications worldwide.',
    topics: [
      'Java Virtual Machine (JVM), JRE, and JDK Architecture',
      'Data Types, Arrays, Operators, and Loop Constructs',
      'Core OOP: Classes, Interfaces, Inheritance & Packages',
      'Robust Exception Handling & Custom Exceptions',
      'Multithreaded Programming & Thread Synchronization',
      'Java Input/Output (I/O Streams) & Scanner Classes',
      'Java Collections Framework (List, Set, Map, ArrayList)',
      'Database Connectivity using JDBC & SQL Statements'
    ],
    benefits: 'Learn "Write Once, Run Anywhere" principles, build enterprise-grade logic, and master core tools required by MNCs.',
    whoCanJoin: 'College students, tech job-seekers, and software development candidates.',
    careerOpportunities: [
      'Backend Java Engineer',
      'MNC Application Developer',
      'Junior Automation Test Engineer',
      'Enterprise Systems Trainee'
    ],
    practicalSessions: 'Real-time debugging in IDE, database integrations, and multithreaded task management simulations in labs.',
    certificateInformation: 'Core Java Programming Specialist Certification from दaksh Computers.'
  },
  {
    id: 'python',
    name: 'Python',
    duration: '4.5 Months',
    eligibility: 'Open to all students (Beginners to Graduates)',
    practicalTraining: 'Hands-on project work involving automation scripts, data formatting, and basic data analysis plots.',
    overview: 'Learn Python, the globally beloved, modern, clean-syntax programming language powering web services, backend APIs, data science, and artificial intelligence.',
    topics: [
      'Python Interpreter, Interactive Shell & Script Modes',
      'Syntax, Data Types, Variables, Dynamic Typing',
      'Decision Trees, For/While Loops, Function Declarations',
      'Advanced Data Structures: Lists, Tuples, Dictionaries, Sets',
      'Modules, Packages, and Python Standard Library',
      'File Input/Output, Error Handling, Exception blocks',
      'Introduction to Object-Oriented concepts in Python',
      'Introduction to Data Science Toolkits: NumPy, Pandas, Matplotlib'
    ],
    benefits: 'Rapidly write automations, process CSV/Excel databases, and establish a launching pad for Machine Learning or Web Development.',
    whoCanJoin: 'Complete coding beginners, finance analysts, college students, and future data scientists.',
    careerOpportunities: [
      'Python Automation Scriptwriter',
      'Junior Software Assistant',
      'Data Processing Operator',
      'Research & Data Analyst'
    ],
    practicalSessions: 'Write elegant scripts for directory operations, clean up data sets, and plot responsive graphs.',
    certificateInformation: 'Certified Python Application Developer from दaksh Computers.'
  },
  {
    id: 'html',
    name: 'HTML',
    duration: '1 Month',
    eligibility: 'Basic typing and operating system skills',
    practicalTraining: 'Crafting dozens of clean semantic web page documents directly in professional code editors.',
    overview: 'Master HyperText Markup Language, the standard architecture that powers the look, structure, and readability of every single website on the planet.',
    topics: [
      'HTML5 Document Declarations, Head & Body Architecture',
      'Text Formatting: Headings, Paragraphs, Lists, Line Breaks',
      'Hyperlinks: Absolute, Relative, and Anchor Links',
      'Image Optimization, Formats, and SVG Insertion',
      'Data Organization using Clean HTML Tables',
      'Input Elements, Forms, Labels, Selects & Textareas',
      'Modern Semantic Elements: Header, Footer, Nav, Section, Article',
      'Embedding Media: Audio Player, Responsive Video, Google Maps'
    ],
    benefits: 'Learn how web browsers parse, index, and load layouts. Gain critical foundation for SEO and web design.',
    whoCanJoin: 'Aspiring web builders, social media executives, content writers, and digital creators.',
    careerOpportunities: [
      'Junior Web Layout Designer',
      'Content Operations Associate',
      'SEO Content Architect',
      'Website Maintenance Executive'
    ],
    practicalSessions: 'Complete 10+ custom static blueprints including form collections, data tables, and structured articles.',
    certificateInformation: 'Certified Web Page Layout Specialist from दaksh Computers.'
  },
  {
    id: 'css',
    name: 'CSS',
    duration: '1 Month',
    eligibility: 'Basic knowledge of HTML',
    practicalTraining: 'Styling flat HTML sheets into fully responsive, modern layouts using absolute positioning, Flexbox, Grid, and transitions.',
    overview: 'Learn Cascading Style Sheets (CSS) to elevate raw HTML structure into visually gorgeous, interactive, and fully responsive user interfaces.',
    topics: [
      'CSS Selectors, Inline, Internal & External Stylesheets',
      'Understanding Box Model: Margin, Padding, Border, Content',
      'Color Spaces (RGB, HEX, HSL) & Typography Styling',
      'Element Layouts: Block, Inline, Display, Floats & Positioning',
      'Flexbox Layout Model: Alignment, Flex Direction, Wrapping',
      'CSS Grid: Template Areas, Column/Row Spacings, Responsive Tracks',
      'Media Queries: Fluid, Mobile-First Web Stylesheets',
      'CSS Animations, Keyframe Timers, and Hover Transitions'
    ],
    benefits: 'Gain the power to design websites that look stunning on desktops, notebooks, tablets, and smartphones alike.',
    whoCanJoin: 'Web designers, layout designers, and backend devs wanting to make progress in frontend styling.',
    careerOpportunities: [
      'UI Stylesheet Developer',
      'Web Presentation Specialist',
      'Responsive Layout Creator',
      'Frontend Styling Associate'
    ],
    practicalSessions: 'Convert flat wireframes into styled, gorgeous, animated, interactive portfolios.',
    certificateInformation: 'Certified Responsive Stylesheet Designer from दaksh Computers.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    duration: '2 Months',
    eligibility: 'Knowledge of HTML & CSS basics',
    practicalTraining: 'Writing client-side interactions, validating forms, managing state, and rendering API-driven data lists.',
    overview: 'Learn Javascript, the powerful client-side language of the web. Transform static graphics into real, reactive, and live web apps.',
    topics: [
      'Variables (let, const), Types, Operators, Expressions',
      'Conditionals, Loops (for, while, forEach), Object Arrays',
      'Functions (Declarative, Arrow, Callbacks, Anonymous)',
      'DOM API: Query Selectors, HTML Content Updates, Style Injections',
      'Event Listeners: Mouse clicks, Keypresses, Form Submissions',
      'Handling Forms: Data Validation, Error Catching, regex testing',
      'Asynchronous JS: JSON, Fetch API, Promises, Async/Await',
      'Local Storage & Session Storage Client-Side Persistence'
    ],
    benefits: 'Write real browser tools, implement interactive user experiences, and enter the world of modern programming framework ecosystems.',
    whoCanJoin: 'Web designers wanting to become modern frontend developers, or university graduates.',
    careerOpportunities: [
      'Browser Interaction Engineer',
      'Frontend Logic Developer',
      'Client-Side Integration Specialist',
      'MNC Web Associate'
    ],
    practicalSessions: 'Code and run functional applications like a dynamic billing calculator, task keeper, and live weather widget.',
    certificateInformation: 'Certified JavaScript & Web Application Logic Specialist.'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    duration: '4 Months',
    eligibility: 'Familiarity with HTML, CSS & Basic Programming',
    practicalTraining: 'Complete design-to-deployment roadmap. Build multi-page sites, utilize code repositories, and host live websites.',
    overview: 'The ultimate professional course combining HTML5, CSS3, JavaScript, framework layouts, and modern deployment tools to build and deploy fast, SEO-optimized, accessible websites.',
    topics: [
      'Semantic Website Architecture & Web Accessibility (WCAG)',
      'Advanced Responsive Layouts with modern Tailwind CSS utilities',
      'Dynamic JavaScript-driven Web States, local persistence',
      'Version Control with Git, Branching, and GitHub Repository publishing',
      'Vite build system, package compilation, clean JS modules',
      'Deploying Websites Live to modern CDN clouds (Netlify / Vercel)',
      'SEO Best Practices: Meta Optimization, Sitemap generation, Page Speed'
    ],
    benefits: 'Develop a highly competitive professional designer-developer portfolio. Learn modern workflows that match corporate standards.',
    whoCanJoin: 'Aspiring professional developers, engineering candidates, freelancers, and design enthusiasts.',
    careerOpportunities: [
      'Full-Stack Frontend Developer',
      'Professional Freelancer',
      'Corporate Web Architect',
      'UI Engineering Specialist'
    ],
    practicalSessions: 'Project-driven training: build and publicly host a student portfolio, a responsive tech blog layout, and a live web application dashboard.',
    certificateInformation: 'Certified Professional Web Developer Suite Diploma from दaksh Computers.'
  },
  {
    id: 'tally',
    name: 'Tally',
    duration: '4 Months',
    eligibility: 'Open to All (Commerce Background is helpful but NOT mandatory)',
    practicalTraining: 'Hands-on company ledger drafting, taxation config, purchase-sale routing, and dynamic audit reports.',
    overview: 'Learn Tally.ERP 9 and Tally Prime, the leading enterprise financial accounting and inventory software used by millions of corporate houses in India.',
    topics: [
      'Principles of Computerized Double-Entry Accounting',
      'Creating Companies, Ledgers, Cost Centres, and Groups',
      'Inventory Management: Stock Items, Units, Godowns, Categories',
      'Voucher Entries: Receipts, Payments, Sales, Purchases, Contras',
      'Goods & Services Tax (GST) configuration: CGST, SGST, IGST',
      'TDS Calculation, Employee Payroll Management, PF/ESI',
      'Generating Financial Reports: Trial Balance, P&L Account, Balance Sheet',
      'Data Backup, Restore, Security Controls, and Excel Auditing Exports'
    ],
    benefits: 'Acquire a highly stable, instantly employable financial skill set matching retail shops, corporate branches, and CPA accounting offices.',
    whoCanJoin: 'Commerce graduates, small business owners, finance students, and job seekers.',
    careerOpportunities: [
      'Certified Accountant Assistant',
      'Tally Office Operator',
      'Billing / Inventory Manager',
      'Tax & GST Filing Coordinator',
      'Corporate Accounts Clerk'
    ],
    practicalSessions: 'Simulate business accounting cycles, invoice creations, and GST reports using realistic enterprise models.',
    certificateInformation: 'Certified Tally Prime Accounting Specialist Certificate.'
  },
  {
    id: 'typing',
    name: 'Typing',
    duration: '2 Months',
    eligibility: 'Open to all candidates (Hindi & English Typing)',
    practicalTraining: 'Daily guided touch typing speed-drills with real-time word accuracy and CPCT exam pattern mock tests.',
    overview: 'Master the science of touch typing to drastically increase your speed, ergonomics, and visual accuracy. Special preparation for government typing exams.',
    topics: [
      'Touch Typing Principles, Ergonomics, Finger Placement Home-Row',
      'Home-Row, Top-Row, Bottom-Row, and Num-Pad Drills',
      'English Typing Speed & Accuracy Development Software Drills',
      'Hindi Typing: Kruti Dev 010 and Mangal (Inscript/Remington GAIL)',
      'Sentence Practice, Paragraph Writing, Complex Word Drills',
      'Real-time Typing Speed Evaluation (WPM, Accuracy %)',
      'Preparation for CPCT (Computer Proficiency Certification Test) Bhopal',
      'Government Typing Exam formats and Speed Tests'
    ],
    benefits: 'Develop lightning-fast typing speeds (40+ WPM) in both Hindi and English with unmatched structural accuracy.',
    whoCanJoin: 'Government exam aspirants, clerks, transcriptionists, court stenographer candidates, and administrative assistants.',
    careerOpportunities: [
      'Government Typist / CPCT Qualified Clerk',
      'Administrative Office Operator',
      'Professional Data Entry Clerk',
      'Legal Stenographer Assistant'
    ],
    practicalSessions: 'Daily computer-lab based speed trials using custom speed-tracking typing software.',
    certificateInformation: 'Certified Touch Typing Speed & Accuracy Qualification Certificate.'
  }
];

export const reviewsData: Review[] = [
  {
  id: 'rev-1',
  name: 'Shweta Chouhan',
  role: 'College Student, Bhopal',
  rating: 4.1,
  date: '1 Month ago',
  text: 'Learned Web Development from scratch. Now I can craft fully responsive websites using HTML, CSS, and JavaScript. The practical teaching is amazing, no boring lectures, only real building.'
},
{
  id: 'rev-2',
  name: 'Jitesh Giri',
  role: 'C, C++ & Python Student',
  rating: 5,
  date: '8 Months ago',
  text: 'Thanks to the comprehensive typing drills at Daksh Computers, I passed my CPCT exam with excellent speed and accuracy. My English typing reached 45 WPM and Hindi typing reached 38 WPM. The trainers were supportive throughout my preparation.'
},
{
  id: 'rev-3',
  name: 'Sanjay Saxena',
  role: 'Office Assistant',
  rating: 4.5,
  date: '3 Months ago',
  text: 'Great experience learning Advanced Excel. The batch timings were highly flexible, allowing me to attend classes after my daily work shift. Practical assignments and expert guidance made learning easy.'
},
{
  id: 'rev-4',
  name: 'Rahul Kushwaha',
  role: 'Basic Computer Student',
  rating: 3.3,
  date: '2 Months ago',
  text: 'I joined with zero computer knowledge, but now I can confidently work on MS Office, Internet, and basic computer applications. Every topic was explained patiently with hands-on practice.'
},
{
  id: 'rev-5',
  name: 'Aditi Patel',
  role: 'Web Development Student',
  rating: 1.8,
  date: '1 Month ago',
  text: 'The Web Development course is completely practical. I built multiple responsive websites using HTML, CSS, and JavaScript. Every class included real projects that boosted my confidence.'
},
{
  id: 'rev-6',
  name: 'Manoj Kumar',
  role: 'Typing Course Student',
  rating: 3.7,
  date: '4 Months ago',
  text: 'The typing practice sessions were excellent. Daily tests and personal guidance helped me improve both speed and accuracy. I cleared my typing exam with confidence.'
},
{
  id: 'rev-7',
  name: 'Neha Sharma',
  role: 'Advanced Excel Student',
  rating: 4.8,
  date: '2 Months ago',
  text: 'Advanced Excel training was outstanding. I learned formulas, Pivot Tables, VLOOKUP, and dashboards with real-life examples. These skills are helping me in my office job every day.'
},
{
  id: 'rev-8',
  name: 'Ankit Mishra',
  role: 'Computer Diploma Student',
  rating: 1.5,
  date: '5 Months ago',
  text: 'The instructors are friendly, supportive, and always ready to solve doubts. The classrooms are well-equipped, and the learning environment is motivating. I would definitely recommend this institute.'
},
{
  id: 'rev-9',
  name: 'Priya Soni',
  role: 'CPCT Student',
  rating: 3.5,
  date: '1 Month ago',
  text: 'I prepared for CPCT here and achieved my target typing speed in both Hindi and English. Regular practice, mock tests, and expert guidance made all the difference.'
},
{
  id: 'rev-10',
  name: 'Vivek Gupta',
  role: 'College Student',
  rating: 2.5,
  date: '3 Months ago',
  text: 'The flexible batch timings made it easy to continue my studies along with college. The practical approach and personal attention from faculty are the best part of this institute.'
},
{
  id: 'rev-11',
  name: 'Saurabh Khare',
  role: 'Professional Course Student',
  rating: 4.9,
  date: '6 Months ago',
  text: 'From basic computer skills to professional software training, everything is taught in a simple and practical way. I gained confidence and even got better career opportunities after completing the course.'
},
{
  id: 'rev-12',
  name: 'Tripti Dwivedi',
  role: 'Tally Prime Student',
  rating: 4.1,
  date: '2 Months ago',
  text: 'Learning Tally Prime here was a wonderful experience. From GST billing and voucher entries to inventory and payroll, every topic was taught with practical examples. The faculty is very supportive.'
},
{
  id: 'rev-13',
  name: 'Gyan Prakash Prajapati',
  role: 'Python Student',
  rating: 3.9,
  date: '1 Month ago',
  text: 'The Python course helped me understand programming from the basics. I learned variables, loops, functions, file handling, and mini projects in a practical way. Coding has become enjoyable for me.'
},
{
  id: 'rev-14',
  name: 'Rupali Shrivastava',
  role: 'Tally Prime & Python Student',
  rating: 0.9,
  date: '3 Months ago',
  text: 'I enrolled in both Tally Prime and Python, and the learning experience exceeded my expectations. Practical sessions, regular assignments, and doubt-clearing support helped me build confidence in both accounting and programming.'
},
];

export const certificatesData: Certificate[] = [
  {
    id: 'DC-2026-0819',
    studentName: 'Rahul Sharma',
    courseName: 'Web Development',
    issueDate: 'May 12, 2026',
    photoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    description: 'Awarded for successful completion of the Web Development mastery course with exceptional grades.'
  },
  {
    id: 'DC-2026-1142',
    studentName: 'Priya Patel',
    courseName: 'DCA',
    issueDate: 'June 28, 2026',
    photoUrl: 'https://images.unsplash.com/photo-1589330694653-efa6475306fa?q=80&w=800&auto=format&fit=crop',
    description: 'Awarded for completing the Diploma in Computer Applications with practical excellence.'
  },
  {
    id: 'DC-2026-3024',
    studentName: 'Amit Verma',
    courseName: 'Tally Prime',
    issueDate: 'March 10, 2026',
    photoUrl: 'https://images.unsplash.com/photo-1558025137-0b407a9dc3ed?q=80&w=800&auto=format&fit=crop',
    description: 'Awarded for demonstrating proficiency in Tally Prime and Financial Accounting.'
  }
];

export const facilitiesData: Facility[] = [
  {
    id: 'fac-1',
    title: 'Fully Equipped Computer Lab',
    description: 'Daily hands-on practice in a modern laboratory environment with individual computers for every student.',
    iconName: 'Laptop'
  },
  {
    id: 'fac-2',
    title: 'Smart TV Classroom',
    description: 'Visual training rooms fitted with high-definition Smart TVs and digital screen sharing for active learning.',
    iconName: 'Tv'
  },
  {
    id: 'fac-3',
    title: 'High-Speed Internet',
    description: 'Seamless ultra-fast internet connectivity across the campus for web testing, programming installation, and research.',
    iconName: 'Wifi'
  },
  {
    id: 'fac-4',
    title: 'Practical Training Focus',
    description: 'Say goodbye to boring theoretical lectures. Every course syllabus is highly career-oriented with real-world project work.',
    iconName: 'Briefcase'
  },
  {
    id: 'fac-5',
    title: 'Experienced Faculty Guidance',
    description: 'Learn directly from Prof. Manish Saxena, offering personalized mentorship, error checking, and technical coding coaching.',
    iconName: 'GraduationCap'
  },
  {
    id: 'fac-6',
    title: 'Friendly Learning Environment',
    description: 'A welcoming, supportive, and safe classroom atmosphere focused on building mutual trust and learning confidence.',
    iconName: 'Users'
  }
];

export const galleryVideos: import('./types').GalleryVideo[] = [
  {
    id: 'vid-1',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-having-fun-at-a-picnic-42461-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    title: 'दaksh Computers Student Picnic Highlights'
  }
];

export const galleryImages: import('./types').GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    caption: 'Student Picnic'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1464851707681-f9d5fdacccd8?q=80&w=800&auto=format&fit=crop',
    caption: 'Group Activities'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    caption: 'Campus Tour'
  }
];
