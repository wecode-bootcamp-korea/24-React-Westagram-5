import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginBtn extends React.Component {
  render() {
    const { isActivate } = this.props;

    return (
      <div className={isActivate ? 'active' : 'inactive'}>
        <Link to={isActivate ? '/main-kang' : '#'}>Login</Link>
      </div>
    );
  }
}
