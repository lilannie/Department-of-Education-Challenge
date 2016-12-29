import React from 'react';
import ArrayGeneralForm from './array/ArrayGeneralForm';
import ArrayElementForm from './array/ArrayElementForm';

export default class DSProperties extends React.Component {
    render() {
        return (
            <div className="portlet box blue-soft">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="fa fa-bars"></i> Properties
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#portlet_tab_general" data-toggle="tab">General</a>
                        </li>
                        <li>
                            <a href="#portlet_tab_element_content" data-toggle="tab">Element Content</a>
                        </li>
                    </ul>
                </div>
                <div className="portlet-body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="portlet_tab_general">
                            <ArrayGeneralForm />
                        </div>
                        <div className="tab-pane" id="portlet_tab_element_content">
                            <ArrayElementForm />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
