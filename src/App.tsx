import React, { Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Foo from './components/home/foo';
import Bar from './components/home/bar';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function App() {

  const allTabs = ['/', '/foo', '/bar'];
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname} centered>
                <Tab label="Home" value="/" component={Link} to={allTabs[0]} />
                <Tab label="Foo" value="/foo" component={Link} to={allTabs[1]} />
                <Tab
                  label="Bar"
                  value="/bar"
                  component={Link}
                  to={allTabs[2]}
                />
              </Tabs>
              <Switch>
                <Route exact path={allTabs[0]}>
                  <Home />
                </Route>
                <Route path={allTabs[1]}>
                  <Foo />
                </Route>
                <Route path={allTabs[2]}>
                  <Bar />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
