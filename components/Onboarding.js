import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from '../App';
import Login from './Login';
import Register from './Register';

const slides = [
  {
    key: 1,
    title: 'Dashboard',
    text: 'This is simple text',
    image: {
      uri:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Authentication',
    text: 'Other cool stuff',
    image: {
      uri:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Get Started',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: {
      uri:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    backgroundColor: '#22bcb5',
  },
];

export default function OnboardingScreen() {
  const [showRealApp, setshowRealApp] = useState(false);
  const [screen,setScreen] = useState("Register");
  const _renderItem = ({ item }) => {
    return (

    <View style={[styles.slide, { backgroundColor: '#87CEEB' }]}>
  <Text style={styles.title}>{item.title}</Text>
  <Image source={item.image} style={styles.image} />
  <Text style={styles.text}>{item.text}</Text>
</View>

    );
  };
  const _onDone = () => {
    setshowRealApp(true);
  };

  if (showRealApp) {
    if(screen === "Register")
    return <Register setScreen={(text) => setScreen(text) } />;
  } else if (screen === "Login") {
    return <Login setScreen={(text) => setScreen(text) } />
  }
   else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        showSkipButton={true} 
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color:"white",
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    color:"white",
    textAlign: 'center',
    marginHorizontal: 40,
  },
  image: {
    margin:10,
    width: "100%", // Adjust dimensions as needed
    height: 200,
    borderRadius:50,
    resizeMode: 'contain', // You can adjust this property
    marginBottom: 24,
  },
});


