import { FC } from 'react';
import { View, Text, Dimensions } from 'react-native';

type CardProps = {
  title: string;
};

export const Card: FC<CardProps> = ({ title }) => {
  const windowDimmensions = Dimensions.get('window');
  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
        marginLeft: 15,
        width: Math.round(windowDimmensions.width / 2 - 40),
        height: Math.round(windowDimmensions.width / 2 - 40),
        backgroundColor: 'lightblue',
        borderRadius: 8,
        borderColor: 'gray',
      }}
    >
      <Text style={{ height: 100, color: 'white', fontSize: 30 }}>{title}</Text>
    </View>
  );
};
