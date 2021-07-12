import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';
import './Footer.css';
export const Footer = () => {
    return (
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy(true)}
        </div>
    )
}