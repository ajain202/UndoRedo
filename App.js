import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';
import Textinput from './Components/Textinput'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  console.disableYellowBox = true
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await new Promise(resolve => setTimeout(resolve, 5000))
      await SplashScreen.hideAsync();
    }
    prepare();
  })

  return (
    <RootSiblingParent> 
    <View style={styles.container}>
      <Text style={styles.text}>
        To Undo tilt phone left
      </Text>
      <Text style={styles.text}>
        To Redo tilt phone right
      </Text>
      <View>
        <Textinput/>
      </View>
    </View>
    </RootSiblingParent> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },

});
