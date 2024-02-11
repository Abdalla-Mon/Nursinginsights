"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
  backgroundColor: "#2f57ef",
};
const btnHoverValue = {
  backgroundColor: "#b966e7",
};
export default function SecondaryBtn({ text, arrow, class_name, setModal }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      className={" w-full secondary_btn text-[white] rounded " + class_name}
      style={{ padding: "12px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={!hover ? btnInitialValue : btnHoverValue}
      animate={hover ? btnHoverValue : btnInitialValue}
      transition={{ duration: 0.3 }}
      onClick={() => {
        if (setModal) {
          setModal(true);
        }
      }}
    >
      <motion.div
        initial={!hover ? initialValue : hoverValue}
        animate={hover ? hoverValue : initialValue}
        className="gap-1 centerd"
      >
        {text}
        {arrow && <FaArrowRight />}
      </motion.div>
    </motion.button>
  );
}
