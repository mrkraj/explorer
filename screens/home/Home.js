import { useFocusEffect, useIsFocused } from "@react-navigation/native";
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


const Home = ({route, navigation}) => {

    const { location, category } = route.params;
    console.log('back to home'); 
    console.log("category-" + category);

    //for local testing get the ip by "ipconfig" on terminal
    const url1 = "http://192.168.1.153:8080/data/exploreAll?lat=40.7957927&lng=-74.4801174&category=things-to-do&range=10";

    let url = "https://dedonde.herokuapp.com/data/exploreAll?lat="+location.gps.latitude + "&lng=" + 
    location.gps.longitude + "&category=things-to-do&range=10";

    if(category.includes('restaurants')){
        url = "https://dedonde.herokuapp.com/data/exploreAll?lat="+location.gps.latitude + "&lng=" + 
        location.gps.longitude + "&category=restaurants&range=10"; 
    }

    const [relevanceData, setRelevanceData] = useState();
    const [distanceData, setDistanceData] = useState(null);

    const [explorerData, setExplorerData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getExplorerData = async (url) => {
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
        // Refresh the screen 
        //const refreshScreen = navigation.addListener('focus', () => {
            setIsLoaded(true);
            console.log("from useeffect, home page.")
            //const { location, category } = route.params;
            // url = "https://dedonde.herokuapp.com/data/exploreAll?lat="+location.gps.latitude + "&lng=" + 
            // location.gps.longitude + "&category=things-to-do&range=10";

            // if(category.includes('restaurants')){
            //     url = "https://dedonde.herokuapp.com/data/exploreAll?lat="+location.gps.latitude + "&lng=" + 
            //     location.gps.longitude + "&category=restaurants&range=10"; 
            // }
            getExplorerData(url); 
       // });
        
        //refreshScreen;
        // return () => {
        //     refreshScreen;
        // };
    }, [category]);

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

    const handleSort =(option) => {
        console.log('Sort handler called')
        if(option === 'relevance'){
            setExplorerData(relevanceData)
        }else{
            setExplorerData(sortedData())
        }
    }


    const renderRestaurantList= () => {
        const renderMainTileItems = ({ item }) => <RenderTileItem item={item} navigation={navigation} currentLocation={location}/>;
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
            {RenderHeader({ location, handleSort })}

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