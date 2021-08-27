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
    const idValidate = this.state.id.includes('@');
    const pwValidate = this.state.pw.length > 3;

    this.setState({ isActivate: idValidate && pwValidate });
  };

  render() {
    const { id, pw, isActivate } = this.state;

    return (
      <>
        <div className="input-wrapper">
          <Input
            activated={this.handleActivate}
            handleInput={this.handleIdInput}
            value={id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="text"
            handleKeyup={this.handleKeyup}
          />
        </div>
        <div className="input-wrapper">
          <Input
            activated={this.handleActivate}
            handleInput={this.handlePwInput}
            value={pw}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <LoginBtn isActivate={isActivate} />
      </>
    );
  }
}

export default LoginInput;
