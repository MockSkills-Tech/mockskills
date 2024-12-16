import {
  FaChartBar,
  FaClipboardList,
  FaCode,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";

//import interviewImage from '../assets/interview_image.jpg'
//import web_dev_img from '../assets/CoursesPic/web_dev_img.png/'
import frontend_web_dev_img from "../assets/CoursesPic/frontend_web_dev_img.png";
import foundation_course_img from "../assets/CoursesPic/foundation_course.jpg";
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
    description:
      "Master essential IT concepts, programming languages like Java and C++, and key subjects like DBMS and networking, along with interview preparation.",
    courses: 5,
    students: "5k",
    image: foundation_course_img,
    categoryId: 2,
    active: true,
  },
  {
    id: 200,
    title: "Web Developement (Front-End)",
    description: "Learn the most commonly used Front End technology in Web.",
    courses: 3,
    students: "25k",
    image: frontend_web_dev_img,
    categoryId: 2,
    active: true,
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
    title: "Programming Languages",
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
    title: "Coding with Numbers: Essential Practices",
  },
  {
    id: 20112,
    moduleId: 2015,
    title: "Working with Strings: A Coding Guide",
  },
  {
    id: 20113,
    moduleId: 2015,
    title: "Exploring Arrays: Practical Coding Exercises",
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
  },
];

export const TOPICS = [
  // HTML Essentials (Front-End)
  {
    id: 20010,
    chapterId: 20001,
    title: "Introduction to HTML Tags",
    content: `
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
`,
  },
  {
    id: 20011,
    chapterId: 20001,
    title: "HTML Attributes and Elements",
    content: `
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
`,
  },
  {
    id: 20012,
    chapterId: 20002,
    title: "Structuring a Web Page with HTML",
    content: `
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
`,
  },
  {
    id: 20013,
    chapterId: 20002,
    title: "Semantic HTML Elements",
    content: `
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
`,
  },
  {
    id: 20014,
    chapterId: 20003,
    title: "Creating Forms with HTML",
    content: `
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
`,
  },
  {
    id: 20015,
    chapterId: 20003,
    title: "HTML Input Types and Validation",
    content: `
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
`,
  },

  // CSS Fundamentals (Front-End)
  {
    id: 20016,
    chapterId: 20004,
    title: "CSS Selectors and Properties",
    content: `

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
`,
  },
  {
    id: 20017,
    chapterId: 20004,
    title: "Styling Text and Fonts with CSS",
    content: `
#### 1. How do you change the font of an element?
__Answer :-__ The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.

  `,
  },
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
  {
    id: 20048,
    chapterId: 20106,
    title: "Introduction to Object-Oriented Programming (OOP)",
  },

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
  {
    id: 20067,
    chapterId: 20108,
    title: "Security and Protection in Operating Systems",
  },
  {
    id: 20068,
    chapterId: 20108,
    title: "Virtualization and Cloud Integration",
  },
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
  {
    id: 20084,
    chapterId: 20110,
    title: "Structured Query Language (SQL) Basics",
  },
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

#### 5. How do you deal with criticism?
**Answer:**
>I deal with criticism by staying calm and trying to understand the feedback. I see it as an opportunity to improve myself. For example, during my internship, my supervisor pointed out that I needed to work on presenting my ideas more clearly. I took this feedback positively, practiced giving concise updates, and eventually became more confident in my communication. Constructive criticism helps me identify areas of improvement and become better at what I do.

#### 6. How would you manage your stress?
**Answer:**
>I manage stress by staying calm and taking things one step at a time. When I feel stressed, I take short breaks and do some physical activities like stretching or going for a quick walk to refresh my mind. These help me feel more relaxed and focused. I also practice deep breathing to stay calm and make a plan to prioritize my tasks. Doing something I enjoy, like listening to music or exercising, helps me balance my stress and keep a positive mindset.


#### 7. What is the biggest failure in your life?
**Answer:**
>My biggest failure was not being selected for a college debate competition. I had prepared a lot but couldn't make it through the final round. It was disappointing because I believed I had a strong chance.
>
>However, this experience taught me that preparation is not enough; confidence and communication also matter. After that, I started working on my public speaking skills and participated in smaller competitions to improve myself. This failure helped me grow, and I’m now much more confident in expressing my ideas.


#### 8. Describe yourself in one word?
**Answer:**
>If I had to describe myself in one word, it would be 'Dedicated'. This is because I always put my best effort into the tasks I take up, whether it’s academics, work, or personal goals. I believe dedication is the key to achieving success.


#### 9. Give me an example of your creativity?
**Answer:**
>One example of my creativity was during my college fest when we had a low budget for decorations. To make the event stand out, I suggested using recycled materials like old newspapers, bottles, and cardboard to create decorative items. I worked with my team to design unique wall hangings and centerpieces.
>
>The decorations not only looked great but also received praise for being eco-friendly and cost-effective. This experience taught me that creativity isn’t just about being artistic; it’s about finding innovative solutions with the resources you have.


#### 10. How quickly can you adapt new technology?
**Answer:**
>I can adapt to new technology quickly because I have a strong interest in learning how things work. For example, during my internship, I was asked to use a project management tool I had never seen before. I spent a day watching tutorials and practicing with it, and by the next day, I was comfortable enough to use it for my tasks.
>
>I believe that with curiosity and effort, I can get familiar with any new technology in a short time.
`},
    {
        id: 20091, chapterId: 20114, title: "Situational Questions", content: `

#### 1. What if we don't select you?
**Answer:**
>Thank you for letting me know. While I would be disappointed, I would take it as an opportunity to reflect on areas where I can improve. I believe every experience is a learning moment, and I will work on enhancing my skills and preparing better for future opportunities.
>
>I truly appreciate the chance to interview with your company, and I hope to stay in touch for any future roles where I might be a better fit.


#### 2. Where do you see yourself in 5 years?
**Answer:**
>In the next five years, I see myself having gained deep expertise in software development, particularly in [mention relevant programming languages or technologies, e.g., JavaScript, React, etc.]. I plan to contribute to key projects and grow my problem-solving skills, while collaborating with experienced colleagues. I also hope to take on leadership responsibilities, such as mentoring junior developers or leading a team, and I aim to contribute to the strategic direction of the company. Ultimately, I want to be recognized as a strong, dependable team member who drives innovation and adds significant value to the organization.

#### 3.What was the toughest decision you ever made?
**Answer:**
>The toughest decision I ever made was choosing my career path after high school. I had to decide between pursuing a degree in [mention your field, e.g., computer science] or something completely different. It was difficult because I wasn't sure if I was making the right choice. But after researching, talking to people in the field, and reflecting on my interests, I realized that [mention your field, e.g., programming] was something I truly enjoyed and wanted to pursue. It was a tough decision, but I’m glad I made it because it set me on the right path for my career.

#### 4. If you get a job with a higher package, what will you do??
**Answer:**
>If I receive an offer with a higher package from another company, I would first assess all aspects of the job, not just the salary. I value opportunities for learning, growth, and a positive work culture. While salary is important, I would prioritize a role where I can contribute meaningfully, grow professionally, and align with the company’s values. If the higher-paying job offers better long-term prospects and aligns with my goals, I would consider it. However, if I feel this company offers a better opportunity for growth and aligns with my career aspirations, I would choose to stay here and build a long-term career.


#### 5. Are you open for rotational/night shifts/overtime?
**Answer:**
>As a fresher, I am open to working rotational shifts, night shifts, or overtime if the job requires it. I understand that certain roles and projects may need flexibility in working hours, and I am willing to adapt. I believe it's important to be flexible and dedicated to my responsibilities, and I am ready to learn and contribute to the team in any way I can.
`},
    {
        id: 20092, chapterId: 20114, title: "Team Based", content: `
#### 1. Are you a team player? example?
**Answer:**
>Yes, I consider myself a team player. For example, during a group project in college, we had to build a website as part of a class assignment. One of the team members was struggling with coding, so I offered to help by explaining some concepts and reviewing the code together. I also made sure to listen to everyone’s ideas and contributed to brainstorming sessions.
>In the end, we completed the project successfully, and it was a great learning experience. I believe that collaboration and supporting each other are key to achieving great results as a team.

#### 2. Have you led any team before?
**Answer:**
>As a fresher, I haven’t had the chance to lead a team in a work setting yet. But in college, I worked on a group project where I helped organize tasks and made sure everyone was on track. I also supported my teammates when needed. While I wasn’t the official leader, I learned how important it is to communicate well and work together. I’m excited to learn more about leading a team in the future.

#### 3.What was the toughest decision you ever made?
**Answer:**
>The toughest decision I ever made was choosing my career path after high school. I had to decide between pursuing a degree in [mention your field, e.g., computer science] or something completely different. It was difficult because I wasn't sure if I was making the right choice. But after researching, talking to people in the field, and reflecting on my interests, I realized that [mention your field, e.g., programming] was something I truly enjoyed and wanted to pursue. It was a tough decision, but I’m glad I made it because it set me on the right path for my career.

#### 4. What is the difference between a team and a group?
**Answer:**
>A __team__ is a group of people working together with a shared goal or purpose, where each person has specific roles and responsibilities. In a team, everyone works towards the same outcome and supports each other to achieve it.

>On the other hand, a __group__ is simply a collection of people who may not have a shared goal or are working together for a common purpose. People in a group might be working on their individual tasks, without much collaboration. So, the main difference is that a team works together towards a common goal, while a group may not necessarily have that same level of coordination.


    `},
    {
        id: 20093, chapterId: 20114, title: "Inclusive Questions", content: `
#### 1. Why should we hire you?
**Answer:**
>As a fresher, I bring a lot of enthusiasm and a willingness to learn. I have a strong foundation in [mention relevant skills or education], and I am eager to apply what I’ve learned in a real-world setting. I am hardworking, a good communicator, and I believe in working well with others to achieve goals. I am also quick to adapt to new challenges and ready to take on responsibility. I am confident that I can contribute positively to your team and grow with the company.

#### 2. Why should we not hire you?
**Answer:**
>As a fresher, I don't have years of experience in the industry, which means I might not yet have the practical knowledge that comes with working on real-world projects. However, I am eager to learn and adapt quickly. I am highly motivated to pick up new skills, and I view challenges as opportunities for growth. I believe my ability to learn fast, my enthusiasm, and my dedication to self-improvement will make me a valuable asset to the team in the long run.

#### 3. What are your salary expectations?
**Answer:**
>As I am just starting my career, I am more focused on gaining experience and growing within the company. I am open to a competitive salary based on the industry standards and the responsibilities of the role. From my research, I understand that the typical range for this position in this industry is between [mention a range based on your research], but I am flexible and open to further discussion based on the company's budget and growth opportunities. Ultimately, I’m looking for a role where I can contribute, learn, and grow professionally.

#### 4. Tell me something that you haven't mentioned in your resume?
**Answer:**
>One thing I haven’t mentioned on my resume is my strong ability to quickly adapt to new environments and technologies. During my academic projects and internships, I often had to learn new tools or languages on the fly, and I found that I’m able to pick things up quickly and apply them efficiently. For example, in a recent project, I was tasked with learning a new programming language within a short time frame, and I was able to get up to speed and contribute effectively to the team. I believe this adaptability will help me thrive in a fast-paced work environment.

#### 5. What is the difference between smart work and hard work?
**Answer:**
>__Hard work__ is about putting in long hours and putting your best effort into a task, often involving persistence and dedication. It requires a strong work ethic and a willingness to do whatever it takes to get the job done.
>
>__Smart work__, on the other hand, is about working efficiently and effectively. It involves using your time and resources wisely, finding ways to achieve better results with less effort, and leveraging the right tools and techniques. Smart work often involves planning, prioritizing tasks, and finding innovative solutions to problems, rather than just working harder.
>
>As a fresher, I believe in balancing both. I’m always ready to put in the hard work to learn and grow, but I also focus on working smart by being organized, learning from others, and using the right resources to improve productivity and results

#### 6. What is the difference between smart work and hard work?
**Answer:**
>__Confidence__ is a positive belief in your abilities and skills, which helps you take on challenges and perform tasks effectively. It’s about being sure of what you can do, staying calm under pressure, and handling situations with a positive attitude. Confidence is important because it drives you to take initiative and trust your judgment.
>
>__Overconfidence__, however, is when you have an inflated sense of your abilities, often leading you to underestimate challenges, ignore feedback, or not recognize areas where you need improvement. It can make you take unnecessary risks or appear arrogant, which can be counterproductive in a professional setting.
>
>In my opinion, confidence is crucial for success, but it's important to stay grounded, remain open to learning, and recognize that there’s always room for improvement. I aim to strike a balance by being confident in my abilities while being humble and willing to learn from others.
    `},
    {
        id: 20094, chapterId: 20114, title: "Academics Questions", content: `
#### 1. Why did you score low in your academics?
**Answer:**
>I understand that my academic performance wasn’t as high as I expected. At that time, I faced challenges like balancing different responsibilities and adjusting to new learning methods. Since then, I’ve worked on improving my time management and focusing on areas I struggled with. I’ve learned from these experiences and am now more focused and determined to perform better in the future.

#### 2. What did you do in past year to improve your knowledge/skills?
**Answer:**
>In the past year, I focused on improving my skills by taking online courses related to my field, such as [mention a relevant course or topic]. I also worked on personal projects to apply what I learned and gain hands-on experience. Additionally, I followed industry blogs and joined online communities to stay updated with the latest trends and best practices. These efforts have helped me improve both my technical skills and my understanding of the industry.

#### 3. Are you planning on pursuing higher degree?
**Answer:**
>At the moment, I’m focused on gaining practical experience and developing my skills in the workforce. While I’m not ruling out the possibility of pursuing a higher degree in the future, I believe that hands-on experience and learning on the job will be more beneficial for my career right now. I’m open to further education if it aligns with my long-term goals and the growth opportunities within my career.
    `},

  //Technical Interview
    {
        id: 20095, chapterId: 20115, title: "Programming Fundamentals", content: `
#### 1. What is the difference between a compiler and an interpreter?
**Answer:**
>A __compiler__ translates the entire source code of a program into machine code (or an intermediate form) in one go before execution. This means the program is compiled all at once, and errors are shown after the entire code is compiled. Once compiled, the program can run multiple times without needing to be compiled again.
>
>An __interpreter__, on the other hand, translates the code line-by-line during execution. It reads and executes the program one instruction at a time, showing errors immediately after executing a line of code. Unlike compilers, interpreters do not produce a separate machine code file; they run the program directly.
>
>In summary, a compiler translates the whole program before execution, while an interpreter translates and executes the program line by line.

#### 2. What is a function in programming, and why is it important?
**Answer:**
>A function in programming is a block of reusable code that performs a specific task. Functions allow you to organize your code, make it more readable, and avoid repeating the same code in multiple places. You can define a function once and call it whenever needed, which makes the program more modular and easier to maintain.
>Functions are important because they help in:
>  - **Reusability**: Write a function once and use it multiple times.
>  - **Organization**: Break down complex tasks into smaller, manageable pieces.
>  - **Debugging**: Easier to find and fix errors in a smaller, specific part of the program.
>\`\`\`python
>def add_numbers(a, b):   # Function definition
>   return a + b          # Function body
>
># Calling the function
>result = add_numbers(3, 5)
>print(result)  # Output: 8
>\`\`\`

#### 3. What is the purpose of an algorithm in programming?
**Answer:**
>An algorithm in programming is a step-by-step procedure or set of rules used to solve a problem or complete a task. It is important because it provides a clear and efficient way to perform operations, ensuring that the task is done correctly and in the least amount of time possible.

#### 4. What is the concept of recursion? Can you give an example?
**Answer:**
>Recursion is a programming concept where a function calls itself in order to solve a problem. The idea is to break down a problem into smaller, simpler subproblems and solve them step by step.
>Recursion typically involves two parts:
>   - __Base case:__ The condition under which the function stops calling itself.
>   - __Recursive case:__ The part where the function calls itself with modified inputs.
>\`\`\`python
>def factorial(n):
>    # Base case: factorial of 0 or 1 is 1
>    if n == 0 or n == 1:
>        return 1
>    # Recursive case: n * factorial of (n-1)
>    else:
>        return n * factorial(n - 1)
>
># Calling the function
>result = factorial(5)
>print(result)  # Output: 120
>\`\`\`

#### 5. What are loops in programming?
**Answer:**
>A loop in programming is used to repeat a block of code multiple times based on a certain condition. Loops help in automating repetitive tasks, reducing the need for writing the same code over and over again.
>
> There are three main types of loops in most programming languages:
>
> - **For Loop :**
>    A for loop is used when the number of iterations is known beforehand. It runs a block of code for a specific number of times.
>\`\`\`python
>for i in range(5):  # Loop runs 5 times, with i taking values from 0 to 4
>    print(i)
>\`\`\`
> - **While Loop :**
>    A while loop runs as long as a specified condition is true. The number of iterations is not fixed and depends on the condition being met.
>\`\`\`python
>i = 0
>while i < 5:  # Loop runs as long as i is less than 5
>    print(i)
>    i += 1
>\`\`\`
> - **Do-While Loop :**
>    A do-while loop is similar to a while loop, but the condition is checked after the loop runs, ensuring the loop runs at least once.
>When rendered,
>\`\`\`python
>i = 0
>while True:
>    print(i)
>    i += 1
>    if i == 5:
>        break  # Break the loop after 5 iterations
>\`\`\`


#### 6. What are conditional statements in programming?
**Answer:**
>Conditional statements in programming are used to execute different blocks of code based on whether a condition is true or false. They allow the program to make decisions and follow different paths depending on the outcome of conditions.

#### 7. Explain different types of conditional statements?
**Answer:**
>- **If Statement :**
>   - Use an if statement when you need to check a single condition and execute a block of code if the condition is true.
>   - If the condition evaluates to true, the code inside the if block runs; otherwise, it does nothing.
>\`\`\`python
>if age >= 18:
>    print("You are an adult.")
>\`\`\`

>- **Ladder If Statement :**
>   - A Ladder If (or Else If Ladder) is a programming construct used when you need to check multiple conditions sequentially. It allows you to test several conditions, and the first condition that evaluates to true will execute its corresponding block of code. If none of the conditions are true, an optional else block can execute.
>
>   - In a ladder if structure, you chain multiple if, elif (else if), and else statements to check for various conditions. The program moves down the ladder, evaluating each condition in order.
>\`\`\`python
>if age < 18:
>    print("You are a minor.")
>elif age >= 18 and age < 65:
>    print("You are an adult.")
>else:
>    print("You are a senior.")
>\`\`\`

>- **Nested If Statement :**
>   - A nested if statement is an if statement that is placed inside another if or else block. This allows you to evaluate a condition within the scope of a previous condition. In other words, a nested if lets you make more specific decisions by adding multiple layers of conditions.
>
>   - It is useful when you need to check a condition after another condition has already been evaluated as true. This allows for more complex decision-making structures.
>\`\`\`python
>age = 20
>if age >= 18:
>    if age < 65:
>        print("You are an adult.")
>    else:
>        print("You are a senior.")
>else:
>    print("You are a minor.")
>\`\`\`

#### 8. What is the role of an exception in programming?
**Answer:**
>An exception in programming is an error or unexpected event that occurs during the execution of a program. The role of an exception is to handle errors in a controlled way, allowing the program to continue running or provide useful error messages instead of crashing. It helps programmers manage issues like invalid inputs, missing files, or incorrect operations by catching and responding to them without interrupting the entire program.

`},
    {
        id: 20096, chapterId: 20115, title: "Data Structures and Algorithms", content: `
#### 1. What is a Data Structure?
**Answer:**
>A data structure is a way to organize, manage, and store data in a computer so that it can be accessed and used efficiently. It determines how data is arranged in memory and how operations like insertion, deletion, searching, and updating are performed.
>
>__Note :__ Data structures are essential for building efficient algorithms and optimizing the performance of programs.

#### 2.  What is the difference between linear and non-linear data structures?
**Answer:**
>- Linear :
>   - Data is arranged in a sequence (one after another).
>   - Traversed in a single, straight path.
>   - Uses continuous memory locations.
>   - Example : Arrays, Linked Lists, Stacks, Queues.
>- Non-Linear :
>   - Data is arranged in  hierarchial format.
>   - Traversed in multiple paths based on connections.
>   - Uses scattered memory locations.
>   - Example : Trees, Graphs.

#### 3. What is the difference between an array and a linked list?
**Answer:**
>- Array :
>   - A collection of elements stored in contiguous memory locations.
>   - Fixed size, needs to be defined at the time of creation.
>   - Direct access using index.
>   - Example : int arr[5] = {1, 2, 3, 4, 5};
>- Linked-list :
>   - A collection of nodes where each node contains data and a reference (or pointer) to the next node.
>   - Dynamic size; can grow or shrink during runtime.
>   - Sequential access; slower to find an element.
>   - Example : A node structure with pointers connecting nodes.


#### 4. What is a stack, and where is it used?
**Answer:**
>A stack is a linear data structure that follows the LIFO (Last In, First Out) principle, meaning the last element added to the stack is the first one to be removed. It is like a stack of plates where you can only add or remove the top plate.
>
>__Uses Of Stack :__
>   - Undo Operations: In text editors to undo recent actions.
>   - Function Calls: Used in programming to manage function call sequences (call stack).
>   - Expression Evaluation: For evaluating and converting expressions like infix to postfix.
>   - Backtracking: Used in algorithms like maze solving or game moves.
>   - Browser History: To navigate back and forth between web pages.

#### 5. What is a queue also tell me type of Queue?
**Answer:**
>A queue is a linear data structure that follows the FIFO (First In, First Out) principle, meaning the first element added to the queue is the first one to be removed. It is like a line of people where the first person in line is served first.
>
>**Types of Queue :**
>- Simple Queue:
>A queue that follows the FIFO (First In, First Out) principle, where elements are added at the rear and removed from the front.
>
>- Circular Queue:
>A queue where the last position is connected back to the first, forming a circle to efficiently utilize memory.
>
>- Priority Queue:
>A queue where each element has a priority, and elements with higher priority are dequeued before those with lower priority.
>
>- Deque (Double-Ended Queue):
>A queue where elements can be added or removed from both the front and rear ends.

#### 6. Difference Between Queue and Stack?
**Answer:**
>- Queue :
>   - Follows FIFO (First In, First Out), where the first element added is the first to be removed.
>   - Elements are added at the rear (enqueue) and removed from the front (dequeue).
>   - Used for task scheduling, request handling, and managing resources.
>- Stack :
>   - Follows LIFO (Last In, First Out), where the last element added is the first to be removed.
>   - Elements are added (push) and removed (pop) only from the top.
>   - Used for undo operations, function call tracking, and expression evaluation.

#### 7. What is a binary search tree (BST)?
**Answer:**
>A binary tree is a hierarchical data structure in which each node has at most two child nodes, referred to as the left and right child. It is used to represent hierarchical relationships, such as the structure of a family tree or the organization of a file system.

#### 8. What is a binary search tree (BST)?
**Answer:**
>A BST is a binary tree where the left child of a node contains values smaller than the node, and the right child contains values larger.

#### 8. What is a Graph?
**Answer:**
>A graph is a data structure made up of nodes (also called vertices) and edges (connections between nodes). It is used to represent relationships or connections between different items.
>- Example : In a social network, each person can be a node, and the connections (friendships) between them are the edges.

#### 8. What is a hash table?
**Answer:**
>A hash table stores data in key-value pairs and uses a hash function to map keys to indices in an array for quick access.
 
` },
    {
        id: 20097, chapterId: 20115, title: "Object-Oriented Programming (OOP)", content: `
#### 1. What is Object-Oriented Programming (OOP)?
**Answer:**
>OOP is a programming paradigm that organizes software design around objects, rather than functions and logic. It focuses on using objects and classes.

#### 2.  What are the four pillars of OOP?
**Answer:**
>- Encapsulation: Bundling data and methods into a single unit (class).
>- Abstraction: Hiding the complex implementation and showing only the necessary details.
>- Inheritance: A mechanism where one class inherits properties and behaviors from another.
>- Polymorphism: The ability to take many forms, i.e., using the same method name with different implementations.

#### 3. What is a class in OOP?
**Answer:**
>A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have.

#### 4. What is an object in OOP?
**Answer:**
>A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have.

#### 5. What is encapsulation?
**Answer:**
>Encapsulation is the practice of keeping fields (attributes) private and providing access to them via public methods. It hides the internal state of an object from the outside.

#### 6. What is abstraction?
**Answer:**
>Abstraction is the concept of hiding the complex implementation details and exposing only the essential features of an object.

#### 7. What is inheritance?
**Answer:**
>Inheritance is a fundamental concept in Object-Oriented Programming (OOP) where one class (called the child class or subclass) can inherit properties and behaviors (methods) from another class (called the parent class or superclass). It allows for code reuse and helps in creating a hierarchical relationship between classes.

#### 8. What is a binary search tree (BST)?
**Answer:**
>A BST is a binary tree where the left child of a node contains values smaller than the node, and the right child contains values larger.

#### 8. What is a Graph?
**Answer:**
>A graph is a data structure made up of nodes (also called vertices) and edges (connections between nodes). It is used to represent relationships or connections between different items.
>- Example : In a social network, each person can be a node, and the connections (friendships) between them are the edges.

#### 8. What is a hash table?
**Answer:**
>A hash table stores data in key-value pairs and uses a hash function to map keys to indices in an array for quick access.
 
` },
  { id: 20098, chapterId: 20115, title: "Database Management" },
  { id: 20099, chapterId: 20115, title: "Operating System Concepts" },
  { id: 20100, chapterId: 20115, title: "Networking Basics" },
  {
    id: 20101,
    chapterId: 20115,
    title: "Software Development Lifecycle (SDLC)",
  },

  //MR Interview
  { id: 20102, chapterId: 20116, title: "Leadership and Teamwork" },
  { id: 20103, chapterId: 20116, title: "Time Management" },
  { id: 20104, chapterId: 20116, title: "Decision-Making Skills" },
  { id: 20105, chapterId: 20116, title: "Problem Solving in Work Scenarios" },
  { id: 20106, chapterId: 20116, title: "Conflict Resolution" },
  { id: 20107, chapterId: 20116, title: "Ethical Scenarios" },
  { id: 20108, chapterId: 20116, title: "Project Management Basics" },

  // Top 20 Coding Question
  {
    id: 20109,
    chapterId: 20111,
    title: "1. Check if a Number is a Palindrome",
    content: `
  ### Problem Statement:
A palindrome is a number that reads the same backward as forward. For example, \`121\` or \`12321\`.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, reversed = 0, remainder, original;
      printf("Enter a number: ");
      scanf("%d", &num);
  
      original = num;
  
      // Reverse the number
      while (num != 0) {
          remainder = num % 10;
          reversed = reversed * 10 + remainder;
          num /= 10;
      }
  
      // Check if the original and reversed numbers are the same
      if (original == reversed) {
          printf("%d is a palindrome.\n", original);
      } else {
          printf("%d is not a palindrome.\n", original);
      }
  
      return 0;
  }
  \`\`\`
  
  ---

  `,
  },
  {
    id: 20110,
    chapterId: 20111,
    title: "2. Check if a Number is Prime",
    content: `
  ### Explanation:
  A prime number is a number greater than 1 that has no divisors other than 1 and itself. For example, 2, 3, 5, 7, 11 are prime numbers because they cannot be divided evenly by any other numbers apart from 1 and themselves.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  #include <stdbool.h>
  
  bool is_prime(int number) {
      if (number <= 1) {
          return false; // Numbers less than or equal to 1 are not prime
      }
      for (int i = 2; i * i <= number; i++) { // Check divisors up to the square root of the number
          if (number % i == 0) {
              return false; // If divisible by any number, it's not prime
          }
      }
      return true; // No divisors found, so it's prime
  }
  
  int main() {
      int num;
      
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Check if it's prime
      if (is_prime(num)) {
          printf("%d is a prime number.\n", num);
      } else {
          printf("%d is not a prime number.\n", num);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20111,
    chapterId: 20111,
    title: "3. Check if a Number is an Armstrong Number",
    content: `
  ### Explanation:
  An **Armstrong Number**, also known as a Narcissistic Number, is a number that equals the sum of its own digits raised to the power of the number of digits. For instance:
  - \`153\` is an Armstrong Number because \(1^3 + 5^3 + 3^3 = 153\).
  - \`9474\` is an Armstrong Number because \(9^4 + 4^4 + 7^4 + 4^4 = 9474\).
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  #include <math.h>
  
  int main() {
      int num, original, remainder, result = 0, n = 0;
  
      printf("Enter a number: ");
      scanf("%d", &num);
  
      original = num;
  
      // Calculate the number of digits
      while (original != 0) {
          original /= 10;
          n++;
      }
  
      original = num;
  
      // Calculate the sum of digits raised to the power of n
      while (original != 0) {
          remainder = original % 10;
          result += pow(remainder, n);
          original /= 10;
      }
  
      // Check if the number is an Armstrong Number
      if (result == num) {
          printf("%d is an Armstrong Number.\n", num);
      } else {
          printf("%d is not an Armstrong Number.\n", num);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20112,
    chapterId: 20111,
    title: "4. Check if a number is a Perfect Number",
    content: `
  ### Explanation:
  A **Perfect Number** is a positive integer that equals the sum of its proper divisors, excluding the number itself. For example:
  - \`6\` is a perfect number because \(1 + 2 + 3 = 6\).
  - \`28\` is another perfect number because \(1 + 2 + 4 + 7 + 14 = 28\).
  
  A key step in determining if a number is perfect is to find all its divisors (excluding itself) and then check if their sum equals the original number.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, sum = 0;
  
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Find the sum of proper divisors
      for (int i = 1; i <= num / 2; i++) {
          if (num % i == 0) {
              sum += i;
          }
      }
  
      // Check if the number is a Perfect Number
      if (sum == num && num != 0) {
          printf("%d is a perfect number.\n", num);
      } else {
          printf("%d is not a perfect number.\n", num);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20113,
    chapterId: 20111,
    title: "5. Sum of the first N natural numbers",
    content: `
  ### Explanation:
  The sum of the first \(N\) natural numbers can be calculated using the formula:
  \[
  \text{Sum} = \frac{N \times (N + 1)}{2}
  \]
  For example:
  - The sum of the first 5 natural numbers is \(1 + 2 + 3 + 4 + 5 = 15\).
  - The sum of the first 10 natural numbers is \(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55\).
  
  This formula provides an efficient way to calculate the sum without having to manually add each number up to \(N\).
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int N;
      long sum;
  
      printf("Enter the value of N: ");
      scanf("%d", &N);
  
      // Calculate the sum using the formula
      sum = N * (N + 1) / 2;
  
      printf("The sum of the first %d natural numbers is: %ld\n", N, sum);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20114,
    chapterId: 20111,
    title: "6. Find the Sum of an Arithmetic Progression Series",
    content: `
  ### Explanation:
  An **Arithmetic Progression (AP)** is a sequence of numbers in which the difference between consecutive terms is constant. The sum of the first \(N\) terms of an AP can be calculated using the formula:
  \[
  \text{Sum} = \frac{N}{2} \times (2a + (N-1) \times d)
  \]
  where:
  - \(a\) is the first term of the AP.
  - \(d\) is the common difference.
  - \(N\) is the number of terms.
  
  For example:
  - For an AP with the first term \`2\`, common difference \`3\`, and \(N = 5\):
    \[
    \text{Sum} = \frac{5}{2} \times (2 \times 2 + (5-1) \times 3) = \frac{5}{2} \times (4 + 12) = \frac{5}{2} \times 16 = 40
    \]
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int a, d, N;
      long sum;
  
      printf("Enter the first term (a): ");
      scanf("%d", &a);
  
      printf("Enter the common difference (d): ");
      scanf("%d", &d);
  
      printf("Enter the number of terms (N): ");
      scanf("%d", &N);
  
      // Calculate the sum using the formula
      sum = N / 2 * (2 * a + (N - 1) * d);
  
      printf("The sum of the first %d terms of the AP is: %ld\n", N, sum);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20115,
    chapterId: 20111,
    title: "7. Program to find the Sum of a Geometric Progression Series",
    content: `
  ### Explanation:
  A **Geometric Progression (GP)** is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio. The sum of the first \(N\) terms of a GP can be calculated using the formula:
  \[
  \text{Sum} = a \times \frac{(1 - r^N)}{(1 - r)}
  \]
  where:
  - \(a\) is the first term of the GP.
  - \(r\) is the common ratio.
  - \(N\) is the number of terms.
  
  For example:
  - For a GP with the first term \`2\`, common ratio \`3\`, and \(N = 5\):
    \[
    \text{Sum} = 2 \times \frac{(1 - 3^5)}{(1 - 3)} = 2 \times \frac{(-242)}{(-2)} = 242
    \]
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int a, r, N;
      long sum;
  
      printf("Enter the first term (a): ");
      scanf("%d", &a);
  
      printf("Enter the common ratio (r): ");
      scanf("%d", &r);
  
      printf("Enter the number of terms (N): ");
      scanf("%d", &N);
  
      // Calculate the sum using the formula
      sum = a * (1 - pow(r, N)) / (1 - r);
  
      printf("The sum of the first %d terms of the GP is: %ld\n", N, sum);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20116,
    chapterId: 20111,
    title: "8. Greatest of three numbers",
    content: `
  ### Explanation:
  To find the greatest of three numbers, we need to compare each number and determine which one is larger. This can be done using simple conditional statements. Given three numbers, \(a\), \(b\), and \(c\):
  1. If \(a\) is greater than \(b\) and \(a\) is also greater than \(c\), then \(a\) is the largest.
  2. If \(b\) is greater than \(a\) and \(b\) is also greater than \(c\), then \(b\) is the largest.
  3. If both \(a\) and \(b\) are smaller than \(c\), then \(c\) is the largest.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int a, b, c;
  
      printf("Enter three numbers: ");
      scanf("%d %d %d", &a, &b, &c);
  
      // Determine the largest number
      if (a > b && a > c) {
          printf("%d is the greatest.\n", a);
      } else if (b > a && b > c) {
          printf("%d is the greatest.\n", b);
      } else {
          printf("%d is the greatest.\n", c);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20117,
    chapterId: 20111,
    title: "9. Leap Year or Not",
    content: `
  ### Explanation:
  A **leap year** is a year that is exactly divisible by 4, except for end-of-century years which need to be divisible by 400 to be considered leap years. This means:
  1. **Common leap year**: Divisible by 4 but not 100 (e.g., 2004, 2008).
  2. **End-of-century leap year**: Divisible by 400 (e.g., 2000).
  
  For example:
  - The year 2000 is a leap year because it is divisible by 400.
  - The year 1900 is not a leap year because it is divisible by 100 but not 400.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int year;
  
      printf("Enter a year: ");
      scanf("%d", &year);
  
      // Check if the year is a leap year
      if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
          printf("%d is a leap year.\n", year);
      } else {
          printf("%d is not a leap year.\n", year);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20118,
    chapterId: 20111,
    title: "10. Reverse the Digits of a Number",
    content: `
  ### Explanation:
  To reverse the digits of a number:
  1. Extract each digit from the number starting from the last digit using the modulus operator (\`%\`).
  2. Build the reversed number by multiplying the current reversed number by 10 and adding the extracted digit.
  3. Repeat until the number becomes zero.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, reversed = 0, remainder;
  
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Reverse the number
      while (num != 0) {
          remainder = num % 10;        // Extract the last digit
          reversed = reversed * 10 + remainder; // Build the reversed number
          num /= 10;                  // Remove the last digit
      }
  
      printf("The reversed number is: %d\n", reversed);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20119,
    chapterId: 20111,
    title: "11. Find the Maximum and Minimum Digit in a Number",
    content: `
  ### Explanation:
  To find the maximum and minimum digit in a number:
  1. Extract each digit using the modulus operator (\`%\`) and integer division (\`/\`).
  2. Compare the digit with the current max and min values, updating them as needed.
  3. Continue until all digits are processed.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, digit, max = 0, min = 9;
  
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Handle negative numbers
      if (num < 0) {
          num = -num;
      }
  
      // Find maximum and minimum digits
      while (num > 0) {
          digit = num % 10; // Get the last digit
          if (digit > max) {
              max = digit; // Update max
          }
          if (digit < min) {
              min = digit; // Update min
          }
          num /= 10; // Remove the last digit
      }
  
      printf("Maximum digit: %d\n", max);
      printf("Minimum digit: %d\n", min);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20120,
    chapterId: 20111,
    title: "12. Print Fibonacci Series up to the Nth Term",
    content: `
  ### Explanation:
  The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones. It starts with 0 and 1, and the next number is the sum of the previous two. For example, the first few numbers in the Fibonacci series are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  void printFibonacci(int n) {
      int a = 0, b = 1, next;
      printf("Fibonacci Series up to %d terms: ", n);
  
      for (int i = 1; i <= n; ++i) {
          printf("%d ", a);
          next = a + b;
          a = b;
          b = next;
      }
      printf("\n");
  }
  
  int main() {
      int num;
  
      // Input the number of terms
      printf("Enter the number of terms: ");
      scanf("%d", &num);
  
      // Print Fibonacci series
      printFibonacci(num);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20121,
    chapterId: 20117,
    title: "13. Factorial of a Number",
    content: `
  ### Explanation:
  The factorial of a number \( n \) (denoted as \( n! \)) is the product of all positive integers up to \( n \). For example, the factorial of 5 is \( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  long int factorial(int n) {
      if (n < 0) {
          printf("Factorial is not defined for negative numbers.\n");
          return 0;
      }
      
      long int fact = 1;
      for (int i = 1; i <= n; i++) {
          fact *= i;
      }
      return fact;
  }
  
  int main() {
      int num;
      
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
      
      // Compute factorial
      if (num == 0) {
          printf("Factorial of %d is: 1\n", num); // Special case for 0
      } else {
          printf("Factorial of %d is: %ld\n", num, factorial(num));
      }
      
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20122,
    chapterId: 20111,
    title: "14. Find the Factors of a Given Number",
    content: `
  ### Explanation:
  This program finds all the factors of a given number. A factor of a number is any number that divides the given number without leaving a remainder.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  void findFactors(int n) {
      printf("Factors of %d are: ", n);
  
      for (int i = 1; i <= n; i++) {
          if (n % i == 0) {
              printf("%d ", i);
          }
      }
      printf("\n");
  }
  
  int main() {
      int num;
  
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Find and print factors
      findFactors(num);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20123,
    chapterId: 20111,
    title: "15. Print All Prime Factors of the Given Number",
    content: `
  ### Explanation:
  This program finds and prints all the prime factors of a given number. A prime factor is a factor that is a prime number. For example, the prime factors of 60 are 2, 3, and 5.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  void printPrimeFactors(int n) {
      // Print the number of 2s that divide n
      while (n % 2 == 0) {
          printf("%d ", 2);
          n /= 2;
      }
  
      // n must be odd at this point, so we can skip even numbers
      for (int i = 3; i * i <= n; i += 2) {
          // While i divides n, print i and divide n
          while (n % i == 0) {
              printf("%d ", i);
              n /= i;
          }
      }
  
      // If n is a prime number greater than 2
      if (n > 2) {
          printf("%d ", n);
      }
  }
  
  int main() {
      int num;
  
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Print prime factors
      printf("Prime factors of %d are: ", num);
      printPrimeFactors(num);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20124,
    chapterId: 20111,
    title: "16. Check if a Number is a Strong Number",
    content: `
  ### Explanation:
  A Strong Number is a number in which the sum of the factorials of its digits is equal to the number itself. For instance, the number 145 is a strong number because \`1! + 4! + 5! = 145\`.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int factorial(int n) {
      int fact = 1;
      for (int i = 1; i <= n; i++) {
          fact *= i;
      }
      return fact;
  }
  
  int main() {
      int num, original, sum = 0, remainder;
  
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
  
      original = num;
  
      // Calculate the sum of factorials of digits
      while (num > 0) {
          remainder = num % 10;
          sum += factorial(remainder);
          num /= 10;
      }
  
      // Check if the number is a Strong Number
      if (sum == original) {
          printf("%d is a Strong Number.\n", original);
      } else {
          printf("%d is not a Strong Number.\n", original);
      }
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20125,
    chapterId: 20111,
    title: "17. GCD (Greatest Common Divisor) of Two Numbers",
    content: `
  ### Explanation:
  This program computes the Greatest Common Divisor (GCD) of two numbers. The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int gcd(int a, int b) {
      while (b != 0) {
          int temp = b;
          b = a % b;
          a = temp;
      }
      return a;
  }
  
  int main() {
      int num1, num2, gcd_result;
  
      // Input two numbers
      printf("Enter the first number: ");
      scanf("%d", &num1);
      printf("Enter the second number: ");
      scanf("%d", &num2);
  
      // Calculate GCD
      gcd_result = gcd(num1, num2);
  
      // Output the result
      printf("The GCD of %d and %d is: %d\n", num1, num2, gcd_result);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20126,
    chapterId: 20111,
    title: "18. LCM (Least Common Multiple) of Two Numbers",
    content: `
  ### Explanation:
  The program calculates the Least Common Multiple (LCM) of two numbers. The LCM of two integers is the smallest positive integer that is divisible by both numbers.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num1, num2, max, lcm;
  
      // Input two numbers
      printf("Enter the first number: ");
      scanf("%d", &num1);
      printf("Enter the second number: ");
      scanf("%d", &num2);
  
      // Determine the greater of the two numbers
      max = (num1 > num2) ? num1 : num2;
  
      // Find LCM by checking divisibility starting from the larger number
      while (1) {
          if (max % num1 == 0 && max % num2 == 0) {
              lcm = max;
              break;
          }
          max++;
      }
  
      // Output the result
      printf("The LCM of %d and %d is: %d\n", num1, num2, lcm);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20127,
    chapterId: 20111,
    title: "19. Sum of Digits of a Number",
    content: `
  ### Explanation:
  This program calculates the sum of all digits of a given number by repeatedly extracting the last digit and adding it to a running total.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, sum = 0, digit;
  
      // Input the number
      printf("Enter a number: ");
      scanf("%d", &num);
  
      // Handle negative numbers
      if (num < 0) {
          num = -num;
      }
  
      // Calculate the sum of digits
      while (num > 0) {
          digit = num % 10;  // Extract the last digit
          sum += digit;      // Add the digit to the sum
          num /= 10;         // Remove the last digit
      }
  
      // Output the result
      printf("The sum of the digits is: %d\n", sum);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20128,
    chapterId: 20111,
    title: "20. Sum of Numbers in the Given Range",
    content: `
  ### Explanation:
  This program calculates the sum of all integers within a specified range \`[start, end]\`, including both boundaries. It handles cases where \`start > end\` by swapping the values to ensure a valid range.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int start, end, sum = 0;
  
      // Input the range
      printf("Enter the starting number: ");
      scanf("%d", &start);
      printf("Enter the ending number: ");
      scanf("%d", &end);
  
      // Ensure start is less than or equal to end
      if (start > end) {
          int temp = start;
          start = end;
          end = temp;
      }
  
      // Calculate the sum of numbers in the range
      for (int i = start; i <= end; i++) {
          sum += i;
      }
  
      // Output the result
      printf("The sum of numbers from %d to %d is: %d\n", start, end, sum);
  
      return 0;
  }
  \`\`\`
  `,
  },
  {
    id: 20129,
    chapterId: 20111,
    title: "21. Replace all 0s with 1s in a Given Integer",
    content: `
  ### Explanation:
  This program replaces every occurrence of the digit \`0\` in a given integer with the digit \`1\`. The algorithm processes each digit of the number, reconstructs the modified number, and handles both positive and negative inputs.
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  
  int main() {
      int num, digit, result = 0, place = 1;
  
      // Input the number
      printf("Enter an integer: ");
      scanf("%d", &num);
  
      // Handle negative numbers
      int isNegative = 0;
      if (num < 0) {
          isNegative = 1;
          num = -num;
      }
  
      // Process each digit and replace 0 with 1
      while (num > 0) {
          digit = num % 10; // Extract the last digit
          if (digit == 0) {
              digit = 1; // Replace 0 with 1
          }
          result += digit * place; // Rebuild the number
          place *= 10; // Move to the next digit place
          num /= 10; // Remove the last digit
      }
  
      // Handle the case where the input is 0
      if (result == 0) {
          result = 1;
      }
  
      // Restore the negative sign if necessary
      if (isNegative) {
          result = -result;
      }
  
      // Output the result
      printf("The modified number is: %d\n", result);
  
      return 0;
  }
  \`\`\`
  
  ### Key Points:
  1. **Digit Replacement**: Replaces all occurrences of \`0\` with \`1\`.
  2. **Negative Numbers**: Handles negative integers by preserving their sign.
  3. **Edge Case**: Handles the special case where the input is \`0\` and outputs \`1\`.
  4. **Efficient Logic**: Processes the number digit by digit and reconstructs the result.
  
  ---
  `,
  },
  {
    id: 20130,
    chapterId: 20111,
    title: "22. Calculate the Area of a Circle",
    content: `
  ### Explanation:
  The area of a circle is calculated using the formula:
  
  \`\`\`
  Area = π * r²
  \`\`\`
  
  Where:
  - \`r\` is the radius of the circle.
  - \`π\` is a mathematical constant (approximately 3.14159 or use \`M_PI\` from the math library in C).
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  #define PI 3.14159
  
  int main() {
      float radius, area;
  
      // Input the radius
      printf("Enter the radius of the circle: ");
      scanf("%f", &radius);
  
      if (radius < 0) {
          printf("Radius cannot be negative.\n");
          return 0;
      }
  
      // Calculate the area
      area = PI * radius * radius;
  
      // Output the area
      printf("The area of the circle with radius %.2f is %.2f\n", radius, area);
  
      return 0;
  }
  \`\`\`
  
  ### Key Points:
  1. **Formula**: Uses the formula \`Area = π * r²\`.
  2. **Input Validation**: Includes a check to ensure the radius is not negative.
  3. **Precision**: Outputs the result with two decimal places for clarity.
  
  ---
  `,
  },
  {
    id: 20131,
    chapterId: 20111,
    title: "23. Program to Find the Roots of a Quadratic Equation",
    content: `
  ### Explanation:
  A quadratic equation is of the form:
  
  \`\`\`
  ax² + bx + c = 0
  \`\`\`
  
  The roots of the equation can be calculated using the **quadratic formula**:
  
  \`\`\`
  x = (-b ± sqrt(b² - 4ac)) / 2a
  \`\`\`
  
  The discriminant (\`D\`) determines the nature of the roots:
  1. **D > 0**: Two distinct real roots.
  2. **D == 0**: One real root (repeated root).
  3. **D < 0**: No real roots (complex roots).
  
  ---
  
  ### Solution in C:
  \`\`\`c
  #include <stdio.h>
  #include <math.h>
  
  int main() {
      float a, b, c, discriminant, root1, root2, realPart, imagPart;
  
      // Input coefficients
      printf("Enter coefficients a, b, and c: ");
      scanf("%f %f %f", &a, &b, &c);
  
      // Check if it's a quadratic equation
      if (a == 0) {
          printf("This is not a quadratic equation.\n");
          return 0;
      }
  
      // Calculate the discriminant
      discriminant = b * b - 4 * a * c;
  
      if (discriminant > 0) {
          // Two distinct real roots
          root1 = (-b + sqrt(discriminant)) / (2 * a);
          root2 = (-b - sqrt(discriminant)) / (2 * a);
          printf("Roots are real and distinct: %.2f and %.2f\n", root1, root2);
      } else if (discriminant == 0) {
          // One real root
          root1 = -b / (2 * a);
          printf("Root is real and repeated: %.2f\n", root1);
      } else {
          // Complex roots
          realPart = -b / (2 * a);
          imagPart = sqrt(-discriminant) / (2 * a);
          printf("Roots are complex: %.2f + %.2fi and %.2f - %.2fi\n", realPart, imagPart, realPart, imagPart);
      }
  
      return 0;
  }
  \`\`\`
  
  ### Key Points to Remember:
  1. **Input Validation**: Ensure \`a\` is not zero to confirm it is a quadratic equation.
  2. **Discriminant Check**: Use the discriminant to determine the nature of the roots.
  3. **Math Library**: Include \`<math.h>\` to use \`sqrt()\`.
  
  ---
  `,
  },
  // Coding Practice with Strings

{id: 20132, chapterId: 20112, title: "24. Check if a given string is a palindrome or not"},
{id: 20133, chapterId: 20112, title: "25. Count number of vowels, consonants, spaces in String"},
{id: 20134, chapterId: 20112, title: "26. Find the ASCII value of a character"},
{id: 20135, chapterId: 20112, title: "27. Remove all vowels from the string"},
{id: 20136, chapterId: 20112, title: "28. Remove spaces from a string"},
{id: 20137, chapterId: 20112, title: "29. Remove characters from a string except alphabets"},
{id: 20138, chapterId: 20112, title: "30. Reverse a String"},
{id: 20139, chapterId: 20112, title: "31. Sum of the numbers in a String"},
{id: 20140, chapterId: 20112, title: "32. Capitalize first and last character of each word"},
{id: 20141, chapterId: 20112, title: "33. Calculate frequency of characters in a string"},
{id: 20142, chapterId: 20112, title: "34. Find Non-repeating characters of a String"},
{id: 20143, chapterId: 20112, title: "35. Count common sub-sequence in two strings"},
{id: 20144, chapterId: 20112, title: "36. Return maximum occurring character in the input string"},
{id: 20145, chapterId: 20112, title: "37. Remove all duplicates from the input string"},
{id: 20146, chapterId: 20112, title: "38. Print all the duplicates in the input string"},
{id: 20147, chapterId: 20112, title: "39. Remove characters from first string present in the second string"},
{id: 20148, chapterId: 20112, title: "40. Write a program to find the largest word in a given string."},
{id: 20149, chapterId: 20112, title: "41. Write a program to sort characters in a string"},
{id: 20150, chapterId: 20112, title: "42. Count number of words in a given string"},
{id: 20151, chapterId: 20112, title: "43. In a given string which has the highest number of repeated letters"},
{id: 20152, chapterId: 20112, title: "44. Change case of each character in a string"},
{id: 20153, chapterId: 20112, title: "45. Concatenate one string to another"},
{id: 20154,chapterId:  20112,  title: "46. Find a substring within a string. If found, display its starting position",},
{id: 20155, chapterId: 20112, title: "47. Reverse words in a string"},

// Coding Practice with Arrays

{id: 20156, chapterId: 20113, title: "48. Find the smallest number in an array"},
{id: 20157, chapterId: 20113, title: "49. Find the largest number in an array"},
{id: 20158, chapterId: 20113, title: "50. Find the second smallest and second largest element in an array"},
{id: 20159, chapterId: 20113, title: "51. Reverse a given array"},
{id: 20160, chapterId: 20113, title: "52. Count frequency of each element in an array"},
{id: 20161, chapterId: 20113, title: "53. Rearrange array in increasing-decreasing order"},
{id: 20162, chapterId: 20113, title: "54. Calculate sum of the elements of the array"},
{id: 20163, chapterId: 20113, title: "55. Rotate array by K elements"},
{id: 20164, chapterId: 20113, title: "56. Average of all elements in an array"},
{id: 20165, chapterId: 20113, title: "57. Find the median of the given array"},
{id: 20166, chapterId: 20113, title: "58. Remove duplicates from a sorted array"},
{id: 20167, chapterId: 20113, title: "59. Remove duplicates from an unsorted array"},
{id: 20168, chapterId: 20113, title: "60. Add an element to an array"},
{id: 20169, chapterId: 20113, title: "61. Find all repeating elements in an array"},
{id: 20170, chapterId: 20113, title: "62. Find all non-repeating elements in an array"},
{id: 20171, chapterId: 20113, title: "63. Find all symmetric pairs in an array"},
{id: 20172, chapterId: 20113, title: "64. Maximum product subarray in an array"},
{id: 20173, chapterId: 20113, title: "65. Sorting elements of an array by frequency"},
{id: 20174, chapterId: 20113, title: "66. Rotation of elements of array - left and right"},
{id: 20175, chapterId: 20113, title: "67. Finding Circular rotation of an array by K positions"},
{id: 20176, chapterId: 20113, title: "68. Sort an array according to the order defined by another array"},
{id: 20177, chapterId: 20113, title: "69. Search an element in an array (linear search, binary search)"},
{id: 20179, chapterId: 20113, title: "70. Delete an element from an array"},
{id: 20180, chapterId: 20113, title: "71. Sum of sub-array with zero sum"},
];

