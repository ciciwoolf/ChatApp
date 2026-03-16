import React, { useEffect, useState } from 'react';
import { Text, TextStyle } from 'react-native';

interface TypingEffectProps {
  text: string;
  style?: TextStyle;
  speed?: number; // milliseconds per character
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, style, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={style}>{displayedText}</Text>;
};

export default TypingEffect;
