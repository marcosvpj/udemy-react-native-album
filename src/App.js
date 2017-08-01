import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzKFJ4HuzMYeTblfJYNsKhSr2QZNrXtyo',
      authDomain: 'auth-f28a4.firebaseapp.com',
      databaseURL: 'https://auth-f28a4.firebaseio.com',
      projectId: 'auth-f28a4',
      storageBucket: 'auth-f28a4.appspot.com',
      messagingSenderId: '312858588679'
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
