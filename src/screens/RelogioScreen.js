import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

import {defaultStyles, } from '../styles';

export default class RelogioScreen extends Component {
  state = {
    horario: new Date(),
  }

  componentDidMount() {
    this.relogio = setInterval(() => this.setState({horario: new Date()}), 1000);
  }

  componentWillUnmount() {
    this.relogio = null;
  }

  //<Text style={styles.timeNow}>{this.state.horario.toLocaleTimeString()}</Text>

  // <View style={defaultStyles.center}>

  // </View>

  render() {
    return (
      <View>
        <ImageBackground source={require('../images/clock.png')} style={{width: 350, height: 350, position: 'relative', marginLeft: 25, marginTop: 150}}>
          <View style={defaultStyles.center}>
            <Text style={styles.timeNow}>{this.state.horario.toLocaleTimeString()}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeNow: {
    // textShadowRadius: 7,
    fontSize: 60,
    color: '#FF7F50',
    fontWeight: 'bold',
  },
});