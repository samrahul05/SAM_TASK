import React from 'react';
import './OrderStat.css';

function OrderStat({ label, value, icon, change, changeType }) {
  return (
  
    <div className="order-stat">
        <div className="order-stat__header">
            <span className="order-stat__label">{label}</span>
            <span className={`order-stat__change order-stat__change--${changeType}`}>
                   {changeType === 'increase' ? '↑' : '↓'} {change}
            </span>
        </div>
        <div className="order-stat_footer">
            <img src={process.env.PUBLIC_URL + '/icons/' + icon} alt={label} className="order-stat__icon" />
           <div className="order-stat__value">{value}</div>
        </div>
    </div>
  )};

export default OrderStat;