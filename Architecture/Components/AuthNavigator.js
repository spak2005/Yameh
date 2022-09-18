import { View, Text } from 'react-native'
import { React } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Screens/HomeScreen';
import { Intro } from '../Screens/Intro';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';


export function AuthNavigator () {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:true}}>
      <Stack.Screen name='Intro'  component={Intro} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}}/>
      <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

