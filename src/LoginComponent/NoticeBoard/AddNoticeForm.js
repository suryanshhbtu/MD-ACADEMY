import React, { useRef, useState } from 'react';

const AddNoticeForm = (props) => {

    const [showForm, setShowForm] = useState(false);
    const titleRef = useRef();
    const byRef = useRef();
    const msgRef = useRef();
    // const newLabelRef = useRef();


    const postData = async (news) => {
        
         await fetch(`http://localhost:3030/notices/`, {
            method: 'POST',
            body: JSON.stringify(news),
            headers: {
                "Content-Type": "application/json",
            }
        }, 
        props.recallfetchNoticeHandler(),
        closeHandler(),
        console.log("POSTED SUCCESSFULLY"));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        const notice = {
            title: titleRef.current.value,
            by: byRef.current.value,
            msg: msgRef.current.value
        }
        postData(notice);
        
    }

    const addHandler = ()=>{
        console.log("Button Pressed");
        setShowForm(true);
    }
    const closeHandler = ()=>{
        setShowForm(false);
        props.recallfetchNoticeHandler();
    }
    return (<div>
        <div className="dropdown text-center p-1">
        <button className="btn btn-secondary btn-lg btn-block"  onClick={addHandler} >
                Add New Notice
            </button>

            {showForm &&
                <div>
                <form className="w-100 p-5" onSubmit={onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-12 ">
                            <label >Title</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Title" ref={titleRef} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type Message Here !!' ref={msgRef}></textarea>
                    </div>
                    <div className="form-group">
                        <label>-By</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Author" ref={byRef} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label">
                                New Label
                            </label>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-primary mr-2"  >Upload To Server</button>
                        <button type="submit" className="btn btn-secondary" onClick={closeHandler}  >Close</button>
                </form>

            </div>}
        </div>

    </div>);
}
export default AddNoticeForm;


