import { GetLocationPermission } from '_utils/Permissions.js';
import Geolocation from '@react-native-community/geolocation';

export const ACTION_TYPE = {
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_MAP_STATUS: 'UPDATE_MAP_STATUS',
  UPDATE_WORK_MIN: 'UPDATE_WORK_MIN',
  UPDATE_WORK_SEC: 'UPDATE_WORK_SEC',
  UPDATE_BREAK_MIN: 'UPDATE_BREAK_MIN',
  UPDATE_BREAK_SEC: 'UPDATE_BREAK_SEC',
  UPDATE_COUNTDOWN: 'UPDATE_COUNTDOWN',
  UPDATE_IS_START: 'UPDATE_IS_START',
  UPDATE_IS_BREAK: 'UPDATE_IS_BREAK',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_REGION: 'UPDATE_REGION',
  UPDATE_DEF_WORK_MIN: 'UPDATE_DEF_WORK_MIN',
  UPDATE_DEF_WORK_SEC: 'UPDATE_DEF_WORK_SEC',
  UPDATE_DEF_BREAK_MIN: 'UPDATE_DEF_BREAK_MIN',
  UPDATE_DEF_BREAK_SEC: 'UPDATE_DEF_BREAK_SEC',
};

export const updateUser = update => ({
  type: ACTION_TYPE.UPDATE_USER,
  payload: update,
})

export const updateMapStatus = update => ({
  type: ACTION_TYPE.UPDATE_MAP_STATUS,
  payload: update
})

export const updateWorkMin = update => ({
  type: ACTION_TYPE.UPDATE_WORK_MIN,
  payload: update,
})

export const updateWorkSec = update => ({
  type: ACTION_TYPE.UPDATE_WORK_SEC,
  payload: update,
})

export const updateBreakMin = update => ({
  type: ACTION_TYPE.UPDATE_BREAK_MIN,
  payload: update,
})

export const updateBreakSec = update => ({
  type: ACTION_TYPE.UPDATE_BREAK_SEC,
  payload: update,
})

export const updateCountdown = update => ({
  type: ACTION_TYPE.UPDATE_COUNTDOWN,
  payload: update,
})

export const updateIsBreak = update => ({
  type: ACTION_TYPE.UPDATE_IS_BREAK,
  payload: update,
})

export const updateIsStart = update => ({
  type: ACTION_TYPE.UPDATE_IS_START,
  payload: update,
})

export const updateTitle = update => ({
  type: ACTION_TYPE.UPDATE_TITLE,
  payload: update,
})

export const updateRegion = update => ({
  type: ACTION_TYPE.UPDATE_REGION,
  payload: update,
})

export const updateDefWorkMin = update => ({
  type: ACTION_TYPE.UPDATE_DEF_WORK_MIN,
  payload: update,
})

export const updateDefWorkSec = update => ({
  type: ACTION_TYPE.UPDATE_DEF_WORK_SEC,
  payload: update,
})

export const updateDefBreakMin = update => ({
  type: ACTION_TYPE.UPDATE_DEF_BREAK_MIN,
  payload: update,
})

export const updateDefBreakSec = update => ({
  type: ACTION_TYPE.UPDATE_DEF_BREAK_SEC,
  payload: update,
})

//ASYC ACTIONS
export const checkMapStatus = async (dispatch) => {
  let mapStatus = await GetLocationPermission();
  dispatch({
    type: ACTION_TYPE.UPDATE_MAP_STATUS,
    payload: mapStatus,
  })
}

export const currentLocation = async (dispatch) => {
  let { latitude, longitude } = await Geolocation.getCurrentPosition((info) => (info.coords), (error) => { console.log(error) });
  let latitudeDelta = 0.0922;
  let longitudeDelta = 0.0421;
  dispatch({
    type: ACTION_TYPE.UPDATE_REGION,
    payload: {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    },
  })
}