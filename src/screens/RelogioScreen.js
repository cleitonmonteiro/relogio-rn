import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

  render() {
    return (
      <View style={defaultStyles.center}>
        <Text style={styles.timeNow}>{this.state.horario.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeNow: {
    textShadowRadius: 7,
    fontSize: 60,
    color: 'tomato'
  },
});

