import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ImageCarousel = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
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
    marginRight: 10, // Adjust as needed
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ImageCarousel;
