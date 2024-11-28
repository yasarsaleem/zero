import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src='media/images/homeHero.png' className='mb-5'  alt='Hero'/>
                <h1 className='mt-5'>Invest in Every thing</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-100'style={{width:"20%", margin:"0 auto"} }>Signup Now</button>
                </div>
        </div>
     );
}

export default Hero ;