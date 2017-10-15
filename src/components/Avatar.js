import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Avatar extends Component<{}> {

  render() {
    return (
        <View style={styles.avatar}>
            <Image
                source={{ uri: this.props.image }}
                style={styles.avatar_image} />
            <Text>{this.props.user}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    avatar: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    }
})
