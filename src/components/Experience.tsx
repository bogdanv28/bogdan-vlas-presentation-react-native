import { Box, Text, Heading } from 'native-base';
import React, { FC } from 'react';
import { shadow } from '../common/styles';

export type ExperienceItemProp = {
  interval: string;
  institution: string;
  details: {
    title: string;
    activity: string[];
  };
};

const ExperienceItem: FC<{ item: ExperienceItemProp }> = ({ item }) => {
  return (
    <Box style={{ ...shadow }} width={'full'} marginTop={3} marginBottom={3} flexDirection={'row'}>
      <Box backgroundColor={'rgba(73,186,238,1)'} width={'1/4'} justifyContent={'center'}>
        <Box margin={2}>
          <Text fontWeight={'bold'} color={'white'}>
            {item.institution}
          </Text>
          <Text fontSize={'xs'} color={'white'}>
            {item.interval}
          </Text>
        </Box>
      </Box>
      <Box width={'3/4'}>
        <Box margin={2}>
          <Heading size='md'>{item.details.title}</Heading>
          {item.details.activity.map((a, idx) => (
            <Text key={idx} fontSize={16}>
              -{a}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
