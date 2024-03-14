import { FC } from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { NavigationParams, NavigationRoute, NavigationScreenProp, withNavigation } from 'react-navigation';
import Card from './Card';

type CardNavigationProps = {
  title: string;
  screen: string;
  image: ImageSourcePropType;
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
};

const CardNavigation: FC<CardNavigationProps> = ({ title, screen, image, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Card title={title} image={image} />
    </TouchableOpacity>
  );
};

export default withNavigation(CardNavigation);
