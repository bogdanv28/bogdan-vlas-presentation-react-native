import React from 'react';
import DetailsPageLayout from '../components/DetailsPageLayout';
import ExperienceItem from '../components/Experience';
import { workExperience } from '../data/workExperience';

const WorkExperience = () => {
  return (
    <DetailsPageLayout title='Work Experience'>
      {workExperience.map((entry, idx) => (
        <ExperienceItem key={idx} item={entry} />
      ))}
    </DetailsPageLayout>
  );
};

export default WorkExperience;
