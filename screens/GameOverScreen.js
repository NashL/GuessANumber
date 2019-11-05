import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Color from '../constants/colors';
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Game Over! </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}> I only needed <Text style={styles.highlight}>{props.roundsNumber} </Text>rounds
          to guess your number <Text style={styles.highlight}> {props.userNumber} </Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestartGame}> START GAME </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: 'open-sans-bold'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: Color.primary,
    overflow: 'hidden',
    marginVertical: 30
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 15
  },
  message: {
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center'
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Color.primary
  }
});

export default GameOverScreen;