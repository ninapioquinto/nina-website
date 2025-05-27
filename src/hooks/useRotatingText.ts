
import { useState, useEffect } from 'react';

export const useRotatingText = (words: string[], interval: number = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayWord, setDisplayWord] = useState(words[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // After fade out, change the word
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setDisplayWord(words[nextIndex]);
      }, 300); // Halfway through animation
      
      // After changing word, fade in
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, currentIndex]);

  return {
    currentWord: displayWord,
    isAnimating,
  };
};
