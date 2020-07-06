import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const MyButton = (props) => {
  let backgroundColor = props.backgroundColor ? props.backgroundColor: '#3498DB';
  let buttonStyle = props.buttonStyle ? props.buttonStyle: {};
  let disabled = props.disabled ? true : false;
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      buttonStyle={buttonStyle}
      backgroundColor={backgroundColor}
      disabled={disabled} />
  )
}

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  buttonStyle: PropTypes.object,
  disabled: PropTypes.bool,
}

export default MyButton;