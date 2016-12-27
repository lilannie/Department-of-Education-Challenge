import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <a id="index" className="page-logo" href="/">
                <img src="/images/logo.png" alt="Logo" />
            </a>
        );
    }
}