import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [ searchText, setSearchText ] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();
    
    filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price == price;
        });
    }

    onResultClick = () => {
        
    }

    return (
        <>
            <SearchBar 
                term={searchText}
                onTermChange={setSearchText}
                onSearchSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList title="Cots Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricer" results={filterResultsByPrice('$$')} />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SearchScreen
