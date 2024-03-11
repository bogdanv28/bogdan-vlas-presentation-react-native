import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { categories } from '../common/categories';
import { shadow } from '../common/styles';

const Cards = () => {
  const CHUNK = 2;
  const chunkedCategories = Array.from({ length: Math.ceil(categories.length / CHUNK) }, (_, index) =>
    categories.slice(index * CHUNK, index * CHUNK + CHUNK)
  );
  return (
    <View style={styles.container}>
      {chunkedCategories.map((row, idx) => (
        <View key={idx} style={styles.row}>
          {row.map((item, index) => (
            <Card key={index} title={item.title} />
          ))}
        </View>
      ))}

      {/* <FlatList
        // horizontal
        data={categories}
        keyExtractor={(data) => data.title}
        renderItem={({ item, index }) => <Card key={index} title={item.title} />}
      /> */}
    </View>
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
