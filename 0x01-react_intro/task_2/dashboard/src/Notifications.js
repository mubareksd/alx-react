import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src="/close-icon.png" alt="close-icon" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
