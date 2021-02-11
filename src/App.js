import React, { useState } from "react";
import DateRange from "./DateRange";
import MailList from "./MailList";
import { context } from "./Context";
import { contextSort } from "./Context";
import "./styles/App.css";

const dummyData = [
  // in production this would be replaced by data from the backend
  {
    from: "abai@yahoo.com",
    to: "dauda@gmail.com",
    multiple: "2",
    subject: "Hello... welcome to a new year",
    attachment: "true",
    date: "3/2/2002",
    ref_id: "00001",
    message: ["message 1", "message 2", "message 3"],
  },
  {
    from: "dungus@yahoo.com",
    to: "pesh@gmail.com",
    multiple: "1",
    subject: "Check out your book sales for the past year",
    attachment: "false",
    date: "3:00",
    ref_id: "00002",
    message: ["message 1", "message 2"],
  },
  {
    from: "nancy@yahoo.com",
    to:
      "gurundi@gmail.com, showboy@nannybot.net, magargady@flush.org, disgandi@montex.com",
    multiple: "0",
    subject: "[ADMISSION]... your application has been approved!",
    attachment: "false",
    date: "Jun 03",
    ref_id: "00003",
    message: ["message 1"],
  },
  {
    from: "tandygirl@magic.org",
    to: "brabisko@hotmail.com",
    multiple: "1",
    subject: "[FREE BOOKS!] -- Grab a one time opportunity to be rich Today!",
    attachment: "true",
    date: "Feb 12",
    ref_id: "00004",
    message: ["message 1", "message 2"],
  },
  {
    from: "tokyosassy@funmail.com",
    to: "kawasai@yahoo.co.uk",
    multiple: "0",
    subject:
      "Your antivirus program update is underderway checkout our new offers",
    attachment: "false",
    date: "2014/2/5",
    ref_id: "00005",
    message: ["message 1"],
  },
  {
    from: "ziggylow@cozymail.net",
    to: "powpanda@sissilak.com",
    multiple: "5",
    subject: "ALERT!! new cryptocurrencies on the rise... jump in now!",
    attachment: "true",
    date: "2017/5/12",
    ref_id: "00006",
    message: [
      "message 1",
      "message 2",
      "message 3",
      "message 4",
      "message 5",
      "message 6",
    ],
  },
  {
    from: "obotegrill@ugadez.org",
    to: "dagashlami@gmail.com",
    multiple: "0",
    subject: "Your account verification is successful",
    attachment: "true",
    date: "Mar 17",
    ref_id: "00007",
    message: ["message 1"],
  },
  {
    from: "drostoby@mailman.com",
    to: "yukubawa@naningry.net",
    multiple: "1",
    subject: "Open now -- fibre optic bike promises faster commute",
    attachment: "false",
    date: "May 7",
    ref_id: "00008",
    message: ["message 1", "message 2"],
  },
  {
    from: "tengfat@myway.net",
    to: "acrobent@gringo.org",
    multiple: "0",
    subject: "[SUSHI VS NOODLES] -- Battle of the culinary legends",
    attachment: "false",
    date: "2019/12/2",
    ref_id: "00009",
    message: ["message 1"],
  },
  {
    from: "bandash@farah.com",
    to: "tobrasky@aol.com",
    multiple: "9",
    subject: "New stocks for your investment plans",
    attachment: "true",
    date: "2011/6/12",
    ref_id: "00010",
    message: [
      "message 1",
      "message 2",
      "message 3",
      "message 4",
      "message 5",
      "message 6",
      "message 7",
      "message 8",
      "message 9",
      "message 10",
    ],
  },
];

const App = () => {
  let [data, setData] = useState(dummyData); //to simulate zero results, replace [dummyData] with [""]
  let [headerLabelChoice, setHeaderLabelChoice] = useState("");

  const sortFrom = (arrayValues) => {
    return arrayValues.sort((a, b) => {
      if (a.from < b.from) {
        return -1;
      }
      if (a.from > b.from) {
        return 1;
      }
      return 0;
    });
  };

  const sortTo = (arrayValues) => {
    return arrayValues.sort((a, b) => {
      if (a.to < b.to) {
        return -1;
      }
      if (a.to > b.to) {
        return 1;
      }
      return 0;
    });
  };

  const sortSubject = (arrayValues) => {
    return arrayValues.sort((a, b) => {
      if (a.subject < b.subject) {
        return -1;
      }
      if (a.subject > b.subject) {
        return 1;
      }
      return 0;
    });
  };

  const sortDate = (arrayValues) => {
    return arrayValues.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    });
  };

  const sortData = (rawValues, headerChoice) => {
    switch (headerChoice) {
      case "from":
        data = sortFrom(rawValues);
        break;
      case "to":
        data = sortTo(rawValues);
        break;
      case "subject":
        data = sortSubject(rawValues);
        break;
      case "date":
        data = sortDate(rawValues);
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <context.Provider value={[data, setData]}>
        <contextSort.Provider value={[headerLabelChoice, setHeaderLabelChoice]}>
          <div className="top_box">
            <DateRange />
          </div>
          {headerLabelChoice !== "" ? sortData(data, headerLabelChoice) : null}
          <div className="bottom_box">
            <MailList />
          </div>
        </contextSort.Provider>
      </context.Provider>
    </>
  );
};

export default App;
