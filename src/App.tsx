import React, { Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { Home, Foo, Bar } from './components/pages';
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
                <Route exact path={allTabs[0]} component={Home} />
                <Route path={allTabs[1]} component={Foo} />
                <Route path={allTabs[2]} component={Bar} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
