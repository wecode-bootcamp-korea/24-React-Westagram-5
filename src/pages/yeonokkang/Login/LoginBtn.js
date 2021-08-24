import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginBtn extends React.Component {
  handleLoginBtn = () => {
    this.setState({});
  };

  render() {
    const { isActivate } = this.props;

    return (
      <div
        className="sign-in"
        style={
          isActivate
            ? { backgroundColor: 'blue' }
            : { backgroundColor: 'lightblue' }
        }
      >
        <Link to={isActivate ? '/main-kang' : '#'}>Login</Link>
      </div>
    );
  }
}
