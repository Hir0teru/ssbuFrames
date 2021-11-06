import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import SelectCharacter from './screens/SelectCharacter';
import ViewFrameData from './screens/ViewFrameData';
import TabNavigator from './components/TabNavigator';
import Settings from './screens/Settings';
import { ColorProvider, useColorContext }from './context/ColorMode'

const Stack = createStackNavigator();

// paper用のテーマ
const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#3498db',
    accent: '#3498db',
    background: '#242424',
    surface: '#2e2e2e',
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#3498db',
    background: '#ffffff',
  },
};

const App = () => {
  const { color } = useColorContext()
  const theme =  color === 'light' ? lightTheme : darkTheme
  const {colors} = theme
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="blue" barStyle ={color === 'light' ? "dark-content" : "light-content"} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={(route) => ({
              headerShown: false
            })}
          >
            {() => (
              <TabNavigator
                theme={theme}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="SelectCharacter"
            component={SelectCharacter}
          />
          <Stack.Screen
            name="ViewFrameData"
            component={ViewFrameData}
            options={({route}) => ({
              title: route.params.name,
              headerBackTitle: '戻る',
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.primary,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default () => {
  return (
    <ColorProvider>
      <App />
    </ColorProvider>
  );
};