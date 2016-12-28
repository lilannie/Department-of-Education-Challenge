import React from 'react';

export default class DSProperties extends React.Component {
    render() {
        return (
            <div className="portlet box blue-soft">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="fa fa-gift"></i> Properties
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#portlet_tab_general" data-toggle="tab"> General</a>
                        </li>
                        <li>
                            <a href="#portlet_tab_element_content" data-toggle="tab"> Element Content</a>
                        </li>
                    </ul>
                </div>
                <div className="portlet-body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="portlet_tab_general">
                            <h4 className="block">Number of Elements</h4>
                            <form role="form">
                                <div className="row">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button className="btn default btn-sm" type="button">-</button>
                                            <input type="text" className="form-control" />
                                            <button className="btn default btn-sm" type="button">+</button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane" id="portlet_tab_element_content">
                            <p> Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo. </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
