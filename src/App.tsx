import React, { Fragment } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Bundesliga from "./components/Bundesliga";
import PremierLeague from "./components/PremierLeague";
import LaLiga from "./components/LaLiga";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  // TODO: Add vertical tabs within each league for different views: https://material-ui.com/components/tabs/#vertical-tabs
  // Top 10 scorers bar chart
  // Comparison of team metrics interactive chart
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
                  <Bundesliga />
                </Route>
                <Route path={allTabs[1]}>
                  <LaLiga />
                </Route>
                <Route path={allTabs[2]}>
                  <PremierLeague />
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
