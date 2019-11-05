import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card'
import MainButton from "../components/MainButton";
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNumber = Math.floor(Math.random() * (max-min)) + min;

  if (rndNumber === exclude){
    return generateRandomBetween(min, max, exclude);
  }
  return rndNumber
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
  const [rounds, setRounds] = useState(0);
  const currentMin = useRef(1);
  const currentMax = useRef(100);
  const {userChoice, onGameOver} = props;

  useEffect(()=>{
    if (currentGuess === userChoice){
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (type) => {
    // 0 = below
    // 1 = above
    const directionStatus = currentGuess > props.userChoice ;

    if ( (directionStatus && type === 'greater') || (!directionStatus && type === 'lower') ) {
      Alert.alert(
        'Wait a second',
        'That can\'t be possible, think again',
        [{text: 'I understand', style: 'cancel'}]);
      return;
    }
    if (type ==='lower'){
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentMin.current, currentMax.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1 )
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess </Text>
      <NumberContainer> {currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')} >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%'
  }
});
export default GameScreen