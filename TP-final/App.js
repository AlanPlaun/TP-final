import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Upload from './Components/Upload';
import CameraScreen from './Components/Camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Components/HomePage';
import QR from './Components/QR';
import Pushnotification from './Components/PushNotification';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Upload/> */}
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Camera" component={CameraScreen}/>
      <Stack.Screen name="QR" component={QR}/>
      <Stack.Screen name="PushNotification" component={Pushnotification}/>

      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
