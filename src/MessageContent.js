import React from "react";
import "./styles/MessageContent.css";

const MessageContent = ({ content, ref_id }) => {
  return(
    <>
      <div className="message_content_container">
        <p>
          {content} will be displayed here... [Conversation/Thread Reference Id:{" "}
          {ref_id}]
        </p>
      </div>
    </>
  );
};
export default MessageContent;
