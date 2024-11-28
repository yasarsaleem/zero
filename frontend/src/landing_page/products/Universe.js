import React from 'react';
function Universe() {
    return ( 
       <div className='container'>
        <div className='row text-center mt-5 mb-5' >
            <h1>The Zerodha Universe</h1>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms </p>
        
        <div className='col-4 p-3 mt-3 mb-3 '>
                
                <img src='media/images/zerodhaFundhouse.png' alt='house' style={{width:"80%"}} className='mb-5'/>
                <p>Our asset management venture that is created simple and transparent index funds to help you save for your goals</p>
            </div>
            <div className='col-4 p-3 mt-3 mb-3'>
           
                <img src='media/images/sensibullLogo.svg' alt='bull' style={{width:"90%"}} className='mb-5'/>
                <p>Option trading platform that lets you create stratagies, analyze positions and examine data points like Open interest and more</p>
            </div>
            <div className='col-4 p-3 mt-3 mb-3'>
            
                <img src='media/images/tijori.svg' alt='tijori' style={{width:"90%"}} className='mb-5'/>
                <p>Investment research platform that offers detailed insight on stocks,sectors and supply chains and more</p>
            
            </div> 
            
            
            <div className='col-4 p-3 mt-3 mb-3'>
            
            <img src='media/images/streakLogo.png' alt='streak' style={{width:"90%"}} className='mb-5'/>
            <p>Investment research platform that offers detailed insight on stocks,sectors and supply chains and more</p>
            </div>
            <div className='col-4 p-3 mt-3 mb-3'>
            
            <img src='media/images/smallcaseLogo.png' alt='small'style={{width:"90%"}} className='mb-5'/>
            <p>Investment research platform that offers detailed insight on stocks,sectors and supply chains and more</p>
            </div>
            <div className='col-4 p-3 mt-3 mb-3 '>
            
            <img src='media/images/dittoLogo.png' alt='ditto' style={{width:"90%"}} className='mb-5'/>
            <p>Investment research platform that offers detailed insight on stocks,sectors and supply chains and more</p>
            </div>
            <button className='p-2 btn btn-primary fs-100'style={{width:"20%", margin:"0 auto"} }>Signup for free</button>
            </div>
        </div>
       
     );
}

export default Universe;