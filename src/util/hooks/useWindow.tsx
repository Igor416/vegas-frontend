import { useState, useEffect } from "react";

export function useWindow() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1200px)').matches)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1200px)').matches)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return isMobile
}