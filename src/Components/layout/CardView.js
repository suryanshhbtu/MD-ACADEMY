import React from 'react';

const CardView = () => {

    return (
        <div>
            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">News And Events</div>
                <div className="card-body">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text">
                        <li>Cristmas Celebrations</li>
                        <li>New Year Festival</li>
                        <li>Makar Sankranti</li>
                        <li>Lohari</li>
                        <li>Independence Day </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default CardView;