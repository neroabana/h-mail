import React, { useContext } from "react";
import "./styles/DesktopHeader.css";
import sort_icon from "./files/icon_arrow01.svg";
import { contextSort } from "./Context";

const Header = () => {
   let [headerLabelChoice, setHeaderLabelChoice] = useContext(contextSort);

  return (
    <>
      <div className="header_container">
        <div className="header_field from">
          <div
            onClick={() => setHeaderLabelChoice("from")}
            className={headerLabelChoice === "from" ? "darker" : ""}
          >
            From
            {headerLabelChoice === "from" ? (
              <img
                src={sort_icon}
                alt="sort_icon"
                className="desktop_sort_icon"
              />
            ) : null}
          </div>
        </div>
        <div className="header_field to">
          <div
            onClick={() => setHeaderLabelChoice("to")}
            className={headerLabelChoice === "to" ? "darker" : ""}
          >
            To
            {headerLabelChoice === "to" ? (
              <img
                src={sort_icon}
                alt="sort_icon"
                className="desktop_sort_icon"
              />
            ) : null}
          </div>
        </div>

        <div className="header_field multiple"></div>

        <div className="header_field subject">
          <div
            onClick={() => setHeaderLabelChoice("subject")}
            className={headerLabelChoice === "subject" ? "darker" : ""}
          >
            Subject
            {headerLabelChoice === "subject" ? (
              <img
                src={sort_icon}
                alt="sort_icon"
                className="desktop_sort_icon"
              />
            ) : null}
          </div>
        </div>

        <div className="header_field attachment"></div>

        <div className="header_field date">
          <div
            onClick={() => setHeaderLabelChoice("date")}
            className={headerLabelChoice === "date" ? "darker" : ""}
          >
            Date
            {headerLabelChoice === "date" ? (
              <img
                src={sort_icon}
                alt="sort_icon"
                className="desktop_sort_icon"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
