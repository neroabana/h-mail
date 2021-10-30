import React, { useContext } from "react";
import "./styles/MobileHeader.css";
import mobile_sort_icon from "./files/icon_arrow01.svg";
import { contextSort } from "./Context";

const Header = () => {
  let [headerLabelChoice, setHeaderLabelChoice] = useContext(contextSort);
  
  return (
  
    <>
      <div id="mobile_header_container">
        <div id="mobile_from" className="mobile_header_field">
          <div
            onClick={() => setHeaderLabelChoice("from")}
            className={headerLabelChoice === "from" ? "mobile_darker" : ""}
          >
            From
            {headerLabelChoice === "from" ? (
              <img
                src={mobile_sort_icon}
                alt="mobile_sort_icon"
                className="mobile_sort_icon"
              />
            ) : null}
          </div>
        </div>

        <div className="bar mobile_header_field">|</div>

        <div id="mobile_to" className="mobile_header_field">
          <div
            onClick={() => setHeaderLabelChoice("to")}
            className={headerLabelChoice === "to" ? "mobile_darker" : ""}
          >
            To
            {headerLabelChoice === "to" ? (
              <img
                src={mobile_sort_icon}
                alt="mobile_sort_icon"
                className="mobile_sort_icon"
              />
            ) : null}
          </div>
        </div>

        <div className="bar mobile_header_field">|</div>

        <div id="mobile_subject" className="mobile_header_field">
          <div
            onClick={() => setHeaderLabelChoice("subject")}
            className={headerLabelChoice === "subject" ? "mobile_darker" : ""}
          >
            Subject
            {headerLabelChoice === "subject" ? (
              <img
                src={mobile_sort_icon}
                alt="mobile_sort_icon"
                className="mobile_sort_icon"
              />
            ) : null}
          </div>
        </div>

        <div className="bar mobile_header_field">|</div>

        <div id="mobile_date" className="mobile_header_field">
          <div
            onClick={() => setHeaderLabelChoice("date")}
            className={headerLabelChoice === "date" ? "mobile_darker" : ""}
          >
            Date
            {headerLabelChoice === "date" ? (
              <img
                src={mobile_sort_icon}
                alt="mobile_sort_icon"
                className="mobile_sort_icon"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
