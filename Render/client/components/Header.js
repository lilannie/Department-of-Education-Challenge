import React from 'react';

import MobileNav from './header/nav/MobileNav';
import Logo from './header/Logo';
import Search from './header/Search';
import Toolbar from './header/Toolbar';
import Nav from './header/nav/Nav';

export default class Header extends React.Component {
    render() {
        return (

                <header className="page-header">
                    <nav className="navbar mega-menu" role="navigation">
                        <div className="container-fluid">
                            <div className="clearfix navbar-fixed-top">

                                <MobileNav />
                                <Logo />
                                <Search />
                                <Toolbar/>

                            </div>

                            <Nav />
                        </div>
                    </nav>
                </header>

        );
    }
    componentDidMount() {

    }
}
