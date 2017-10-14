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

export default class Post extends Component<{}> {
  render() {
    return (
        <View>
            <View style={styles.header}>
                <Image
                  source={{ uri: this.props.foto.urlPerfil }}
                  style={styles.userImage} />
                <Text>{this.props.foto.loginUsuario}</Text>
            </View>
            <Image
                source={{ uri: this.props.foto.urlFoto }}
                style={styles.image} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  image: {
    width: screen_width,
    height: screen_width
  }
})
