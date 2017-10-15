import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CommentsList extends Component<{}> {

  render() {
    return (
        <View style={styles.container}>
            {this.props.data.map(comment =>
                <View style={styles.comment} key={comment.id}>
                    <Text style={styles.user}>{comment.login}</Text>
                    <Text>{comment.texto}</Text>
                </View>
            )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    comment: {
        flexDirection: 'row'
    },
    user: {
        fontWeight: 'bold',
        marginRight: 5
    }
})
