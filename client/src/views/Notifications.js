import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div></>
  );
}

export default Notifications;
