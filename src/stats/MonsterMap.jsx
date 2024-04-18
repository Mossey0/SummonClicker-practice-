import React from "react";

export default function MonsterMap({ monster }) {
  return (
    <div className="monster--container-text">
      <div className="monster--container-text-div">
        <div className="test">
          <p className="p-text">Name:</p>
          <p className="p-text">{monster[2]}</p>
          
        </div>
      </div>
      <div className="monster--container-text-div">
        <p className="p-text">Total Count: {monster[0]}</p>
      </div>
      <div className="monster--container-text-div">
        <p className="p-text">Victims/s: {monster[1]}</p>
      </div>
    </div>
  );
}
