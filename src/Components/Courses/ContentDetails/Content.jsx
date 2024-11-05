/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './Content.module.css';


const Content = ({ id }) => {
    const markdownContent = `
# Main Heading
This example showcases various Markdown features.

## Subheading with a List
- **Bold Item**
- Regular Item
  - Nested Item
  - Another Nested Item

### Another Subheading with Code
Here’s a simple JavaScript code snippet:
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}\`);
}
\`\`\`

> This is a blockquote for emphasizing important text.

### Table Example
| Name       | Age | Occupation     |
|------------|-----|----------------|
| John Doe   | 28  | Software Engineer |
| Jane Smith | 34  | Data Analyst      |

### Link and Image
Visit [OpenAI](https://www.openai.com).

![Sample Image](https://via.placeholder.com/150 "Placeholder Image")
`;

    return (
        <div className="flex-1 p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Content Section</h2>
            <p className="text-lg mb-4">
                Content ID: <span className="font-semibold text-blue-600">{id}</span>
            </p>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-600">
                <ReactMarkdown
                    children={markdownContent}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    className={styles.markdownContent}
                />
            </div>
        </div>
    );
};

export default Content;
