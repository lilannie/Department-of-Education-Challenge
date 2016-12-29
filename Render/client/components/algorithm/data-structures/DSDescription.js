import React from 'react';

export default class DSDescription extends React.Component {
    render() {
        return (
            <div className="portlet box blue-soft">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="fa fa-info"></i> Description
                    </div>
                    <div className="tools">
                        <a href="javascript:;" className="collapse"> </a>
                    </div>
                </div>
                <div className="portlet-body">
                    <p>
                        An array is a data structure that contains a group of elements. Typically these elements are all
                        of the same data type, such as an integer or string. Arrays are commonly used in computer
                        programs to organize data so that a related set of values can be easily sorted or searched.
                        <br/>
                        <br/>
                        For example, a search engine may use an array to store Web pages found in a search performed by
                        the user. When displaying the results, the program will output one element of the array at a
                        time. This may be done for a specified number of values or until all the values stored in the
                        array have been output. While the program could create a new variable for each result found,
                        storing the results in an array is much more efficient way to manage memory.
                        <br/>
                        <br/>
                        The syntax for storing and displaying the values in an array typically looks something like
                        this:
                        <br/>
                        <br/>
                        arrayname[0] = "This ";
                        <br/>
                        arrayname[1] = "is ";
                        <br/>
                        arrayname[2] = "pretty simple.";
                    </p>
                </div>
            </div>
        );
    }
}
