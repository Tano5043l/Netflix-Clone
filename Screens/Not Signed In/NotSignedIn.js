import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { generalstyles } from '../style';


const NotSignedIn = () => {
  return (
  <ScrollView>
    <View style={generalstyles.container}>
      <View style={styles.container1}>
        <ImageBackground source={require('../../assets/img.jpeg')} resizeMode="cover" style={styles.image}>
          <View style={styles.view1}>
            <View style={styles.header}>
              <Image
              source={{uri: 'data:image/png;base64,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'}}
              style={{width: 130, height : 30, padding: 25}}
              />
              <TouchableOpacity>
                <Text style={styles.headertxt}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={25} style={{padding:10}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.container01}>
              <Text style={styles.text1}>Unlimited movies, TV shows, and more</Text>
              <Text style={styles.text2}>Watch anywhere. Cancel anytime.</Text>
              <Text style={styles.text2}>Ready to watch? Enter your email to create or restart your membership.</Text>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor={'white'}
              />
              <TouchableOpacity style={styles.pressable}>
                <Text style={styles.presstxt}>JOIN NOW</Text>
                <Ionicons name="chevron-forward" size={28} style={{padding:10,paddingLeft: 0}} color={'white'}/>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Enjoy on your Tv</Text>
        <Text style={styles.text2}>Wath on Smart TVs, Playstations, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Text>
        <Image
        source={require('../../assets/img.jpeg')}
        style={{margin: 50}}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Download your shows to watch offline</Text>
        <Text style={styles.text2}>Save your favorates easily and always have something to watch.</Text>
        <Image
        source={require('../../assets/img.jpeg')}
        style={{margin: 50}}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Watch everywhere</Text>
        <Text style={styles.text2}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Create profile for kids</Text>
        <Text style={styles.text2}>Send kids on adventures with their favorite characters in a space made jusy for them -- free with your membership.</Text>
        <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GMsV1Sg1Hbg5BBjWjx4Mt-7DKfKmNpBzHZKHToZ9Ow&s'}}
        style={{height: 300, width: 300,margin: 50}}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Frequently asked questions</Text>
        <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>What is Netflix?</Text>
          <Text style={styles.text3}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentations, and more on thousands of internet connected devices.</Text>
          <Text style={styles.text3}>You can watch as much as you want without a single commercial-all for one low monthly price. There's always something new to discover and new TV shows ans movies are added every week!</Text>
        </View>
        <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>How much does Netflix cost?</Text>
          <Text style={styles.text3}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device all for one fixed monthlyy fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.</Text>
          </View>
        <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>Where can I watch?</Text>
          <Text style={styles.text3}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,smartphones, tablets,streaming media players and game consoles.</Text>
          <Text style={styles.text3}>You can also download your favorite shows with the ios,Android, or /Windows 10 app. Use downloads to watch will you are on the go and without internet connection. Take Netflix with you anywhere.</Text>
        </View>
        <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>How do I cancel?</Text>
          <Text style={styles.text3}>Netflix is flexible. There are no pesky contracts and commitments. You can easily cancel your account online in two clicks. There are no camcellation fees -- start or stop you account anytime.</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>What can I watch on Netflix?</Text>
          <Text style={styles.text3}>Netflix has an extensive library of feature films, documentaries,TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Text>
        </View>
        <View style={{backgroundColor: 'grey', marginBottom: 10}}>
          <Text style={styles.text3}>Is Netflixgood for kids?</Text>
          <Text style={styles.text3}>The Netflix kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</Text>
          <Text style={styles.text3}>Kids profiles come with PIN-protected parent controls that let you restrict the maturity rating of content kids can watch and block specific titles you dont want kids to see.</Text>
        </View>
        <View style={{padding: 30}}>
              <Text style={styles.text2}>Ready to watch? Enter your email to create or restart your membership.</Text>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor={'white'}
              />
              <TouchableOpacity style={styles.pressable}>
                <Text style={styles.presstxt}>JOIN NOW</Text>
                <Ionicons name="chevron-forward" size={28} style={{padding:10,paddingLeft: 0}} color={'white'}/>
              </TouchableOpacity>
            </View>
    </View>
  </ScrollView>
);
  };

const styles = StyleSheet.create({
  
  container01: {
    padding: 30,
    marginTop: 70,

  },
  container1: {
    borderBottomWidth: 5,
    borderBottomColor: '#a0a0a0a0',
  },
  headertxt: {
    paddingLeft: 160,
    paddingTop: 15,
    fontWeight: 'bold',

  },
  view1: {
    backgroundColor: '#000000a0',
  },
  header: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row'
  },
  image: {
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 30,

  },
  text2: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    paddingBottom: 20,
    
  },
  text3: {
    color: 'white',
    fontSize: 19,
    padding: 10,
  },
  input: {
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    color: 'white',
    fontSize: 20,
    borderRadius: 5,

  },
  pressable: {
    backgroundColor: 'red',
    width: 150,
    height: 50,
    borderRadius: 5,
    marginLeft: 105,
    flexDirection: 'row'
  },
  presstxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    paddingRight: 0,
    
  },
});

export default NotSignedIn;