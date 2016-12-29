import React from 'react';

export default class ArrayGeneralForm extends React.Component {
    render() {
        return (
            <form role="form">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="block">Number of Elements</h4>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn default" type="button">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </span>
                            <input type="text" className="form-control" />
                            <span className="input-group-btn">
                                <button className="btn default" type="button">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="block">Comparator</h4>
                        <select className="form-control" >
                            <option>Comparator 1</option>
                            <option>Comparator 2</option>
                        </select>
                    </div>
                </div>
            </form>
        );
    }
}
