import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInMainNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">MD ACADEMY ADMINSTRATOR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Logged Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/staffManager">Staff Manager</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/editNewsAndEvents">Edit News And Events</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/editNoticeBoard">Edit Notice Board</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/addImages">Add Images</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contactDeveloper">Contact Developer</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
export default LoggedInMainNavigation;