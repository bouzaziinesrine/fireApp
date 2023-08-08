import { View, TextInput, Button,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { getAuth as getFirebaseAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword as getFirebasecreateUserWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getFirebaseAuth();

    const signUp = async() =>{
        const after= getFirebasecreateUserWithEmailAndPassword(auth, email, password)
        console.log('sign up',after)
        alert ('check your emails!')
    }
    const signIn = async() =>{
        const user= getFirebasecreateUserWithEmailAndPassword(auth, email, password)
        console.log('sign up',user)
 
    }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Email' onChangeText={(text:string) => setEmail(text)} value={email} />
      <TextInput style={styles.input} textContentType='password' placeholder='Password' onChangeText={(text:string) => setPassword(text)} value={password} />
        <Button  onPress={signUp} title='Create account'  />
        <Button  onPress={signIn} title='Sign In'  />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        flexDirection:'column',
        paddingVertical:20,
    },
    input:{
        marginVertical:40,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:"#fff",
    },

})

function getAuth() {
    throw new Error('Function not implemented.')
}
function createUserWithEmailAndPassword(auth: void) {
    throw new Error('Function not implemented.')
}

