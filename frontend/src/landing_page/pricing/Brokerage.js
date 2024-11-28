import React from 'react';

function Brokerage() {
    return ( 
       <div className='container'>
        <div className='row text-center mt-5 mb-5'>
            <div className='col-4 p-5'>
                <img src='media/images/pricing0.svg' alt='pricing' style={{width:"80%"}}/>
                <h1 >Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-5'>
            <img src='media/images/other-trades.svg' alt='pricing' style={{width:"80%"}}/>
                <h1>Intraday and F&O trades</h1>
                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
            </div>
            <div className='col-4 p-5'>
                <img src='media/images/pricingMF.svg' alt='pricing' style={{width:"80%"}}/>
                <h1>Free direct MF</h1>
                <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.  </p>

            </div>
        </div>
       </div>
     );
}

export default Brokerage ;