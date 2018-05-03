import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import firebase from 'firebase';

export default class App extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            pontuacao: 0
        };
    }


  componentWillMount() {
    const config = {
        apiKey: "AIzaSyAHPKRPCRKh4l-lt0ThLcXQ_r6TAlODmV0",
        authDomain: "fir-react-teste.firebaseapp.com",
        databaseURL: "https://fir-react-teste.firebaseio.com",
        projectId: "fir-react-teste",
        storageBucket: "fir-react-teste.appspot.com",
        messagingSenderId: "396556937415"
    };
    firebase.initializeApp(config);
  }

  saveData() {
      var employers  = firebase.database().ref('employers');
      employers.remove();
      employers.push().child('name').set('William');
      employers.push().child('name').set('Set');
      employers.push().child('name').set('Set');
      employers.push().set({
          name: "Fabio"
      });

      var pontuacao = firebase.database().ref('pontuacao');
      pontuacao.set(100);
      employers.push().remove();
  }

  listData() {
      const pontuacao = firebase.database().ref('pontuacao');
      pontuacao.on('value', (snapshot) => {
          const pontuacao = snapshot.val();
          this.setState({ pontuacao });
      });
  }

  render() {
      const { pontuacao } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
              onPress={ () => { this.saveData() }}
              title="Save data"
              color="#841584"
              accessibilyLabel="Save data"
          />
          <Button
              onPress={ () => { this.listData() }}
              title="List data"
              color="#841584"
              accessibilyLabel="List data"
          />
      <Text>{pontuacao}</Text>
      </View>
    );
  }
}
