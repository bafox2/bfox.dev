import React, { useRef, useState, useLayoutEffect } from "react";
import { useTransform, useSpring, motion, useScroll } from "framer-motion";

const calculateMinHeight = (height: number, range: number) => {
  //here is where I changed it
  return height;
};

export default function ParallaxItem({
  children,
  className,
  topOffset = -100,
  bottomOffset = 100,
  range = 1.5,
  damping = 50,
  stiffness = 250,
  mass = 1,
}: {
  children: React.ReactNode;
  className?: string;
  topOffset?: number;
  bottomOffset?: number;
  range?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
}) {
  const { scrollY } = useScroll();
  const ref = useRef();
  const [minHeight, setMinHeight] = useState<string | number>("auto");
  const [elementTop, setElementTop] = useState(0);
  const springConfig = {
    damping: damping,
    stiffness: stiffness,
    mass: mass,
    // mass: rand(1, 3)
  };

  useLayoutEffect(() => {
    if (!ref.current) return;
    console.log(`ref.current`, ref.current);
    console.log(ref.current.offsetHeight, "offsetHeight");
    const onResize = () => {
      setElementTop(ref.current!.offsetTop);
      setMinHeight(calculateMinHeight(ref.current!.offsetHeight, range));
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref, range]);

  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop + topOffset, elementTop + bottomOffset],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ y, minHeight }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
