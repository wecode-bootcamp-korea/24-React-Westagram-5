
import React from 'react';

class LoginInput extends React.Component {
  render() {
    return (
      <div className="inputLayout">
        <div className="input">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.props.id}
            onChange={this.props.onChangeId}
            onKeyUp={this.props.loginkey}
          />
        </div>
      </div>
    );
  }
}
export default LoginInput;
