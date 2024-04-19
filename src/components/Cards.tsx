import React, { FC } from 'react';
import { View, ScrollView, StyleSheet, ImageSourcePropType } from 'react-native';
import { shadow } from '../common/styles';
import CardNavigation from './CardNavigation';
import { chunkArray } from '../common/chunkArray';

export type Category = {
  title: string;
  image: ImageSourcePropType;
  screen: {
    name: string;
    source: () => React.JSX.Element;
  };
};

const Cards: FC<{ categories: Category[] }> = ({ categories }) => {
  const CHUNK = 2;
  const chunkedCategories = chunkArray(categories, CHUNK);
  return (
    <ScrollView>
      <View style={styles.container}>
        {chunkedCategories.map((row, idx) => (
          <View key={idx} style={styles.row}>
            {row.map((item, index) => (
              <CardNavigation key={index} title={item.title} image={item.image} screen={item.screen.name} />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 'auto',
    width: 400,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    ...shadow,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10, // Adjust as needed
  },
});

export default Cards;
