import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Contact from '../components/Contact';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <Header />
        <Cards />
        <Contact />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
