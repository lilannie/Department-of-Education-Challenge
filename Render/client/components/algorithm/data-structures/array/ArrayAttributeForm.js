import React from 'react';

export default class ArrayAttributeForm extends React.Component {
    render() {
        return (
            <div className="form-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mt-repeater-input">
                            <h4 className="block">Type</h4>
                            <select className="form-control" name="data-structure-content[0][type]">
                                <option>Integer</option>
                                <option>String</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="mt-repeater-input">
                            <h4 className="block">Name</h4>
                            <input className="form-control" type="text" name="data-structure-content[1][name]"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
