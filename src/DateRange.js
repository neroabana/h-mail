import React, { useState } from "react";
import "./styles/DateRange.css";
import icon_calender from "./files/icon_calender.svg";
import icon_search from "./files/icon_search.svg";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const DateRange = () => {  
  let [dateRange, setDateRange] = useState({ from: null, to: null });
    const customInput = ({ ref }) => (
    <input
      readOnly
      ref={ref}
      placeholder="select a date range"
      value={
        dateRange.from != null && dateRange.to != null
          ? `${dateRange.from.year}/${dateRange.from.month}/${dateRange.from.day} - ${dateRange.to.year}/${dateRange.to.month}/${dateRange.to.day}`
          : ""
      }
      style={{
        position: "relative",
        height: "1em",
        cursor: "pointer",
        textAlign: "center",
        padding: ".5em 0em",
        fontSize: "1em",
        borderStyle: "none",
        margin: "0em",
        width: "11.3em",
        color: "grey",
      }}
    />
  );

  const sendDateRange = () => {
    //this is were I may put code to send selected date range to the backend
  };

  return (
    <>
      <div className="date_container">
        <div className="calendar_icon_container">
          <img
            src={icon_calender}
            alt="calender_icon"
            className="calendar_icon"
          />
        </div>
        <div className="date_box">
          <DatePicker
            value={dateRange}
            onChange={setDateRange}
            renderInput={customInput}
            shouldHighlightWeekends
            calendarClassName="flex_calendar"
          />
        </div>
        <div className="search_icon_container" onClick={sendDateRange}>
          <img src={icon_search} alt="search_icon" className="search_icon" />
        </div>
      </div>
    </>
  );
};

export default DateRange;
