import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {defaultStyles} from '../styles';

export default class RelogioScreen extends Component {
  state = {
    horario: new Date(),
  };

  tique() {
    this.setState({ horario: new Date() });
  }

  componentDidMount() {
    // executa após componente ser inicializad0
    this.timer = setInterval(() => this.tique(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  //defaultStyles.center

  render() {
    return (
      <Text style={defaultStyles.center}>
        {this.state.horario.toLocaleTimeString()}
      </Text>
    );
  }
}
