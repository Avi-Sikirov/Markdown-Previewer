import React, { useContext, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context";

function Header({ name }) {
  const [btnMode, setBtnMode] = useState(faMaximize);
  const onButtonClick = useContext(Context);
  return (
    <div className="header">
      <img
        src="https://gists.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg"
        width={18}
        className="logo"
      />
      <div className="header-text">{name}</div>
      <FontAwesomeIcon
        icon={btnMode}
        className="btn"
        onClick={(e) => {
          setBtnMode(btnMode == faMaximize ? faMinimize : faMaximize);
          onButtonClick(name, btnMode == faMaximize ? "maximize" : "minimize");
        }}
      />
    </div>
  );
}

export default Header;
