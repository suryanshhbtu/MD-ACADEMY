import React from 'react';

const Alert = (props) => {

    return (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Alert !</strong> {props.message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}
export default Alert;