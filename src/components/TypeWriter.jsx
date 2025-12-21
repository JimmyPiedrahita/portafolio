import { useState, useEffect, memo, useMemo } from 'react';

// TypeWriter component that simulates typing and erasing text
function TypeWriter({ phrases, typingSpeed = 150, erasingSpeed = 50, delayAfterTyping = 2000, delayBeforeErasing = 1000 }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Find the longest phrase to reserve space and prevent CLS
  const longestPhrase = useMemo(() => {
    return phrases.reduce((longest, phrase) => 
      phrase.length > longest.length ? phrase : longest, ''
    );
  }, [phrases]);

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      // Typing mode
      if (currentText.length < phrases[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(phrases[currentIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterTyping);
      }
    } else {
      // Erasing mode
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, erasingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, delayBeforeErasing);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, phrases, typingSpeed, erasingSpeed, delayAfterTyping, delayBeforeErasing]);

  return (
    <span className="typewriter">
      <span className="typewriter-placeholder" aria-hidden="true">{longestPhrase}</span>
      <span className="typewriter-text">{currentText}<span className="cursor">|</span></span>
    </span>
  );
}

export default memo(TypeWriter);
