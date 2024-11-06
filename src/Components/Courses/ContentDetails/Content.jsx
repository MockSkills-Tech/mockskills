/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './Content.module.css';

const Content = ({ id }) => {
    const [copied, setCopied] = useState({});

    const markdownContent = `
# HTML Interview Questions with Code Examples

#### 1. What is the purpose of the &lt;div&gt; tag in HTML?
The __&lt;div&gt;__ tag is a container element used to group HTML elements together. It's often used for styling and layout.

\`\`\`
<div class="container">
  <p>This is a paragraph inside a div.</p>
</div>
\`\`\`

## 2. What is the &lt;span&gt; tag used for ?
The __&lt;span&gt;__ tag is an inline container for text. It's commonly used for styling specific portions of text within a block.

\`\`\`
<p>This is a <span style="color: blue;">blue</span> word.</p>
\`\`\`

## 3. What are semantic tags in HTML? Give examples.
Semantic tags like __&lt;header&gt;__, __&lt;footer&gt;__, __&lt;article&gt;__, and __&lt;section&gt;__ clearly describe their purpose, improving readability and accessibility.

\`\`\`
<article>
  <h2>Article Title</h2>
  <p>This is the article content.</p>
</article>
\`\`\`

## 4. How does the &lt;a&gt; tag work for hyperlinks?
The __&lt;a&gt;__ tag creates hyperlinks, connecting to another webpage or file.

\`\`\`
<a href="https://www.example.com" target="_blank">Visit Example</a>
\`\`\`

## 5. How can we create an ordered list and an unordered list in HTML?
An ordered list (__&lt;ol&gt;__) numbers items, while an unordered list (__&lt;ul&gt;__) uses bullets.

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

## 6. What’s the purpose of the \`<table>\` tag? Give a simple example.
The \`<table>\` tag organizes data in rows and columns.

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

## 7. How do you embed an image using the \`<img>\` tag?
The \`<img>\` tag embeds an image, with attributes for the source (\`src\`) and alternate text (\`alt\`).

\`\`\`html
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
\`\`\`

## 8. What is the \`<form>\` tag used for in HTML?
The \`<form>\` tag is used to collect user input, which can be submitted to a server.

\`\`\`html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
\`\`\`

## 9. Explain the \`<input>\` tag with examples of different types.
The \`<input>\` tag collects user input, with types like \`text\`, \`password\`, and \`checkbox\`.

\`\`\`html
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<input type="checkbox" checked> Subscribe to newsletter
\`\`\`

## 10. How do you create a dropdown menu with the \`<select>\` tag?
The \`<select>\` tag creates a dropdown, with \`<option>\` elements for each choice.

\`\`\`html
<select name="options">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
\`\`\`

## 11. How do you make text bold or italic in HTML?
Use \`<b>\` or \`<strong>\` for bold text and \`<i>\` or \`<em>\` for italic text.

\`\`\`html
<p>This is <b>bold</b> and <i>italic</i> text.</p>
\`\`\`

## 12. How can you use the \`<button>\` tag for interactions?
The \`<button>\` tag triggers actions on click, often used in forms or for navigation.

\`\`\`html
<button onclick="alert('Button clicked!')">Click Me</button>
\`\`\`

## 13. What does the \`<blockquote>\` tag do?
The \`<blockquote>\` tag is used for longer quotes or citations.

\`\`\`html
<blockquote>
  "This is a blockquote example."
</blockquote>
\`\`\`

## 14. Explain the \`<header>\` and \`<footer>\` tags.
The \`<header>\` contains introductory content, while the \`<footer>\` has end-of-page info.

\`\`\`html
<header>
  <h1>Website Title</h1>
</header>
<footer>
  <p>Contact us at info@example.com</p>
</footer>
\`\`\`

## 15. How can you use the \`<iframe>\` tag?
The \`<iframe>\` tag embeds another webpage or video within a page.

\`\`\`html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
\`\`\`

## 16. How do you use the \`<audio>\` and \`<video>\` tags?
These tags embed audio and video, with attributes like \`controls\` for playback controls.

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

## 17. What is the purpose of the \`<label>\` tag?
The \`<label>\` tag connects a label to an input, enhancing accessibility.

\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username">
\`\`\`

## 18. How can you use the \`<meta>\` tag in HTML?
The \`<meta>\` tag stores metadata, like charset and viewport settings.

\`\`\`html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## 19. What’s the difference between \`<section>\` and \`<div>\`?
\`<section>\` is semantic, indicating a section of related content, while \`<div>\` is a general container.

\`\`\`html
<section>
  <h2>Section Heading</h2>
  <p>Section content goes here.</p>
</section>
\`\`\`

## 20. What is the \`<nav>\` tag used for in HTML?
The \`<nav>\` tag contains navigation links.

\`\`\`html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
\`\`\`
`;
    // Function to handle copying and showing feedback for a specific code block
    const handleCopy = (index) => {
        setCopied((prevState) => ({ ...prevState, [index]: true }));
        setTimeout(() => setCopied((prevState) => ({ ...prevState, [index]: false })), 2000); // Reset after 2 seconds
    };

    // Custom renderer to add Copy button
    const CodeBlock = ({ node, inline, className, children, ...props }) => {
        const code = String(children).trim();
        const index = node.position.start.line; // Unique identifier (based on line number of the code block)

        return (
            <div className="relative mb-4">
                <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto">
                    <code className={className} {...props}>
                        {code}
                    </code>
                </pre>
                <CopyToClipboard text={code} onCopy={() => handleCopy(index)}>
                    <button className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                        {copied[index] ? 'Copied!' : 'Copy'}
                    </button>
                </CopyToClipboard>
            </div>
        );
    };

    return (
        <div className="flex-1 w-[900px] p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Content Section</h2>
            <p className="text-lg mb-4">
                Content ID: <span className="font-semibold text-blue-600">{id}</span>
            </p>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-600">
                <ReactMarkdown
                    children={markdownContent}
                    components={{ code: CodeBlock }}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    className={styles.markdownContent}
                />
            </div>
        </div>
    );
};

export default Content;
