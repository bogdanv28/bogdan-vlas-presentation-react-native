import React from 'react';

import DetailsPageLayout from '../components/DetailsPageLayout';
import ExperienceItem, { ExperienceItemProp } from '../components/Experience';

const workExperience: ExperienceItemProp[] = [
  {
    interval: 'october 2023 - present',
    institution: 'Ness Digital',
    details: {
      title: 'Fullstack Developer',
      activity: [
        'Full-stack projects',
        'Working with NodeJS, TypeScript, React',
        'MongoDB, PostgreSQL, AWS technologies',
      ],
    },
  },
  {
    interval: 'november 2021 - october 2023',
    institution: 'Cognizant',
    details: {
      title: 'Fullstack Developer',
      activity: [
        'Working on projects for clients like Toyota or Rabobank',
        'Full-stack projects',
        'Working with NodeJS, TypeScript, React',
        'MongoDB, PostgreSQL, AWS technologies',
        'Backstage.io',
      ],
    },
  },
  {
    interval: 'december 2020 - november 2021',
    institution: 'Book Everything',
    details: {
      title: 'Fullstack Developer',
      activity: [
        'Involved in various backend projects with Node JS, Express, MongoDB, Mongoose',
        'Developing front-end project with Javascript & JQuery',
        'Fullstack projects',
        'Working with Axios, Puppeteer & Postman',
        'Building internal tools to automate data extraction',
      ],
    },
  },
  {
    interval: 'october 2012 - february 2020',
    institution: 'Antena 1',
    details: {
      title: 'Video & Site Editor',
      activity: [
        'Editing all kind of videos, from small news, to corporate videos or TV shows',
        "Adding new content on company's site",
        'Director of Image tasks',
        'Training new colleagues',
      ],
    },
  },
];

const WorkExperience = () => {
  return (
    <DetailsPageLayout title='Work Experience'>
      {workExperience.map((entry) => (
        <ExperienceItem item={entry} />
      ))}
    </DetailsPageLayout>
  );
};

export default WorkExperience;
