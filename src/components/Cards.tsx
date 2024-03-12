import React from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';
import { categories } from '../common/categories';
import { shadow } from '../common/styles';

const Cards = () => {
  const CHUNK = 2;
  const chunkedCategories = Array.from({ length: Math.ceil(categories.length / CHUNK) }, (_, index) =>
    categories.slice(index * CHUNK, index * CHUNK + CHUNK)
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        {chunkedCategories.map((row, idx) => (
          <View key={idx} style={styles.row}>
            {row.map((item, index) => (
              <Card key={index} title={item.title} image={item.image} screen={item.screen.name} />
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
