import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="btn-group-img btn-group">
                <button type="button" className="btn btn-sm md-skip dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <span>Hi, Annie</span>
                </button>
                <ul className="dropdown-menu-v2" role="menu">
                    <li>
                        <a href="/">
                            <i className="icon-user" ></i> My Profile
                            <span className="badge badge-danger">1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="icon-rocket" ></i> My Algorithms
                            <span className="badge badge-success"> 7 </span>
                        </a>
                    </li>
                    <li className="divider"> </li>
                    <li>
                        <a href="/">
                            <i className="icon-key" ></i> Log Out </a>
                    </li>
                </ul>
            </div>
        );
    }
}
