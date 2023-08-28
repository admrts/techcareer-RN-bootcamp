// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EventsScreen from '../screens/EventsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function ProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
