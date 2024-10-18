import {
  FaChartBar,
  FaClipboardList,
  FaCode,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";

export const CATEGORIES_CARDS_DATA = [
  {
    name: "Product Management",
    logo: "fas fa-briefcase text-blue-500 text-3xl mb-2",
  },
  {
    name: "Engineering Management",
    logo: "fas fa-users text-blue-500 text-3xl mb-2",
  },
  {
    name: "Software Engineering",
    logo: "fas fa-code text-blue-500 text-3xl mb-2",
  },
  {
    name: "System Design",
    logo: "fas fa-puzzle-piece text-blue-500 text-3xl mb-2",
  },
  {
    name: "Data Science",
    logo: "fas fa-chart-line text-blue-500 text-3xl mb-2",
  },
  {
    name: "Machine Learning",
    logo: "fas fa-robot text-blue-500 text-3xl mb-2",
  },
  {
    name: "TPM",
    logo: "fas fa-cogs text-blue-500 text-3xl mb-2",
  },
  {
    name: "Machine Learning",
    logo: "fas fa-robot text-blue-500 text-3xl mb-2",
  },
  {
    name: "TPM",
    logo: "fas fa-cogs text-blue-500 text-3xl mb-2",
  },
  {
    name: "Machine Learning",
    logo: "fas fa-robot text-blue-500 text-3xl mb-2",
  },
  {
    name: "TPM",
    logo: "fas fa-cogs text-blue-500 text-3xl mb-2",
  },
  {
    name: "Machine Learning",
    logo: "fas fa-robot text-blue-500 text-3xl mb-2",
  },
  {
    name: "TPM",
    logo: "fas fa-cogs text-blue-500 text-3xl mb-2",
  },
];
export const MNC_DATA = [
  {
    name: "Meta",
    logo: "fab fa-meta fa-3x text-blue-600",
  },
  {
    name: "Meta",
    logo: "fab fa-google fa-3x text-blue-600",
  },
  {
    name: "Google",
    logo: "fab fa-meta fa-3x text-blue-600",
  },
  {
    name: "Microsoft",
    logo: "fab fa-microsoft fa-3x text-green-600",
  },
  {
    name: "Meta",
    logo: "fab fa-amazon fa-3x text-yellow-500",
  },
  {
    name: "Amazon",
    logo: "fab fa-meta fa-3x text-blue-600",
  },
  {
    name: "Meta",
    logo: "fab fa-openai fa-3x text-gray-500",
  },
  {
    name: "OpenAI",
    logo: "fab fa-meta fa-3x text-blue-600",
  },
  {
    name: "Airbnb",
    logo: "fab fa-airbnb fa-3x text-red-500",
  },
  {
    name: "Meta",
    logo: "fab fa-facebook-f fa-3x text-blue-700",
  },
  {
    name: "Facebook",
    logo: "fab fa-meta fa-3x text-blue-600",
  },
  {
    name: "TikTok",
    logo: "fab fa-tiktok fa-3x text-black",
  },
  {
    name: "Stripe",
    logo: "fab fa-stripe fa-3x text-indigo-600",
  },
  {
    name: "IBM",
    logo: "fab fa-ibm fa-3x text-blue-600",
  },
  {
    name: "Salesforce",
    logo: "fab fa-salesforce fa-3x text-blue-500",
  },
  {
    name: "Uber",
    logo: "fab fa-uber fa-3x text-black",
  },
  {
    name: "Adobe",
    logo: "fab fa-adobe fa-3x text-red-600",
  },
  {
    name: "Pinterest",
    logo: "fab fa-pinterest fa-3x text-red-600",
  },
  {
    name: "Etsy",
    logo: "fab fa-etsy fa-3x text-green-600",
  },
  {
    name: "Yelp",
    logo: "fab fa-yelp fa-3x text-red-600",
  },
];

export const TAGS = [
  "All",
  "PM",
  "Machine Learning",
  "Data Science",
  "Security",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "Blockchain",
  "Artificial Intelligence",
  "Big Data",
  "Cybersecurity",
  "UI/UX Design",
  "Game Development",
  "Embedded Systems",
  "Networking",
  "IoT (Internet of Things)",
  "Data Engineering",
  "Quantum Computing",
  "Software Testing",
  "AR/VR (Augmented/Virtual Reality)",
  "Database Management",
  "Automation",
  "Digital Marketing",
];
export const ITEM_WIDTH = 240;

export const courseItems = [
  {
    name: "Product Management",
    description:
      "Ace product interviews from strategy cases to technical skills.",
    icon: <FaClipboardList />,
    id: 1,
  },
  {
    name: "Software Engineering",
    description: "Learn essential strategies for coding problems and more.",
    icon: <FaCode />,
    id: 2,
  },
  {
    name: "Data Science",
    description:
      "Execute statistical techniques and experimentation effectively.",
    icon: <FaChartBar />,
    id: 3,
  },
  {
    name: "Engineering Management",
    description: "Review key leadership and people management skills.",
    icon: <FaUsers />,
    id: 4,
  },
  {
    name: "System Design",
    description:
      "Define architectures, interfaces, and databases in a time crunch.",
    icon: <FaNetworkWired />,
    id: 5,
  },
];

export const COURSES = [
  {
    id: 101,
    title: "Intro to Product Management",
    description: "Learn the fundamentals of managing a product lifecycle.",
    courses: 5,
    students: "8k",
    image: "https://example.com/image101.jpg",
    categoryId: 1,
  },
  {
    id: 102,
    title: "Advanced Product Strategy",
    description: "Master advanced strategies in product management.",
    courses: 8,
    students: "12k",
    image: "https://example.com/image102.jpg",
    categoryId: 1,
  },
  {
    id: 103,
    title: "Roadmapping and Prioritization",
    description: "Learn how to roadmap and prioritize product features.",
    courses: 6,
    students: "6k",
    image: "https://example.com/image103.jpg",
    categoryId: 1,
  },
  {
    id: 104,
    title: "Metrics and KPIs in Product",
    description: "Understand key metrics and KPIs in product management.",
    courses: 4,
    students: "10k",
    image: "https://example.com/image104.jpg",
    categoryId: 1,
  },
  {
    id: 201,
    title: "Data Structures and Algorithms",
    description: "Learn the most commonly used data structures and algorithms.",
    courses: 10,
    students: "25k",
    image: "https://example.com/image201.jpg",
    categoryId: 2,
  },
  {
    id: 202,
    title: "System Design Basics",
    description: "Fundamentals of designing scalable and reliable systems.",
    courses: 7,
    students: "15k",
    image: "https://example.com/image202.jpg",
    categoryId: 2,
  },
  {
    id: 203,
    title: "Advanced Coding Interviews",
    description: "Prepare for advanced coding interviews with real problems.",
    courses: 12,
    students: "30k",
    image: "https://example.com/image203.jpg",
    categoryId: 2,
  },
  {
    id: 204,
    title: "Database Management",
    description: "Manage databases efficiently with best practices.",
    courses: 6,
    students: "18k",
    image: "https://example.com/image204.jpg",
    categoryId: 2,
  },
  {
    id: 301,
    title: "Statistics for Data Science",
    description: "Learn essential statistics concepts for data science.",
    courses: 8,
    students: "20k",
    image: "https://example.com/image301.jpg",
    categoryId: 3,
  },
  {
    id: 302,
    title: "Machine Learning Basics",
    description: "Introduction to machine learning techniques and tools.",
    courses: 10,
    students: "22k",
    image: "https://example.com/image302.jpg",
    categoryId: 3,
  },
  {
    id: 303,
    title: "Data Wrangling Techniques",
    description: "Master techniques for cleaning and organizing data.",
    courses: 5,
    students: "12k",
    image: "https://example.com/image303.jpg",
    categoryId: 3,
  },
  {
    id: 304,
    title: "Python for Data Science",
    description: "Learn how to use Python effectively in data science.",
    courses: 9,
    students: "30k",
    image: "https://example.com/image304.jpg",
    categoryId: 3,
  },
  {
    id: 401,
    title: "Leadership in Engineering",
    description: "Develop leadership skills in an engineering context.",
    courses: 6,
    students: "18k",
    image: "https://example.com/image401.jpg",
    categoryId: 4,
  },
  {
    id: 402,
    title: "Effective Communication",
    description: "Improve communication in engineering teams.",
    courses: 5,
    students: "14k",
    image: "https://example.com/image402.jpg",
    categoryId: 4,
  },
  {
    id: 403,
    title: "Building Teams",
    description: "Learn how to build and manage successful teams.",
    courses: 4,
    students: "10k",
    image: "https://example.com/image403.jpg",
    categoryId: 4,
  },
  {
    id: 404,
    title: "Conflict Resolution",
    description: "Master conflict resolution techniques in a team setting.",
    courses: 3,
    students: "9k",
    image: "https://example.com/image404.jpg",
    categoryId: 4,
  },
  {
    id: 501,
    title: "Introduction to System Design",
    description: "Learn the basics of system design from scratch.",
    courses: 6,
    students: "20k",
    image: "https://example.com/image501.jpg",
    categoryId: 5,
  },
  {
    id: 502,
    title: "Designing Scalable Systems",
    description: "Understand how to design scalable and maintainable systems.",
    courses: 8,
    students: "22k",
    image: "https://example.com/image502.jpg",
    categoryId: 5,
  },
  {
    id: 503,
    title: "Microservices Architecture",
    description: "Learn about microservices architecture and design patterns.",
    courses: 5,
    students: "15k",
    image: "https://example.com/image503.jpg",
    categoryId: 5,
  },
  {
    id: 504,
    title: "Design Patterns for Large Systems",
    description: "Discover design patterns for building large-scale systems.",
    courses: 7,
    students: "17k",
    image: "https://example.com/image504.jpg",
    categoryId: 5,
  },
  {
    id: 601,
    title: "Deep Learning Fundamentals",
    description: "Explore the fundamentals of deep learning.",
    courses: 7,
    students: "25k",
    image: "https://example.com/image601.jpg",
    categoryId: 3,
  },
  {
    id: 602,
    title: "Natural Language Processing",
    description: "Understand the basics of NLP and its applications.",
    courses: 6,
    students: "18k",
    image: "https://example.com/image602.jpg",
    categoryId: 3,
  },
  {
    id: 603,
    title: "Reinforcement Learning",
    description: "Learn the fundamentals of reinforcement learning.",
    courses: 5,
    students: "12k",
    image: "https://example.com/image603.jpg",
    categoryId: 3,
  },
  {
    id: 701,
    title: "Cloud Architecture Basics",
    description: "Get started with cloud computing and architecture.",
    courses: 5,
    students: "10k",
    image: "https://example.com/image701.jpg",
    categoryId: 2,
  },
  {
    id: 702,
    title: "Containerization with Docker",
    description: "Learn containerization and Docker for development.",
    courses: 7,
    students: "12k",
    image: "https://example.com/image702.jpg",
    categoryId: 2,
  },
  {
    id: 703,
    title: "Kubernetes for Developers",
    description: "Master Kubernetes for container orchestration.",
    courses: 6,
    students: "15k",
    image: "https://example.com/image703.jpg",
    categoryId: 2,
  },
  {
    id: 801,
    title: "AI Ethics",
    description: "Learn about the ethical implications of AI development.",
    courses: 5,
    students: "7k",
    image: "https://example.com/image801.jpg",
    categoryId: 3,
  },
  {
    id: 802,
    title: "Deploying Machine Learning Models",
    description: "Understand how to deploy ML models in production.",
    courses: 6,
    students: "15k",
    image: "https://example.com/image802.jpg",
    categoryId: 3,
  },
];

export const CHAPTERS = [
  // Intro to Product Management (Course 101)
  {
    id: 1001,
    courseId: 101,
    title: "Chapter 1: Introduction to Product Management",
    topicIds: [2001, 2002],
  },
  {
    id: 1002,
    courseId: 101,
    title: "Chapter 2: Product Lifecycle",
    topicIds: [2003, 2004],
  },
  {
    id: 1003,
    courseId: 101,
    title: "Chapter 3: Market Research",
    topicIds: [2005, 2006],
  },
  {
    id: 1004,
    courseId: 101,
    title: "Chapter 4: KPIs and Metrics",
    topicIds: [2007, 2008],
  },
  {
    id: 1005,
    courseId: 101,
    title: "Chapter 5: Roadmapping and Prioritization",
    topicIds: [2009, 2010],
  },

  // Advanced Product Strategy (Course 102)
  {
    id: 1006,
    courseId: 102,
    title: "Chapter 1: Strategic Thinking",
    topicIds: [2011, 2012],
  },
  {
    id: 1007,
    courseId: 102,
    title: "Chapter 2: Competitive Analysis",
    topicIds: [2013, 2014],
  },
  {
    id: 1008,
    courseId: 102,
    title: "Chapter 3: Go-to-Market Strategy",
    topicIds: [2015, 2016],
  },
  {
    id: 1009,
    courseId: 102,
    title: "Chapter 4: Scaling Product Strategy",
    topicIds: [2017, 2018],
  },

  // Data Structures and Algorithms (Course 201)
  {
    id: 1010,
    courseId: 201,
    title: "Chapter 1: Introduction to Data Structures",
    topicIds: [2019, 2020],
  },
  {
    id: 1011,
    courseId: 201,
    title: "Chapter 2: Arrays and Lists",
    topicIds: [2021, 2022],
  },
  {
    id: 1012,
    courseId: 201,
    title: "Chapter 3: Trees and Graphs",
    topicIds: [2023, 2024],
  },
  {
    id: 1013,
    courseId: 201,
    title: "Chapter 4: Sorting Algorithms",
    topicIds: [2025, 2026],
  },
  {
    id: 1014,
    courseId: 201,
    title: "Chapter 5: Dynamic Programming",
    topicIds: [2027, 2028],
  },

  // System Design Basics (Course 202)
  {
    id: 1015,
    courseId: 202,
    title: "Chapter 1: Introduction to System Design",
    topicIds: [2029, 2030],
  },
  {
    id: 1016,
    courseId: 202,
    title: "Chapter 2: Scalability",
    topicIds: [2031, 2032],
  },
  {
    id: 1017,
    courseId: 202,
    title: "Chapter 3: Load Balancing",
    topicIds: [2033, 2034],
  },
  {
    id: 1018,
    courseId: 202,
    title: "Chapter 4: Caching",
    topicIds: [2035, 2036],
  },

  // Statistics for Data Science (Course 301)
  {
    id: 1019,
    courseId: 301,
    title: "Chapter 1: Descriptive Statistics",
    topicIds: [2037, 2038],
  },
  {
    id: 1020,
    courseId: 301,
    title: "Chapter 2: Inferential Statistics",
    topicIds: [2039, 2040],
  },
  {
    id: 1021,
    courseId: 301,
    title: "Chapter 3: Probability Theory",
    topicIds: [2041, 2042],
  },
  {
    id: 1022,
    courseId: 301,
    title: "Chapter 4: Hypothesis Testing",
    topicIds: [2043, 2044],
  },

  // Leadership in Engineering (Course 401)
  {
    id: 1023,
    courseId: 401,
    title: "Chapter 1: Leadership Fundamentals",
    topicIds: [2045, 2046],
  },
  {
    id: 1024,
    courseId: 401,
    title: "Chapter 2: Building High-Performing Teams",
    topicIds: [2047, 2048],
  },
  {
    id: 1025,
    courseId: 401,
    title: "Chapter 3: Conflict Resolution",
    topicIds: [2049, 2050],
  },

  // Introduction to System Design (Course 501)
  {
    id: 1026,
    courseId: 501,
    title: "Chapter 1: Introduction to System Design",
    topicIds: [2051, 2052],
  },
  {
    id: 1027,
    courseId: 501,
    title: "Chapter 2: Designing for Scalability",
    topicIds: [2053, 2054],
  },
  {
    id: 1028,
    courseId: 501,
    title: "Chapter 3: Load Balancing",
    topicIds: [2055, 2056],
  },
  {
    id: 1029,
    courseId: 501,
    title: "Chapter 4: Database Design",
    topicIds: [2057, 2058],
  },
];

export const TOPICS = [
  // Topics for Intro to Product Management (Course 101)
  { id: 2001, chapterId: 1001, title: "What is Product Management?" },
  { id: 2002, chapterId: 1001, title: "Key Roles and Responsibilities" },
  { id: 2003, chapterId: 1002, title: "Understanding the Product Lifecycle" },
  { id: 2004, chapterId: 1002, title: "Managing the Product Lifecycle" },
  { id: 2005, chapterId: 1003, title: "Introduction to Market Research" },
  { id: 2006, chapterId: 1003, title: "Techniques for Effective Research" },
  { id: 2007, chapterId: 1004, title: "Key Performance Indicators (KPIs)" },
  { id: 2008, chapterId: 1004, title: "Tracking and Measuring Success" },
  { id: 2009, chapterId: 1005, title: "Building a Product Roadmap" },
  { id: 2010, chapterId: 1005, title: "Prioritizing Features" },

  // Topics for Advanced Product Strategy (Course 102)
  { id: 2011, chapterId: 1006, title: "Developing a Strategic Mindset" },
  { id: 2012, chapterId: 1006, title: "Frameworks for Strategic Thinking" },
  { id: 2013, chapterId: 1007, title: "Analyzing Competitors" },
  { id: 2014, chapterId: 1007, title: "Competitive Intelligence" },
  { id: 2015, chapterId: 1008, title: "Crafting a Go-to-Market Strategy" },
  { id: 2016, chapterId: 1008, title: "Executing a Market Launch" },
  { id: 2017, chapterId: 1009, title: "Scaling Products Internationally" },
  { id: 2018, chapterId: 1009, title: "Optimizing for Growth" },

  // Topics for Data Structures and Algorithms (Course 201)
  { id: 2019, chapterId: 1010, title: "Overview of Data Structures" },
  { id: 2020, chapterId: 1010, title: "Choosing the Right Data Structure" },
  { id: 2021, chapterId: 1011, title: "Introduction to Arrays" },
  { id: 2022, chapterId: 1011, title: "Linked Lists" },
  { id: 2023, chapterId: 1012, title: "Trees: Types and Operations" },
  { id: 2024, chapterId: 1012, title: "Graph Algorithms" },
  { id: 2025, chapterId: 1013, title: "Sorting Algorithms" },
  { id: 2026, chapterId: 1013, title: "Optimizing Sorting Efficiency" },
  { id: 2027, chapterId: 1014, title: "Introduction to Dynamic Programming" },
  { id: 2028, chapterId: 1014, title: "Dynamic Programming Techniques" },

  // Topics for System Design Basics (Course 202)
  { id: 2029, chapterId: 1015, title: "What is System Design?" },
  { id: 2030, chapterId: 1015, title: "Understanding System Requirements" },
  { id: 2031, chapterId: 1016, title: "Designing for Scalability" },
  { id: 2032, chapterId: 1016, title: "Handling Large Traffic Volumes" },
  { id: 2033, chapterId: 1017, title: "Introduction to Load Balancing" },
  { id: 2034, chapterId: 1017, title: "Load Balancing Strategies" },
  { id: 2035, chapterId: 1018, title: "What is Caching?" },
  { id: 2036, chapterId: 1018, title: "Implementing Caching Effectively" },

  // Topics for Statistics for Data Science (Course 301)
  { id: 2037, chapterId: 1019, title: "Measures of Central Tendency" },
  { id: 2038, chapterId: 1019, title: "Measures of Dispersion" },
  { id: 2039, chapterId: 1020, title: "Introduction to Probability" },
  { id: 2040, chapterId: 1020, title: "The Normal Distribution" },
  { id: 2041, chapterId: 1021, title: "Probability Theorems" },
  { id: 2042, chapterId: 1021, title: "Bayesian Probability" },
  { id: 2043, chapterId: 1022, title: "Introduction to Hypothesis Testing" },
  { id: 2044, chapterId: 1022, title: "P-values and Confidence Intervals" },

  // Topics for Leadership in Engineering (Course 401)
  { id: 2045, chapterId: 1023, title: "Understanding Leadership" },
  { id: 2046, chapterId: 1023, title: "Essential Leadership Qualities" },
  { id: 2047, chapterId: 1024, title: "Building and Leading Teams" },
  { id: 2048, chapterId: 1024, title: "Fostering Collaboration" },
  { id: 2049, chapterId: 1025, title: "Managing Conflicts Effectively" },
  { id: 2050, chapterId: 1025, title: "Resolving Team Issues" },

  // Topics for Introduction to System Design (Course 501)
  { id: 2051, chapterId: 1026, title: "What is System Design?" },
  { id: 2052, chapterId: 1026, title: "Understanding the Basics" },
  { id: 2053, chapterId: 1027, title: "Scalability Fundamentals" },
  { id: 2054, chapterId: 1027, title: "Handling High Availability" },
  { id: 2055, chapterId: 1028, title: "Load Balancing Basics" },
  { id: 2056, chapterId: 1028, title: "Advanced Load Balancing" },
  { id: 2057, chapterId: 1029, title: "Introduction to Database Design" },
  { id: 2058, chapterId: 1029, title: "Choosing the Right Database" },
];
