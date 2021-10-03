import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCharacter from './screens/SelectCharacter';
import ViewFrameData from './screens/ViewFrameData';
import TabNavigator from './components/TabNavigator';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={({route}) => ({
            headerShown: false
          })}
        />
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
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;