import { FC } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import FilteredImage from './FilteredImage';
import { NavigationParams, NavigationRoute, NavigationScreenProp, withNavigation } from 'react-navigation';

type CardProps = {
  title: string;
  screen: string;
  image: ImageSourcePropType;
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
};

const Card: FC<CardProps> = ({ title, screen, image, navigation }) => {
  const windowDimmensions = Dimensions.get('window');
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          margin: 5,
          marginLeft: 15,
          width: Math.round(windowDimmensions.width / 2 - 40),
          height: Math.round(windowDimmensions.width / 2 - 40),
          backgroundColor: '#51adcf',
          borderRadius: 8,
          borderColor: 'gray',
        }}
      >
        <FilteredImage imageSource={image} filterColor='rgba(94, 149, 172, 0.4)'>
          <Text style={{ height: 100, color: 'white', fontSize: 30 }}>{title}</Text>
        </FilteredImage>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch' as per your requirement
  },
  filter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Default semi-transparent black color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});
export default withNavigation(Card);
