import React, { Fragment } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Bundesliga from "./components/Bundesliga";
import PremierLeague from "./components/PremierLeague";
import LaLiga from "./components/LaLiga";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  // TODO: Give top header a different theme from subheader. Replace league names with icons
  // TODO: Add content to Home page
  // Top 10 scorers bar chart
  // Comparison of team metrics interactive chart
  const allTabs = ["/", "/bl", "/esp", "/epl"];
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={"/" + location.pathname.split("/")[1]} centered>
                <Tab
                  label="Home"
                  value={allTabs[0]}
                  component={Link}
                  to={allTabs[0]}
                />
                <Tab
                  label="Bundesliga"
                  value={allTabs[1]}
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  label="La Liga"
                  value={allTabs[2]}
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  label="Premier League"
                  value={allTabs[3]}
                  component={Link}
                  to={allTabs[3]}
                />
              </Tabs>
              <Switch>
                <Route exact path={allTabs[0]}>
                  <div>Home</div>
                </Route>
                <Route path={allTabs[1]}>
                  <Bundesliga />
                </Route>
                <Route path={allTabs[2]}>
                  <LaLiga />
                </Route>
                <Route path={allTabs[3]}>
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
