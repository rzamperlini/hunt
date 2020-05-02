import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="JSHunt" component={Main} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

const options = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#DA552f',
  },
  headerTintColor: '#FFF',
};

export default Routes;
