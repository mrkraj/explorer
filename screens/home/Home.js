import React, { useEffect, useState } from "react";
import {
    View,
    ActivityIndicator,
    FlatList
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

import {SIZES} from '../../constants';
import Tabs from "../../navigation/tabs";
import RenderHeader from "../common/header";
import RenderTileItem from "./renderItem";
import styles from "./style";


const Home = ({route, navigation}) => {

    const { location, category } = route.params;
    console.log('location:', route.params.location);
    console.log('back to home');
    //for local testing get the ip by "ipconfig" on terminal
    const url1 = "http://192.168.1.153:8080/data/exploreAll?lat=40.7957927&lng=-74.4801174&category=things-to-do&range=10";
    const url = "http://192.168.1.153:8080/data/exploreAll?lat="+location.gps.latitude + "&lng=" + 
                location.gps.longitude + "&category=things-to-do&range=10";

    const [relevanceData, setRelevanceData] = useState();
    const [distanceData, setDistanceData] = useState(null);

    const [explorerData, setExplorerData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getExplorerData = async () => {
        try {
            console.log('fetching for url-', url);
            const response = await fetch(url);
            const myData = await response.json();
            setExplorerData(myData);
            setRelevanceData(myData)
            setIsLoaded(false);
            //console.log('from fetch', myData);
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

    const sortedData = () =>{
        if(distanceData === null){
            console.log('sorting the data')
            const sorting = [].concat(explorerData)
            .sort((a, b) => a.distance > b.distance ? 1 : -1)
            setDistanceData(sorting)
            return sorting;
        }else{
            return distanceData
        }
    }

    const [currentLocation, setCurrentLocation] = React.useState(location)

    const handleSort =(option) => {
        console.log('Sort handler called')
        if(option === 'relevance'){
            setExplorerData(relevanceData)
        }else{
            setExplorerData(sortedData())
        }
    }


    const renderRestaurantList= () => {
        const renderMainTileItems = ({ item }) => <RenderTileItem item={item} navigation={navigation} currentLocation={currentLocation}/>;
        //console.log(explorerData)
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
            {RenderHeader({ currentLocation, handleSort })}

            {isLoaded ? (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                [
                    renderRestaurantList()
                ]
            )}

        </SafeAreaView>
    )
}



export default Home