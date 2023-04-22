import { useEffect } from 'react';

const useKeyPress = (targetKeys, callback) => {
  useEffect(() => {
    // An object to keep the state of key
    const keysPressed = {};

    // keydown updates state of the key
    const handleKeyDown = (event) => {
      keysPressed[event.key] = true;
      
      if (targetKeys.every(key => keysPressed[key])) {
        callback();
      }
    };

    // key Up
    const handleKeyUp = (event) => {
      keysPressed[event.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Hook cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKeys, callback]);
};

export default useKeyPress;
