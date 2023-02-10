import React from 'react';

const StaffViewCard = (props) => {
    const onDeleteHandler = async () => {
        const response = await fetch(`http://localhost:3030/staffs/${props._id}`, {
            method: 'DELETE',
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json;
        console.log(data);
        props.recallfetchStaffHandler();
    }
    return (
        <div className="card text-center mt-2">
            <div className="card-header">
                ID:  {props._id}
            </div>
            <div className="card-body">
                <h5 className="card-title"><b>Name : </b>{props.name}</h5>
                <ul className="card-text list-unstyled">
                    <li><b>Age : </b>{props.age}</li> 
                    <li><b>Experience : </b>{props.experience} years</li> 
                    <li><b>Speciality : </b>{props.speciality}</li> 
                    <li><b>Message : </b>{props.msg}</li> 
                </ul>
                <button href="#" className="btn btn-primary" onClick={onDeleteHandler}>Delete</button>
            </div>
            <div className="card-footer text-muted">
                122 days ago
            </div>
        </div>
    );
}
export default StaffViewCard;