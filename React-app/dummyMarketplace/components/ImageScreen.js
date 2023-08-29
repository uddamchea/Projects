import React from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';

const FullScreenImage = ({ imageUri, visible, onClose }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          {/* Add a close button or icon */}
        </TouchableOpacity>
        <View style={{ width: screenWidth, height: screenHeight }}>
          <Image source={imageUri} style={styles.image} resizeMode="contain" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    // Add styles for the close button or icon here
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default FullScreenImage;
