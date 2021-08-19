import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginKeum from './pages/bobaekeum/Login/LoginKeum';
import LoginKang from './pages/yeonokkang/Login/LoginKang';
import LoginJeong from './pages/haengunjeong/Login/LoginJeong';
import MainKeum from './pages/bobaekeum/Main/MainKeum';
import MainKang from './pages/yeonokkang/Main/MainKang';
import MainJeong from './pages/haengunjeong/Main/MainJeong';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-keum" component={LoginKeum} />
          <Route exact path="/login-kang" component={LoginKang} />
          <Route exact path="/login-jeong" component={LoginJeong} />
          <Route exact path="/main-keum" component={MainKeum} />
          <Route exact path="/main-kang" component={MainKang} />
          <Route exact path="/main-jeong" component={MainJeong} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
