import React from 'react';
import Skeleton from "react-loading-skeleton";
const Loading =()=> {
    return ( 
        <>
        <div className="col-md-3 bg-light h-100 me-2">
            <Skeleton  count={10} />
        </div>
        <div className="col-md-3 bg-light me-2">
            <Skeleton count={10}/>
        </div>
        <div className="col-md-3 bg-light me-2">
            <Skeleton  count={10}/>
        </div>
        
    </>
     );
}

export default Loading;