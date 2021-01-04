import React, { useContext } from "react";
import "./styles/DesktopMail.css";
import { Link } from "react-router-dom";
import { contextSort } from "./Context";

const DesktopMail = ({
  from,
  to,
  multiple,
  subject,
  attachment,
  date,
  ref_id,
  message,
}) => {
  const openMail = () => {
      //this is where message_ref_id may be used to redirect to a page/panel where the message(s) may be displayed
  };

  let [headerLabelChoice] = useContext(contextSort);

  return (
    <>
      <Link to={`/read-message/${ref_id}/${message}`} className="link">
        <div className="mail_container" onClick={openMail}>
          <div
            className={
              headerLabelChoice === "from"
                ? "desktop_bolded mail_field from_mail spare"
                : "from_mail mail_field"
            }
          >
            {from}
          </div>
          <div
            className={
              headerLabelChoice === "to"
                ? "desktop_bolded mail_field to_mail spare"
                : "to_mail mail_field"
            }
          >
            {to}
          </div>
          <div className="mail_field multiple_mail">
            {multiple > 0 && multiple < 10000 ? (
              <div className="multiple_tag">+{multiple}</div>
            ) : null}
            {multiple >= 10000 ? <div id="multiple_tag">10K+</div> : null}
          </div>
          <div
            className={
              headerLabelChoice === "subject"
                ? "desktop_bolded subject_mail mail_field spare"
                : "subject_mail mail_field"
            }
          >
            {subject}
          </div>
          <div className="mail_field attachment_mail">
            {attachment === "true" ? (
              <div className="attachment_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13.93083 15"
                >
                  <defs>
                    <style>.a{`fill:#666;`}</style>
                  </defs>
                  <title>icon_clip</title>
                  <path
                    className="a"
                    d="M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div
            className={
              headerLabelChoice === "date"
                ? "desktop_bolded mail_field date_mail spare"
                : "date_mail mail_field"
            }
          >
            {date}
          </div>
        </div>
      </Link>
    </>
  );
};

export default DesktopMail;
