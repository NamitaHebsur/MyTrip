import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './MyTrip/home/Home';
import Contact from './MyTrip/contactUs/Contact';
import Login from './MyTrip/login/Login';
import Register from './MyTrip/register/Register';
import TripPackage from './MyTrip/tripPack/TripPack';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="header-Y">
      <Link className="brand" to='/'><img src="new-logo.jpg" className="n1"/>MyTrip</Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            <li><Link to="/tripPack">Trip Package</Link></li>
        </ul>
        <ul className="ali-right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contactUs" component={Contact}/>
            <Route path="/tripPack" component={TripPackage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

