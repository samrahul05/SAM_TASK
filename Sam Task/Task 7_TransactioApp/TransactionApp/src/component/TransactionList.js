import React from 'react';
import AokijiImg from '../images/pic1.jpeg'
import kizanuImg from '../images/pic2.jpg'
import AkainuImg from '../images/pic3.jpg'
import '../App.css'


const TransactionList = () => {

    const transaction =[
        {
            name: 'Aokiji',
            date: '28 Feb 2023',
            time: '06:23 PM',
            amount: '+$13.00',
            status: 'Received',
            image: AokijiImg,
        },
        {
            name: 'Kizaru',
            date: '28 Feb 2023',
            time: '06:23 PM',
            amount: '-$9.00',
            status: 'Outgoing',
            image: kizanuImg,
        },
        {
            name: 'Akainu',
            date: '28 Feb 2023',
            time: '06:23 PM',
            amount: '+$20.00',
            status: 'Received',
            image: AkainuImg,
        }

    ];

    return (
        <div className="transaction-list">
          {transaction.map((value,index) =>(
            <div className="transaction" key={index}>
                <div className="transaction-img-details">
                       <img src={value.image} alt={value.name} className="transaction-image"/>
                    <div className="transaction-details">
                       <span className="transaction-name">{value.name}</span>
                       <span className="transaction-date-time">
                          {value.date} • {value.time}
                       </span>
                    </div>
                </div>
                
                <div className="transaction-details2">
                    <span className={`transaction-amount ${value.amount.startsWith('+') ? 'received':'outgoing'}`}>
                        {value.amount}
                    </span>
                    <span className="tansaction-status">{value.status}</span>
                </div>                
            </div>
          ))}
       </div>
  )}

export default TransactionList
