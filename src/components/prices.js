import React from 'react'
import ReactTimeAgo from 'react-time-ago'


const Prices = ({ prices }) => {
  return (
    <div>
      <center><h1>Prices By Minute</h1></center>
      {prices.map((prices) => (
        <div className="card" key="{prices.key}">
          <div className="card-body">
            <h5 className="card-title mb-2">Volume: {prices.volume}</h5>
            <h6 className="card-subtitle mb-2">Highest Price: {prices.high}</h6>
            <h6 className="card-subtitle mb-2">Mid Price: {prices.mid}</h6>
            <h6 className="card-subtitle mb-2">Lowest Price: {prices.low}</h6>
            <h6 className="card-subtitle mb-2">Last Price: {prices.last_price}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: <ReactTimeAgo date={new Date(prices.timestamp)}/></h6>

          </div>
        </div>
      ))} 
    </div>
  )
};

export default Prices