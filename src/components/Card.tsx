import { FC } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageSourcePropType } from 'react-native';
import FilteredImage from './FilteredImage';

type CardProps = {
  title: string;
  image: ImageSourcePropType;
};

const windowDimmensions = Dimensions.get('window');

const Card: FC<CardProps> = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <FilteredImage imageSource={image} filterColor='rgba(94, 149, 172, 0.4)'>
        <Text style={{ height: 100, color: 'white', fontSize: 30 }}>{title}</Text>
      </FilteredImage>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
    marginLeft: 15,
    width: Math.round(windowDimmensions.width / 2 - 40),
    height: Math.round(windowDimmensions.width / 2 - 40),
    backgroundColor: '#51adcf',
    borderRadius: 8,
    borderColor: 'gray',
  },
  filter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Default semi-transparent black color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default Card;
