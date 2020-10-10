import React, { useContext } from "react";
import "./styles/MobileMail.css";
import attachment_icon from "./files/icon_clip.svg";
import from_and_to_icon from "./files/icon_mail_sp.svg";
import mobile_forward_arrow_icon from "./files/icon_arrow02.svg";
import { Link } from "react-router-dom";
import { contextSort } from "./Context";

const MobileMail = ({
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
    //this is where message_ref_id may be used to redirect to a page/panel where the message(s) may be viewed
  };

  let [headerLabelChoice] = useContext(contextSort);

  return (
    <>
      <Link to={`/read-message/${ref_id}/${message}`} className="mobile_link">
        <div className="mobile_mail_container" onClick={openMail}>
          <div className="mobile_top">
            <div className="mobile_top_left">
              <img
                src={from_and_to_icon}
                alt="from_and_to_icon"
                className="mobile_from_and_to_icon"
              />
            </div>
            <div className="mobile_top_right">
              <div className="mobile_top_right_upper">
                <div className="mobile_top_right_upper_left mobile_foldable">
                  <div
                    className={
                      headerLabelChoice === "from"
                        ? "mobile_bolded mobile_foldable"
                        : "mobile_foldable"
                    }
                  >
                    {from}
                  </div>
                </div>
                <div className="mobile_top_right_upper_right">
                  <div className="mobile_attachment">
                    {attachment === "true" ? (
                      <img
                        src={attachment_icon}
                        alt="attachment_icon"
                        className="mobile_attachment_icon"
                      />
                    ) : null}
                  </div>
                  <div
                    className={
                      headerLabelChoice === "date"
                        ? "mobile_bolded mobile_date"
                        : "mobile_date"
                    }
                  >
                    {date}
                  </div>
                  <div className="mobile_forward_caret">
                    <img
                      src={mobile_forward_arrow_icon}
                      alt="mobile_forward_arrow_icon"
                      className="mobile_forward_arrow_icon"
                    />
                  </div>
                </div>
              </div>
              <div className="mobile_top_right_lower">
                <div
                  className={
                    headerLabelChoice === "to"
                      ? "mobile_bolded mobile_top_right_lower_left mobile_foldable"
                      : "mobile_top_right_lower_left mobile_foldable"
                  }
                >
                  {to}
                </div>
                <div className="mobile_top_right_lower_right">
                  {multiple > 0 && multiple < 10000 ? (
                    <div className="mobile_multiple_tag mobile_foldable">
                      +{multiple}
                    </div>
                  ) : null}
                  {multiple >= 10000 ? (
                    <div className="mobile_multiple_tag">10k+</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_bottom">
            <div
              className={
                headerLabelChoice === "subject"
                  ? "mobile_bolded_subject mobile_subject mobile_foldable"
                  : "mobile_foldable"
              }
            >
              {subject}kkkkk
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MobileMail;
