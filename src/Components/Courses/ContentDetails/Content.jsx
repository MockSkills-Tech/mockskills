import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import { TiTick } from "react-icons/ti";
import { MdContentCopy } from "react-icons/md";
import 'prismjs/themes/prism.css';  // Import Prism's CSS for syntax highlighting
import styles from './Content.module.css';  // Your custom styles
import { TOPICS } from '../../../Utils/constant';

const Content = ({ id }) => {
    const [copied, setCopied] = useState({});
    const { title, content } = TOPICS.find((topic) => topic.id === parseInt(id));

    useEffect(() => {
        Prism.highlightAll();  // Ensure Prism highlights the code blocks
    }, [content]);

    const handleCopy = (index) => {
        setCopied((prevState) => ({ ...prevState, [index]: true }));
        setTimeout(() => setCopied((prevState) => ({ ...prevState, [index]: false })), 2000);
    };

    // Custom CodeBlock Component
    const CodeBlock = ({ node, inline, className, children, ...props }) => {
        const code = String(children).trim();
        const index = node.position.start.line;
        useEffect(() => {
            Prism.highlightAll();
        }, [code]);

        return (
            <div className="relative bg-gray-800 text-white rounded-xl">
                <pre className="language-css overflow-x-auto px-3 ">
                    <code className={className} {...props}>
                        {code}
                    </code>
                </pre>
                <CopyToClipboard text={code} onCopy={() => handleCopy(index)}>
                    <button className="absolute top-2 right-2 text-white px-3 py-1 rounded-md text-sm flex items-center justify-center transition duration-200 ease-in-out">
                        {copied[index] ? (
                            <TiTick className="text-white text-2xl" />  // Increases size and maintains color
                        ) : (
                            <MdContentCopy className="text-white text-xl" />  // Increases size and maintains color
                        )}
                    </button>
                </CopyToClipboard>
            </div>
        );
    };

    // Function to render text inside [] with custom color, keeping the brackets
    const processText = (text) => {
        // Replace the text inside [] with colored span, but retain the square brackets
        return text?.replace(/\[([^\]]+)\]/g, (match, p1) => {
            return `[<span style="color: blue;">${p1}</span>]`; // Keep the brackets around the text
        });
    };

    const processedContent = processText(content); // Process the content to highlight text in []

    return (
        <div className="flex-1 w-[900px] p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-600">
                <ReactMarkdown
                    children={processedContent}  // Use processed content with highlighted text
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
