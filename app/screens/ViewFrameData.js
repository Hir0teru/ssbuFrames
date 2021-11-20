import React, { useState, useEffect } from 'react';
import { useColorContext, colorModes } from '../context/ColorMode';
import db from '../db/firebase';
import TopTabNavigator from '../components/TopTabNavigator';

const ViewFrameData = ({route}) => {
	const {id, name} = route.params;
  const [frames, setFrames] = useState({});
  useEffect(() => {
    fetchFrames();
  }, []);

  // firestoreからデータを取得し、stateにセットする
  const fetchFrames = async() => {
    const snapShot = await db.collection('characters').doc('1').get(); //TODO:動的にする
    setFrames(snapShot.data());
  }
  return (
    <TopTabNavigator frames={frames}/>
  );
}

export default ViewFrameData;