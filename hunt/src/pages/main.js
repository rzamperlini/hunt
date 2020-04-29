/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const response = await api.get('/repos');

      const docs = response.data;

      this.setState({docs});
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <View>
        <Text>Página Main: </Text>
        {this.state.docs.map(product => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </View>
    );
  }
}
