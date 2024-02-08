"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export function Input({ e, id, className, pattern, type, register, errors }) {
  const [inputType, setInputType] = useState(type);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={"custom-input " + className}>
      <label style={{ position: "relative" }}>
        <motion.input
          onFocus={() => setFocus(true)}
          onBlurCapture={() => {
            if (value === "") {
              setFocus(false);
            }
          }}
          type={inputType}
          {...register(id, pattern)}
          id={id}
          style={{ position: "relative" }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {type === "password" && focus && (
          <ShowPassword inputType={inputType} setInputType={setInputType} />
        )}
        <InputPlaceholder focus={focus} e={e} />
        <FocusBorder focus={focus} />
      </label>
      <motion.p layout className="form_error">
        {errors[id]?.message}
      </motion.p>
    </div>
  );
}
function InputPlaceholder({ focus, e }) {
  const initialvalue = {
    position: "absolute",
    top: "50%",
    y: "-50%",
    left: 10,
    color: "#aaa",
    fontSize: "1rem",
  };
  const focusValue = {
    top: 10,
    left: 6,
    fontSize: ".6rem",
  };
  return (
    <motion.span
      className="absolute "
      initial={!focus ? initialvalue : focusValue}
      animate={focus ? focusValue : initialvalue}
    >
      {e}
    </motion.span>
  );
}
function ShowPassword({ setInputType, inputType }) {
  return (
    <div
      className="absolute eye_icon cursor-pointer"
      onClick={() => {
        setInputType(inputType === "password" ? "text" : "password");
      }}
    >
      {inputType === "password" ? <FaEyeSlash /> : <FaEye />}
    </div>
  );
}
function FocusBorder({ focus }) {
  let inititalValue = {
    width: "0%",
  };
  let focusValue = {
    width: "100%",
  };
  return (
    <motion.div
      initial={!focus ? inititalValue : focusValue}
      animate={focus ? focusValue : inititalValue}
      className="focus_border absolute  "
    ></motion.div>
  );
}
