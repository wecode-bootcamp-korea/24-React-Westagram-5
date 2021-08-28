import React from 'react';

export default class Input extends React.Component {
  render() {
    const { activated, handleInput, value, type, placeholder } = this.props;
    return (
      <input
        onKeyUp={activated}
        onChange={handleInput}
        name={type === 'text' ? 'id' : 'pw'}
        value={value}
        className="user-input"
        type={type}
        placeholder={placeholder}
      />
    );
  }
}