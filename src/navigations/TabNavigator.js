import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Break from '_organisms/Break.js';
import Work from '_organisms/Work.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import NavNames from '_navigations/NavNames.js';

const TabNav = createBottomTabNavigator();

const TabNavigator = (propz) => {

  return (
    <TabNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name === 'WORK' ? faBook : faCoffee;
          let colour = focused ? '#3498DB' : '#273746';

          return <FontAwesomeIcon color={colour} size={size} icon={iconName}
          />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'black',
      }}
    >
      <TabNav.Screen name={NavNames.WORK}
        options={{ title: 'Back to Work' }}
      >
        {props => <Work {...props} {...propz} />}
      </TabNav.Screen>
      <TabNav.Screen name={NavNames.BREAK}
        options={{ title: 'Take a Break' }}
      >
        {props => <Break {...props} {...propz} />}
      </TabNav.Screen>
    </TabNav.Navigator >
  )
}

const mapStateToProps = state => ({ isStart: state.isStart });

export default connect(mapStateToProps)(TabNavigator);