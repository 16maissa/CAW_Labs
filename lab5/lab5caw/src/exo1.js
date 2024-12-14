import React, { useState } from 'react';
//q1
export function ClickButton(){
  const[clicked,setClicked]=useState(false);
  return(
    <div>
      <button onClick={()=>setClicked(true)}>Clickme</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}


//q2
export function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>Toggle</button>
      <p>{isClicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

//q3
export function Buttons() {
  const [clickedButton, setClickedButton] = useState("");

  const handleClick = (buttonNumber) => {
    setClickedButton(`Button #${buttonNumber} was clicked`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button1</button>
      <button onClick={() => handleClick(2)}>Button2</button>
      <button onClick={() => handleClick(3)}>Button3</button>
      <p>{clickedButton}</p>
    </div>
  );
}

//q4
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}


