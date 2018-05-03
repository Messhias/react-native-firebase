import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import firebase from 'firebase';

export default class App extends Component {

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

    registerUser() {
        var email = "messhias@gmail.com";
        var pass = "123456789";

        const user = firebase.auth();

        user.createUserWithEmailAndPassword(email, pass).catch( (error) => {
            let message= '';
            if (error.code == 'auth/weak-password') {
                message = "Sua senha está muito fraco, tem que ter ao menos 6 caracteres";
            } else {
                message = error.message;
            }
            alert(message);
        });
    }

    checkLoggedUser() {
        const user = firebase.auth();

        user.onAuthStateChanged( (currentUser) => {
            if (currentUser) {
                alert("You're logged in");
            } else {
                alert("You're not logged in");
            }
        });

    }

    logout() {
        const user = firebase.auth();
        var email = "messhias@gmail.com";
        var pass = "123456789";
        user.signOut();
    }

    login() {
        const user = firebase.auth();
        var email = "messhias@gmail.com";
        var pass = "123456789";
        user.signInWithEmailAndPassword(email, pass).catch((error) => {
            alert(error.message);
        });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  onPress={ () => { this.registerUser() }}
                  title="Register user"
                  color="#841584"
                  accessibilyLabel="Register user"
                />
                <Button
                  onPress={ () => { this.checkLoggedUser() }}
                  title="Check logged user"
                  color="#841584"
                  accessibilyLabel="Check logged user"
                />
                <Button
                  onPress={ () => { this.logout() }}
                  title="Logout"
                  color="#841584"
                  accessibilyLabel="Logout"
                />
                <Button
                  onPress={ () => { this.login() }}
                  title="Login"
                  color="#841584"
                  accessibilyLabel="Login"
                />
            </View>
        );
    }
}
