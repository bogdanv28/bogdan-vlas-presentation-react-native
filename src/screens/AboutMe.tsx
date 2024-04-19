import { Text } from 'native-base';
import React from 'react';
import DetailsPageLayout from '../components/DetailsPageLayout';

const AboutMe = () => {
  return (
    <DetailsPageLayout title='About me'>
      <Text margin={5} fontWeight={'bold'} fontSize={28} fontStyle={'italic'} shadow={5}>
        Passionate about IT industry, I am always interested to improve my programming skills or learn something new.
      </Text>
    </DetailsPageLayout>
  );
};

export default AboutMe;
