import React from "react";

const Button = ({ color, bcolor, onClick, text, width, border }) => {
  return (
    <button
      style={{
        width: width,
        height: "2.5rem",
        fontSize: "16px",
        cursor: "pointer",
        // border: "solid #252526",
        borderRadius: "2px",
        border: border,
        margin: "0 0.4rem",
        color: color,
        backgroundColor: bcolor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
