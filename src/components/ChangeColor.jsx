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
  const StyledThemePage = styled.div`
    .gear{
      color: orangered;
      font-size: 25px;
      animation-name: loader;
      animation
    }
  `;
  return (
    <StyledThemePage>
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

          
        />
         

          <BsGearFill
            onClick={() => {
              dispatch(changeColor(color));
            }}
            className="gear"
          />
      </div>
    </StyledThemePage>
  );
}
