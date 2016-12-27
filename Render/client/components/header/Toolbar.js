import React from 'react';

import Actions from './toolbar/Actions';
import User from './toolbar/User';

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="topbar-actions">

                <Actions/>
                <User/>
            </div>
        );
    }
}
