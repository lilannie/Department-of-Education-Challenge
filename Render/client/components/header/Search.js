import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <form className="search" action="" method="">
                <input type="name" className="form-control" name="query" placeholder="Search..." />
                    <a href="" className="btn submit md-skip">
                        <i className="fa fa-search" ></i>
                    </a>
            </form>
        );
    }
}