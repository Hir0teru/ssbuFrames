import React from 'react';
import {View} from 'react-native';
import { useColorContext, colorModes } from '../context/ColorMode'

const ViewFrameData = ({route}) => {
	const {id, name} = route.params;
  return (
    <View>
    </View>
  );
}

export default ViewFrameData;