import React from 'react';
import './sass/app.scss';
import Header from './components/Header';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
    componentDidMount() {

    }
}
