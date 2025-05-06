import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Wavy from '../utils/Wavy';
import Splash from '../utils/Splash';
import Bubble from '../utils/Bubble';
import Float from '../utils/Float';

const modalContainer: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: '0',
}

const writingSection: React.CSSProperties = {
    width: '38%',
    height: '95%',
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    left: '15%',
    top: '2.5%',
    zIndex: '999',
    borderRadius: '10px',
    padding: '0 20px'
}

const titleStyle: React.CSSProperties = {
    width: '100%',
    height: '50px',
    background: 'none',
    color: 'white',
    outline: 'none',
    border: 'none',
    fontSize: 'xx-large',
    margin: '10px 10px'
}

const previewSection: React.CSSProperties = {
    width: '38%',
    height: '95%',
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    left: '57.5%',
    top: '2.5%',
    zIndex: '999',
    borderRadius: '10px',
    padding: '0 20px'
}

const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '80%',
    margin: '5% 1.5%',
    background: 'none',
    color: 'white',
    outline: 'none',
    border: 'none',
    fontSize: 'large',
    resize: 'none'
};

const NewModal: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const parsedContent = content.replace(/<일렁일렁>/g, '<wavy>').replace(/<\/일렁일렁>/g, '</wavy>')
                        .replace(/<첨벙첨벙>/g, '<splash>').replace(/<\/첨벙첨벙>/g, '</splash>')
                        .replace(/<버블버블>/g, '<bubble>').replace(/<\/버블버블>/g, '</bubble>')
                        .replace(/<출렁출렁>/g, '<float>').replace(/<\/출렁출렁>/g, '</float>');

    return (
        <div style={modalContainer}>
            <section style={writingSection}>
                <input type="text" style={titleStyle} placeholder="제목" onChange={handleTitleChange} />
                <hr />
                <textarea style={contentStyle} placeholder="내용을 입력하세요" onChange={handleContentChange} />
            </section>

            <section style={previewSection}>
                <input type="text" style={titleStyle} placeholder="제목" readOnly value={title} />
                <hr />
                <div style={contentStyle}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            wavy: ({ children }: { children: React.ReactNode }) => <Wavy>{children}</Wavy>,
                            splash : ({ children }: { children: React.ReactNode }) => <Splash>{children}</Splash>,
                            bubble : ({ children }: { children: React.ReactNode }) => <Bubble>{children}</Bubble>,
                            float : ({ children }: { children: React.ReactNode }) => <Float>{children}</Float>,
                        } as Record<string, any>}
                    >
                        {parsedContent}
                    </ReactMarkdown>
                </div>
            </section>
        </div >
    )
}

export default NewModal;