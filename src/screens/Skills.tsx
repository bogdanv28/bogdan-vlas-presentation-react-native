import { Box, HStack, Badge } from 'native-base';
import React from 'react';
import DetailsPageLayout from '../components/DetailsPageLayout';
import { skills } from '../data/skills';
import { chunkArray } from '../common/chunkArray';

const Skills = () => {
  const CHUNK = 2;
  const chunkedSkills = chunkArray(skills, CHUNK);
  return (
    <DetailsPageLayout title='Skills'>
      <Box alignItems={'center'} marginLeft={5} marginRight={5}>
        {chunkedSkills.map((chunk, index) => {
          return (
            <HStack key={index} space={3} marginTop={10}>
              {chunk.map((skill, i) => {
                return (
                  <Badge
                    key={i}
                    colorScheme='info'
                    alignSelf='center'
                    variant='outline'
                    _text={{
                      fontSize: 16,
                    }}
                  >
                    {skill}
                  </Badge>
                );
              })}
            </HStack>
          );
        })}
      </Box>
    </DetailsPageLayout>
  );
};

export default Skills;
