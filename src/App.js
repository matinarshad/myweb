import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
