import React from 'react';
import './sass/app.scss';
import Header from './components/Header';
import CreateContainer  from './components/algorithm/CreateContainer';


export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <CreateContainer/>
            </div>
        );
    }
    componentDidMount() {

    }
}
