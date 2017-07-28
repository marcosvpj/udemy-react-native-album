import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'

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
        <Header headerText="Authentication"/>
        <Text>An App.</Text>
      </View>
    );
  }
}

export default App;
