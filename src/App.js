import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './components/Post';

export default class App extends Component<{}> {
  render() {
    const fotos = [
      { id: 1, user: 'cauequeiroz' },
      { id: 2, user: 'hugocardoso' },
      { id: 3, user: 'bdmstyle' },
      { id: 4, user: 'jleber' }
    ]

    return (
      <FlatList
        style={styles.container}
        keyExtractor={ item => item.id }
        data={ fotos }
        renderItem={ ({item}) =>
          <Post foto={item} />
        } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
