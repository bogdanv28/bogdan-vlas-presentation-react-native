import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, ScaledSize, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { createContext } from 'react';
import Contact from './src/components/Contact';
import Cards from './src/components/Cards';
import { Card } from './src/components/Card';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Header />
      <Cards />
      <Contact />
    </SafeAreaView>
  );
}
