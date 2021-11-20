import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FrameTable from '../components/FrameTable';

const Tab = createMaterialTopTabNavigator();
const tabs = ['normal', 'tilt', 'smash', 'special', 'grabs', 'dodge']; // TODO:別ファイルにに切り出す

const TopTabNavigator = ({frames}) => {
  return (
    <Tab.Navigator>
      {tabs.map((tab, index) => {
        return <Tab.Screen name={tab} key={index}>
          { () => <FrameTable frames={frames[tab]}/> }
        </Tab.Screen>
      })}
    </Tab.Navigator>
  );
}

export default TopTabNavigator;