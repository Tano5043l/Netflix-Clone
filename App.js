import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import HomeScreen from './Screens/Home Screen/HomeScreen';
import NotSignedIn from './Screens/Not Signed In/NotSignedIn';
import Trial from './trial';
import Signup from './Screens/Home Screen/Signup';
import GetStarted from './Screens/Not Signed In/GetStarted';

export default function App() {
  return (
    <View style={styles1.container}>
      <StatusBar style='light' />
      <NotSignedIn/>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
