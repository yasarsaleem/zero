import React from 'react';
 function Stats() {
    return ( 
        <div className='container mt-5 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5'> Trust with confidence</h1>
                    <h2 className='fs-4  '>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ laks crores worth of equity investments </p>
                    <h2 className='fs-4 mt-5'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam "gamification", or annoying push notification.High Quality apps that you use at your pace, the way you like</p>
                    <h2 className='fs-4 mt-5 '>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
                    <h2 className='fs-4 mt-5'>Do better with money</h2>
                    <p className='text-muted'>with initiatives like nodge and kill Switch, we don't just facilities transactions,but actively help you do better with your money</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='stats' style = {{width : "100%", height :"85%"}} className='mb-5'/>
                    <div className='text-center'>
                        <a href=''className='mr-5 p-5'style={{textDecoration:"none"}}>Explore Our products <i class="fa fa-long-arrow-right" aria-hidden="true" ></i>
                        </a>
                        <a href=''className='mr-5'style={{textDecoration:"none"}}>Try kite demo<i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                    </div>
                </div>
            </div>

        </div>
     );
 }
 
 export default Stats;