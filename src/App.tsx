import React, { Fragment } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Foo from "./components/Foo";
import Bar from "./components/Bar";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  const allTabs = ["/", "/esp", "/epl"];
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname} centered>
                <Tab
                  label="Bundesliga"
                  value="/"
                  component={Link}
                  to={allTabs[0]}
                />
                <Tab
                  label="La Liga"
                  value="/esp"
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  label="Premier League"
                  value="/epl"
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
