import React from 'react';
import DetailsPageLayout from '../components/DetailsPageLayout';
import ExperienceItem from '../components/Experience';
import { education } from '../data/education';

const Education = () => {
  return (
    <DetailsPageLayout title='Education'>
      {education.map((entry, idx) => (
        <ExperienceItem key={idx} item={entry} />
      ))}
    </DetailsPageLayout>
  );
};

export default Education;
