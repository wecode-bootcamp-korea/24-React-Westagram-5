import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import LoginKeum from './pages/bobaekeum/Login/LoginKeum';
import MainKeum from './pages/bobaekeum/Main/MainKeum';

import LoginKang from './pages/yeonokkang/Login/LoginKang';
import MainKang from './pages/yeonokkang/Main/MainKang';

import LoginJeong from './pages/haengunjeong/Login/LoginJeong';
import MainJeong from './pages/haengunjeong/Main/MainJeong';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login-keum" component={LoginKeum} />
          <Route exact path="/main-keum" component={MainKeum} />
          <Route exact path="/login-kang" component={LoginKang} />
          <Route exact path="/main-kang" component={MainKang} />
          <Route exact path="/login-jeong" component={LoginJeong} />
          <Route exact path="/main-jeong" component={MainJeong} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
