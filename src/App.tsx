import React, { Fragment } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Bundesliga from "./components/Bundesliga";
import PremierLeague from "./components/PremierLeague";
import LaLiga from "./components/LaLiga";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Home from "./components/Home";

function App() {
  // TODO: Give top header a different theme from subheader
  // TODO: Add content to Home page
  // TODO: Integrate with TMDB and split site into two sections: 1) football 2) movies
  // https://www.themoviedb.org/documentation/api
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
                  icon={<HomeIcon fontSize="large" />}
                  value={allTabs[0]}
                  component={Link}
                  to={allTabs[0]}
                />
                <Tab
                  icon={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/800px-Bundesliga_logo_%282017%29.svg.png"
                      width="40"
                      height="40"
                    ></img>
                  }
                  value={allTabs[1]}
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  icon={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/3/35/La_Liga.png"
                      width="40"
                      height="40"
                    ></img>
                  }
                  value={allTabs[2]}
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  icon={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png"
                      width="80"
                      height="40"
                    ></img>
                  }
                  value={allTabs[3]}
                  component={Link}
                  to={allTabs[3]}
                />
              </Tabs>
              <Switch>
                <Route exact path={allTabs[0]}>
                  <Home />
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
