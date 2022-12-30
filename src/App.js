import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./Header";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Joke from "./Joke";

function App() {

  return (
    <div>
      <Router basename="/portfolio">
        <Header/>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/works">
            <Works/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/joke">
            <Joke/>
          </Route>
          <Route exact path="/*">
            <Redirect to="/portfolio"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
