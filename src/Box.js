import React from "react";

const Box = ({ id, height = 3, width = 3, handleRemove, backgroundColor = "blue" }) => {
    const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          backgroundColor,
          width: `${width}em`,
          height: `${height}em`,
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
