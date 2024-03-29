import React, { Fragment } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Bundesliga from "./components/Bundesliga";
import PremierLeague from "./components/PremierLeague";
import LaLiga from "./components/LaLiga";
import Ligue1 from "./components/Ligue1";
import SerieA from "./components/SerieA";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Home from "./components/Home";
import { WithStyles, Theme, createStyles, withStyles } from "@material-ui/core";
import Germany from "./components/common/flags/Germany.png";
import England from "./components/common/flags/England.png";
import Spain from "./components/common/flags/Spain.png";
import France from "./components/common/flags/France.png";
import Italy from "./components/common/flags/Italy.png";

const styles = (theme: Theme) =>
  createStyles({
    app: {
      "& .MuiTabs-root": {
        backgroundColor: theme.palette.grey[900],
        boxShadow: "0px 0px 1px 0px",
      },
    },
    flag: {
      maxHeight: "40px",
      maxWidth: "60px",
    },
    englandFlag: {
      maxHeight: "40px",
      maxWidth: "70px",
    },
  });

function App(props: IAppProps) {
  const { classes } = props;
  const allTabs = ["/", "/bl", "/esp", "/epl", "/fr", "/it"];
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs
                value={"/" + location.pathname.split("/")[1]}
                variant="scrollable"
                scrollButtons="on"
              >
                <Tab
                  icon={<HomeIcon fontSize="large" htmlColor="white" />}
                  value={allTabs[0]}
                  component={Link}
                  to={allTabs[0]}
                />
                <Tab
                  icon={
                    <img
                      src={England}
                      alt="Premier League"
                      title="Premier League"
                      className={classes.englandFlag}
                    ></img>
                  }
                  value={allTabs[3]}
                  component={Link}
                  to={allTabs[3]}
                />
                <Tab
                  icon={
                    <img
                      src={Spain}
                      alt="La Liga"
                      title="La Liga"
                      className={classes.flag}
                    ></img>
                  }
                  value={allTabs[2]}
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  icon={
                    <img
                      src={Italy}
                      alt="Serie A"
                      title="Serie A"
                      className={classes.flag}
                    ></img>
                  }
                  value={allTabs[5]}
                  component={Link}
                  to={allTabs[5]}
                />
                <Tab
                  icon={
                    <img
                      src={Germany}
                      alt="Bundesliga"
                      title="Bundesliga"
                      className={classes.flag}
                    ></img>
                  }
                  value={allTabs[1]}
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  icon={
                    <img
                      src={France}
                      alt="Ligue 1"
                      title="Ligue 1"
                      className={classes.flag}
                    ></img>
                  }
                  value={allTabs[4]}
                  component={Link}
                  to={allTabs[4]}
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
                <Route path={allTabs[4]}>
                  <Ligue1 />
                </Route>
                <Route path={allTabs[5]}>
                  <SerieA />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

interface IAppProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(App);
