import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ImageCarousel = ({ images, onImagePress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onImagePress(item)}>
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ImageCarousel;
