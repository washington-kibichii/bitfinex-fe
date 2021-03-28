import React from 'react'

const Prices = ({ prices }) => {
  return (
    <div>
      <center><h1>Prices By Minute</h1></center>
      {prices.map((prices) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{prices.last_price}</h5>
            <h5 className="card-title">{prices.high}</h5>
            <h5 className="card-title">{prices.mid}</h5>
            <p className="card-text">{prices.low}</p>
            <h6 className="card-subtitle mb-2 text-muted">{prices.volume}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{prices.timestamp}</h6>
            
          </div>
        </div>
      ))}
    </div>
  )
};

export default Prices