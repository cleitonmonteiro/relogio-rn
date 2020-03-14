import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {defaultStyles} from '../styles';

export default class RelogioScreen extends Component {
  render() {
    return (
      <View style={defaultStyles.center}>
        <Text>Relogio!</Text>
      </View>
    );
  }
}
