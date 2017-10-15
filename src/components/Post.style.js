import { StyleSheet, Dimensions } from 'react-native';

const screen_width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
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
        height: 40,
        marginBottom: 10
    },
    likes: {
        fontWeight: 'bold'
    },
    comments: {
        flexDirection: 'row'
    },
    comment_author: {
        fontWeight: 'bold',
        marginRight: 5
    }
})