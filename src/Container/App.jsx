import React from "react";
import HomePage from "../Pages/homepage/homepage.component";
import "../SASS/main.scss";
import { Route, Switch } from "react-router-dom";

const SketchesPage = () => (
  <>
    <div>
      <h1>Sketches Page</h1>
    </div>
  </>
);
function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route path={"/sketches"} component={SketchesPage} />
      </Switch>
    </>
  );
}

export default App;
