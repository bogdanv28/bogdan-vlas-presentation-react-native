import { Project } from '../screens/Projects';

export const projects: Project[] = [
  {
    title: 'Recruitment Portal',
    details: 'Working on developing a a Recruitment Portal for Pearson. Implementing features on frontend and backend.',
    image: require('../assets/skills_2.png'),
  },
  {
    title: 'Developers Portal',
    details:
      'Working on developing a Developers Portal, for Rabobank, using open source application Backstage.io. Working on backend and frontend implementations',
    image: require('../assets/backstage_image.png'),
  },
  {
    title: 'Management application',
    details: 'Working on developing a management application for Toyota North America',
    image: require('../assets/prj-4.jpg'),
  },
  {
    title: 'Hotel Web Visibility',
    details:
      "Created the backend (with NodeJS) of the project which analyze a hotel website and brand on web. Is using API's like Dataforseo for analyzing key words and site position onGoogle. Using Puppeteer for extracting data about brand from Facebook ads, Google Reviews and Google Hotels(competition prices and ratings) etc.",
    image: require('../assets/code.jpg'),
  },
  {
    title: 'Book Everything',
    details:
      'Booking extension for social media and wordpress, both for hoteliers and clients. Working on front web functionality for hoteliers, implementing reservations calendar, and features like setting the price, creating offers etc.',
    image: require('../assets/booking.png'),
  },
  {
    title: "Connect to ads websites API's",
    details:
      "Connecting client's website to ads websites APIs, to instantly add/remove product/s on multiple ads websites (like OLX).",
    image: require('../assets/api_node.png'),
  },
];
