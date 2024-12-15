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
        description: "Master essential IT concepts, programming languages like Java and C++, and key subjects like DBMS and networking, along with interview preparation.",
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

];

export const MODULES = [
    
 

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

    //IT Foundations: Beginner to Pro

    {
        id: 2013,
        courseId: 205,
        title:"Programming Languages",
    },
    {
        id: 2014,
        courseId: 205,
        title: "IT Subjects",
    },
    {
        id: 2015,
        courseId: 205,
        title: "Coding Practice",
    },
    {
        id: 2016,
        courseId: 205,
        title: "Interview Questions",
    },
];

export const CHAPTERS = [
    
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

    //Programming Languages
    {
        id: 20105,
        moduleId: 2013,
        title: "Introduction to C Programming",
    },
    {
        id: 20106,
        moduleId: 2013,
        title: "Getting Started with Python",
    },
    {
        id: 20107,
        moduleId: 2013,
        title: "Java Basics: A Beginner's Guide",
    },

    //IT Subjects
    {
        id: 20108,
        moduleId: 2014,
        title: "Introduction to Operating Systems",
    },
    {
        id: 20109,
        moduleId: 2014,
        title: "Networking Fundamentals",
    },
    {
        id: 20110,
        moduleId: 2014,
        title: "Database Management Systems (DBMS) Basics",
    },

    //Coding Practice
    {
        id: 20111,
        moduleId: 2015,
        title: "Top 20 C Coding Questions",
    },
    {
        id: 20112,
        moduleId: 2015,
        title: "Top 30 Python Coding Questions",
    },
    {
        id: 20113,
        moduleId: 2015,
        title: "Top 20 Java Coding Questions",
    },

    //Interview Questions
    {
        id: 20114,
        moduleId: 2016,
        title: "HR Questions",
    },
    {
        id: 20115,
        moduleId: 2016,
        title: "Technical Questions",
    },
    {
        id: 20116,
        moduleId: 2016,
        title: "MR Question",
    }
]

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
    //C Language
    { id: 20028, chapterId: 20105, title: "Getting Started with C" },
    { id: 20029, chapterId: 20105, title: "Basic Syntax and Structure" },
    { id: 20030, chapterId: 20105, title: "Data Types and Variables" },
    { id: 20031, chapterId: 20105, title: "Operators and Expressions" },
    { id: 20032, chapterId: 20105, title: "Control Flow in C" },
    { id: 20033, chapterId: 20105, title: "Functions and Modular Programming" },
    { id: 20034, chapterId: 20105, title: "Arrays and Strings" },
    { id: 20035, chapterId: 20105, title: "Pointers in C" },
    { id: 20036, chapterId: 20105, title: "Structures and Enumerations" },
    { id: 20037, chapterId: 20105, title: "Debugging and Error Handling" },
    { id: 20038, chapterId: 20105, title: " Advanced Topics and Best Practices" },

    //python
    { id: 20039, chapterId: 20106, title: "Getting Started with Python" },
    { id: 20040, chapterId: 20106, title: "Introduction to Python" },
    { id: 20041, chapterId: 20106, title: "Variables and Data Types" },
    { id: 20042, chapterId: 20106, title: "Control Flow in Python" },
    { id: 20043, chapterId: 20106, title: "Working with Functions" },
    { id: 20044, chapterId: 20106, title: "Data Structures in Python" },
    { id: 20045, chapterId: 20106, title: "File Handling" },
    { id: 20046, chapterId: 20106, title: "Modules and Libraries" },
    { id: 20047, chapterId: 20106, title: "Error and Exception Handling" },
    { id: 20048, chapterId: 20106, title: "Introduction to Object-Oriented Programming (OOP)" },

    //java
    { id: 20049, chapterId: 20107, title: "Introduction to Java" },
    { id: 20050, chapterId: 20107, title: "Variables and Data Types" },
    { id: 20051, chapterId: 20107, title: "Operators in Java" },
    { id: 20052, chapterId: 20107, title: "Control Flow Statements" },
    { id: 20053, chapterId: 20107, title: "Arrays and Strings" },
    { id: 20054, chapterId: 20107, title: "Object-Oriented Programming Basics" },
    { id: 20055, chapterId: 20107, title: "Inheritance and Polymorphism" },
    { id: 20056, chapterId: 20107, title: "Exception Handling" },
    { id: 20057, chapterId: 20107, title: "Introduction to Java Collections" },

    //operating system
    { id: 20059, chapterId: 20108, title: "Introduction to Operating Systems" },
    { id: 20060, chapterId: 20108, title: "What is an Operating System" },
    { id: 20061, chapterId: 20108, title: "Types of Operating Systems" },
    { id: 20062, chapterId: 20108, title: "Components of an Operating System" },
    { id: 20063, chapterId: 20108, title: "Processes and Threads" },
    { id: 20064, chapterId: 20108, title: "Memory Management Basics" },
    { id: 20065, chapterId: 20108, title: "File System Management" },
    { id: 20066, chapterId: 20108, title: "Device Management and I/O" },
    { id: 20067, chapterId: 20108, title: "Security and Protection in Operating Systems" },
    { id: 20068, chapterId: 20108, title: "Virtualization and Cloud Integration" },
    { id: 20069, chapterId: 20108, title: "Future of Operating Systems" },

    //Networking
    { id: 20070, chapterId: 20109, title: "Introduction to Computer Networks" },
    { id: 20071, chapterId: 20109, title: "Network Topologies and Architecture" },
    { id: 20072, chapterId: 20109, title: "The OSI and TCP/IP Models" },
    { id: 20073, chapterId: 20109, title: "Networking Hardware" },
    { id: 20074, chapterId: 20109, title: "IP Addressing and Subnetting" },
    { id: 20075, chapterId: 20109, title: "Domain Name System (DNS)" },
    { id: 20076, chapterId: 20109, title: "Protocols and Ports" },
    { id: 20077, chapterId: 20109, title: "Wireless Networking" },
    { id: 20078, chapterId: 20109, title: "Network Security Basics" },
    { id: 20079, chapterId: 20109, title: "Troubleshooting Networks" },

    //DBMS
    { id: 20080, chapterId: 20110, title: "Introduction to Databases" },
    { id: 20081, chapterId: 20110, title: "Database Models and Architectures" },
    { id: 20082, chapterId: 20110, title: "Entity-Relationship (ER) Model" },
    { id: 20083, chapterId: 20110, title: "Relational Database Design" },
    { id: 20084, chapterId: 20110, title: "Structured Query Language (SQL) Basics" },
    { id: 20085, chapterId: 20110, title: "Advanced SQL Concepts" },
    { id: 20086, chapterId: 20110, title: "Database Transactions" },
    { id: 20087, chapterId: 20110, title: "Indexes and Optimization" },
    { id: 20088, chapterId: 20110, title: "Database Security" },
    { id: 20089, chapterId: 20110, title: "Introduction to NoSQL Databases" },

    //HR Interview
    {
        id: 20090, chapterId: 20114, title: "Personality Based", content: `
#### 1. Tell me about yourself / Introduce Yourself?

**Sample Answer:**

> Good morning/afternoon! My name is [Your Name], and I recently graduated with a degree in [Your Degree] from [Your College/University].
>
> During my studies, I developed a keen interest in [Your Interest], and worked on projects like [mention a project].
>
> Outside academics, I participated in [mention extracurricular activities], which enhanced my [mention skills]. I am passionate about [mention passion], and I’m excited to apply my knowledge and skills to contribute to your organization.
>
> In my spare time, I enjoy [mention a hobby], which keeps me balanced and motivated.

**Actual Answer:**
>Good morning/afternoon! My name is John Doe, and I recently graduated with a degree in Bachelor of Computer Science from XYZ University.
>
>During my studies, I developed a keen interest in software development, and worked on projects like building a web-based application for managing student records.
>
>Outside academics, I participated in internships and volunteered for coding bootcamps, which enhanced my problem-solving and communication skills. I am passionate about creating scalable solutions to improve user experiences, and I’m excited to apply my knowledge and skills to contribute to your organization.
>
>In my spare time, I enjoy playing chess and learning new programming languages, which keeps me balanced and motivated.

#### 2. Tell me about your strengths and weaknesses?
**Answer:**
>__Strengths:__ My strength is that I am very dedicated and hardworking. When I commit to something, I give it my full effort. For example, when I was working on my final year project, I made sure to research and understand every detail, which helped me complete the project successfully. I’m also a good communicator, which helps me work well with others.
>
>__Weaknesses:__ One of my weaknesses is that I sometimes struggle with time management. I tend to spend too much time on a task trying to make it perfect. But, I am working on improving this by setting specific deadlines and prioritizing my tasks so that I can stay on track."
>

#### 3. What is your biggest achievement?
**Sample Answer:**
>My biggest achievement was [describe the achievement]. It was a
challenging experience because [mention the challenges you faced].
However, I was able to overcome these challenges by [describe the efforts or
steps you took]. As a result, I [mention the positive outcome or recognition].
This experience taught me [mention the skills or lessons learned],
and it made me more confident about handling similar situations in the future.

**Actual Answer:**
>My biggest achievement was leading my college team in a national-level coding competition. It was a challenging experience because we had a tight deadline and were working with a new programming framework. However, I was able to overcome these challenges by collaborating closely with my teammates and dividing tasks based on our strengths. As a result, we secured second place in the competition. This experience taught me the importance of teamwork, time management, and staying calm under pressure, and it made me more confident about handling similar situations in the future.

#### 4. What are your hobbies and interests?
**Sample Answer:**
>My hobbies and interests include [mention your hobbies or interests]. I enjoy them because [explain why you enjoy them or what you gain from them]. These activities help me [mention any positive impact, like improving skills, relaxing, or staying motivated].

**Actual Answer:**
>My hobbies and interests include reading books, especially self-improvement and technology-related topics. I enjoy them because they help me learn new things and stay updated with current trends. These activities help me improve my focus and expand my knowledge, which is useful in both personal and professional life.


#### 4. What makes you unique?
**Sample Answer:**
>What makes me unique is my ability to [mention a specific skill, quality, or experience]. This sets me apart because [explain why this quality is valuable or how it helps you excel]. For example, [share a brief example or situation where you demonstrated this uniqueness]. This quality enables me to [mention the positive outcomes or benefits].

**Actual Answer:**
>What makes me unique is my ability to quickly adapt to new environments and technologies. This sets me apart because I can learn new tools or concepts in a short amount of time and apply them effectively. For example, during my final-year project, I had to learn a new programming language within weeks to complete the task successfully. This adaptability helps me stay productive and confident, even in challenging situations.


`},
    { id: 20091, chapterId: 20114, title: "Situational Questions" },
    { id: 20092, chapterId: 20114, title: "Team Based" },
    { id: 20093, chapterId: 20114, title: "Inclusive Questions" },
    { id: 20094, chapterId: 20114, title: "Academics Questions" },

    //Technical Interview
    { id: 20095, chapterId: 20115, title: "Programming Fundamentals" },
    { id: 20096, chapterId: 20115, title: "Data Structures and Algorithms" },
    { id: 20097, chapterId: 20115, title: "Object-Oriented Programming (OOP)" },
    { id: 20098, chapterId: 20115, title: "Database Management" },
    { id: 20099, chapterId: 20115, title: "Operating System Concepts" },
    { id: 20100, chapterId: 20115, title: "Networking Basics" },
    { id: 20101, chapterId: 20115, title: "Software Development Lifecycle (SDLC)" },

    //MR Interview
    { id: 20102, chapterId: 20116, title: "Leadership and Teamwork" },
    { id: 20103, chapterId: 20116, title: "Time Management" },
    { id: 20104, chapterId: 20116, title: "Decision-Making Skills" },
    { id: 20105, chapterId: 20116, title: "Problem Solving in Work Scenarios" },
    { id: 20106, chapterId: 20116, title: "Conflict Resolution" },
    { id: 20107, chapterId: 20116, title: "Ethical Scenarios" },
    { id: 20108, chapterId: 20116, title: "Project Management Basics" },


    ];
