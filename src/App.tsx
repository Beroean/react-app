import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Home, Foo, Bar} from './components/pages';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <nav>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foo">Foo</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
        </ul>

        <hr />
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
