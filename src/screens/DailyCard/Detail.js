import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Text } from 'react-native-elements';
import CardFlip from 'react-native-card-flip';
import backCard from 'assets/images/back-card.png';
import frontCard from 'assets/images/card.png';

import Header from '../../components/UI/Header';
import styles from './DetailStyle';

export default class DailyCardDetail extends React.Component {
  static navigationOptions = {};

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <SafeAreaView>
          <CardFlip style={styles.cardContainer} ref={(card) => { this.card = card; }}>
            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
              <ImageBackground source={backCard} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
              <ImageBackground source={frontCard} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
          </CardFlip>

          <Text h1 style={styles.titleContainer}>Sol</Text>
          <Text style={styles.descriptionContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In mattis sapien in lacus eleifend auctor. Etiam scelerisque nisl
            Maecenas venenatis blandit lorem eu vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In mattis sapien in lacus eleifend auctor. Etiam scelerisque nisl
            Maecenas venenatis blandit lorem eu vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In mattis sapien in lacus eleifend auctor. Etiam scelerisque nisl
            Maecenas venenatis blandit lorem eu vulputate.
          </Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
