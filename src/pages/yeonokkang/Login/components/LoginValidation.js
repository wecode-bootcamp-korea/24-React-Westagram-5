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

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleActivate = () => {
    const { id, pw } = this.state;

    const idValidate = id.includes('@');
    const pwValidate = pw.length > 3;

    this.setState({ isActivate: idValidate && pwValidate });
  };

  render() {
    const { handleActivate, handleInputs } = this;
    const { id, pw, isActivate } = this.state;

    return (
      <>
        <Input
          activated={handleActivate}
          handleInput={handleInputs}
          value={id}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
        />
        <Input
          activated={handleActivate}
          handleInput={handleInputs}
          value={pw}
          type="password"
          placeholder="비밀번호"
        />
        <LoginBtn isActivate={isActivate} />
      </>
    );
  }
}

export default LoginInput;
