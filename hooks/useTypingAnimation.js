import { useEffect, useState } from 'react';

function useTypingAnimation(debug = null) {
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

  useEffect(() => {
      if (debug !== null) {
        setShouldPlayAnimation(debug);
        return;
      }

    const hasPlayed = localStorage.getItem('hasPlayedTypingAnimation');
    if (!hasPlayed) {
      setShouldPlayAnimation(true);
      localStorage.setItem('hasPlayedTypingAnimation', 'true');
    }
  }, [debug]);

  return shouldPlayAnimation;
}

export default useTypingAnimation;