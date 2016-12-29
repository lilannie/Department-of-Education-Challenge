import React from 'react';
import ArrayAttributeForm from './ArrayAttributeForm'

export default class ArrayElementForm extends React.Component {
    render() {
        return (
            <form role="form">
                <ArrayAttributeForm />
                <hr />
                <a href="javascript:;" data-repeater-create className="btn btn-success mt-repeater-add">
                    <i className="fa fa-plus"></i>
                    Add
                </a>
            </form>
        );
    }
}
