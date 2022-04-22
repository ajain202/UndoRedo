## Table of Contents
1. [Introduction](#Introduction)
1. [Pre-requsites](#Pre-requsites)  
1. [Steps-to-run](#Steps-to-run)
1. [Instructions-to-use-application](#Instructions-to-use-application)
1. [Refrences](#Refrences)
1. [Demo](Demo/Demo.mp4)
# Introduction  
This application was made using react native.  
It provides Undo Redo capabilities based on accelerometer data (Tilt Based Undo/Redo).  
# Pre-requsites
Latest version of Node JS  
https://nodejs.org/en/  
Expo Go app for iOS and Android  
Android: https://play.google.com/store/apps/details?id=host.exp.exponent  
IOS: https://apps.apple.com/app/expo-go/id982107779  
Recommended code Editor
VSCode Editor: https://code.visualstudio.com/download  
# Steps-to-run
- Clone This Repository.
- Navigate to the root folder of the project(the one with package.json file).
- Open cmd Terminal in the folder/Use integrated terminal if using VSCode and run the command npm install(to install all dependencies).
- Run the command npm start(to run the code in dev mode).
- Follow the link/Press d in cmd terminal to open developer tools page in your browser.
- On the Developer page change the connection type to tunnel.
- Open Expo Go app on your device and scan the qr code to run the application.  
# Instructions-to-use-application  
- Tilt Phone left to undo text input by one character.
- Tilt Phone right to redo text input by one character.
# Refrences
- EXPO: https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and
- Expo sensor: https://docs.expo.dev/versions/latest/sdk/accelerometer/
- Splash Screen: https://docs.expo.dev/versions/latest/sdk/splash-screen/
- react native root toast: https://docs.expo.dev/ui-programming/react-native-toast/#cross-platform--react-native-root-toast
- react native https://reactnative.dev/docs/getting-started
