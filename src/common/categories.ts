import { ImageSourcePropType } from 'react-native';
import WorkExperience from '../screens/WorkExperience';
import Projects from '../screens/Projects';
import Skills from '../screens/Skills';
import Education from '../screens/Education';
import AboutMe from '../screens/AboutMe';

type Category = {
  title: string;
  image: ImageSourcePropType;
  screen: {
    name: string;
    source: () => React.JSX.Element;
  };
};

export const categories: Category[] = [
  {
    title: 'Work Experience',
    image: require('../assets/work_experience.jpg'),
    screen: {
      name: 'WorkExperience',
      source: WorkExperience,
    },
  },
  {
    title: 'Projects',
    image: require('../assets/code.jpg'),
    screen: {
      name: 'Projects',
      source: Projects,
    },
  },
  {
    title: 'Skills',
    image: require('../assets/skills.jpg'),
    screen: {
      name: 'Skills',
      source: Skills,
    },
  },
  {
    title: 'Education',
    image: require('../assets/education.jpg'),
    screen: {
      name: 'Education',
      source: Education,
    },
  },
  {
    title: 'About me',
    image: require('../assets/cv poza bog.jpg'),
    screen: {
      name: 'AboutMe',
      source: AboutMe,
    },
  },
];
