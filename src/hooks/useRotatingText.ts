
import { useState, useEffect } from 'react';

export const useRotatingText = (words: string[], interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayWord, setDisplayWord] = useState(words[0]);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // After animation starts, change the word
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setDisplayWord(words[nextIndex]);
        
        // End animation to fade in new word
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 350); // Wait for fade out to complete
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, currentIndex]);

  return {
    currentWord: displayWord,
    isAnimating,
  };
};
