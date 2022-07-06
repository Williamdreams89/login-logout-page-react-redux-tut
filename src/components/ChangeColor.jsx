import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import { BsGearFill } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
 
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          placeholder="type in a color"

          
        />
        <motion.i
          initial ={{"rotate" : "0deg"}}
          animate ={{"rotate" : "360deg"}}
          transition = {{duration: 2, repeat: Infinity}}

        >
          <BsGearFill
            onClick={() => {
              dispatch(changeColor(color));
            }}
          />
        </motion.i>
      </div>
    </>
  );
}
