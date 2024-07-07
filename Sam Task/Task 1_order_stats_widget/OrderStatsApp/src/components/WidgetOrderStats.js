import React from 'react'
import OrderStat from './OrderStat'
import './WidgetOrderStats.css'

const WidgetOrderStats = ({data}) => {
  return (
    <div className="widget-order-stats">
        {data.map((value,index)=>{
           return <OrderStat key={index} {...value}/>
           })}
    </div>
  )}

export default WidgetOrderStats
