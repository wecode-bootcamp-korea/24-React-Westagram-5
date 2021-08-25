import React from 'react';

class PwLoginInput extends React.Component {
  render() {
    return (
      <div className="inputLayout">
        <div className="input">
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            value={this.props.pw}
            onChange={this.props.onchangePw}
            onKeyUp={this.props.loginkey}
          />
        </div>
      </div>
    );
  }
}
export default PwLoginInput;
