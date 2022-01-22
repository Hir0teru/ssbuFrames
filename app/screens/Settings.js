import React from 'react';
import {View} from 'react-native';
import { RadioButton, Divider, Card } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useColorContext, colorModes } from '../context/ColorMode';

const Settings = ({route}) => {
  const { color, setColor } = useColorContext()
  const { t, i18n } = useTranslation()
  return (
    <View>
      <Card>
        <Card.Title title={t('theme')} />
        <RadioButton.Group onValueChange={value => setColor(value)} value={color}>
          <RadioButton.Item label={t('light')}value="light" />
          <RadioButton.Item label={t('dark')} value="dark" />
          <RadioButton.Item label={t('auto')} value="auto" />
        </RadioButton.Group>
      </Card>
      <Divider/>
      <Card>
        <Card.Title title={t('language')} subtitle={t('subtitle')}/>
        <RadioButton.Group onValueChange={value => i18n.changeLanguage(value)} value={i18n.resolvedLanguage} >
          <RadioButton.Item label="日本語" value="ja" />
          <RadioButton.Item label="English" value="en" />
        </RadioButton.Group>
      </Card>
    </View>
  );
}

export default Settings;