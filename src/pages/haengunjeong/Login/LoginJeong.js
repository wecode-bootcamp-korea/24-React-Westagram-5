import React from 'react';
import './LoginJeong.scss';
import { withRouter } from 'react-router-dom';

class LoginJeong extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>we:stagram</h1>
          <form className="loginForm" action="">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button id="loginBtn" type="button">
              로그인
            </button>
          </form>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </main>
    );
  }
}

export default LoginJeong;
