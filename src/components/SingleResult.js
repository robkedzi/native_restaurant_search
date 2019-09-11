import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SingleResult = ({ result }) => {
    const { container, imageStyle, nameStyle } = styles;
    return (
        <View style={container}>
            <Image style={imageStyle} source={{ uri: result.image_url }} />
            <Text style={nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        
    },
    imageStyle: {
        height:150,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default SingleResult
