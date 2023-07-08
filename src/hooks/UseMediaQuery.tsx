import { useEffect, useState } from "react";

const useMediaQuery = () => {
   const [isDesktop, setIsDesktop] = useState(true);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkSize = () => {
         const size = window.innerWidth;
         if (window.innerWidth > 768) {
            setIsDesktop(true);
            setIsMobile(false);
         } else {
            setIsDesktop(false);
            setIsMobile(true);
         }
      };
      checkSize();
      window.addEventListener("resize", checkSize);
      return () => window.removeEventListener("resize", checkSize);
   }, []);

   return { isDesktop, isMobile };
};

export default useMediaQuery;
