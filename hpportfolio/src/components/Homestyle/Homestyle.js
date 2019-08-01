import React from "react";
import "./style.css";

function Homestyle(props) {
  return (
    <div className="homestyle text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Homestyle;