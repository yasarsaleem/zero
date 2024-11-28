import React from 'react';
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-6 p-5 mr-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription} </p>
                    <div lassName='mt-5 p-5'>
                       <a href={learnMore}  style={{textDecoration:"none", marginRight:"100px"}} >Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    </div>
                    <div className='col-6'>
                    <img src={imageURL} style={{width:"90%"}}/>
                </div>
                </div>
           </div>

    );
 }
 
 export default RightSection;