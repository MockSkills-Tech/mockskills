import {
    FaChartBar,
    FaClipboardList,
    FaCode,
    FaNetworkWired,
    FaUsers,
} from "react-icons/fa";

//import interviewImage from '../assets/interview_image.jpg'
//import web_dev_img from '../assets/CoursesPic/web_dev_img.png/'
import frontend_web_dev_img from "../assets/CoursesPic/frontend_web_dev_img.png"
import foundation_course_img from "../assets/CoursesPic/foundation_course.jpg"
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
        id: 205,
        title: "IT Foundations: Beginner to Pro",
        description: "Master essential IT concepts, programming languages like Java and C, and key subjects like DBMS and networking, along with interview preparation.",
        courses: 5,
        students: "5k",
        image: foundation_course_img,
        categoryId: 2,
        active: true
    },
    {
        id: 200,
        title: "Web Developement (Front-End)",
        description: "Learn the most commonly used Front End technology in Web.",
        courses: 3,
        students: "25k",
        image: frontend_web_dev_img,
        categoryId: 2,
        active: true
    },
    {
        id: 101,
        title: "Intro to Product Management",
        description: "Learn the fundamentals of managing a product lifecycle.",
        courses: 5,
        students: "8k",
        image: null,
        categoryId: 1,
        active: false
    },
    {
        id: 102,
        title: "Advanced Product Strategy",
        description: "Master advanced strategies in product management.",
        courses: 8,
        students: "12k",
        image: null,
        categoryId: 1,
        active: false
    },
    {
        id: 103,
        title: "Roadmapping and Prioritization",
        description: "Learn how to roadmap and prioritize product features.",
        courses: 6,
        students: "6k",
        image: null,
        categoryId: 1,
        active: false
    },
    {
        id: 104,
        title: "Metrics and KPIs in Product",
        description: "Understand key metrics and KPIs in product management.",
        courses: 4,
        students: "10k",
        image: null,
        categoryId: 1,
        active: false
    },

    {
        id: 201,
        title: "Data Structures and Algorithms",
        description: "Learn the most commonly used data structures and algorithms.",
        courses: 10,
        students: "25k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 202,
        title: "System Design Basics",
        description: "Fundamentals of designing scalable and reliable systems.",
        courses: 7,
        students: "15k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 203,
        title: "Advanced Coding Interviews",
        description: "Prepare for advanced coding interviews with real problems.",
        courses: 12,
        students: "30k",
        image: null,
        categoryId: 2,
    },
    {
        id: 204,
        title: "Database Management",
        description: "Manage databases efficiently with best practices.",
        courses: 6,
        students: "18k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 301,
        title: "Statistics for Data Science",
        description: "Learn essential statistics concepts for data science.",
        courses: 8,
        students: "20k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 302,
        title: "Machine Learning Basics",
        description: "Introduction to machine learning techniques and tools.",
        courses: 10,
        students: "22k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 303,
        title: "Data Wrangling Techniques",
        description: "Master techniques for cleaning and organizing data.",
        courses: 5,
        students: "12k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 304,
        title: "Python for Data Science",
        description: "Learn how to use Python effectively in data science.",
        courses: 9,
        students: "30k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 401,
        title: "Leadership in Engineering",
        description: "Develop leadership skills in an engineering context.",
        courses: 6,
        students: "18k",
        image: null,
        categoryId: 4,
        active: false
    },
    {
        id: 402,
        title: "Effective Communication",
        description: "Improve communication in engineering teams.",
        courses: 5,
        students: "14k",
        image: null,
        categoryId: 4,
        active: false
    },
    {
        id: 403,
        title: "Building Teams",
        description: "Learn how to build and manage successful teams.",
        courses: 4,
        students: "10k",
        image: null,
        categoryId: 4,
        active: false
    },
    {
        id: 404,
        title: "Conflict Resolution",
        description: "Master conflict resolution techniques in a team setting.",
        courses: 3,
        students: "9k",
        image: null,
        categoryId: 4,
        active: false
    },
    {
        id: 501,
        title: "Introduction to System Design",
        description: "Learn the basics of system design from scratch.",
        courses: 6,
        students: "20k",
        image: null,
        categoryId: 5,
        active: false
    },
    {
        id: 502,
        title: "Designing Scalable Systems",
        description: "Understand how to design scalable and maintainable systems.",
        courses: 8,
        students: "22k",
        image: null,
        categoryId: 5,
    },
    {
        id: 503,
        title: "Microservices Architecture",
        description: "Learn about microservices architecture and design patterns.",
        courses: 5,
        students: "15k",
        image: null,
        categoryId: 5,
        active: false
    },
    {
        id: 504,
        title: "Design Patterns for Large Systems",
        description: "Discover design patterns for building large-scale systems.",
        courses: 7,
        students: "17k",
        image: null,
        categoryId: 5,
        active: false
    },
    {
        id: 601,
        title: "Deep Learning Fundamentals",
        description: "Explore the fundamentals of deep learning.",
        courses: 7,
        students: "25k",
        image: null,
        categoryId: 3,
    },
    {
        id: 602,
        title: "Natural Language Processing",
        description: "Understand the basics of NLP and its applications.",
        courses: 6,
        students: "18k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 603,
        title: "Reinforcement Learning",
        description: "Learn the fundamentals of reinforcement learning.",
        courses: 5,
        students: "12k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 701,
        title: "Cloud Architecture Basics",
        description: "Get started with cloud computing and architecture.",
        courses: 5,
        students: "10k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 702,
        title: "Containerization with Docker",
        description: "Learn containerization and Docker for development.",
        courses: 7,
        students: "12k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 703,
        title: "Kubernetes for Developers",
        description: "Master Kubernetes for container orchestration.",
        courses: 6,
        students: "15k",
        image: null,
        categoryId: 2,
        active: false
    },
    {
        id: 801,
        title: "AI Ethics",
        description: "Learn about the ethical implications of AI development.",
        courses: 5,
        students: "7k",
        image: null,
        categoryId: 3,
        active: false
    },
    {
        id: 802,
        title: "Deploying Machine Learning Models",
        description: "Understand how to deploy ML models in production.",
        courses: 6,
        students: "15k",
        image: null,
        categoryId: 3,
        active: false
    },
];

export const MODULES = [
    // Intro to Product Management
    {
        id: 1001,
        courseId: 101,
        title: "Introduction to Product Lifecycle",
    },
    {
        id: 1002,
        courseId: 101,
        title: "Stakeholder Management",
    },
    {
        id: 1003,
        courseId: 101,
        title: "Agile Methodologies in Product Management",
    },

    // Advanced Product Strategy
    {
        id: 1004,
        courseId: 102,
        title: "Market Analysis Techniques",
    },
    {
        id: 1005,
        courseId: 102,
        title: "Defining Product Vision and Strategy",
    },
    {
        id: 1006,
        courseId: 102,
        title: "Execution of Product Roadmaps",
    },

    // Roadmapping and Prioritization
    {
        id: 1007,
        courseId: 103,
        title: "Creating a Product Roadmap",
    },
    {
        id: 1008,
        courseId: 103,
        title: "Feature Prioritization Frameworks",
    },
    {
        id: 1009,
        courseId: 103,
        title: "Tools for Roadmapping",
    },

    // Metrics and KPIs in Product
    {
        id: 1010,
        courseId: 104,
        title: "Defining Success Metrics",
    },
    {
        id: 1011,
        courseId: 104,
        title: "Using KPIs to Drive Decisions",
    },

    // Web Development (Front-End)
    {
        id: 2001,
        courseId: 200,
        title: "HTML Essentials",
    },
    {
        id: 2002,
        courseId: 200,
        title: "CSS Fundamentals",
    },
    {
        id: 2003,
        courseId: 200,
        title: "JavaScript Basics",
    },

    // Data Structures and Algorithms
    {
        id: 2004,
        courseId: 201,
        title: "Introduction to Data Structures",
    },
    {
        id: 2005,
        courseId: 201,
        title: "Algorithms and Complexity",
    },
    {
        id: 2006,
        courseId: 201,
        title: "Sorting and Searching Algorithms",
    },

    // System Design Basics
    {
        id: 2007,
        courseId: 202,
        title: "Designing Scalable Systems",
    },
    {
        id: 2008,
        courseId: 202,
        title: "System Design Patterns",
    },

    // Advanced Coding Interviews
    {
        id: 2009,
        courseId: 203,
        title: "Solving Advanced Coding Problems",
    },
    {
        id: 2010,
        courseId: 203,
        title: "Optimizing Algorithms",
    },

    // Database Management
    {
        id: 2011,
        courseId: 204,
        title: "Introduction to SQL",
    },
    {
        id: 2012,
        courseId: 204,
        title: "Database Normalization",
    },

    // Statistics for Data Science
    {
        id: 3001,
        courseId: 301,
        title: "Descriptive Statistics",
    },
    {
        id: 3002,
        courseId: 301,
        title: "Inferential Statistics",
    },

    // Machine Learning Basics
    {
        id: 3003,
        courseId: 302,
        title: "Supervised Learning",
    },
    {
        id: 3004,
        courseId: 302,
        title: "Unsupervised Learning",
    },

    // Data Wrangling Techniques
    {
        id: 3005,
        courseId: 303,
        title: "Data Cleaning",
    },
    {
        id: 3006,
        courseId: 303,
        title: "Data Transformation",
    },

    // Python for Data Science
    {
        id: 3007,
        courseId: 304,
        title: "Python Programming Basics",
    },
    {
        id: 3008,
        courseId: 304,
        title: "Libraries for Data Science: Pandas & NumPy",
    },

    // Leadership in Engineering
    {
        id: 4001,
        courseId: 401,
        title: "Leadership Skills for Engineers",
    },
    {
        id: 4002,
        courseId: 401,
        title: "Managing Engineering Teams",
    },

    // Effective Communication
    {
        id: 4003,
        courseId: 402,
        title: "Communication in Technical Teams",
    },

    // Building Teams
    {
        id: 4004,
        courseId: 403,
        title: "Building a High-Performance Team",
    },

    // Conflict Resolution
    {
        id: 4005,
        courseId: 404,
        title: "Resolving Conflicts in Teams",
    },

    // Introduction to System Design
    {
        id: 5001,
        courseId: 501,
        title: "System Design Basics",
    },
    {
        id: 5002,
        courseId: 501,
        title: "Common Design Patterns",
    },

    // Designing Scalable Systems
    {
        id: 5003,
        courseId: 502,
        title: "Designing for Scalability",
    },
    {
        id: 5004,
        courseId: 502,
        title: "Optimizing System Architecture",
    },

    // Microservices Architecture
    {
        id: 5005,
        courseId: 503,
        title: "Introduction to Microservices",
    },
    {
        id: 5006,
        courseId: 503,
        title: "Design Patterns for Microservices",
    },

    // Deep Learning Fundamentals
    {
        id: 6001,
        courseId: 601,
        title: "Neural Networks Introduction",
    },
    {
        id: 6002,
        courseId: 601,
        title: "Training Deep Learning Models",
    },

    // Natural Language Processing
    {
        id: 6003,
        courseId: 602,
        title: "NLP Basics",
    },
    {
        id: 6004,
        courseId: 602,
        title: "Text Processing Techniques",
    },

    // Cloud Architecture Basics
    {
        id: 7001,
        courseId: 701,
        title: "Introduction to Cloud Computing",
    },
    {
        id: 7002,
        courseId: 701,
        title: "Architecting Cloud Solutions",
    },

    // Containerization with Docker
    {
        id: 7003,
        courseId: 702,
        title: "Introduction to Docker",
    },
    {
        id: 7004,
        courseId: 702,
        title: "Container Orchestration with Docker",
    },

    // AI Ethics
    {
        id: 8001,
        courseId: 801,
        title: "Understanding AI Ethics",
    },
    {
        id: 8002,
        courseId: 801,
        title: "Ethical Implications of AI Development",
    },

    // Deploying Machine Learning Models
    {
        id: 8003,
        courseId: 802,
        title: "Introduction to Model Deployment",
    },
];

export const CHAPTERS = [
    // Intro to Product Lifecycle (Product Management)
    {
        id: 10001,
        moduleId: 1001,
        title: "What is Product Lifecycle?",
    },
    {
        id: 10002,
        moduleId: 1001,
        title: "Stages of a Product Lifecycle",
    },
    {
        id: 10003,
        moduleId: 1001,
        title: "Managing the Product Lifecycle",
    },

    // Stakeholder Management (Product Management)
    {
        id: 10004,
        moduleId: 1002,
        title: "Identifying Key Stakeholders",
    },
    {
        id: 10005,
        moduleId: 1002,
        title: "Stakeholder Engagement Techniques",
    },
    {
        id: 10006,
        moduleId: 1002,
        title: "Managing Stakeholder Expectations",
    },

    // Agile Methodologies in Product Management
    {
        id: 10007,
        moduleId: 1003,
        title: "Introduction to Agile",
    },
    {
        id: 10008,
        moduleId: 1003,
        title: "Scrum and Kanban",
    },
    {
        id: 10009,
        moduleId: 1003,
        title: "Agile in Product Management",
    },

    // Market Analysis Techniques (Advanced Product Strategy)
    {
        id: 10010,
        moduleId: 1004,
        title: "Understanding Market Trends",
    },
    {
        id: 10011,
        moduleId: 1004,
        title: "Competitor Analysis",
    },

    // Defining Product Vision and Strategy
    {
        id: 10012,
        moduleId: 1005,
        title: "Creating a Product Vision",
    },
    {
        id: 10013,
        moduleId: 1005,
        title: "Aligning Strategy with Vision",
    },

    // Execution of Product Roadmaps
    {
        id: 10014,
        moduleId: 1006,
        title: "Breaking Down the Roadmap",
    },
    {
        id: 10015,
        moduleId: 1006,
        title: "Communicating Roadmaps",
    },

    // Creating a Product Roadmap (Roadmapping and Prioritization)
    {
        id: 10016,
        moduleId: 1007,
        title: "Key Components of a Roadmap",
    },
    {
        id: 10017,
        moduleId: 1007,
        title: "Building a Roadmap Step-by-Step",
    },

    // Feature Prioritization Frameworks
    {
        id: 10018,
        moduleId: 1008,
        title: "What is Feature Prioritization?",
    },
    {
        id: 10019,
        moduleId: 1008,
        title: "Popular Prioritization Methods",
    },

    // Tools for Roadmapping
    {
        id: 10020,
        moduleId: 1009,
        title: "Popular Roadmapping Tools",
    },

    // Defining Success Metrics (Metrics and KPIs in Product)
    {
        id: 10021,
        moduleId: 1010,
        title: "What are Success Metrics?",
    },
    {
        id: 10022,
        moduleId: 1010,
        title: "Choosing the Right Metrics",
    },

    // Using KPIs to Drive Decisions
    {
        id: 10023,
        moduleId: 1011,
        title: "What are KPIs?",
    },
    {
        id: 10024,
        moduleId: 1011,
        title: "Key KPIs for Product Teams",
    },

    // HTML Essentials (Front-End)
    {
        id: 20001,
        moduleId: 2001,
        title: "Introduction to HTML",
    },
    {
        id: 20002,
        moduleId: 2001,
        title: "HTML Document Structure",
    },
    {
        id: 20003,
        moduleId: 2001,
        title: "Forms and Input Elements",
    },

    // CSS Fundamentals (Front-End)
    {
        id: 20004,
        moduleId: 2002,
        title: "CSS Basics",
    },
    {
        id: 20005,
        moduleId: 2002,
        title: "CSS Box Model",
    },
    {
        id: 20006,
        moduleId: 2002,
        title: "CSS Flexbox and Grid",
    },

    // JavaScript Basics (Front-End)
    {
        id: 20007,
        moduleId: 2003,
        title: "Introduction to JavaScript",
    },
    {
        id: 20008,
        moduleId: 2003,
        title: "DOM Manipulation",
    },
    {
        id: 20009,
        moduleId: 2003,
        title: "Event Handling in JavaScript",
    },

    // Data Structures (Data Structures and Algorithms)
    {
        id: 20010,
        moduleId: 2004,
        title: "Arrays and Linked Lists",
    },
    {
        id: 20011,
        moduleId: 2004,
        title: "Stacks and Queues",
    },

    // Algorithms and Complexity
    {
        id: 20012,
        moduleId: 2005,
        title: "Big-O Notation",
    },
    {
        id: 20013,
        moduleId: 2005,
        title: "Time and Space Complexity",
    },

    // Sorting and Searching Algorithms
    {
        id: 20014,
        moduleId: 2006,
        title: "Sorting Algorithms",
    },
    {
        id: 20015,
        moduleId: 2006,
        title: "Binary Search Algorithm",
    },

    // Designing Scalable Systems (System Design)
    {
        id: 20016,
        moduleId: 2007,
        title: "System Scalability",
    },
    {
        id: 20017,
        moduleId: 2007,
        title: "Load Balancing Techniques",
    },

    // System Design Patterns
    {
        id: 20018,
        moduleId: 2008,
        title: "Microservices Architecture",
    },
    {
        id: 20019,
        moduleId: 2008,
        title: "Event-Driven Systems",
    },

    // Solving Advanced Coding Problems (Advanced Coding Interviews)
    {
        id: 20020,
        moduleId: 2009,
        title: "Dynamic Programming",
    },
    {
        id: 20021,
        moduleId: 2009,
        title: "Graph Algorithms",
    },

    // Optimizing Algorithms
    {
        id: 20022,
        moduleId: 2010,
        title: "Optimization Techniques",
    },
    {
        id: 20023,
        moduleId: 2010,
        title: "Reducing Time Complexity",
    },

    // Introduction to SQL (Database Management)
    {
        id: 20101,
        moduleId: 2011,
        title: "Basic SQL Queries",
    },
    {
        id: 20102,
        moduleId: 2011,
        title: "Joins and Subqueries",
    },

    // Database Normalization
    {
        id: 20103,
        moduleId: 2012,
        title: "1NF, 2NF, 3NF",
    },
    {
        id: 20104,
        moduleId: 2012,
        title: "Dealing with Redundancy",
    },

    // Descriptive Statistics (Statistics for Data Science)
    {
        id: 30001,
        moduleId: 3001,
        title: "Mean, Median, and Mode",
    },
    {
        id: 30002,
        moduleId: 3001,
        title: "Measures of Dispersion",
    },

    // Inferential Statistics
    {
        id: 30003,
        moduleId: 3002,
        title: "Hypothesis Testing",
    },
    {
        id: 30004,
        moduleId: 3002,
        title: "Confidence Intervals",
    },

    // Supervised Learning (Machine Learning Basics)
    {
        id: 30005,
        moduleId: 3003,
        title: "Regression Algorithms",
    },
    {
        id: 30006,
        moduleId: 3003,
        title: "Classification Algorithms",
    },

    // Unsupervised Learning
    {
        id: 30007,
        moduleId: 3004,
        title: "Clustering Techniques",
    },
    {
        id: 30008,
        moduleId: 3004,
        title: "Dimensionality Reduction",
    },

    // Data Cleaning (Data Wrangling Techniques)
    {
        id: 30009,
        moduleId: 3005,
        title: "Handling Missing Data",
    },
    {
        id: 30010,
        moduleId: 3005,
        title: "Data Imputation Techniques",
    },

    // Data Transformation
    {
        id: 30011,
        moduleId: 3006,
        title: "Data Aggregation",
    },
    {
        id: 30012,
        moduleId: 3006,
        title: "Feature Engineering",
    },

    // Python Programming Basics (Python for Data Science)
    {
        id: 30013,
        moduleId: 3007,
        title: "Python Data Types",
    },
    {
        id: 30014,
        moduleId: 3007,
        title: "Control Structures in Python",
    },

    // Libraries for Data Science: Pandas & NumPy
    {
        id: 30015,
        moduleId: 3008,
        title: "DataFrames with Pandas",
    },
    {
        id: 30016,
        moduleId: 3008,
        title: "Numerical Operations with NumPy",
    },

    // Leadership Skills for Engineers (Leadership in Engineering)
    {
        id: 40001,
        moduleId: 4001,
        title: "Leadership Styles",
    },
    {
        id: 40002,
        moduleId: 4001,
        title: "Building Trust within Teams",
    },

    // Managing Engineering Teams
    {
        id: 40003,
        moduleId: 4002,
        title: "Team Dynamics",
    },
    {
        id: 40004,
        moduleId: 4002,
        title: "Conflict Management",
    },

    // Communication in Technical Teams (Effective Communication)
    {
        id: 40005,
        moduleId: 4003,
        title: "Effective Written Communication",
    },
    {
        id: 40006,
        moduleId: 4003,
        title: "Delivering Presentations",
    },

    // Building a High-Performance Team (Building Teams)
    {
        id: 40007,
        moduleId: 4004,
        title: "Recruiting the Right Talent",
    },
    {
        id: 40008,
        moduleId: 4004,
        title: "Team Motivation Techniques",
    },

    // Resolving Conflicts in Teams (Conflict Resolution)
    {
        id: 40009,
        moduleId: 4005,
        title: "Identifying Conflicts Early",
    },
    {
        id: 40010,
        moduleId: 4005,
        title: "Negotiation and Mediation",
    },

    // System Design Basics (Introduction to System Design)
    {
        id: 50001,
        moduleId: 5001,
        title: "Introduction to System Components",
    },
    {
        id: 50002,
        moduleId: 5001,
        title: "Designing for Reliability",
    },

    // Common Design Patterns
    {
        id: 50003,
        moduleId: 5002,
        title: "Singleton and Factory Patterns",
    },
    {
        id: 50004,
        moduleId: 5002,
        title: "Observer and Decorator Patterns",
    },

    // Designing for Scalability (Designing Scalable Systems)
    {
        id: 50005,
        moduleId: 5003,
        title: "Load Balancing and Caching",
    },
    {
        id: 50006,
        moduleId: 5003,
        title: "Database Sharding",
    },

    // Optimizing System Architecture
    {
        id: 50007,
        moduleId: 5004,
        title: "Architecture Optimization Techniques",
    },
    {
        id: 50008,
        moduleId: 5004,
        title: "Refactoring for Performance",
    },

    // Introduction to Microservices (Microservices Architecture)
    {
        id: 50009,
        moduleId: 5005,
        title: "What are Microservices?",
    },
    {
        id: 50010,
        moduleId: 5005,
        title: "Building APIs for Microservices",
    },

    // Design Patterns for Microservices
    {
        id: 50011,
        moduleId: 5006,
        title: "Event-Driven Microservices",
    },
    {
        id: 50012,
        moduleId: 5006,
        title: "SAGA Pattern",
    },

    // Neural Networks Introduction (Deep Learning Fundamentals)
    {
        id: 60001,
        moduleId: 6001,
        title: "Understanding Neural Networks",
    },
    {
        id: 60002,
        moduleId: 6001,
        title: "Feedforward and Backpropagation",
    },

    // Training Deep Learning Models
    {
        id: 60003,
        moduleId: 6002,
        title: "Setting Up a Neural Network",
    },
    {
        id: 60004,
        moduleId: 6002,
        title: "Training Techniques",
    },

    // NLP Basics (Natural Language Processing)
    {
        id: 60005,
        moduleId: 6003,
        title: "Text Preprocessing",
    },
    {
        id: 60006,
        moduleId: 6003,
        title: "Tokenization and Stemming",
    },

    // Text Processing Techniques
    {
        id: 60007,
        moduleId: 6004,
        title: "Word Embeddings",
    },
    {
        id: 60008,
        moduleId: 6004,
        title: "TF-IDF and Sentiment Analysis",
    },

    // Introduction to Cloud Computing (Cloud Architecture Basics)
    {
        id: 70001,
        moduleId: 7001,
        title: "What is Cloud Computing?",
    },
    {
        id: 70002,
        moduleId: 7001,
        title: "Types of Cloud Services",
    },

    // Architecting Cloud Solutions
    {
        id: 70003,
        moduleId: 7002,
        title: "Cloud Architecture Principles",
    },
    {
        id: 70004,
        moduleId: 7002,
        title: "Designing Secure Cloud Solutions",
    },

    // Introduction to Docker (Containerization with Docker)
    {
        id: 70005,
        moduleId: 7003,
        title: "What is Docker?",
    },
    {
        id: 70006,
        moduleId: 7003,
        title: "Creating Docker Containers",
    },

    // Container Orchestration with Docker
    {
        id: 70007,
        moduleId: 7004,
        title: "Docker Swarm and Kubernetes",
    },
    {
        id: 70008,
        moduleId: 7004,
        title: "Managing Multi-Container Applications",
    },

    // Understanding AI Ethics (AI Ethics)
    {
        id: 80001,
        moduleId: 8001,
        title: "What is AI Ethics?",
    },
    {
        id: 80002,
        moduleId: 8001,
        title: "Ethical Issues in AI",
    },

    // Ethical Implications of AI Development
    {
        id: 80003,
        moduleId: 8002,
        title: "Bias in AI Models",
    },
    {
        id: 80004,
        moduleId: 8002,
        title: "Fairness and Accountability in AI",
    },

    // Introduction to Model Deployment (Deploying Machine Learning Models)
    {
        id: 80005,
        moduleId: 8003,
        title: "Preparing Models for Deployment",
    },
    {
        id: 80006,
        moduleId: 8003,
        title: "Monitoring Deployed Models",
    },
];

export const TOPICS = [
    // HTML Essentials (Front-End)
    {
        id: 20010, chapterId: 20001, title: "Introduction to HTML Tags", content: `
#### 1. What is the purpose of the &lt;div&gt; tag in HTML?
__Answer :-__ The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.
> **Note:** This is an important note for users to understand the topic better.

\`\`\`css
body {
        font-family: Arial, sans - serif;
        background-color: #fafafa;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}
\`\`\`
\`\`\`html
<div class="container">
  <p>This is a paragraph inside a div.</p>
</div>
\`\`\`

#### 2. What is the &lt;span&gt; tag used for ?
__Answer :-__ The __&lt;span&gt;__ tag is an inline container for text. It's commonly used for styling specific portions of text within a block.

\`\`\`html
<p>This is a <span style="color: blue;">blue</span> word.</p>
\`\`\`

#### 3. What are semantic tags in HTML? Give examples.
__Answer :-__ Semantic tags like __&lt;header&gt;__, __&lt;footer&gt;__, __&lt;article&gt;__, and __&lt;section&gt;__ clearly describe their purpose, improving readability and accessibility.

\`\`\`html
<article>
  <h2>Article Title</h2>
  <p>This is the article content.</p>
</article>
\`\`\`

#### 4. How does the &lt;a&gt; tag work for hyperlinks?
__Answer :-__ The __&lt;a&gt;__ tag creates hyperlinks, connecting to another webpage or file.

\`\`\`html
<a href="https://www.example.com" target="_blank">Visit Example</a>
\`\`\`

#### 5. How can we create an ordered list and an unordered list in HTML?
__Answer :-__ An ordered list (__&lt;ol&gt;__) numbers items, while an unordered list (__&lt;ul&gt;__) uses bullets.

\`\`\`html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
\`\`\`

#### 6. What's the purpose of the &lt;table&gt; tag? Give a simple example.
__Answer :-__ The __&lt;table&gt;__ tag organizes data in rows and columns.

\`\`\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>
\`\`\`

#### 7. How do you embed an image using the &lt;img&gt; tag?
__Answer :-__ The __&lt;img&gt;__ tag embeds an image, with attributes for the source __(src)__ and alternate text __(alt)__.

\`\`\`html
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 8. What is the &lt;form&gt; tag used for in HTML?
__Answer :-__ The __&lt;form&gt;__ tag is used to collect user input, which can be submitted to a server.

\`\`\`html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
\`\`\`

#### 9. Explain the &lt;input&gt; tag with examples of different types.
__Answer :-__ The __&lt;input&gt;__ tag collects user input, with types like __'text'__, __'password'__, and __'checkbox'__.

\`\`\`html
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<input type="checkbox" checked> Subscribe to newsletter
\`\`\`

#### 10. How do you create a dropdown menu with the &lt;select&gt; tag?
__Answer :-__ The __&lt;select&gt;__ tag creates a dropdown, with &lt;option&gt; elements for each choice.

\`\`\`html
<select name="options">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
\`\`\`

#### 11. How do you make text bold or italic in HTML?
__Answer :-__ Use &lt;b&gt; or  &lt;strong&gt; for bold text and  &lt;i&gt; or  &lt;em&gt; for italic text.

\`\`\`html
<p>This is <b>bold</b> and <i>italic</i> text.</p>
\`\`\`

#### 12. How can you use the &lt;button&gt; tag for interactions?
__Answer :-__ The __&lt;button&gt;__ tag triggers actions on click, often used in forms or for navigation.

\`\`\`html
<button onclick="alert('Button clicked!')">Click Me</button>
\`\`\`

#### 13. What does the &lt;blockquote&gt; tag do?
__Answer :-__ The __&lt;blockquote&gt;__ tag is used for longer quotes or citations.

\`\`\`html
<blockquote>
  "This is a blockquote example."
</blockquote>
\`\`\`

#### 14. Explain the &lt;header&gt; and &lt;footer&gt; tags.
__Answer :-__ The __&lt;header__gt; contains introductory content, while the __&lt;footer&gt;__ has end-of-page info.

\`\`\`html
<header>
  <h1>Website Title</h1>
</header>
<footer>
  <p>Contact us at info@example.com</p>
</footer>
\`\`\`

#### 15. How can you use the &lt;iframe&gt; tag?
__Answer :-__ The __&lt;iframe&gt;__ tag embeds another webpage or video within a page.

\`\`\`html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
\`\`\`

#### 16. How do you use the &lt;audio&gt; and &lt;video&gt; tags?
__Answer :-__ These tags embed audio and video, with attributes like 'controls' for playback controls.

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

#### 17. What is the purpose of the &lt;label&gt; tag?
__Answer :-__ The __&lt;label&gt;__ tag connects a label to an input, enhancing accessibility.

\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username">
\`\`\`

#### 18. How can you use the &lt;meta&gt; tag in HTML?
__Answer :-__ The __&lt;meta&gt;__ tag stores metadata, like charset and viewport settings.

\`\`\`html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### 19. What's the difference between &lt;section&gt; and &lt;div&gt;?
__Answer :-__ __&lt;section&gt;__ is semantic, indicating a section of related content, while __&lt;div&gt;__ is a general container.

\`\`\`html
<section>
  <h2>Section Heading</h2>
  <p>Section content goes here.</p>
</section>
\`\`\`
- [ ] ⚠️ **Warning**: Please note the changes.
#### 20. What is the &lt;nav&gt; tag used for in HTML?
__Answer :-__ The __&lt;nav&gt;__ tag contains navigation links.

\`\`\`html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
\`\`\`
`
    },
    {
        id: 20011, chapterId: 20001, title: "HTML Attributes and Elements", content: `
#### 1. What is the purpose of the 'id' attribute in HTML?
__Answer :-__ The 'id' attribute uniquely identifies an HTML element on a page. It's useful for styling, JavaScript interactions, and linking to specific sections.

\`\`\`html
    < div id = "unique-element" > This is a unique element.</div >
\`\`\`

#### 2. How does the class attribute work in HTML?
__Answer :-__ The class attribute assigns one or more class names to an element, which can be targeted for styling or JavaScript.

\`\`\`html
<p class="highlight">This paragraph is highlighted.</p>
\`\`\`

#### 3. What does the alt attribute do in the &lt;img&gt; tag?
__Answer :-__ The __alt__ attribute provides alternative text for images, which is displayed if the image cannot be loaded and helps with accessibility.

\`\`\`html
<img src="image.jpg" alt="A description of the image">
\`\`\`

#### 4. How can you open a link in a new tab using the &lt;a&gt; tag?
__Answer :-__ The target="_blank" attribute in the &lt;a&gt; tag opens the linked page in a new tab.

\`\`\`
<a href="https://www.example.com" target="_blank">Open in New Tab</a>
\`\`\`

#### 5. What is the href attribute used for in anchor tags?
__Answer :-__ The href attribute in the &lt;a&gt; tag specifies the URL or location the link points to.

\`\`\`
<a href="https://www.example.com">Visit Example</a>
\`\`\`

#### 6. How can you set default text in an &lt;input&gt; field?
__Answer :-__ The placeholder attribute provides default text that disappears when the user starts typing in the &lt;input&gt; field.

\`\`\`
<input type="text" placeholder="Enter your name">
\`\`\`

#### 7. What is the purpose of the disabled attribute?
__Answer :-__ The disabled attribute disables an HTML element, making it unclickable and uneditable.

\`\`\`
<button disabled>Can't Click Me</button>
\`\`\`

#### 8. How do you use the src attribute in the &lt;img&gt; tag?
__Answer :-__ The src attribute specifies the URL of the image to display.

\`\`\`
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 9. How can you add tooltips to elements in HTML?
__Answer :-__ The title attribute displays a tooltip when the user hovers over the element.

\`\`\`
<p title="This is a tooltip">Hover over me to see a tooltip.</p>
\`\`\`

#### 10. What is the purpose of the required attribute in form elements?
__Answer :-__ The required attribute ensures that the user must fill out the form field before submitting.

\`\`\`
<input type="text" name="username" required>
\`\`\`
`
    },
    {
        id: 20012, chapterId: 20002, title: "Structuring a Web Page with HTML", content: `
#### 1. What is the purpose of the &lt;div&gt; tag in HTML?
__Answer :-__ The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.

\`\`\`
<div class="container">
  <p>This is a paragraph inside a div.</p>
</div>
\`\`\`

#### 2. What is the &lt;span&gt; tag used for ?
__Answer :-__ The __&lt;span&gt;__ tag is an inline container for text. It's commonly used for styling specific portions of text within a block.

\`\`\`
<p>This is a <span style="color: blue;">blue</span> word.</p>
\`\`\`

#### 3. What are semantic tags in HTML? Give examples.
__Answer :-__ Semantic tags like __&lt;header&gt;__, __&lt;footer&gt;__, __&lt;article&gt;__, and __&lt;section&gt;__ clearly describe their purpose, improving readability and accessibility.

\`\`\`
<article>
  <h2>Article Title</h2>
  <p>This is the article content.</p>
</article>
\`\`\`

#### 4. How does the &lt;a&gt; tag work for hyperlinks?
__Answer :-__ The __&lt;a&gt;__ tag creates hyperlinks, connecting to another webpage or file.

\`\`\`
<a href="https://www.example.com" target="_blank">Visit Example</a>
\`\`\`

#### 5. How can we create an ordered list and an unordered list in HTML?
__Answer :-__ An ordered list (__&lt;ol&gt;__) numbers items, while an unordered list (__&lt;ul&gt;__) uses bullets.

\`\`\`
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
\`\`\`

#### 6. What's the purpose of the &lt;table&gt; tag? Give a simple example.
__Answer :-__ The __&lt;table&gt;__ tag organizes data in rows and columns.

\`\`\`
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>
\`\`\`

#### 7. How do you embed an image using the &lt;img&gt; tag?
__Answer :-__ The __&lt;img&gt;__ tag embeds an image, with attributes for the source __(src)__ and alternate text __(alt)__.

\`\`\`
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 8. What is the &lt;form&gt; tag used for in HTML?
__Answer :-__ The __&lt;form&gt;__ tag is used to collect user input, which can be submitted to a server.

\`\`\`
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
\`\`\`

#### 9. Explain the &lt;input&gt; tag with examples of different types.
__Answer :-__ The __&lt;input&gt;__ tag collects user input, with types like __'text'__, __'password'__, and __'checkbox'__.

\`\`\`
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<input type="checkbox" checked> Subscribe to newsletter
\`\`\`

#### 10. How do you create a dropdown menu with the &lt;select&gt; tag?
__Answer :-__ The __&lt;select&gt;__ tag creates a dropdown, with &lt;option&gt; elements for each choice.

\`\`\`
<select name="options">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
\`\`\`

#### 11. How do you make text bold or italic in HTML?
__Answer :-__ Use &lt;b&gt; or  &lt;strong&gt; for bold text and  &lt;i&gt; or  &lt;em&gt; for italic text.

\`\`\`
<p>This is <b>bold</b> and <i>italic</i> text.</p>
\`\`\`

#### 12. How can you use the &lt;button&gt; tag for interactions?
__Answer :-__ The __&lt;button&gt;__ tag triggers actions on click, often used in forms or for navigation.

\`\`\`
<button onclick="alert('Button clicked!')">Click Me</button>
\`\`\`

#### 13. What does the &lt;blockquote&gt; tag do?
__Answer :-__ The __&lt;blockquote&gt;__ tag is used for longer quotes or citations.

\`\`\`
<blockquote>
  "This is a blockquote example."
</blockquote>
\`\`\`

#### 14. Explain the &lt;header&gt; and &lt;footer&gt; tags.
__Answer :-__ The __&lt;header__gt; contains introductory content, while the __&lt;footer&gt;__ has end-of-page info.

\`\`\`
<header>
  <h1>Website Title</h1>
</header>
<footer>
  <p>Contact us at info@example.com</p>
</footer>
\`\`\`

#### 15. How can you use the &lt;iframe&gt; tag?
__Answer :-__ The __&lt;iframe&gt;__ tag embeds another webpage or video within a page.

\`\`\`
<iframe src="https://www.example.com" width="600" height="400"></iframe>
\`\`\`

#### 16. How do you use the &lt;audio&gt; and &lt;video&gt; tags?
__Answer :-__ These tags embed audio and video, with attributes like 'controls' for playback controls.

\`\`\`
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

#### 17. What is the purpose of the &lt;label&gt; tag?
__Answer :-__ The __&lt;label&gt;__ tag connects a label to an input, enhancing accessibility.

\`\`\`
<label for="username">Username:</label>
<input type="text" id="username">
\`\`\`

#### 18. How can you use the &lt;meta&gt; tag in HTML?
__Answer :-__ The __&lt;meta&gt;__ tag stores metadata, like charset and viewport settings.

\`\`\`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### 19. What's the difference between &lt;section&gt; and &lt;div&gt;?
__Answer :-__ __&lt;section&gt;__ is semantic, indicating a section of related content, while __&lt;div&gt;__ is a general container.

\`\`\`
<section>
  <h2>Section Heading</h2>
  <p>Section content goes here.</p>
</section>
\`\`\`

#### 20. What is the &lt;nav&gt; tag used for in HTML?
__Answer :-__ The __&lt;nav&gt;__ tag contains navigation links.

\`\`\`
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
\`\`\`
` },
    {
        id: 20013, chapterId: 20002, title: "Semantic HTML Elements", content: `
#### 1. What is the purpose of the 'id' attribute in HTML?
__Answer :-__ The 'id' attribute uniquely identifies an HTML element on a page. It's useful for styling, JavaScript interactions, and linking to specific sections.

\`\`\`html
    < div id = "unique-element" > This is a unique element.</div >
\`\`\`

#### 2. How does the class attribute work in HTML?
__Answer :-__ The class attribute assigns one or more class names to an element, which can be targeted for styling or JavaScript.

\`\`\`
<p class="highlight">This paragraph is highlighted.</p>
\`\`\`

#### 3. What does the alt attribute do in the &lt;img&gt; tag?
__Answer :-__ The __alt__ attribute provides alternative text for images, which is displayed if the image cannot be loaded and helps with accessibility.

\`\`\`
<img src="image.jpg" alt="A description of the image">
\`\`\`

#### 4. How can you open a link in a new tab using the &lt;a&gt; tag?
__Answer :-__ The target="_blank" attribute in the &lt;a&gt; tag opens the linked page in a new tab.

\`\`\`
<a href="https://www.example.com" target="_blank">Open in New Tab</a>
\`\`\`

#### 5. What is the href attribute used for in anchor tags?
__Answer :-__ The href attribute in the &lt;a&gt; tag specifies the URL or location the link points to.

\`\`\`
<a href="https://www.example.com">Visit Example</a>
\`\`\`

#### 6. How can you set default text in an &lt;input&gt; field?
__Answer :-__ The placeholder attribute provides default text that disappears when the user starts typing in the &lt;input&gt; field.

\`\`\`
<input type="text" placeholder="Enter your name">
\`\`\`

#### 7. What is the purpose of the disabled attribute?
__Answer :-__ The disabled attribute disables an HTML element, making it unclickable and uneditable.

\`\`\`
<button disabled>Can't Click Me</button>
\`\`\`

#### 8. How do you use the src attribute in the &lt;img&gt; tag?
__Answer :-__ The src attribute specifies the URL of the image to display.

\`\`\`
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 9. How can you add tooltips to elements in HTML?
__Answer :-__ The title attribute displays a tooltip when the user hovers over the element.

\`\`\`
<p title="This is a tooltip">Hover over me to see a tooltip.</p>
\`\`\`

#### 10. What is the purpose of the required attribute in form elements?
__Answer :-__ The required attribute ensures that the user must fill out the form field before submitting.

\`\`\`
<input type="text" name="username" required>
\`\`\`
`},
    {
        id: 20014, chapterId: 20003, title: "Creating Forms with HTML", content: `
#### 1. What is the purpose of the &lt;div&gt; tag in HTML?
__Answer :-__ The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.

\`\`\`html
<div class="container">
  <p>This is a paragraph inside a div.</p>
</div>
\`\`\`

#### 2. What is the &lt;span&gt; tag used for ?
__Answer :-__ The __&lt;span&gt;__ tag is an inline container for text. It's commonly used for styling specific portions of text within a block.

\`\`\`html
<p>This is a <span style="color: blue;">blue</span> word.</p>
\`\`\`

#### 3. What are semantic tags in HTML? Give examples.
__Answer :-__ Semantic tags like __&lt;header&gt;__, __&lt;footer&gt;__, __&lt;article&gt;__, and __&lt;section&gt;__ clearly describe their purpose, improving readability and accessibility.

\`\`\`html
<article>
  <h2>Article Title</h2>
  <p>This is the article content.</p>
</article>
\`\`\`

#### 4. How does the &lt;a&gt; tag work for hyperlinks?
__Answer :-__ The __&lt;a&gt;__ tag creates hyperlinks, connecting to another webpage or file.

\`\`\`html
<a href="https://www.example.com" target="_blank">Visit Example</a>
\`\`\`

#### 5. How can we create an ordered list and an unordered list in HTML?
__Answer :-__ An ordered list (__&lt;ol&gt;__) numbers items, while an unordered list (__&lt;ul&gt;__) uses bullets.

\`\`\`html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
\`\`\`

#### 6. What's the purpose of the &lt;table&gt; tag? Give a simple example.
__Answer :-__ The __&lt;table&gt;__ tag organizes data in rows and columns.

\`\`\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>
\`\`\`

#### 7. How do you embed an image using the &lt;img&gt; tag?
__Answer :-__ The __&lt;img&gt;__ tag embeds an image, with attributes for the source __(src)__ and alternate text __(alt)__.

\`\`\`html
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 8. What is the &lt;form&gt; tag used for in HTML?
__Answer :-__ The __&lt;form&gt;__ tag is used to collect user input, which can be submitted to a server.

\`\`\`html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
\`\`\`

#### 9. Explain the &lt;input&gt; tag with examples of different types.
__Answer :-__ The __&lt;input&gt;__ tag collects user input, with types like __'text'__, __'password'__, and __'checkbox'__.

\`\`\`html
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<input type="checkbox" checked> Subscribe to newsletter
\`\`\`

#### 10. How do you create a dropdown menu with the &lt;select&gt; tag?
__Answer :-__ The __&lt;select&gt;__ tag creates a dropdown, with &lt;option&gt; elements for each choice.

\`\`\`html
<select name="options">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
\`\`\`

#### 11. How do you make text bold or italic in HTML?
__Answer :-__ Use &lt;b&gt; or  &lt;strong&gt; for bold text and  &lt;i&gt; or  &lt;em&gt; for italic text.

\`\`\`html
<p>This is <b>bold</b> and <i>italic</i> text.</p>
\`\`\`

#### 12. How can you use the &lt;button&gt; tag for interactions?
__Answer :-__ The __&lt;button&gt;__ tag triggers actions on click, often used in forms or for navigation.

\`\`\`html
<button onclick="alert('Button clicked!')">Click Me</button>
\`\`\`

#### 13. What does the &lt;blockquote&gt; tag do?
__Answer :-__ The __&lt;blockquote&gt;__ tag is used for longer quotes or citations.

\`\`\`html
<blockquote>
  "This is a blockquote example."
</blockquote>
\`\`\`

#### 14. Explain the &lt;header&gt; and &lt;footer&gt; tags.
__Answer :-__ The __&lt;header__gt; contains introductory content, while the __&lt;footer&gt;__ has end-of-page info.

\`\`\`html
<header>
  <h1>Website Title</h1>
</header>
<footer>
  <p>Contact us at info@example.com</p>
</footer>
\`\`\`

#### 15. How can you use the &lt;iframe&gt; tag?
__Answer :-__ The __&lt;iframe&gt;__ tag embeds another webpage or video within a page.

\`\`\`html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
\`\`\`

#### 16. How do you use the &lt;audio&gt; and &lt;video&gt; tags?
__Answer :-__ These tags embed audio and video, with attributes like 'controls' for playback controls.

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

#### 17. What is the purpose of the &lt;label&gt; tag?
__Answer :-__ The __&lt;label&gt;__ tag connects a label to an input, enhancing accessibility.

\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username">
\`\`\`

#### 18. How can you use the &lt;meta&gt; tag in HTML?
__Answer :-__ The __&lt;meta&gt;__ tag stores metadata, like charset and viewport settings.

\`\`\`html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### 19. What's the difference between &lt;section&gt; and &lt;div&gt;?
__Answer :-__ __&lt;section&gt;__ is semantic, indicating a section of related content, while __&lt;div&gt;__ is a general container.

\`\`\`html
<section>
  <h2>Section Heading</h2>
  <p>Section content goes here.</p>
</section>
\`\`\`

#### 20. What is the &lt;nav&gt; tag used for in HTML?
__Answer :-__ The __&lt;nav&gt;__ tag contains navigation links.

\`\`\`html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
\`\`\`
` },
    {
        id: 20015, chapterId: 20003, title: "HTML Input Types and Validation", content: `
#### 1. What is the purpose of the 'id' attribute in HTML?
__Answer :-__ The 'id' attribute uniquely identifies an HTML element on a page. It's useful for styling, JavaScript interactions, and linking to specific sections.

\`\`\`html
    < div id = "unique-element" > This is a unique element.</div >
\`\`\`

#### 2. How does the class attribute work in HTML?
__Answer :-__ The class attribute assigns one or more class names to an element, which can be targeted for styling or JavaScript.

\`\`\`
<p class="highlight">This paragraph is highlighted.</p>
\`\`\`

#### 3. What does the alt attribute do in the &lt;img&gt; tag?
__Answer :-__ The __alt__ attribute provides alternative text for images, which is displayed if the image cannot be loaded and helps with accessibility.

\`\`\`
<img src="image.jpg" alt="A description of the image">
\`\`\`

#### 4. How can you open a link in a new tab using the &lt;a&gt; tag?
__Answer :-__ The target="_blank" attribute in the &lt;a&gt; tag opens the linked page in a new tab.

\`\`\`
<a href="https://www.example.com" target="_blank">Open in New Tab</a>
\`\`\`

#### 5. What is the href attribute used for in anchor tags?
__Answer :-__ The href attribute in the &lt;a&gt; tag specifies the URL or location the link points to.

\`\`\`
<a href="https://www.example.com">Visit Example</a>
\`\`\`

#### 6. How can you set default text in an &lt;input&gt; field?
__Answer :-__ The placeholder attribute provides default text that disappears when the user starts typing in the &lt;input&gt; field.

\`\`\`
<input type="text" placeholder="Enter your name">
\`\`\`

#### 7. What is the purpose of the disabled attribute?
__Answer :-__ The disabled attribute disables an HTML element, making it unclickable and uneditable.

\`\`\`
<button disabled>Can't Click Me</button>
\`\`\`

#### 8. How do you use the src attribute in the &lt;img&gt; tag?
__Answer :-__ The src attribute specifies the URL of the image to display.

\`\`\`
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

#### 9. How can you add tooltips to elements in HTML?
__Answer :-__ The title attribute displays a tooltip when the user hovers over the element.

\`\`\`
<p title="This is a tooltip">Hover over me to see a tooltip.</p>
\`\`\`

#### 10. What is the purpose of the required attribute in form elements?
__Answer :-__ The required attribute ensures that the user must fill out the form field before submitting.

\`\`\`
<input type="text" name="username" required>
\`\`\`
`},

    // CSS Fundamentals (Front-End)
    {
        id: 20016, chapterId: 20004, title: "CSS Selectors and Properties", content: `

# Basic CSS
#### 1. What does CSS stand for?
__Answer :-__ CSS stands for Cascading Style Sheets.

#### 2. What is the purpose of CSS?
__Answer :-__  CSS is used to style and format the appearance of web pages written in __HTML__ and __XML__. It allows web developers to control aspects like layout, colors, fonts, and spacing of HTML elements.

#### 3. How do you link a CSS file to an HTML document?
__Answer :-__  You can link a CSS file to an HTML document using the <kbd>&lt;link&gt;</kbd>  element within the  <kbd>&lt;head&gt;</kbd> section of the HTML document.

#### 4. What are the different ways to apply CSS to a web page?

**Answer :-** CSS can be applied in three ways:

   **1. Inline styles :**
   Directly within an HTML element.
   \`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inline Style Example</title>
</head>
<body>
        <h1 style="color: blue; text-align: center;">This is an inline style example</h1>
        <p style="color: green;">This paragraph is styled inline.</p>
</body>
</html>

   \`\`\`
   **2. Internal stylesheets :**
   Within a <kbd>&lt;style&gt;</kbd> element in the <kbd>&lt;head&gt;</kbd> section of an HTML document.
   \`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal Stylesheet Example</title>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            color: green;
        }
    </style>
</head>
<body>
        <h1>This is an internal stylesheet example</h1>
        <p>This paragraph is styled using internal CSS.</p>
</body>
</html>

   \`\`\`
   **3. External stylesheets :**
   Linked to an HTML document using the <kbd>&lt;link&gt;</kbd> element.
   \`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External Stylesheet Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
        <h1>This is an external stylesheet example</h1>
        <p>This paragraph is styled using an external CSS file.</p>
</body>
</html>

   \`\`\`


#### 5. How do you apply multiple styles to a single element?
__Answer :-__ Multiple styles can be applied to a single element by separating each style declaration with a semicolon within the style attribute (for inline styles) or within the CSS rule.

#### 6. What is the difference between a class selector and an ID selector?
__Answer :-__
- **Class Selector**:
    - Defined using a dot (.) followed by a class name.
    - Classes can be applied to multiple elements, and one element can have multiple classes.
- **ID Selector**:
    - Defined using a hash (#) followed by an ID name.
    - IDs are unique within a document and should only be applied to one element.

#### 7. What is a CSS selector?
__Answer :-__ A CSS selector is a pattern that is used to select and style HTML elements based on various criteria such as
              **element types**, **IDs**, **classes**, **attributes**, and **relationships** with other elements.

#### 8. What are the types of CSS Selectors?
__Answer :-__
1. Universal Selector (*)
    - Selects all elements on the page.
    \`\`\`css
      *{
      margin: 0;
      padding: 0;
     }
    \`\`\`

2. Type Selector
    - Selects all elements of a specific type.
    \`\`\`css
      p{
      color: blue;
     }
    \`\`\`
    > **Note:** Here <kbd>&lt;P&gt;</kbd> is a HTML tag and this color style will be applied to only <kbd>&lt;P&gt;</kbd> Tag.

3. Class Selector
    - A class selector is used in CSS to apply styles to elements that have a specific <kbd>class</kbd> attribute. It allows for selective and reusable styling across multiple HTML elements.
    - The class selector is defined with a dot <kbd>(.)</kbd>followed by the class name.
    \`\`\`css
    .classname {
    /* style rules */
    }
    \`\`\`
    - Assign the class to an HTML element using the <kbd>class</kbd> attribute.
    \`\`\`html
    <div class="classname">This is a styled div</div>
    \`\`\`
    - Multiple elements can share the same class, making it a reusable way to apply styles.
     \`\`\`html
    <p class="highlight">Text 1</p>
    <p class="highlight">Text 2</p>
    \`\`\`
    - An HTML element can have multiple classes, separated by spaces.
     \`\`\`html
     <div class="class1 class2">Content</div>
     \`\`\`

4. Id Selector
    - The ID selector in CSS is used to style a single, unique HTML element that has a specific id attribute.
    - The ID selector is defined with a hash (#) followed by the id name.
    \`\`\`css
    #idname {
    /* style rules */
    }
    \`\`\`
    - The id attribute is added to an HTML element by using Id Keyword.
    \`\`\`html
    <div id="uniqueElement">Content</div>
    \`\`\`

5. Attribute Selector
    - An attribute selector in CSS is used to style elements based on the presence, value, or pattern of their attributes.
    \`\`\`css
    a[target] {
      background-color: yellow;
    }
    \`\`\`
    | Selector                     | Example                         | Description                                                                                                                  |
    |------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------|
    | <kbd>[attribute]</kbd>       | <kbd>[target]</kbd>             | Selects all elements with a <kbd>target</kbd> attribute.                                                                     |
    | <kbd>[attribute=value]</kbd> | <kbd>[target="_blank"]</kbd>    | Selects all elements with <kbd>target="_blank"</kbd>.                                                                        |
    | <kbd>[attribute~=value]</kbd>| <kbd>[title~="flower"]</kbd>    | Selects all elements with a <kbd>title</kbd> attribute containing a space-separated list of words, one of which is "flower". |
    | <kbd>[attribute=value]</kbd> | <kbd>[lang="en"]</kbd>          | Selects all elements with a <kbd>lang</kbd> attribute value starting with "en".                                              |
    | <kbd>[attribute^=value]</kbd>| <kbd>a[href^="https"]</kbd>     | Selects all  elements with a <kbd>href</kbd> attribute value starting with "https".                            |
    | <kbd>[attribute$=value]</kbd>| <kbd>a[href$=".pdf"]</kbd>      | Selects all  elements with a <kbd>href</kbd> attribute value ending with ".pdf".                               |
` },
    {
        id: 20017, chapterId: 20004, title: "Styling Text and Fonts with CSS", content: `
#### 1. How do you change the font of an element?
__Answer :-__ The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.

  ` },
    { id: 20018, chapterId: 20005, title: "Understanding the CSS Box Model" },
    { id: 20019, chapterId: 20005, title: "CSS Margins, Padding, and Borders" },
    { id: 20020, chapterId: 20006, title: "Building Layouts with Flexbox" },
    { id: 20021, chapterId: 20006, title: "CSS Grid for Responsive Design" },

    // JavaScript Basics (Front-End)
    { id: 20022, chapterId: 20007, title: "JavaScript Syntax and Variables" },
    { id: 20023, chapterId: 20007, title: "Functions and Control Flow in JS" },
    { id: 20024, chapterId: 20008, title: "Manipulating HTML with the DOM" },
    { id: 20025, chapterId: 20008, title: "Working with DOM Events" },
    { id: 20026, chapterId: 20009, title: "Handling User Inputs in JavaScript" },
    { id: 20027, chapterId: 20009, title: "Asynchronous Event Handling in JS" },

    { id: 2001, chapterId: 10001, title: "What is Product Management?" },
    { id: 2002, chapterId: 10001, title: "Key Roles and Responsibilities" },
    { id: 2003, chapterId: 10002, title: "Understanding the Product Lifecycle" },
    { id: 2004, chapterId: 10002, title: "Managing the Product Lifecycle" },
    { id: 2005, chapterId: 10003, title: "Introduction to Market Research" },
    { id: 2006, chapterId: 10003, title: "Techniques for Effective Research" },
    { id: 2007, chapterId: 10004, title: "Key Performance Indicators (KPIs)" },
    { id: 2008, chapterId: 10004, title: "Tracking and Measuring Success" },
    { id: 2009, chapterId: 10005, title: "Building a Product Roadmap" },
    { id: 2010, chapterId: 10005, title: "Prioritizing Features" },

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
