import React, { useState, useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import MeetingItem from './components/MeetingItem';
import DataProvider from './components/contextProvider/provider';
import MainPage from './components/MainPage';
import colorPalette from './components/contextProvider/colors'; 

const Dark = colorPalette.Dark;
const Light = colorPalette.Light;

const App = () => {

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content' /* 'dark-content' */} /> 
        <DataProvider>
          <MainPage />
        </DataProvider>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Light,
  },
});

export default App;
