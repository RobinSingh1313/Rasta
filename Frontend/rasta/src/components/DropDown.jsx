// DropDown.js
import React, { useState } from "react";

function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Delhi', 'Mumbai', 'Hyderabad'];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
