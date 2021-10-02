import React from 'react';
import {View} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CharacterCard = ({data}) => {
	const {id, name} = data;
	const navigation = useNavigation();
	return (
		<View>
			<Card onPress={() => navigation.navigate('ViewFrameData', {
				id: id,
				name: name
			})}>
				<Card.Title title={name} />
			</Card>
			<Divider />
		</View>
	);
}

export default CharacterCard;