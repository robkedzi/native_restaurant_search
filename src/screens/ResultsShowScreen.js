import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult(navigation.getParam('id'))
    }, [])

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    if(!result){
        return null;
    }

    const { imageStyle } = styles;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={imageStyle} source={{uri: item}}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 250,
        width: 250
    }
})

export default ResultsShowScreen
