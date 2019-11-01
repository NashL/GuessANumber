import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color from '../constants/colors'

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.secondary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Color.secondary,
    fontSize: 22
  }
})

export default NumberContainer;