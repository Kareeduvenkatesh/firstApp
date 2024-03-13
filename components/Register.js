import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'

export default function Register({switchToLogin}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const createUser=async() => {
        try {
            let response = await auth().createUserWithEmailAndPassword(email,password);
            if (response) {
                console.log(response)
                Alert("Account Created Succesfully")
                setScreen("Login")
            }
        } catch(error) {
            console.log(error.message)
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Icon name="person-circle-outline" size={100} color="white" />
        <Text style={styles.title}>Create account</Text>
        <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder="Phone, email or username" placeholderTextColor="white" value={email} onChangeText={(text) => setEmail(text)} />
       <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
       </View>
        <TouchableOpacity onPress={() => createUser() }>
          <Text style={styles.login}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.create} onPress={switchToLogin} >Already Have An Account? Login</Text>
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
    color:"white"
    
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





// import React from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// export default function Register({setScreen}) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.centerContent}>
//         <Icon name="person-circle-outline" size={100} color="white" />
//         <Text style={styles.title}>Create account</Text>
//         <View style={styles.inputs}>
//         <TextInput style={styles.input} placeholder="Phone, email or username" placeholderTextColor="white" />
//        <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.input} />
//        </View>
//         <TouchableOpacity>
//           <Text style={styles.login}>Register</Text>
//         </TouchableOpacity>
//         <Text style={styles.create} onPress={() => setScreen("Login")} >Already Have An Account? Login</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#87CEEB',
//     flex: 1,
//     alignItems: 'center', // Center items horizontally
//     justifyContent: 'center', // Center items vertically
//   },
//   centerContent: {
//     alignItems: 'center', // Center items horizontally within this view
//   },
//   title:{
//     fontSize: 30,
//     color: "white"
//   },
//   input:{
//     elevation: 1,
//     borderRadius: 100,
//     padding: 10,
//     margin: 10,
//     width: 350,
//     textAlign: "center",
//     fontSize: 20,
    
//   },
//   login:{
//     elevation: 1,
//     borderRadius: 100,
//     padding: 10,
//     margin: 10,
//     width: 350,
//     textAlign: "center",
//     fontSize: 20,
//     backgroundColor: "white",
//     color: "skyblue"
//   },
//   create:{
//     fontSize : 20,
//     color: "white",
//     margin: 10
//   },
//   inputs: {
//     margin: 30
//   }
// });
