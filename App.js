import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const screen_width = Dimensions.get('screen').width;

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>cauequeiroz</Text>
        <Image
          source={ require('./resources/img/image.jpg') }
          style={{ width: screen_width, height: screen_width }} />
      </View>
    );
  }
}
