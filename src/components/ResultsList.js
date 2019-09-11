import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import SingleResult from './SingleResult';
import { withNavigation } from 'react-navigation'


const ResultsList = ({ title, results, navigation }) => {
    const { container, titleStyle, listStyle } = styles;

    if(!results.length){
        return null;
    }

    return (
        <View style={container}>
            <Text style={titleStyle}>{title}</Text>
            <FlatList 
                style={listStyle}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('SingleResult', { id: item.id})}>
                            <SingleResult result={item}/>
                        </TouchableOpacity>
                    )}
                }
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
})

export default withNavigation(ResultsList)
