import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const screen_width = Dimensions.get('screen').width;

export default class Post extends Component<{}> {

  constructor(props) {
    
    super(props);
    this.state = { picture: this.props.picture };
  }

  loadLikeImage(liked) {
    return liked
      ? require('../../resources/img/s2-checked.png')
      : require('../../resources/img/s2.png')
  }

  like() {

    let newPicture = {
      ...this.state.picture,
      likeada: !this.state.picture.likeada
    };

    this.setState({ picture: newPicture });
  }

  render() {
    
    const { picture } = this.state;

    return (
        <View>
            <View style={styles.header}>
                <Image
                  source={{ uri: picture.urlPerfil }}
                  style={styles.userImage} />
                <Text>{picture.loginUsuario}</Text>
            </View>

            <Image
              source={{ uri: picture.urlFoto }}
              style={styles.image} />
            
            <View style={styles.likeSection}>
              <TouchableOpacity onPress={this.like.bind(this)}>
                <Image
                  source={ this.loadLikeImage(picture.likeada) }
                  style={styles.likeButton} />
              </TouchableOpacity>
            </View>

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
  },
  likeSection: {
    margin: 10
  },
  likeButton: {
    width: 40,
    height: 40
  }
})
