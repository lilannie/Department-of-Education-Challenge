import React from 'react';

export default class DSToolbar extends React.Component {
    render() {
        return (
            <div className="portlet-title">
                <div className="caption">
                    <h1 className="blue-ebonyclay">Data Structures</h1>
                </div>
                <div className="actions">
                    <div className="btn-group">
                        <a className="btn btn-large green-soft" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            Add <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <a href="">Array</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
