import React from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';

import { SocialIcon } from 'react-native-elements';
import { LinearGradient } from 'expo';

import logo from 'assets/images/logo--yellow.png';
import bg from 'assets/images/bg-login.png';

import translate from 'locales/Languages';

export default class LoginAuthentication extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#9747c4', '#6c1c99']} style={styles.linearBg}>
          <View style={styles.logoView}>
            <Image
              source={logo}
              style={styles.logo}
            />
          </View>
          <View style={styles.authView}>
            <SocialIcon
              title={translate('signFacebook')}
              button
              type="facebook"
              style={styles.authButton}
            />
            <SocialIcon
              title={translate('signGoogle')}
              button
              light
              type="google"
              style={styles.authButton}
            />
          </View>
          <ImageBackground source={bg} style={styles.bgLogin} />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearBg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView: {
    marginBottom: 100,
    zIndex: 9
  },
  authButton: {
    width: Dimensions.get('window').width * 0.8,
  },
  authView: {
    flexDirection: 'column',
    zIndex: 9
  },
  bgLogin: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.1,
    zIndex: 1
  }
});
