import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { authenticate } from '../../actions';
// import Input from './Input';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;

    this.props.authenticate('password@suhdsahud.com', 'sduhasduhsauhd');

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .catch((error) => {
    //     this.onLoginFailure.bind(this)(error.message);
    //   });
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }

  renderButton() {
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    return (
      <Button
        title="Sign in"
        onPress={this.onButtonPress}
      />
    );
  }

  render() {
    const { email, password, error } = this.props;
    return (
      <View style={styles.container}>
        <Input
          label="Email"
          placeholder="user@mail.com"
          value={email}
          secureTextEntry={false}
          onChangeText={emailEntry => this.setState({ email: emailEntry })}
        />

        <Input
          label="Password"
          placeholder="password"
          value={password}
          secureTextEntry
          onChangeText={pass => this.setState({ password: pass })}
        />

        {this.renderButton()}

        <Text style={styles.errorTextStyle}>
          {error}
        </Text>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
};



const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: () => dispatch(authenticate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
