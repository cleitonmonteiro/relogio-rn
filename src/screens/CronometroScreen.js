import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {defaultStyles} from '../styles';

export default class CronometroScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.center}>
        <Text>Cronometro!</Text>
      </View>
    );
  }
}
