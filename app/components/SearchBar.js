import React from 'react';
import { View } from 'react-native';
import { Searchbar, Divider } from 'react-native-paper';

const SearchBar = () => {
  return (
    <View>
      <Searchbar
        placeholder="キャラクター名を入力してください"
      />
      <Divider />
    </View>
  );
}

export default SearchBar;
