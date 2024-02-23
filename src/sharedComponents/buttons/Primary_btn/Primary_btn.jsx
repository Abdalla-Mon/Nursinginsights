"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";

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

export default function PrimaryBtn({text, type, arrow, class_name = "", setDelete, setModal}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      className={" primary_btn " + class_name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

      type={type}
      transition={{duration: 0.3}}

      onClick={() => {
        if (setDelete) {
          setDelete(false)
        }
        if (setModal) {
          setModal(true);
        }
      }}
    >
      <motion.div
        initial={!hover ? initialValue : hoverValue}
        animate={hover ? hoverValue : initialValue}
        className="gap-1 centerd "
      >
        <span className={"text"}>

        {text}
        </span>
        {arrow && <FaArrowRight/>}
      </motion.div>
    </motion.button>
  );
}
