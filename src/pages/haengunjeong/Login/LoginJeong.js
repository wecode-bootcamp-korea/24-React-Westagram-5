import React from 'react';
import './LoginJeong.scss';
import { Link } from 'react-router-dom';

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

  checkValid = () => {
    const { idVal, pwVal } = this.state;
    return idVal.includes('@') && pwVal.length >= 5;
  };

  handleLogin = () => {
    // fetch('http://10.58.0.73:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     login_email: this.state.idVal,
    //     login_password: this.state.pwVal,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
    // if (this.checkValid()) {
    //   this.props.history.push('/main-jeong');
    // }

    this.checkValid() && this.props.history.push('/main-jeong');
  };

  render() {
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>we:stagram</h1>
          <form className="loginForm" action="">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="userPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={this.checkValid() ? 'loginBtn' : 'loginBtn disabled'}
              type="button"
              onClick={this.handleLogin}
            >
              로그인
            </button>
          </form>
          <Link to="/">비밀번호를 잊으셨나요?</Link>
        </div>
      </main>
    );
  }
}

export default LoginJeong;
