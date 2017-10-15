import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class LikeButton extends Component<{}> {

    loadButtonImage(liked) {
        return liked
            ? require('../../resources/img/s2-checked.png')
            : require('../../resources/img/s2.png');
    }

    showLikesCount(likers) {
        if ( !likers.length ) return;
        
        return <Text style={styles.count}>
            {likers.length} {likers.length > 1 ? 'likes' : 'like'}
        </Text>
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onLike}>
                    <Image
                        source={this.loadButtonImage(this.props.liked)}
                        style={styles.button} />
                </TouchableOpacity>

                {this.showLikesCount(this.props.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        width: 40,
        height: 40,
        marginBottom: 10
    },
    count: {
        fontWeight: 'bold'
    }
})
