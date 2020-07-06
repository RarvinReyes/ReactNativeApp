import React from 'react';
import { View } from 'react-native';
import { Styles } from '_styles/StyleSheet.js';
import PropTypes from 'prop-types';
import TimerButtons from '_molecules/TimerButtons.js'
import Timer from '_molecules/Timer.js';

import { updateBreakMin, updateBreakSec, updateDefBreakMin, updateDefBreakSec, } from '_redux/Action.js';
import { connect } from 'react-redux';

const Break = (props) => {

  const handleBreakMin = value => {
    props.dispatch(updateBreakMin(parseInt(value)));
    props.dispatch(updateDefBreakMin(parseInt(value)));
  }
  
  const handleBreakSec = value => {
    props.dispatch(updateBreakSec(parseInt(value)));
    props.dispatch(updateDefBreakSec(parseInt(value)));
  }

  return (
    <View style={[Styles.column, Styles.height_100, Styles.center]}>
      <Timer
        style={[Styles.row, Styles.center]}
        min={props.countdown.breakMin}
        minHandler={handleBreakMin}
        sec={props.countdown.breakSec}
        secHandler={handleBreakSec}
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


Break.propTypes = {
  stopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ countdown: state.countdown, isStart: state.isStart });

export default connect(mapStateToProps)(Break);
