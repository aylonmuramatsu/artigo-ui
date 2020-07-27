import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Header from '../components/Header';
import colors from './colors';

const Stack = createStackNavigator();

let navigationOptionDefault = {
  headerShown: true,
  header: () => <Header/>,
    headerMode: 'screen',
    cardStyle: { backgroundColor: colors.CLOUDS },
}

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={navigationOptionDefault}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
