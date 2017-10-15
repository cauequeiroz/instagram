import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { styles } from './Post.style';

import Avatar from './Avatar';
import Picture from './Picture';
import LikeButton from './LikeButton';
import PictureComment from './PictureComment'
import CommentsList from './CommentsList';

export default class Post extends Component<{}> {

  constructor(props) {    
    super(props);
    this.state = { picture: this.props.picture, commentValue: '' };
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
            <Avatar
              user={picture.loginUsuario}
              image={picture.urlPerfil} />

            <Picture
              image={picture.urlFoto} />

            <LikeButton
              liked={picture.likeada}
              likers={picture.likers}
              onLike={this.like.bind(this)} />

            <PictureComment
              user={picture.loginUsuario}
              text={picture.comentario} />
            
            <CommentsList
              data={picture.comentarios} />
            

            <View style={styles.likeSection}>
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
