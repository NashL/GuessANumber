import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Color from '../constants/colors'
import NumberContainer from "../components/NumberContainer";

const startGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return;
    }

    setConfirmed(true);
    resetInputHandler();
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  }

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContent}>
        <Text> You Selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button color={Color.primary} title="START GAME" onPress={props.onStartGame.bind(this, selectedNumber)}/>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.title}> Start Game Screen! </Text>
        <Card style={styles.inputContainer}>
          <Text> Select a Number </Text>
         <Input
           style={styles.inputText}
           blurOnSubmit
           autocapitalize='none'
           autoCorrect={false}
           keyboardType="number-pad"
           maxLength={2}
           onChangeText={numberInputHandler}
           value={enteredValue}
         />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/>
            </View>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Color.secondary}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  inputText: {
    width: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    width: 120,
    maxWidth: '33%'
  },
  summaryContent: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default startGameScreen;