import React,{useState} from 'react';
//q1
 export function DisplayTab() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

//q2

export function DisplayTab2() {
    const tab = ["hello", "world", "from", "react"];
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index}>Element {index + 1} is: {element}</li>
        ))}
      </ul>
    );
  }

//q3
  export function DisplayTab3() {
    const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  
    const removeElement = (index) => {
      setTab(tab.filter((_, i) => i !== index));
    };
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index} onClick={() => removeElement(index)}>
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    );
  }


// q4
export function DisplayTab4({ tab }) {
   
    if (!tab || !Array.isArray(tab)) {
      return <p>No table data provided!</p>;
    }
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index}>
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    );
  }
  
  // q5
  export function DisplayTab5() {
    const tab1 = ["hello", "world", "from", "react"];
    const tab2 = ["caw", "apm", "roc"];
  
    return (
      <div>
        <h3>Table 1</h3>
        <DisplayTab4 tab={tab1} />
        <h3>Table 2</h3>
        <DisplayTab4 tab={tab2} />
      </div>
    );
  }
  







