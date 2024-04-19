import React, { useState } from 'react';
import DetailsPageLayout from '../components/DetailsPageLayout';
import Card from '../components/Card';
import { ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleDialog from '../components/SimpleDialog';
import { projects } from '../data/projects';
import { chunkArray } from '../common/chunkArray';
import { View } from 'native-base';

export type Project = {
  title: string;
  details: string;
  image: ImageSourcePropType;
};

const Projects = () => {
  const CHUNK = 2;
  const chunkedProjects = chunkArray(projects, CHUNK);

  const [dialogDetails, setDialogDetails] = useState<{
    title: string | null;
    description: string | null;
  }>({
    title: null,
    description: null,
  });

  const handleOnPress = (arrIndex: number, projectIndex: number) => {
    if (projectIndex < 0) {
      setDialogDetails({
        title: null,
        description: null,
      });
      return;
    }
    setDialogDetails({
      title: chunkedProjects[arrIndex][projectIndex].title,
      description: chunkedProjects[arrIndex][projectIndex].details,
    });
  };

  return (
    <DetailsPageLayout title='Projects'>
      {chunkedProjects.map((row, i) => {
        return (
          <View key={i} style={styles.row} marginTop={5}>
            {row.map((project, idx) => {
              return (
                <TouchableOpacity key={idx} onPress={() => handleOnPress(i, idx)}>
                  <Card title={project.title} image={project.image} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}

      {dialogDetails.title && dialogDetails.description && (
        <SimpleDialog
          title={dialogDetails.title}
          details={dialogDetails.description}
          isOpen={true}
          setIsOpen={() => handleOnPress(-1, -1)}
        />
      )}
    </DetailsPageLayout>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10, // Adjust as needed
  },
});

export default Projects;
