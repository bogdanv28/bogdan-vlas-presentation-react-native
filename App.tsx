import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import { createAppContainer } from 'react-navigation';
import { categories } from './src/common/categories';

const screens: Record<string, () => React.JSX.Element> = {};
categories.forEach((category) => {
  screens[category.screen.name] = category.screen.source;
});

const navigator = createStackNavigator(
  {
    Home: Home,
    ...screens,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(navigator);
