import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function UsersList() {
    const users = [
        {
            name: "Shaik Roshan"
        },
        {
            name: "Balu"
        },
        {
            name: "Sateesh"
        },
        {
            name: "Krishna"
        },
        {
            name: "Charan"
        },
        {
            name: "Sai"
        },
        {
            name: "Jaydeep"
        },
        {
            name: "Sandeep"
        },
        {
            name: "Pavan"
        },
        {
            name: "Mani"
        },
        {
            name: "Vinay"
        },
    ]
    const SingleItem = ({name, index}) => {
        return (
            <View style={styles.row} key={index} >
      <View>
        <Image  source={{ uri: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }} style={styles.logo} />
      </View>
      <View >
      <View style={styles.name}>
        <Text style={styles.username}>{name}</Text>
        <Text>4 min ago</Text>
      </View>
      <Text style={styles.details}>This is simple text</Text>
      </View>
     
      </View>
        )
    }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Users Lists</Text>
      {users.map((user, index) => (
        <View>
         <SingleItem {...user} index={index} />
         <View style={styles.line}></View>
         </View>
         
   
      ))}
      
     
      {/* <View style={styles.row}>
      <View>
        <Image  source={{ uri: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }} style={styles.logo} />
      </View>
      <View >
      <View style={styles.name}>
        <Text style={styles.username}>Shaik Roshan</Text>
        <Text>4 min ago</Text>
      </View>
      <Text style={styles.details}>This is simple text</Text>
      </View>
     
      </View> */}
    
    </View>
    </ScrollView>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue', // Set the background color to sky blue
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo:{
    width: 60,
    height: 60,
    borderRadius : 100,
    margin: 5,
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    alignItems: "center"
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  username:{
    fontWeight : "bold",
    margin: 5,
    color: "black",
    width: "90%"
  },
  details:{
    margin: 5
  },
  heading: {
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },
  bar:{
    borderWidth: 0.5,
    borderColor: "white"
  },
  line: {
    // height: 2, // Adjust the height of the line as needed
    // width: '100%',
    borderWidth: 0.5,
    borderColor: "white"
    // backgroundColor: 'white',

  },
});




// import React from 'react';
// import { View,Text,StyleSheet } from 'react-native';

// export default function UsersList() {
//   return (
//     <View>
//         <Text>Users Lists</Text>
//     </View>
//   )
// } 

// const styles = StyleSheet.create({

// })
