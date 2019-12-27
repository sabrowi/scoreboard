import React from "react";

function Header(props) {
  return (
    <div className={"header " + (props.center ? "text-center" : "")}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Header;
