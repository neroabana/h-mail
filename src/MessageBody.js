import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./styles/MessageBody.css";
import MessageContent from "./MessageContent";

const MessageBody = () => {
  const history = useHistory();
  const { ref_id, message } = useParams();
  const messages = message.split(",");

  const goToInbox = () => {
    history.push("/");
  };

  return (
    <>
      <div className="message_body_container">
        <div className="message_body_header">
          <div
            className="message_body_inbox message_body_field"
            onClick={goToInbox}
          >
            Inbox
          </div>
          <div className="message_body_field">Forward</div>
          <div className="message_body_field">Reply</div>
          <div className="message_body_field">Spam</div>
          <div className="message_body_delete message_body_field">Delete</div>
        </div>
        <div className="message_body_content_container">
          {messages.map((msg, index) => (
            <MessageContent key={index} ref_id={ref_id} content={msg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageBody;
