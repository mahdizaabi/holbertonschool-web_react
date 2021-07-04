import React from 'react';
import './Notifications.css';
import closeIcon from './closeIcon.png';
import { getLatestNotification } from './utils';

export const Notifications = () => (
    <div className="Notifications" style={{"paddingBottom": "18px"}}>
        <div style={{"padding": "18px", "display": "flex", "justifyContent": "space-between"}}>
        <p style={{"fontSize": "18px"}}>
            Here is the list of notifications
        </p>
        <button
        type="submit"
        aria-label="Close"
        onClick={()=>console.log("Close button has been clicked")}
        style={{"marginLeft": "20px"}}
        >
            <img src={closeIcon} alt=""  width="40" height="25" />
        </button>
        </div>

        <div style={{"padding": "0 18px"}} className="list">
            <ul style={{"padding": "0 18px"}}>
                <li dataPriority="default">
                New course available
                </li>
                <li dataPriority="urgent">
                New resume available
                </li>
                <li dataPriority="ultraUrgent" dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
        
    </div>)
