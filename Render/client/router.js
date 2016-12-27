import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';

import Home from './Home';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        {/* add the routes here */}
    </Router>,
  document.getElementById('root')
);
