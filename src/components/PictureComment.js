import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PictureComment extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.user}>{ this.props.user }</Text>
                <Text>{ this.props.text }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    user: {
        fontWeight: 'bold',
        marginRight: 5
    }
})
