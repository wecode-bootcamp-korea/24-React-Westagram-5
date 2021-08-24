import React from 'react';
import LoginBtn from './LoginBtn';
import Input from './Input';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      isActivate: false,
    };
  }

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });
  };

  handleActivate = (id, pw) => {
    this.setState({
      isActivate:
        this.state.id.includes('@') && this.state.pw.length > 3 ? true : false,
    });
  };

  render() {
    return (
      <>
        <div className="input-wrapper">
          <Input
            activated={this.handleActivate}
            handleInput={this.handleIdInput}
            value={this.state.id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="text"
            handleKeyup={this.handleKeyup}
          />
        </div>
        <div className="input-wrapper">
          <Input
            activated={this.handleActivate}
            handleInput={this.handlePwInput}
            value={this.state.pw}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <LoginBtn isActivate={this.state.isActivate} />
      </>
    );
  }
}

export default LoginInput;
