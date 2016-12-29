import React from 'react';
import DSContainer from './DSContainer';
import DSToolbar from './DSToolbar';

export default class DSCreateContainer extends React.Component {
    render() {
        return (
        <div className="col-md-12">
            <div className="portlet light bordered">
                <DSToolbar/>

                <DSContainer type="Array" />
            </div>
        </div>
        );
    }
}
