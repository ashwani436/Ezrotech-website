import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  return (
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
