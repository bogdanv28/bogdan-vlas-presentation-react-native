import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Contact = () => {
  const windowDimmensions = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(2,115,166,1)', 'rgba(73,186,238,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.container, { width: windowDimmensions.width || 100 }]}
      >
        <Text style={styles.title}>Contact Me</Text>
        <View style={styles.horizontalRule} />
        <ContactItem title='EMAIL' data='vlas.bogdan@yahoo.com' />
        <ContactItem title='PHONE' data='0746.22.68.44' />
      </LinearGradient>
    </View>
  );
};

const ContactItem: FC<{ title: string; data: string }> = ({ title, data }) => {
  return (
    <View style={styles.contactItemContainer}>
      <Text style={[styles.body, { fontWeight: 'bold' }]}>{title}</Text>
      <Text style={styles.body} selectable>
        {data}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#0278ae',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 30,
  },
  contactItemContainer: {
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    fontSize: 16,
    color: 'white',
  },
  horizontalRule: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Contact;
