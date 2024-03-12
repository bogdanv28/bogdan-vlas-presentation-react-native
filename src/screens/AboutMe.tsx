import { NativeBaseProvider, View, Text } from 'native-base';
import React from 'react';

const AboutMe = () => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>AboutMe</Text>
      </View>
    </NativeBaseProvider>
  );
};

export default AboutMe;
