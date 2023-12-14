// Profile.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hey!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="ios-person-circle-outline" size={48} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerUnderline}></View>

      {/* Additional text and button after the header */}
      <View style={styles.headerLeft}>
        <MaterialCommunityIcons name="gift-open-outline" size={32} color="red" style={styles.giftBoxImage} />

        <View style={styles.headerTextAndButton}>
          <Text style={styles.headerTextLeft}>
            Unlock special offers & great benefits
          </Text>
          <Button
            title="Login/Register"
            onPress={() => {
              navigation.navigate('Login')
             
            }}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Additional content goes here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextAndButton: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextLeft: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  giftBoxImage: {
    marginRight: 8,
  },
  headerUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  content: {
    marginTop: 16,
  },
});

export default Profile;
