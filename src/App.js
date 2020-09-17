import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

/* We NEED React-ROUTER, it gives the app feel of desktop apps so you're 
switching between pages without talking to the server thus the page doesn't 
reload. */

  /* localhost.com */
  /* localhost.com/checkout */
  /* localhost.com/login */

function App() {
  const [{user}, dispatch] = useStateValue();

  // useEffect: runs based on a condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // user logged out ..
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });    

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    }

  }, []);
  console.log(' USER IS >>>>',user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header/>
            <Home/>     
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
