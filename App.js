import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import MainNavigation from './src/Navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
