import React from 'react';
import {View} from 'react-native';
import { RadioButton, Divider, Card } from 'react-native-paper';
import { useColorContext, colorModes } from '../context/ColorMode';
import { useTranslation } from 'react-i18next';

const Settings = ({route}) => {
  const { color, setColor } = useColorContext()
  const { t, i18n} = useTranslation()
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
        <RadioButton.Group onValueChange={value => i18n.changeLanguage(value)} value={i18n.resolvedLanguage} >
          <RadioButton.Item label="日本語" value="ja" />
          <RadioButton.Item label="English" value="en" />
        </RadioButton.Group>
      </Card>
    </View>
  );
}

export default Settings;