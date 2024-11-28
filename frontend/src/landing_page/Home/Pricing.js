import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-2 mt-5'>
     <div className='row'>
        <div className='col-4'>
            <h1 className='mb-3'>Unbeatable pricing</h1>
            <p>We pionerred the concept of document broking and price transparency in idia. Flat fees and no hidden charges</p>
            <a href='' className='mr-5 p-5'style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
        <div className='row text-center'>
            <div className='col-6 p-2 border'>
                <h1 className='mb-3 mt-2'>&#8377;0</h1>
                <p className=' mb-5'>Free equity delivery and<br></br>direct mutual funds</p></div>
                <div className='col-6 p-2 border' >
                <h1 className='mb-3 mt-2'>&#8377;20</h1>
                <p className=' mb-5'>Intraday and F&O</p></div>
            
        </div>
     </div>
     </div>
     </div>
     );
}

export default Pricing;