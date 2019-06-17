import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import translate, { setLanguageToI18n } from 'locales/Languages';

import Header from '../components/UI/Header';


export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: () => <Icon name="home" size={25} color="#a454d1" />,
    drawerLabel: () => translate('home'),
  };

  updateLanguage = (key) => {
    setLanguageToI18n(key);
    this.forceUpdate();
  };

  forceUpdate() {
    this.setState({ });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <ScrollView style={styles.container}>
          <Text style={styles.headerText}>{translate('cardOfDay')}</Text>
          <TouchableOpacity onPress={() => { this.updateLanguage('pt_BR'); }}>
            <Icon name="language" size={25} color="#a454d1" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});
