import React from 'react';

const MainNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">MD ACADEMY</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Accounts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Mission</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Admissions</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Admissions
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Kindergarten</a>
                            <a className="dropdown-item" href="/">Classes I to VIII</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Admission Criteria</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default MainNavigation;