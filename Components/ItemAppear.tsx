import { useEffect, ReactNode, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

//component that wraps around the item and animates it
const ItemAppear = ({
  children,
  variants,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  variants: any;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ItemAppear;
