import React, { useState, useEffect, useRef }  from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import {Searchbar, Divider} from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import db from '../db/firebase';
import CharacterCard from '../components/CharacterCard';

const selectCharacter = () => {
  const [staticCharacterData, setStaticCharacterData] = useState([]); // 初回レンダリング時にfirestoreから取得したデータ用
  const [characterData, setCharacterData] = useState([]); // 画面表示用データ用
  const isFirstRender = useRef(false) // 初回レンダリング判定用
  const [value, setValue] = useState(""); // searchBar用
  const onChangeSearch = value => setValue(value); // searchBar用
  const { t } = useTranslation()

  // 初回レンダリング時
  useEffect(() => {
    isFirstRender.current = true
    getCharacterData();
  }, []);

  // 2回目以降のレンダリング時に使用する
  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false
    } else {
      const data = staticCharacterData.filter(obj => obj.name.indexOf(value) > -1);
      setCharacterData(data);
    }
  }, [value]);

  // firestoreからデータを取得し、stateにセットする
  const getCharacterData = async() => {
    const snapShot = await db.collection('temp').doc('temp').get();
    const obj = snapShot.data();
    const data = Object.entries(obj).map(([key, value]) => ({'id': key, 'name': value}));
    setStaticCharacterData(data);
    setCharacterData(data);
  }

  const cards = characterData.map((obj) => {
    return <CharacterCard key={obj.id} data={{
			id: obj.id,
			name: obj.name
		}}/>
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Searchbar
        placeholder={t('Please enter character name')}
        onChangeText={onChangeSearch}
        value={value}
      />
      <Divider />
      <FlatList
      data={cards}
      renderItem={({item}) => {
        return item
      }}
    />
    </SafeAreaView>
  );
}

export default selectCharacter