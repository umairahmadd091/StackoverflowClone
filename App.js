import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from './Screens/Home';
import {Signup} from './Screens/Signup';
import {Login} from './Screens/login';
import {SplashScreen} from './Screens/SplashScreen';
import {Details} from './Screens/Details';
import {AddPost} from './Screens/addPost';
import {AddAd} from './Screens/addad';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator headerMode={null}>
      <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>

      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="addpost" component={AddPost} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;