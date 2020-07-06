import { ACTION_TYPE } from '_redux/Action.js';
import { combineReducers } from 'redux';

const Merge = (prev, next) =>  ( Object.assign({}, prev, next) );

const titleReducer = (state = {}, action) => {
  if (action.type === ACTION_TYPE.UPDATE_TITLE) {
    return action.payload;
  }
  return state;
}

const mapStatusReducer = (state = false, action) => {
  if (action.type === ACTION_TYPE.UPDATE_MAP_STATUS) {
    return action.payload;
  }
  return state;
}

const countdownReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_WORK_MIN:
      return Merge(state, {workMin: action.payload});

    case ACTION_TYPE.UPDATE_WORK_SEC:
      return Merge(state, {workSec: action.payload});

    case ACTION_TYPE.UPDATE_BREAK_MIN:
      return Merge(state, {breakMin: action.payload});

    case ACTION_TYPE.UPDATE_BREAK_SEC:
      return Merge(state, {breakSec: action.payload});

    case ACTION_TYPE.UPDATE_COUNTDOWN:
      return action.payload;
  }
  return state
}

const isStartReducer = (state = {}, action) => {
  if (action.type === ACTION_TYPE.UPDATE_IS_START) {
    return action.payload;
  }
  return state;
}
const isBreakReducer = (state = {}, action) => {
  if (action.type === ACTION_TYPE.UPDATE_IS_BREAK) {
    return action.payload;
  }
  return state;
}

const regionReducer = (state = {}, action) => {
  if (action.type === ACTION_TYPE.UPDATE_REGION) {
    return action.payload;
  }
  return state;
}


const defaultCountdownReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_DEF_WORK_MIN:
      return Merge(state, {workMin: action.payload});

    case ACTION_TYPE.UPDATE_DEF_WORK_SEC:
      return Merge(state, {workSec: action.payload});

    case ACTION_TYPE.UPDATE_DEF_BREAK_MIN:
      return Merge(state, {breakMin: action.payload});

    case ACTION_TYPE.UPDATE_DEF_BREAK_SEC:
      return Merge(state, {breakSec: action.payload});
  }
  return state
}

export const Reducer = combineReducers({
  title: titleReducer,
  defaultCountdown: defaultCountdownReducer,
  countdown: countdownReducer,
  isStart: isStartReducer,
  isBreak: isBreakReducer,
  mapStatus: mapStatusReducer,
  region: regionReducer,
});

