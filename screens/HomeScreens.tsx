import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const HomeScreens = ({ navigation }) => {

  const [userName, setUserName] = useState('')

  return (
    <View>
      <Text>HomeScreens</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your Name'
        onChangeText={text => {
          setUserName(text);
        }}
      ></TextInput>
      <Button
        title="press Button"
        onPress={() => {
          navigation.navigate('VideoCallScreen', {
           userName
          })
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreens;