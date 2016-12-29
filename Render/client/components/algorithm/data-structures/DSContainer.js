import React from 'react';
import DSDescription from './DSDescription'
import DSProperties from './DSProperties';
import DSVisualization from './DSVisualization';

export default class DSContainer extends React.Component {
    render() {
        return (
            <div className="portlet box blue-ebonyclay">
                <div className="portlet-title">
                    <div className="caption">
                         {this.props.type}
                    </div>
                    <div className="tools">
                        <a href="javascript:;" className="collapse"> </a>

                        <a href="" className="fullscreen"> </a>
                        <a href="javascript:;" className="remove"> </a>
                    </div>
                </div>
                <div className="portlet-body">
                    <DSDescription/>

                    <div className="row">
                        <div className="col-md-6">
                            <DSProperties />
                        </div>
                        <div className="col-md-6">
                            <DSVisualization />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
