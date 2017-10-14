import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './components/Post';

export default class App extends Component<{}> {

  constructor() {

    super();
    this.state = { fotos: [] };
  }

  componentDidMount() {

    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(response => this.setState({ fotos: response }));
  }

  render() {
    
    return (
      <FlatList
        style={styles.container}
        keyExtractor={ item => item.id }
        data={ this.state.fotos }
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
