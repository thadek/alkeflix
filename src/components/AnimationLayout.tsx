import { Outlet, useLocation} from 'react-router-dom';
import { motion } from "framer-motion"

const pageVariants = {
    initial: {
     
      transform: "translate(-5px)"
    },
    in: {
      
      transform: "translate(0px)"
    },
    out: {
      
      transform: "translate(10px)"
    }
  };

  const pageTransition = {
    type: 'spring',
    ease: 'linear',
    duration: 1,
    bounce:0.25
  }; 


export const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
     </motion.div>
    
  );
};