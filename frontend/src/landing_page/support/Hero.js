import React from 'react';
 function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div  id='supportWrapper'>
            
                <h4 className='mt-5'>Support Portal</h4>
                <a href='' style={{color:"white"}} className='mt-5'>Track Tickets</a>
                </div>
                <div className='row mb-5'>

                <div className='col-6 mt-5 mb-5 p-5'> 
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                <input placeholder='Eg: how do i activate F&O , why is my order getting rejected....' id='supportSearch'/>
                <a href='' style={{color:"white"}} >Track account opening</a>
                <a href='' style={{color:"white"}} >Track segment activation</a>
                <a href='' style={{color:"white"}} >Intraday margins</a>
                <a href='' style={{color:"white"}} >Kite user manual</a> 
                
                </div>

                <div className='col-6 px-3 mt-5 mb-5'> <h3>Featured</h3>
                <ol >
                    <li className='m-3'>Suspension of trading - IDFC Limited</li>
                    <li className='m-3'>Rights Entitlements listing in October 2024</li>
                </ol>
                
                
                </div>
                </div>
        </section>
     );
 }
 
 export default Hero;