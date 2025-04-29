
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with a default value based on current window width
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Check for touch support as well as window size
    const hasTouchSupport = 
      typeof window !== 'undefined' && 
      ('ontouchstart' in window || 
      navigator.maxTouchPoints > 0);
    
    const isSmallScreen = 
      typeof window !== 'undefined' && 
      window.innerWidth < MOBILE_BREAKPOINT;
    
    const mobile = hasTouchSupport || isSmallScreen;
    
    // Add mobile-device class immediately if on mobile
    if (mobile && typeof document !== 'undefined') {
      document.body.classList.add('mobile-device');
    }
    
    return mobile;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      // Check for touch support as well as window size
      const hasTouchSupport = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0;
      
      const isSmallScreen = window.innerWidth < MOBILE_BREAKPOINT;
      const mobile = hasTouchSupport || isSmallScreen;
      
      setIsMobile(mobile);
      
      // Add or remove the 'mobile-device' class to the body to help disable custom cursor
      if (mobile) {
        document.body.classList.add('mobile-device');
      } else {
        document.body.classList.remove('mobile-device');
      }
    }
    
    mql.addEventListener("change", onChange)
    
    // Initial check to ensure correct state
    onChange();
    
    return () => mql.removeEventListener("change", onChange)
  }, []);

  return isMobile;
}
