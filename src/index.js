import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Store, Persistor } from '_redux/Store.js';
import { checkMapStatus } from '_redux/Action.js';
import DrawerNavigator from '_navigations/DrawerNavigator.js';
import { PersistGate } from 'redux-persist/integration/react'

Store.dispatch(checkMapStatus);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}
