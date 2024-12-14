import React, { useState } from "react";

export function AddDivs() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [divs, setDivs] = useState([]);

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!height || !width || !bgColor) {
      alert("Please fill all fields!");
      return;
    }

    
    setDivs([...divs, { height, width, bgColor }]);
    setHeight(""); 
    setWidth("");
    setBgColor("");
  };

  return (
    <div>
      <h3>Add Divs</h3>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height (px):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Width (px):
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Background Color:
            <input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
             
              required
            />
          </label>
        </div>
        <button type="submit">Add Div</button>
      </form>

    
      <div>
        <h4>Generated Divs:</h4>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.bgColor,
              margin: "10px",
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
