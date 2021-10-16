import React from "react";
import { useState } from "react";

const NestedComponent = ({ data }) => {

  const [name, setName] = useState([data]);

  const handleClick = (e) => {
    if (e.children) {
      return setName([...name, e.children])
    }
  };

  return (
    <ul>
      {name[name.length - 1].map((item, index) => {
        return (
          <li>
            <label onClick={() => handleClick(item)}>{item.name}</label>
          </li>
        );
        
      })}
    </ul>
  );
};

export default NestedComponent;
