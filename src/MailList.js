import React from "react";
import Inbox from "./Inbox";
import "./styles/MailList.css";
import MessageBody from "./MessageBody";
import {Switch, Route} from "react-router-dom";

const MailList = () => {
  return (
    <>
      <div className="mail_list">
        <Switch>
          <Route path="/" component={Inbox} exact />
          <Route
            path="/read-message/:ref_id/:message"
            component={MessageBody}
          />
        </Switch>
      </div>
    </>
  );
};
export default MailList;
