import React from 'react';

function Team() {
    return (  
        <div className='container border-top p-3'>
            <div className='row mt-3'>
                <h1 className='text-center mt-5 mb-2'>People</h1>
              
            </div>
            <div className='row mt-5 '>
                <div className='col-6 p-5 text-center'>
                    <img src='/media/images/nithinKamath.jpg' alt='nithinkamath'style={{borderRadius:"100%", width:"60%"}}/>
                    <h4 className='mt-4 text-muted'>Nithin kamath</h4>
                    <h5 className='mt-3 text-muted'>Founder, CEO</h5>
                </div>
                <div className='col-6 p-5'>
                    <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee SMAC and the Market Data Advisory Committee MDAC.</p>
                    <p>Playing basketball is his zen.</p>
                </div>
            </div>

        </div>
    );
}

export default Team;