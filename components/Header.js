import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const header = (props) => {
  return (
    <View style={style.header}>
      <Text style={style.title}> {props.title} </Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#fd0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff"
  }
});

export default header;