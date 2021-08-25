import React from 'react';
import './LoginKeum.scss';
import LoginInput from './LoginInput';
import PwLoginInput from './PwLoginInput';
import LoginButton from './LoginButton';

class LoginKeum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      buttonChange: 'btn',
    };
  }
  onchangeId = e => {
    this.setState({
      id: e.target.value,
    });
  };
  onchangePw = e => {
    this.setState({
      pw: e.target.value,
    });
  };
  loginkey = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 4) {
      this.setState({
        buttonChange: 'active',
      });
    } else {
      this.setState({
        buttonChange: 'btn',
      });
    }
  };

  handleLogin = () => {
    fetch('http://10.58.1.135:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert(`Welcome ${this.state.id}`);
          console.log(response);
        } else {
          alert('Login failed');
          console.log(response);
        }
      });
  };

  handleSignup = () => {
    fetch('http://10.58.1.135:8000/user/sign_up', {
      method: 'POST',
      body: JSON.stringify({
        name: 'bobo',
        email: this.state.id,
        password: this.state.pw,
        phone_number: '01012341234',
        address: '서울시 강남구 테헤란로',
      }),
    })
      .then(response => response.json())
      .then(response => console.log(response));
  };
  render() {
    return (
      <div className="all_layout">
        <div className="logWrap">
          <div className="titleLayout">
            <div className="westagram_title">westagram</div>
          </div>
          <LoginInput
            id={this.state.id}
            onChangeId={this.onchangeId}
            loginkey={this.loginkey}
          />
          <PwLoginInput
            pw={this.state.pw}
            onchangePw={this.onchangePw}
            loginkey={this.loginkey}
          />
          <LoginButton
            handleLogin={this.handleLogin}
            buttonChange={this.state.buttonChange}
          />
          <footer>
            <span className="forgot">비밀번호를 잊으셨나요?</span>
          </footer>
        </div>
      </div>
    );
  }
}
export default LoginKeum;
