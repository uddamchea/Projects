import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, Text, Image, TouchableHighlight, Alert, View, SafeAreaView, Button, Platform } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewItemScreen from './app/screens/ViewItemScreen';

export default function App() {
  // return <WelcomeScreen/>;
  return <ViewItemScreen/>;
  // add more screen as necessary
}
