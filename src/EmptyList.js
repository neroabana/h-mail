import React from "react";
import logo from "./files/logo.png";
import "./styles/EmptyList.css";

const EmptyList = () => {
   return (
    <>
      <div className="logo_box">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default EmptyList;
