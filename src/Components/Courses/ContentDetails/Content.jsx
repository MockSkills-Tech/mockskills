/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './Content.module.css';
import { TOPICS } from '../../../Utils/constant';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx'; 
import {useEffect } from 'react'

const Content = ( {id} ) => {
    const [copied, setCopied] = useState({});
    console.log({ id });
    const {title,content } = TOPICS.find((topic) => topic.id === parseInt(id));
    //const { title, content = TOPICS.find((topic) => topic.id == paraseint(id)};
    useEffect(() => {
        Prism.highlightAll();
    }, [content]);
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
            <div className="relative flex">
                <pre className="bg-gray-200  rounded-md overflow-x-auto">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
            
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-600">
                <ReactMarkdown
                    children={content}
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
