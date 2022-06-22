import React, { useEffect, useState } from "react";
import {
    View,
    ActivityIndicator,
    FlatList
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

import {SIZES} from '../../constants';
import RenderHeader from "../common/header";
import RenderTileItem from "./renderItem";
import styles from "./style";


const Home = ({ navigation }) => {

    const url2 = "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_6162194_212556_0&lat=40.7954198&lng=-74.4794881&radius=1&filters=category:things-to-do";
    const url = "http://192.168.1.199:8080/data/exploreAll?lat=40.7957927&lng=-74.4801174&category=things-to-do&range=10";
    const url1 = "http://172.28.48.1:8080/data/exploreAll?lat=40.7957927&lng=-74.4801174&category=things-to-do&range=10";

    const [explorerData, setExplorerData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getExplorerData = async () => {
        try {
            const response = await fetch(url);
            const myData = await response.json();
            setExplorerData(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getExplorerData();
    }, []);

    const initialCurrentLocation = {
        streetName: "Morristown",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function renderRestaurantList() {
        const renderMainTileItems = ({ item }) => <RenderTileItem item={item} navigation={navigation} currentLocation={currentLocation}/>;

        return (
            <FlatList
                data={explorerData}
                renderItem={renderMainTileItems}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {isLoaded ? (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                [
                    RenderHeader(currentLocation),
                    renderRestaurantList()
                ]
            )
            }
        </SafeAreaView>
    )
}



export default Home