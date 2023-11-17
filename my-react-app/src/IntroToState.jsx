import React, { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function IntroToState() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [clickCount, setClickCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <div>
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor,
          height: "fit-content",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "0" }}>{clickCount}</h1>
      </div>
    </>
  );
}

export default IntroToState;
