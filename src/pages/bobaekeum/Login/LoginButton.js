
import React from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {
  render() {
    return (
      <div className="btnLayout" onKeyUp={this.props.loginkey}>
        <div className="btn_wrap">
          <Link>
            <button
              className={this.props.buttonChange}
              onClick={this.props.handleLogin}
            >
              로그인
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default LoginButton;
