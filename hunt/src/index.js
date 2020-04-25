import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './routes';

class App extends Component{

    render(){
        return (
            <NavigationContainer>
                <Routes/>
            </NavigationContainer>

        );
    }
};

export default App;
