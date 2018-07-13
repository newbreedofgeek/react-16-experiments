import React from "react";

function Header(props) {
  return (
    <div className="header">
      <span>A collection of react experiments</span>
      {props.children}
    </div>
  );
}

export default Header;
