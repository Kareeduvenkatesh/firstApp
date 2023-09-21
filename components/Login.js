import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({ setScreen }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Icon name="person-circle-outline" size={100} color="white" />
        <Text style={styles.title}>Login to your account</Text>
        <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder="Phone, email or username" placeholderTextColor="white" />
       <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.input} />
       </View>
        <TouchableOpacity>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.create} onPress={() => setScreen("Register")} >Create a new account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87CEEB',
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  centerContent: {
    alignItems: 'center', // Center items horizontally within this view
  },
  title:{
    fontSize: 30,
    color: "white"
  },
  input:{
    elevation: 1,
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: 350,
    textAlign: "center",
    fontSize: 20,
    
  },
  login:{
    elevation: 1,
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: 350,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    color: "skyblue"
  },
  create:{
    fontSize : 20,
    color: "white",
    margin: 10
  },
  inputs: {
    margin: 30
  }
});

