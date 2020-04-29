import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import './config/StatusBarConfig';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}

export default App;
