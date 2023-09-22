import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [allBoxes, setAllBoxes] = useState([]);
  const add = (newBox) => {
    setAllBoxes((allBoxes) => [...allBoxes, newBox]);
  };
  const remove = (id) => {
    setAllBoxes((allBoxes) => allBoxes.filter((box) => box.id !== id));
  };

  const boxes = allBoxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));
  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes}
    </div>
  );
};
export default BoxList;
