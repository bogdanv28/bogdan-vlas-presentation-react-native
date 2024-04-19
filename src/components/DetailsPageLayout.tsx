import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider, ScrollView, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { getWindowDimmensions } from '../common/getWindowDimmensions';
import { shadow } from '../common/styles';

const DetailsPageLayout: FC<{ title: string; children?: ReactNode }> = ({ title, children }) => {
  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={['rgba(2,115,166,1)', 'rgba(73,186,238,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.head, { width: getWindowDimmensions().width || 200 }]}
      >
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
      <ScrollView marginBottom={10}>{children}</ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  title: {
    lineHeight: 100,
    color: 'white',
    fontSize: 30,
  },
});

export default DetailsPageLayout;
