import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SelectCharacter from '../screens/SelectCharacter';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        /* tabBarActiveTintColor: 'skyblue', 一旦デフォルト
        tabBarInactiveTintColor: 'gray' */
      })}>
        <Tab.Screen
          name="Home"
          component={SelectCharacter}
          options={{title: 'ホーム'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: '設定'}}
        />
      </Tab.Navigator>
  );
};

export default TabNavigator;