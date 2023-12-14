import React from 'react';
import { bRed } from '../constents';
import { Button, StyleSheet, View, Image, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import pic2 from './assets/image6.jpg';
import pic3 from './assets/image7.jpg';
import pic4 from './assets/image8.jpeg';
import pic5 from './assets/image9.jpg';

const MovieItem = ({ image, name, rating }) => (
  <View style={styles.movieItem}>
    <Image source={image} style={styles.image2} resizeMode="cover" />
    <View style={styles.movieDetails}>
      <Text style={styles.movieName}>{name}</Text>
      <Text style={styles.rating}>{`${rating}`}</Text>
    </View>
  </View>
);

var arrow = "\u279C";

const Home = (props) => {
  const handleLoginPress = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 500 }}>It All Starts Here</Text>
          <Text style={{ color: bRed }}>Chennai{arrow}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto', gap: 20 }}>
          <Ionicons name="search" size={24} color="black" />
          <Ionicons name="notifications-outline" size={28} color="black" fontWeight="bold" />
          <Button title="signin" color="#ff4500" onPress={handleLoginPress} />
        </View>
      </View>

      {/* Upcoming Movies */}
      <View style={styles.upcome}>
        <Text style={{ color: bRed, fontWeight: 'bold', fontSize: 19 }}>
          Upcoming Movies
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.upImages}>
            <MovieItem image={pic2} name="Sir" rating="4.5" />
            <MovieItem image={pic3} name="Movie 2" rating="3.8" />
            <MovieItem image={pic4} name="Movie 3" rating="4.0" />
            <MovieItem image={pic5} name="Movie 4" rating="4.2" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 10,
  },
  upcome: {
    marginTop: 10,
  },
  upImages: {
    flexDirection: 'row',
    padding: 10,
  },
  image2: {
    width: 150,
    height: 250,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  movieItem: {
    marginRight: 10,
  },
  movieDetails: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieName: {
    fontWeight: 'bold',
  },
  rating: {
    color: bRed,
    fontWeight: 'bold',
  },
});

export default Home;
