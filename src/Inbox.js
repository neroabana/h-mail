import React, { useContext, useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import DesktopMail from "./DesktopMail";
import MobileMail from "./MobileMail";
import EmptyList from "./EmptyList";
import { context } from "./Context";
import "./styles/Inbox.css";

const Inbox = () => {
  
  let [data] = useContext(context);
  let [desktop, setDesktop] = useState();
  let [mobile, setMobile] = useState();

  useEffect(() => {
    let alive = true;
    const desktop = (desktop_screen) => {
      if (desktop_screen.matches && alive) {
          setDesktop(true);
          setMobile(false);
      }
    };
    let desktop_screen = window.matchMedia("(min-width: 950px)");
    desktop(desktop_screen);
    desktop_screen.addListener(desktop);

    const mobile = (mobile_screen) => {
      if (mobile_screen.matches && alive) {
        setDesktop(false);
        setMobile(true);
      }
    };
    let mobile_screen = window.matchMedia("(max-width: 950px)");
    mobile(mobile_screen);
    mobile_screen.addListener(mobile);

    return function cleanup() {
      alive = false;
    };
  }, []);

  return (
    <> 
      <div className="result">Results: {data.length} mail(s)</div>
      <div className="list">
        {data && desktop ? <DesktopHeader /> : null}
        {data && desktop
          ? data.map((value, index) => {
              return (
                <DesktopMail
                  from={value.from}
                  key={index}
                  to={value.to}
                  multiple={value.multiple}
                  subject={value.subject}
                  attachment={value.attachment}
                  date={value.date}
                  ref_id={value.ref_id}
                  message={value.message}
                />
              );
            })
          : null}

        {data && mobile ? <MobileHeader /> : null}
        {data && mobile
          ? data.map((value, index) => {
              return (
                <MobileMail
                  from={value.from}
                  key={index}
                  to={value.to}
                  multiple={value.multiple}
                  subject={value.subject}
                  attachment={value.attachment}
                  date={value.date}
                  ref_id={value.ref_id}
                  message={value.message}
                />
              );
            })
          : null}

        {!data ? <EmptyList /> : null}
      </div>
    </>
  );
};

export default Inbox;