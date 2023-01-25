import { Outlet, useLocation} from 'react-router-dom';
import { motion } from "framer-motion"

const pageVariants = {
    initial: {
      opacity:0,
      transform: "translate(-5px)"
    },
    in: {
      opacity:1,
      transform: "translate(0px)"
    },
    out: {
      opacity:1,
      transform: "translate(10px)"
    }
  };

  const pageTransition = {
    type: 'spring',
    ease: 'linear',
    duration: 2,
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