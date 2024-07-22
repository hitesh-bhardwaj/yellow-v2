// import React, { useEffect, useState } from 'react';
// import Footer from "../Footer";
// import Header from "../Header";

// import { motion, AnimatePresence } from 'framer-motion';
// import { useLenis } from "lenis/react";

// const Layout = ({ children, className = "" }) => {
//   const [isAnimating, setIsAnimating] = useState(true);
//   const [open, setOpen] = useState(true);
//   const lenis = useLenis();

//   useEffect(() => {
  
//     if (lenis) {
//       lenis.stop();

//       const animationTimer = setTimeout(() => {
//         setIsAnimating(false);
        
//       }, 2000); 

  
//       const restartTimer = setTimeout(() => {
//         lenis.start();
//         setOpen(false);
//       }, 3000); 

//       return () => {
//         clearTimeout(animationTimer);
//         clearTimeout(restartTimer);
//         if (lenis) lenis.start(); 
//       };
//     }
//   }, [lenis]);

//   const pageVariants = {
//     initial: { 
//       clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
//       height: 'auto'
//     },
//     animate: { 
//       clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
//       height: 'auto'
//     },
//     exit: { 
//       clipPath: 'polygon(10% 10%, 10% 90%, 90% 90%, 90% 10%)',
//       height: '100vh'
//     }
//   };

//   return (
//     <>
      
//       <AnimatePresence>
//         <motion.div
//           key="page"
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={pageVariants}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//         >
//           <Header />
//           <main className={className}>
//             {children}
//           </main>
//           <Footer />
//         </motion.div>
//       </AnimatePresence>
      
//     </>
//   );
// };

// export default Layout;
