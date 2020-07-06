import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '_redux/Reducer.js';
import Middleware from '_redux/Middleware.js';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

const defaultState = {
  title: 'Pomodoro App Timer',
  defaultCountdown: {
    workMin: 25,
    workSec: 0,
    breakMin: 5,
    breakSec: 0,
  },
  countdown: {
    workMin: 0,
    workSec: 0,
    breakMin: 0,
    breakSec: 0,
  },
  isStart: false,
  isBreak: false,
  mapStatus: false,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  }
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const Store = createStore(persistedReducer, defaultState, applyMiddleware(Middleware));
export const Persistor = persistStore(Store);