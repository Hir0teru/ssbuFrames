import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SelectCharacter from '../screens/SelectCharacter';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = ({theme}) => {
  const {colors} = theme;
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
        tabBarStyle: {backgroundColor: colors.background},
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary
      })}>
        <Tab.Screen
          name="Home"
          component={SelectCharacter}
          options={{title: 'ホーム'}}
          options={{
            title: 'ホーム',
            headerStyle: {
              backgroundColor: colors.background // ヘッダーカラー
            },
            headerTintColor: colors.primary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: '設定'}}
          options={{
            title: '設定',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.primary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigator;