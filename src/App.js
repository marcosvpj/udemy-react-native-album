import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzKFJ4HuzMYeTblfJYNsKhSr2QZNrXtyo',
      authDomain: 'auth-f28a4.firebaseapp.com',
      databaseURL: 'https://auth-f28a4.firebaseio.com',
      projectId: 'auth-f28a4',
      storageBucket: 'auth-f28a4.appspot.com',
      messagingSenderId: '312858588679'
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLoginForm() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size='large'/>
          </View>
        );
    }
  }

  render () {
    return (
      <View style={{flex:1}}>
        <Header headerText="Authentication" />
        { this.renderLoginForm() }
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
