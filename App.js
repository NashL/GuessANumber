import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState(undefined);
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = _ => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds > 0){
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestartGame={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.container}>
     <Header title={'Guess a Number'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
