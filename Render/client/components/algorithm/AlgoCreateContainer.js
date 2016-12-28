import React from 'react';
import AlgoToolbar from './AlgoToolbar';
import DSCreateContainer from './data-structures/DSCreateContainer';

export default class AlgoCreateContainer extends React.Component {
    render() {
        return (
            <div className="content-fluid">
                <div className="page-content">
                    <div className="breadcrumbs">
                        <h1>Create An Algorithm</h1>
                    </div>
                    <div className="page-content-container">
                        <div className="page-content-row">

                            <AlgoToolbar/>

                            <div className="page-content-col">
                                <DSCreateContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
