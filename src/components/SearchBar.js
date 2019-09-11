import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onSearchSubmit}) => {
    const { backgroundStyle, inputStyle, iconStyle} = styles;
    return (
        <View style={backgroundStyle}>
            <Feather name="search" style={iconStyle}/>
            <TextInput
                onEndEditing={() => onSearchSubmit(term)}
                autoCapitalize="none"
                autoCorrect={false} 
                placeholder="Search"
                style={inputStyle}
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: "center",
        marginHorizontal: 10
    }
})

export default SearchBar
