import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Maps from "./Screen/mapsGoogle"
import Animation from './Screen/LayoutAnimation'


export default function App() {
  return (
    <>
      <Maps />
      {/* <Animation /> */}
    </>
  );
}
