import React from 'react';

export default class AlgoToolbar extends React.Component {
    render() {
        return (
            <div className="page-sidebar">
                <nav className="navbar" role="navigation">
                    <ul className="nav navbar-nav margin-bottom-35">
                        <li>
                            <a href="">
                                <i className="fa fa-home"></i> Home </a>
                        </li>
                        <li className="active">
                            <a href="">
                                 Data Structures
                            </a>
                        </li>
                        <li>
                            <a href="">
                                 Comparators
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Algorithm
                            </a>
                        </li>
                    </ul>
                    <h3>Quick Actions</h3>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="">
                                <i className="fa fa-upload "></i> Save
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
