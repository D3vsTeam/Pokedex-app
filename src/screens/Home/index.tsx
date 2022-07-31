import React from "react";

import { FlatList, ScrollView, View } from "react-native";
import { Head, CustomCard } from '../../components'

const fake_data = [
    {
    id: 1,
    name: 'ola'
    }
]

export const Home = () => {
    const renderItem = ({ item }) => (
        <CustomCard item={item} />
    );
    return(
        <View style={{flex:1}}>
            <Head/>
            <ScrollView horizontal={false} style={{ padding: 20 }}>
             <FlatList
                    data={fake_data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </ScrollView>
        </View>
    )
}