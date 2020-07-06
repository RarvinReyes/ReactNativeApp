import React from 'react';
import { View } from 'react-native';
import { Styles } from '_styles/StyleSheet.js';
import PropTypes from 'prop-types';
import TimerButtons from '_molecules/TimerButtons.js'
import Timer from '_molecules/Timer.js';

import { updateWorkMin, updateWorkSec } from '_redux/Action.js';
import { connect } from 'react-redux';

const Work = props => {

  const handleWorkMin = value => {
    props.dispatch(updateWorkMin(parseInt(value)));
  }
  
  const handleWorkSec = value => {
    props.dispatch(updateWorkSec(parseInt(value)));
  }
  
  return (
    <View style={[Styles.column, Styles.height_100, Styles.center]}>
      <Timer
        style={[Styles.row, Styles.center]}
        min={props.countdown.workMin}
        minHandler={handleWorkMin}
        sec={props.countdown.workSec}
        secHandler={handleWorkSec}
      />
      <TimerButtons
        style={[Styles.row, Styles.center]}
        isStart={props.isStart}
        stopTitle='STOP'
        stopTimer={props.stopTimer}
        startTitle='START'
        startTimer={props.startTimer}
        resetTitle='RESET'
        resetTimer={props.resetTimer}
        navigation={props.navigation}
      />
    </View >
  )
}

Work.propTypes = {
  stopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ countdown: state.countdown, isStart: state.isStart });

export default connect(mapStateToProps)(Work);
