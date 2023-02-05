import React from 'react';

import img1 from '../../images/dummy-profile.png';
const StaffCard = (props) => {

    return (
    <div className="card m-2" style={{width: '18rem'}}>
        <img src={img1} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.name}</b></h5>
                <p className="card-text"><b>Age : </b>{props.age} years</p>
                <p className="card-text"><b>Experience : </b>{props.experience} years</p>
                <p className="card-text"><b>Speciality : </b>{props.speciality}</p>
                <p className="card-text">{props.msg}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>);
}
export default StaffCard;