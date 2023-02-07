import React, { useState } from 'react';
import NewsOverlay from './Overlay';

const CardView = () => {

    const [showOverlay, setShowOverlay] = useState(false);
    const onClickHandler = () =>{
        setShowOverlay(true);
    }
    return (
        <div>
            <div className="card text-white bg-secondary mb-1 text-center" >
                <div className="card-header bg-dark">News And Events</div>
                <div className="card-body">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text list-unstyled">
                        <li className='p-1'>Cristmas Celebrations</li>
                        <li className='p-1'>New Year Festival</li>
                        <li className='p-1'>Makar Sankranti</li>
                        <li className='p-1'>Lohari</li>
                        <li className='p-1'>Independence Day </li>
                    </ul>
                    {showOverlay && <NewsOverlay _id='63df84808ff9638cb788b151'/>}
                    <button type="button" className="btn btn-primary" onClick={onClickHandler} data-toggle="modal" data-target="#exampleModalCenter">
                        Launch demo modal
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardView;