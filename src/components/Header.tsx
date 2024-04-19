import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { shadow } from '../common/styles';

const Header = () => {
  const windowDimmensions = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(2,115,166,1)', 'rgba(73,186,238,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.container, { width: windowDimmensions.width || 100 }]}
      >
        <Image source={require('../assets/cv poza bog.jpg')} style={styles.image} />
        <Text style={styles.title}>Bogdan Vlas</Text>
        <Text style={styles.subtitle}>Fullstack developer</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
    color: 'white',
  },
  image: {
    marginTop: 10,
    width: 110,
    height: 110,
    borderRadius: 100,
  },
});

export default Header;
