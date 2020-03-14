import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import CronometroScreen from './screens/CronometroScreen';
import RelogioScreen from './screens/RelogioScreen';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Relógio') {
                iconName = focused ? 'clockcircle' : 'clockcircleo';
                return (
                  <IconAntDesign name={iconName} size={size} color={color} />
                );
              } else if (route.name === 'Cronometro') {
                iconName = focused ? 'hourglass-1' : 'hourglass-o';
                return (
                  <IconFontAwesome name={iconName} size={size} color={color} />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Relógio" component={RelogioScreen} />
          <Tab.Screen name="Cronometro" component={CronometroScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
