import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import MovieDisplay from './Movies1';
import { bRed } from './Constants';

const url = 'https://localhost:44360/api/Movie';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
    };
  }

  componentDidMount() {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movieData: data });
      })
      .catch((error) => console.error('Error fetching movie data:', error));
  }

  render() {
    return (
      <View>
        <View>
          <View style={styles.navbar}>
            <Text style={styles.navbarBrand}>ChalCinema</Text>
            <View style={styles.searchWrapper}>
              <TextInput style={styles.searchInput} placeholder="Search" />
              <BsSearch style={styles.searchIcon} />
            </View>
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={{ color: 'white', paddingTop: 10 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <MovieDisplay listdata={this.state.movieData} />
        <View style={styles.footer}>
          <View style={styles.lineFooter}>
            <View style={styles.line}></View>
            <Text style={styles.footerText}>ChalCinema</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.socialMedia}>
            <TouchableOpacity onPress={() => { }}>
              <FaFacebookSquare style={styles.socialIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <FaInstagram style={styles.socialIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <FaYoutube style={styles.socialIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <FaTwitterSquare style={styles.socialIcons} />
            </TouchableOpacity>
          </View>
          <View style={styles.about}>
            <TouchableOpacity onPress={() => { }}>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Text>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Text>Help</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.copyRight}>Copyright 2023 © Chalo Cinema Pvt. Ltd. All Rights Reserved.</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: bRed,
    padding: 10,
  },
  navbarBrand: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  searchIcon: {
    color: '#fff',
    fontSize: 20,
  },
  logoutBtn: {
    paddingTop: 10,
  },
  footer: {
    backgroundColor: bRed,
    padding: 20,
    marginTop: 20,
  },
  lineFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  footerText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcons: {
    fontSize: 30,
    color: '#fff',
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  copyRight: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
};

export default Movie;
