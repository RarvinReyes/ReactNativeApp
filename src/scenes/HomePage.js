import React from 'react';
import { View, Text, Button, KeyboardAvoidingView } from 'react-native';
import { Styles } from '../styles/StyleSheet.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Button title="Settings" onPress={() => this.props.navigation.navigate('Settings')} />
        <Button title={this.props.title} onPress={() => this.props.navigation.navigate('Pomodoro Timer')} />
      </View>
    )
  }
}