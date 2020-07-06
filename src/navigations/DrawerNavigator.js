import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Timer from '_scenes/Timer.js';
import Settings from '_scenes/Settings.js';
import Map from '_scenes/Map.js';
import { connect } from 'react-redux';
import NavNames from '_navigations/NavNames.js';

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = props => (
  <DrawerNav.Navigator>
    <DrawerNav.Screen name={NavNames.TIMER} options={{ title: props.title }}>
      {props => <Timer {...props} />}
    </DrawerNav.Screen>
    <DrawerNav.Screen name={NavNames.SETTINGS} options={{ title: 'Settings' }}>
      {props => <Settings {...props} />}
    </DrawerNav.Screen>
    {props.mapStatus &&
      <DrawerNav.Screen name={NavNames.MAP} options={{ title: 'Map' }} >
        {props => <Map {...props} />}
      </DrawerNav.Screen>
    }
  </DrawerNav.Navigator>
)

const mapStateToProps = state => ({ title: state.title, mapStatus: state.mapStatus });

export default connect(mapStateToProps)(DrawerNavigator);

