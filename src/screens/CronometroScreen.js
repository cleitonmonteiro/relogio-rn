import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

import { defaultStyles } from '../styles';

export default class CronometroScreen extends Component {

  constructor(props) {
    super(props)

    this.state ={
      timer: null,
      number: 0,
      startStopText: 'Start',
    }

    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }

  startStopButton(){
    //começa ou para o relogio

    if(this.state.timer==null){
      //inicia

      let newS = this.state;
      newS.startStopText = 'Stop';
      this.setState(newS);

      this.state.timer = setInterval(() => {
        let newState = this.state;
        newState.number += 0.1;
        this.setState(newState);
      }, 100);

    }else{
      //para
      clearInterval(this.state.timer);

      let newState = this.state;
      newState.startStopText = 'Start';
      newState.timer = null;
      this.setState(newState);

    }
  }

  clearButton(){

    clearInterval(this.state.timer);
    let newState = this.state;
    newState.startStopText = 'Start';
    newState.timer = null;
    newState.number = 0;
    this.setState(newState);

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fContainer}>
          <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button}>
    <Text style={styles.buttonText} onPress={this.startStopButton}>{this.state.startStopText}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText} onPress={this.clearButton}>Limpar</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>TEXTO</Text>
        </View>
      </View>
      // <View>
      //   <ImageBackground source={require('../images/crono.png')} style={{width: 450, height: 450, position: 'relative', marginLeft: -30, marginTop: 70}}>
      //     <View style={defaultStyles.center}>
      //       <Text></Text>
      //     </View>
      //   </ImageBackground>
      //   <TouchableHighlight
      //    style={defaultStyles.button}
      //    onPress={this.onPress}
      //   >
      //    <Text> Touch Here </Text>
      //   </TouchableHighlight>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#221D41',
    justifyContent: 'center',
  },
  fContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    flexDirection: 'row',
    padding: 20,
  },
  counterText:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#331DF4',
    marginHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    width: 75,
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff'
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 20,
  },
  footerText:{

  }
})
