import React from 'react';

const NoticeViewCard = (props) => {
    const onDeleteHandler = async () => {
        const response = await fetch(`http://localhost:3030/notices/${props._id}`, {
            method: 'DELETE',
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJhZG1pbklkIjoiNjNlNzRlMWY3MzViYzFkNzc0NTQ5YTkyIiwiaWF0IjoxNjc2MTQ2NzIzLCJleHAiOjE2NzYxNTAzMjN9.IriZAedett6-WVki1sl7SPEh7UpVYgmq04fcERbXT1A"
            }
        });
        const data = await response.json;
        console.log(data);
        props.recallfetchNoticeHandler();
    }
    return (
        <div className="card text-center mt-2">
            <div className="card-header">
                ID:  {props._id}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>

                <p className="card-text text-success">{props.notice}</p>

                <p className="card-text text-secondary">{props.msg}</p>
                <p className="card-text text-secondary">-{props.by}</p>
                <button href="#" className="btn btn-primary" onClick={onDeleteHandler}>Delete</button>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    );
}
export default NoticeViewCard;