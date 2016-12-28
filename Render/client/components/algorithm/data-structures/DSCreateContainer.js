import React from 'react';
import DSContainer from './DSContainer';
import DSToolbar from './DSToolbar';

export default class DSCreateContainer extends React.Component {
    render() {
        return (
        <div className="col-md-12">
            <h1 className="blue-ebonyclay">Data Structures</h1>

            <DSToolbar/>

            <DSContainer type="Array" />
        </div>
        );
    }
}
