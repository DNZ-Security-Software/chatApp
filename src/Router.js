import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Signin, Timeline } from './pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Timeline" component={Timeline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
