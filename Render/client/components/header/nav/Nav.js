import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="nav-collapse collapse navbar-collapse navbar-responsive-collapse">
                <ul className="nav navbar-nav">
                    <li className="dropdown dropdown-fw dropdown-fw-disabled  active open selected">
                        <a href="javascript:;" className="text-uppercase">
                            <i className="icon-home" ></i> Dashboard
                        </a>
                        <ul className="dropdown-menu dropdown-menu-fw">
                            <li >
                                <a href="">
                                    <i className="icon-bar-chart" ></i> My Algorithms
                                </a>
                            </li>
                            <li className="active">
                                <a href="">
                                    <i className="icon-bar-chart" ></i> Create An Algorithm
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-fw dropdown-fw-disabled  ">
                        <a href="javascript:;" className="text-uppercase">
                            <i className="icon-puzzle"></i> Community
                        </a>
                        <ul className="dropdown-menu dropdown-menu-fw">
                            <li className="active">
                                <a href="">
                                    <i className="icon-bar-chart" ></i> Sorting
                                </a>
                            </li>
                            <li >
                                <a href="">
                                    <i className="icon-bar-chart" ></i> Search
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown more-dropdown">
                        <a href="javascript:;" className="text-uppercase"> Settings </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="">Link 1</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
