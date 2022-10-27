import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { init } from './src/db';
import {store} from './src/store';

export default function App() {

  init().then(() => {
    console.log('Initialized database');
  }).catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  }
  )  


  return (
    <Provider store={store}>
      <Navigation />
    </Provider>    
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
