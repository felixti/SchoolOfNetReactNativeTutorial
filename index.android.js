/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './app/components/Text';
import CounterComponent from './app/components/Counter';
import InitRouter from './app/components/InitRouter';


export default class app extends Component {
  render() {
    return (
        <InitRouter />

      // <View style={styles.view}>
      //   <TextComponent myText="Ola Reactive Native"></TextComponent>
      //   <CounterComponent></CounterComponent>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
  }
});

AppRegistry.registerComponent('app', () => app);
