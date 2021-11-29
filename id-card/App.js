import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Cardio from './components/cardio';
import Cardio1 from './components/cardio1';
import Cardio2 from './components/cardio2';
import Cardio3 from './components/cardio3';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Card style={{backgroundColor:'pink'}} >
        <AssetExample name='ID Card'  pic='https://cg3.cgsociety.org/uploads/images/medium/thaisdamiao-little-girl-1-b7d90d30-uouf.jpg' classname='GLA University' profession='B.tech(CSE)' />
      </Card>
      <Card style={styles.box}><Cardio question='Name:' answer='Saumya Agarwal' /></Card>
      <Card style={styles.box}><Cardio1 question='Section:' answer='D' /></Card>
      <Card style={styles.box}><Cardio2 question='Roll Number:' answer={82} /></Card>
      <Card style={styles.box}><Cardio3 question='Univ. Roll No:' answer={191500735} /></Card>
      <Card></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding:8,
  },
  paragraph: {
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'undefined',
  },
  box:{
    height:80,
    fontSize:8,
  },
});
