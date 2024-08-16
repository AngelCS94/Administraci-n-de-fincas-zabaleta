import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'; // Solo para pruebas

const BlogPost = ({ gistUrl }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(PROXY_URL + gistUrl) // Usa el proxy si es necesario
      .then(response => response.text())
      .then(data => setContent(data))
      .catch(error => console.error('Error fetching gist:', error)); // Manejo de errores
  }, [gistUrl]);

  return (
    <div className="blog-post">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </div>
  );
};

export default BlogPost;
