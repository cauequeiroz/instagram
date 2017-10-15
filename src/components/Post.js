import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { styles } from './Post.style';

export default class Post extends Component<{}> {

  constructor(props) {    
    super(props);
    this.state = { picture: this.props.picture, commentValue: '' };
  }

  loadLikeImage(liked) {    
    return liked
      ? require('../../resources/img/s2-checked.png')
      : require('../../resources/img/s2.png')
  }

  like() {
    const { picture } = this.state;

    if ( !picture.likeada ) {
      picture.likers = [ ...picture.likers, { login: 'myUser' } ];
    } else {
      picture.likers = picture.likers.filter(like => like.login !== 'myUser');
    }

    let newPicture = {
      ...picture,
      likeada: !picture.likeada
    };

    this.setState({ picture: newPicture });
  }

  showLikes(likers) {
    if ( !likers.length ) return;

    return <Text style={styles.likes}>
      {likers.length} {likers.length > 1 ? 'likes' : 'like'}
    </Text>
  }

  showComments(picture) {

    return <View style={styles.comments}>
      <Text style={styles.comment_author}>{ picture.loginUsuario }</Text>
      <Text>{ picture.comentario }</Text>
    </View>
  }

  addComment() {
    if ( this.state.commentValue === '' ) return;

    const newComments = [...this.state.picture.comentarios, {
        id: this.state.commentValue,
        login: this.state.picture.loginUsuario,
        texto: this.state.commentValue
    }];

    const newPicture = {
      ...this.state.picture,
      comentarios: newComments
    };

    this.setState({ picture: newPicture, commentValue: '' });
    this.commentInput.clear();
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

              {this.showLikes(picture.likers)}
              {this.showComments(picture)}

              {picture.comentarios.map(comment =>
                <View
                  style={styles.comments}
                  key={comment.id}>
                  <Text style={styles.comment_author}>{comment.login}</Text>
                  <Text>{comment.texto}</Text>
                </View>
              )}

              <View style={styles.newComment}>
                <TextInput
                  style={styles.newComment_input}
                  placeholder="Add a comment"
                  ref={input => this.commentInput = input}
                  onChangeText={text => this.setState({ commentValue: text })}/>
                
                <TouchableOpacity onPress={this.addComment.bind(this)}>
                  <Image
                    style={styles.newComment_image}
                    source={require('../../resources/img/send.png')} />
                </TouchableOpacity>
              </View>
            </View>
        </View>
    );
  }
}
