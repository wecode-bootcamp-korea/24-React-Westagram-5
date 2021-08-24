import React from 'react';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
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

  render() {
    return (
      <>
        <div className="id-wrapper">
          <input
            onChange={this.handleIdInput}
            value={this.state.id}
            className="id-input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="pw-wrapper">
          <input
            onChange={this.handlePwInput}
            value={this.state.pw}
            className="pw-input"
            type="password"
            placeholder="비밀번호"
          />
        </div>
      </>
    );
  }
}

export default LoginInput;
