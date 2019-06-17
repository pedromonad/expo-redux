import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { Header } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../../../assets/images/logo--purple.png';

export default class CustomHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Header
        backgroundColor="#FFF"
        light-content="dark-content"
      >
        <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
          <Icon name="bars" size={25} color="#a454d1" />
        </TouchableOpacity>
        <Image
          source={logo}
          style={styles.logo}
        />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    margin: 10
  },
  logo: {
    width: 110,
    height: 36
  },
});
