import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const TitleWrapper = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const CodeText = styled.div`
  display: block;
  font-family: 'Poppins', 'Fira Code', 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 3rem);
  line-height: 1.3;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: clamp(1.9rem, 6vw, 2.5rem);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Bracket = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.6ch;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${blink} 1s steps(2, start) infinite;
  margin-left: 0.15em;
`;

const TypingText = ({ text = '', delay = 0, speed = 30, tag: Tag = 'span' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let startTimeout;
    let typingTimeout;

    const target = typeof text === 'string' ? text : String(text ?? '');

    if (!target.length) {
      setDisplayText('');
      setIsTyping(false);
      return undefined;
    }

    const begin = () => {
      setIsTyping(true);
      let index = 0;

      const typeNext = () => {
        index += 1;
        setDisplayText(target.slice(0, index));

        if (index < target.length) {
          typingTimeout = setTimeout(typeNext, Math.max(speed, 10));
        } else {
          setIsTyping(false);
        }
      };

      typeNext();
    };

    startTimeout = setTimeout(begin, Math.max(delay, 0));

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(typingTimeout);
    };
  }, [text, delay, speed]);

  return (
    <Tag>
      {displayText}
      {isTyping && <Cursor aria-hidden="true">|</Cursor>}
    </Tag>
  );
};

const SectionTitle = ({ children, delay = 0, speed = 30, showBrackets = true, className, ...rest }) => (
  <TitleWrapper
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: delay / 1000 }}
    {...rest}
  >
    <CodeText>
      {showBrackets && <Bracket>{'<'}</Bracket>}
      <TypingText text={children} delay={delay} speed={speed} />
      {showBrackets && <Bracket>{' />'}</Bracket>}
    </CodeText>
  </TitleWrapper>
);

export default SectionTitle;
export { TypingText };
