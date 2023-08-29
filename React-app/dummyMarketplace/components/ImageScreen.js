import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const ImageScreen = ({ imageUri, onClose }) => {
  return (
    <Modal transparent={true} visible={true} animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          {/* Add a close button or icon */}
        </TouchableOpacity>
        <Image source={imageUri} style={styles.image} resizeMode="contain" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default ImageScreen;
