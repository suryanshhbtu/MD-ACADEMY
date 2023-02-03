import React from 'react';

import img1 from '../../images/dummy-profile.png';
const StaffCard = (props) => {

    return (
    <div className="card m-2" style={{width: '18rem'}}>
        <img src={img1} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Age : {props.age} years</p>
                <p className="card-text">Experience : {props.experience} years</p>
                <p className="card-text">Subjects : {props.subjects}</p>
                <p className="card-text">{props.content}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>);
}
export default StaffCard;