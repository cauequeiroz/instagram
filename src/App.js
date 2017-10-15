import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './components/Post';

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = { pictures: [] };
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(response => this.setState({ pictures: response }));
  }

  render() {    
    return (
      <FlatList
        style={styles.container}
        data={ this.state.pictures }
        keyExtractor={ item => item.id }
        renderItem={ ({item}) =>
          <Post picture={item} />
        } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
