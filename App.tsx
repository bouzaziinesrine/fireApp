import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './app/screen/List';
import Details from './app/screen/Details';
import Login from './app/screen/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';


const Stack = createNativeStackNavigator()



export default function App() {
  // const [authenticated, setAuthenticated] = useState(false)

  useEffect (() => {
    onAuthStateChanged
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='My Todo'>
        <Stack.Screen name="My Todo" component={List} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


