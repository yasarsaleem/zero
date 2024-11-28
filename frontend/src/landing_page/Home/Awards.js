import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='awards'/>
                </div>
                <div className='col-6 p-5 mb-8'>
                    <h1> Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million Zerobha clients contribute to over 15 % of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row mb-5'>
                    
                        <div className='col-6'>
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currencyderivatives</p></li>
                            </ul>
                        </div>
                    
                        
                        <div className='col-6'>
                        <ul>
                            <li><p>Stocks & Options</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Government securities</p></li>
                            </ul>
                        </div>
                    <img src='media/images/pressLogos.png' alt='pressimage' style= {{width : "90%"}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards ;