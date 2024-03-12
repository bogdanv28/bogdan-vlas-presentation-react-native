import { NativeBaseProvider, View, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { shadow } from '../common/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { getWindowDimmensions } from '../common/getWindowDimmensions';
import DetailsPageLayout from '../components/DetailsPageLayout';

const WorkExperience = () => {
  return (
    <DetailsPageLayout title='Work Experience'>
      <Text>aici detalii despre work</Text>
    </DetailsPageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
});

export default WorkExperience;
