import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

export default class Picture extends Component<{}> {

  render() {
    return (
        <Image
            source={{ uri: this.props.image }}
            style={styles.image} />
    );
  }
}

const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    image: {
        width: screen_width,
        height: screen_width
    }
})
