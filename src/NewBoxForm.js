import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            id="width"
            type="text"
            name="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            id="height"
            type="text"
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button id="newBox">Add a box!</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
