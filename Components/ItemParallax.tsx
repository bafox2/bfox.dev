import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useTransform,
  useSpring,
  motion,
  useScroll,
  useViewportScroll,
} from "framer-motion";

const calculateMinHeight = (height: number, range: number) => {
  return height + height * range;
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
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [minHeight, setMinHeight] = useState("auto");
  const [elementTop, setElementTop] = useState(0);
  console.log(elementTop, "elementTop");
  const springConfig = {
    damping: damping,
    stiffness: stiffness,
    mass: mass,
    // mass: rand(1, 3)
  };

  useLayoutEffect(() => {
    if (!ref.current) return;
    const onResize = () => {
      setElementTop(ref.current!.offsetTop);
      setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
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

  console.log("elementTop", elementTop);

  return (
    <div style={{ minHeight }} className={className}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
