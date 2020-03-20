import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';

import { defaultStyles } from '../styles';

export default class CronometroScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={require('../images/crono.png')} style={{width: 450, height: 450, position: 'relative', marginLeft: -30, marginTop: 70}}>
          <View style={defaultStyles.center}>
            <Text></Text>
          </View>
        </ImageBackground>
        <TouchableHighlight
         style={defaultStyles.button}
         onPress={this.onPress}
        >
         <Text> Touch Here </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
