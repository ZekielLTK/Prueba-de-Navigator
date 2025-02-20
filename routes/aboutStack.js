import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from "../shared/header";
import About from '../screens/about';

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} 
            options={({ navigation }) => {
            return {               
                headerTitle: () => <Header navigation={navigation} title= "About GameZone"/>,
                }
            }}/>
      </Stack.Navigator>
  );
};