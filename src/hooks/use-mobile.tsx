
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with a default value based on current window width
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      
      // Add mobile-device class immediately if on mobile
      if (mobile) {
        document.body.classList.add('mobile-device');
      }
      
      return mobile;
    }
    return false;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
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
