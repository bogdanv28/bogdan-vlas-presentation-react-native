import React, { ReactNode } from 'react';
import { View, ImageBackground, StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';

interface FilteredImageProps {
  imageSource: ImageSourcePropType;
  filterColor?: string;
  children?: ReactNode;
  style?: ViewStyle;
}

const FilteredImage: React.FC<FilteredImageProps> = ({
  imageSource,
  filterColor = 'rgba(0, 0, 0, 0.5)',
  children,
  style,
}) => {
  console.log('style', style);
  return (
    <ImageBackground blurRadius={2} source={imageSource} style={[styles.imageBackground, style ? { ...style } : {}]}>
      <View style={[styles.filter, { backgroundColor: filterColor }]}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch' as per your requirement
  },
  filter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Default semi-transparent black color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default FilteredImage;
