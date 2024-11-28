import React from 'react';


function Hero() {
    return ( 
       <div className='container mt-5 border-bottom'>
        <div className='row text-center mb-5'>
            <h1 className='mt-3'>Technology</h1>
            <h4 className='mt-3'>Sleek, modern, and intuitive trading platforms </h4>
            <p className='mt-3'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>

       </div>
     );
}

export default Hero;