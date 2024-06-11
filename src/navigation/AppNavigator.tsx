import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import { StyleSheet } from 'react-native';
import RecipeList from '../screens/RecipeList';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="RecipeList" component={RecipeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
const styles = StyleSheet.create({});