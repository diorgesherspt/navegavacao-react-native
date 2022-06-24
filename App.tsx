import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './telas/TelaPrincipal';
import TelaDois from './telas/TelaDois';
import TelaTres from './telas/TelaTres';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={TelaPrincipal}
          options={{ title: 'Olá mundo' }}
        />
        <Stack.Screen name="Dois" component={TelaDois} />
        <Stack.Screen name="Tres" component={TelaTres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
