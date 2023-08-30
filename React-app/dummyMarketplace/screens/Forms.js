import { View, Text, TextInput, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { CircleButton } from '../components';
import { assets } from '../constants';

const ContactFormScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = () => {
      // Handle form submission (e.g., send the message)
      // You can use a service or API to send the message
      // Then navigate back to the previous screen
    //   navigation.goBack();
    };
  
    return (  
        <SafeAreaView style={{flex: 1}}> 
      <View style={styles.container}>

        <CircleButton 
            imgURL={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 20}
            />

        <Text>Contact Seller</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textarea}
          placeholder="Message"
          multiline={true}
          numberOfLines={4}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
    textarea: {
      height: 120,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
  });
  
  export default ContactFormScreen;