import { View, Text, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react'

const HomePage= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href='/home/settings'>Push Settings</Link>
    </View>
  )
}

export default HomePage;