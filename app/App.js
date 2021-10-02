import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCharacter from './screens/SelectCharacter';
import ViewFrameData from './screens/ViewFrameData';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{/* (1) */}
        <Stack.Screen
          name="SelectCharacter"
          component={SelectCharacter}
          options={{title: 'キャラクター選択'}}
        />
        <Stack.Screen
          name="ViewFrameData"
          component={ViewFrameData}
          options={({route}) => ({
            title: route.params.name,
            headerBackTitle: '戻る'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;