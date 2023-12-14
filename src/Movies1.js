import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { bRed } from "./Constants";

const MovieDisplay = ({ listdata, navigation }) => {
  const click = async (id) => {
    try {
      const response = await axios.get(`https://localhost:44360/api/Movie/${id}`);
      console.log(response.data);
      // Handle the response as needed, e.g., navigate to another screen
      navigation.navigate('Book', { movie: response.data });
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const renderdata = () => {
    if (listdata && listdata.length > 0) {
      return (
        <ScrollView horizontal>
          {listdata.map((Movie) => (
            <View key={Movie.movieId} style={styles.cardContainer}>
              <View style={styles.cardBody}>
                <Image source={{ uri: Movie.image }} style={styles.movieImage} />
                <Text>{Movie.movieName}</Text>
                <View style={styles.cardFlex}>
                  <Text style={{ paddingRight: 40 }}>Theatre: {Movie.theatreName}</Text>
                </View>
                <View style={styles.cardFlex}>
                  <Text style={{ paddingRight: 30 }}>Location: {Movie.location}</Text>
                  <Text style={{ paddingLeft: 40 }}>Rating: {Movie.rating}</Text>
                </View>
                <TouchableOpacity style={styles.cardBtn} onPress={() => click(Movie.movieId)}>
                  <Text style={{color:'white'}}>Book Movie</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return <Text>Oops!</Text>;
    }
  };

  return <View style={styles.container}>{renderdata()}</View>;
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {
    alignItems: 'center',
  },
  movieImage: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardBtn: {
    backgroundColor: bRed,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
};

export default MovieDisplay;
