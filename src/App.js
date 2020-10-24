import React from 'react';
import  Login  from './components/Login';
import Signup from "./components/Signup";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';

export const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
      <Route path="/product" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Signup} />
       
      </Switch>
      </Router>
      </Provider>
  );
};
export default App;