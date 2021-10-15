import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
