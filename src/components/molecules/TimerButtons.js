import React from 'react';
import { View, Text } from 'react-native';
import MyButton from '_atoms/MyButton.js';

const TimerButtons = (props) => {
  return (
    <View style={props.style} >
      {props.isStart ?
        (<MyButton title={props.stopTitle} onPress={() => props.stopTimer()} />) :
        (<MyButton title={props.startTitle} onPress={() => props.startTimer(props.navigation)} />)
      }
      <Text>  </Text>
      <MyButton title={props.resetTitle} onPress={() => props.resetTimer()} />
    </View>
  )
}

export default TimerButtons;