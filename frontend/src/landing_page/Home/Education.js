import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='/media/images/education.svg' alt='Education image'/>
                </div>
                <div className='col-6'>
                    <h1 className='mt-5'>Free and open market education</h1>
                    <p className='mb-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href='' className='mt-5' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                    <p className='mt-5'>Trading Q&A , the most active trading and investment community in india for all your market related queries</p>

                    <a href=''className='mt-5' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;