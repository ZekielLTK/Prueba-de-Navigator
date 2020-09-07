import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Header from "../shared/header";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default HomeStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#bbb'}}}>
        <Stack.Screen name="Home" component={Home} options={{title: 'GameZone'}} />

        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={({ navigation }) => {
            return {               
                headerTitle: () => <Header navigation={navigation} title="GameZone"/>,
                }
            }}
        />
      </Stack.Navigator>
  );
};