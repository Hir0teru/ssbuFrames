import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FrameTable from '../components/FrameTable';

const Tab = createMaterialTopTabNavigator();
const tabs = ['Normal', 'Tilt', 'Smash', 'Special', 'Grabs', 'Dodge']; // TODO:別ファイルにに切り出す

const TopTabNavigator = ({frames}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none' },
        tabBarItemStyle: { width: 80 }, // TODO:マシン毎に設定するライブラリを使用する
        tabBarScrollEnabled: true,
      }}
    >
      {tabs.map((tab, index) => {
        return <Tab.Screen name={tab} key={index} options={{ tabBarLabel: tab }}>
          { () => <FrameTable frames={frames[tab]}/> }
        </Tab.Screen>
      })}
    </Tab.Navigator>
  );
}

export default TopTabNavigator;