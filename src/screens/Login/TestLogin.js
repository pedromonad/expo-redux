import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import LoginForm from '../../components/UI/LoginForm';
import Root from '../Root';

export default class TesteLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyC54YWhEuw97kFFujfclDQCBWlnpUnI2qc',
      authDomain: 'virtudes-ade7d.firebaseapp.com',
      databaseURL: 'https://virtudes-ade7d.firebaseio.com',
      projectId: 'virtudes-ade7d',
      storageBucket: 'virtudes-ade7d.appspot.com',
      messagingSenderId: '162436965995',
      appId: '1:162436965995:web:3dec2065fb721fc8'
    };

    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return (
        <View>
          <Root />
          <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        </View>
      );
    }
    return <LoginForm />;
  }
}
