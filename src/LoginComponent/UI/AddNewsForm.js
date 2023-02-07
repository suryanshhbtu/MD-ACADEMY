import React from 'react';

const AddNewsForm = () => {
    return (
        <form className="w-100 p-5">
        <div className="form-row">
          <div className="form-group col-md-12 ">
            <label for="inputEmail4">Title</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Title"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Notice</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Key Point"/>
        </div>
        <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type Message Here !!'></textarea>
  </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              New Label
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Upload To Server</button>
      </form>
    );
}
export default AddNewsForm;


