import React from 'react';
import { View, Image, Modal, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';
import { assets } from '../constants';
import { CircleButton } from './Button';

const ImageScreen = ({ imageUri, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!imageUri}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Image source={imageUri} style={styles.image} resizeMode="contain" />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          {/* <Text style={styles.closeButtonText}>Close</Text> */}
          <CircleButton 
            imgURL={assets.close}
            handlePress={onClose}
            right={10}
            top={StatusBar.currentHeight + 20}
            />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
//   closeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
});

export default ImageScreen;
