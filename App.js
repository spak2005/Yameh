import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './Architecture/Components/AuthNavigator';
import { StatusBar as ExpoStausBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,StatusBar} from 'react-native';
import { HomeScreen } from './Architecture/Screens/HomeScreen';
import { Theme } from './Architecture/Theme/Theme';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
      {/* <HomeScreen/> */}
      <ExpoStausBar backgroundColor='#fff' style="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight
  },
});
