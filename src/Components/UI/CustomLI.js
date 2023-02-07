import React, { useState } from 'react';
import NewsOverlay from './NewsOverlay';

const CustomLI = (props) => {

   
    const [showOverlay, setShowOverlay] = useState(false);
    const onClickHandler = () =>{
        setShowOverlay(!showOverlay);
    }
    // const onCloseListner = () =>{
        
    //     console.log('closing overlay in newsOverlay');
    //     setShowOverlay(false);
    // }
    return (
        <div type="button" className=" btn btn-secondary " onClick={onClickHandler} data-toggle="modal" data-target="#exampleModalCenter" >
            <li className='p-1'>{props.title}</li>
            {showOverlay && <NewsOverlay _id={props._id}/>}
                    {/* <button type="button" className="btn btn-primary" onClick={onClickHandler} data-toggle="modal" data-target="#exampleModalCenter">
                        Launch demo modal
                    </button> */}
        </div>
    );
}
export default CustomLI;