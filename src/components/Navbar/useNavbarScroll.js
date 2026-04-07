import { useEffect, useState } from 'react';

export const useNavbarScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.document.documentElement.scrollTop || window.document.body.scrollTop;
      setIsScrolled(scrollTop >= 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled };
};

