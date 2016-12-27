import React from 'react';

export default class Actions extends React.Component {
    render() {
        return (
            <div className="btn-group-red btn-group">
                <button id="toolbar-add" type="button" className="btn btn-sm md-skip dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i className="fa fa-plus" ></i>
                </button>
                <ul className="dropdown-menu-v2" role="menu">
                    <li className="active">
                        <a href="/">New Algorithm</a>
                    </li>
                    <li>
                        <a href="/">Share</a>
                    </li>
                    <li className="divider" />
                    <li>
                        <a href="/">Comments
                            <span className="badge badge-success">4</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
