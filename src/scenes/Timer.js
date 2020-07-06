import React from 'react';
import TabNavigator from '_navigations/TabNavigator.js';
import { connect } from 'react-redux';
import { Vibration } from 'react-native';
import NavNames from '_navigations/NavNames.js';
import { updateIsStart, updateIsBreak, updateCountdown } from '_redux/Action.js';

class Timer extends React.Component {

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  startTimer = (navigation) => {
    this.countdownInterval = setInterval(() => this.timerCountDown(navigation), 1000);
    this.props.dispatch(updateIsStart(true));
  }

  stopTimer = () => {
    clearInterval(this.countdownInterval);
    this.props.dispatch(updateIsStart(false));
  }

  resetTimer = () => {
    clearInterval(this.countdownInterval);
    this.props.dispatch(updateIsStart(false));
    this.props.dispatch(updateIsBreak(false));
    this.props.dispatch(updateCountdown({ ...this.props.defaultCountdown }));
  }

  timerCountDown = (navigation) => {

    let countdown = { ...this.props.countdown }
    let isBreak = this.props.isBreak;
    let defaultCountdown = { ...this.props.defaultCountdown }

    if (!isBreak) {
      if (countdown.workMin === 0 && countdown.workSec === 1) {
        countdown.workMin = defaultCountdown.workMin;
        countdown.workSec = defaultCountdown.workSec;
        isBreak = !isBreak;
        Vibration.vibrate();
        navigation.navigate(NavNames.BREAK);
      } else if (countdown.workMin === 0 && countdown.workSec > 1) {
        countdown.workSec -= 1;
      } else if (countdown.workMin > 0 && countdown.workSec > 0) {
        countdown.workSec -= 1;
      } else if (countdown.workMin > 0 && countdown.workSec === 0) {
        countdown.workSec = 59;
        countdown.workMin -= 1;
      } else {
        isBreak = !isBreak;
        Vibration.vibrate();
        navigation.navigate(NavNames.BREAK);
      }
    } else {
      if (countdown.breakMin === 0 && countdown.breakSec === 1) {
        countdown.breakMin = defaultCountdown.breakMin;
        countdown.breakSec = defaultCountdown.breakSec;
        isBreak = !isBreak;
        Vibration.vibrate();
        navigation.navigate(NavNames.WORK);
      } else if (countdown.breakMin === 0 && countdown.breakSec > 1) {
        countdown.breakSec -= 1;
      } else if (countdown.breakMin > 0 && countdown.breakSec > 0) {
        countdown.breakSec -= 1;
      } else if (countdown.breakMin > 0 && countdown.breakSec === 0) {
        countdown.breakSec = 59;
        countdown.breakMin -= 1;
      } else {
        isBreak = !isBreak;
        Vibration.vibrate();
        navigation.navigate(NavNames.WORK);
      }
    }

    this.props.dispatch(updateIsBreak(isBreak));
    this.props.dispatch(updateCountdown(countdown));
  }

  render() {
    return (
      <TabNavigator
        timerCountDown={this.timerCountDown}
        startTimer={this.startTimer}
        stopTimer={this.stopTimer}
        resetTimer={this.resetTimer}
      />
    )
  }
}

const mapStateToProps = state => ({
  defaultCountdown: state.defaultCountdown,
  countdown: state.countdown,
  isStart: state.isStart,
  isBreak: state.isBreak,
  timerInterval: state.timerInterval,
});

export default connect(mapStateToProps)(Timer)