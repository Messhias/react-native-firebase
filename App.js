import React, { Component } from 'react';

import { View, Text } from 'react-native';

import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAHPKRPCRKh4l-lt0ThLcXQ_r6TAlODmV0",
      authDomain: "fir-react-teste.firebaseapp.com",
      databaseURL: "https://react-native-realtime-chat.firebaseio.com",
      projectId: "fir-react-teste",
      storageBucket: "fir-react-teste.appspot.com",
      messagingSenderId: "396556937415"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
