import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} style={{width:"90%"}}/>
                </div>
                <div className='col-6 p-5 mr-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription} </p>
                    <div lassName='mt-5 p-5'>
                        <a  href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <a href={learnMore}  style={{textDecoration:"none", marginLeft:"100px"}} >Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    <div className='mt-4'>
                    <a href={googlePlay} ><img src='/media/images/googlePlayBadge.svg' alt='google'/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src='/media/images/appstoreBadge.svg' alt='google'/></a>
                    </div>
                    </div>
                </div>
           </div>
        
    );
}

export default LeftSection;