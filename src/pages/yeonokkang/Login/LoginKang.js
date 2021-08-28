import React from 'react';
import './LoginKang.scss';
import LoginValidation from './components/LoginValidation';

class LoginKang extends React.Component {
  render() {
    return (
      <div className="whole-area">
        <section>
          <main className="login-main">
            <div className="login-wrapper">
              <div className="brand-logo">westagram</div>
              <LoginValidation />
            </div>
            <div className="forgot-pw">
              <a href="https://www.instagram.com/accounts/password/reset/">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </main>

          <footer>
            <span>© 2021 Instagram from Facebook</span>
          </footer>
        </section>
      </div>
    );
  }
}

export default LoginKang;
