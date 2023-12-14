import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Replace with appropriate icons from Expo vector-icons

import pic11 from './assets/image11.png';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleButtonClick = () => {
    // Your form submission logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* Your navigation bar goes here */}
      </View>

      <View style={styles.signupContainer}>
        <Image source={pic11} style={styles.image} />
        <View style={styles.registerFormContainer}>
          <Text style={styles.title}>SIGN UP</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={handleFirstNameChange}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={handleLastNameChange}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={handleEmailChange}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style={styles.alreadyUser} onPress={() => navigation.navigate('Login')}>
            Already User?
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        {/* Your footer goes here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    // Your navbar styles
  },
  signupContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  registerFormContainer: {
    width: '80%',
    marginTop: -50, // Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  alreadyUser: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  footer: {
    // Your footer styles
  },
});

export default Signup;
