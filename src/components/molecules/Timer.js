import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Styles } from '_styles/StyleSheet.js';
import { numFormat } from '_utils/Utils.js';
import MyTextInput from '_atoms/MyTextInput.js'

const Timer = (props) => {
  return (
    <View style={props.style}>
      <MyTextInput
        style={[Styles.timer]}
        value={numFormat(props.min)}
        onChangeText={props.minHandler}
        keyboardType='numeric' />
      <Text style={[Styles.timerLabel]}>:</Text>
      <MyTextInput
        style={[Styles.timer]}
        value={numFormat(props.sec)}
        onChangeText={props.secHandler}
        keyboardType='numeric' />
    </View>
  )
}
Timer.propTypes = {
  style: PropTypes.array,
  min: PropTypes.number,
  sec: PropTypes.number
}

export default Timer;
