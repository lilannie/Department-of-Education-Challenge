import React from 'react';
import './sass/app.scss';
import Header from './components/Header';
import AlgoCreateContainer  from './components/algorithm/AlgoCreateContainer';


export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <AlgoCreateContainer/>
            </div>
        );
    }
    componentDidMount() {

    }
}
