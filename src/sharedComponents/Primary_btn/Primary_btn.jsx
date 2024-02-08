"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

const initialValue = {
  flexDirection: "row",
  opacity: 1,
  paddingLeft: 0,
};
const hoverValue = {
  flexDirection: "row-reverse",
  opacity: [0, 0.5, 1],
  paddingLeft: 5,
};
const btnInitialValue = {
  backGroundPosition: "100% 0",
};
const btnHoverValue = {
  backgroundPosition: "102% 0",
};
export default function PrimaryBtn({text, type, arrow, class_name = ""}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      className={" w-full primary_btn " + class_name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={!hover ? btnInitialValue : btnHoverValue}
      animate={hover ? btnHoverValue : btnInitialValue}
      type={type}
      transition={{duration: 0.3}}
    >
      <motion.div
        initial={!hover ? initialValue : hoverValue}
        animate={hover ? hoverValue : initialValue}
        className="gap-1 centerd"
      >
        {text}
        {arrow && <FaArrowRight/>}
      </motion.div>
    </motion.button>
  );
}
