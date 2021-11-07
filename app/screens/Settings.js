import React from 'react';
import {View} from 'react-native';
import { RadioButton, Divider, Card } from 'react-native-paper';
import { useColorContext, colorModes } from '../context/ColorMode';


const Settings = ({route}) => {
  const { color, setColor } = useColorContext()
  return (
    <View>
      <Card>
        <Card.Title title="テーマ" />
        <RadioButton.Group onValueChange={value => setColor(value)} value={color}>
          <RadioButton.Item label="ライト" value="light" />
          <RadioButton.Item label="ダーク" value="dark" />
          <RadioButton.Item label="自動(iOS設定に従う)" value="auto" />
        </RadioButton.Group>
      </Card>
      <Divider/>
      <Card>
        <Card.Title title="言語" subtitle="language"/>
        <RadioButton.Group>
          <RadioButton.Item label="日本語" value="japanese" />
          <RadioButton.Item label="English" value="english" />
        </RadioButton.Group>
      </Card>
    </View>

  );
}

export default Settings;