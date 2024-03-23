import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation.ts';
import HomeTab from '@/navigation/HomeTab';
import { Detail } from '@/screen';

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={HomeTab} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default RootStack;
