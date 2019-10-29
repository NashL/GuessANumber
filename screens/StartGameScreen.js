import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const startGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Start Game Screen! </Text>
      <View style={styles.inputContainer}>
        <Text> Select a Number </Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title="Reset" onClick={()=>{}}/>
          <Button title="Confirm" onClick={()=>{}}/>
        </View>
      </View>
    </View>
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
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  }
});

export default startGameScreen;