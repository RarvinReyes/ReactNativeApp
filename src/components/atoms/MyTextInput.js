import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const myTextInput = (props) => {
  let keyboardType = props.keyboardType ? props.keyboardType: 'default';
  let style = props.style ? props.style: [];
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      style={style}
      keyboardType={keyboardType} />
  )
}

myTextInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  style: PropTypes.array,
}

export default myTextInput;