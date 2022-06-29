import React, { useState } from "react";
import {
    View, Text, Button
} from "react-native";

import { GOOGLE_API_KEY, SIZES, COLORS } from "../../constants";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleSelectButton from 'react-native-simple-select-button';


const Welcome = ({ navigation }) => {

    const [addressSelected, setAddressSelection] = useState(false);

    const [searchCategory, setSearchCategory] = useState('things-to-do');

    const [currentLocation, setLocation] = useState();

    function showCategorySection() {
        if (addressSelected) {
            return (
                <View>
                    <Text style={{ fontSize: SIZES.h3, marginBottom: 20 }}>What are you looking for near {currentLocation.streetName}</Text>

                    <SimpleSelectButton
                        onPress={() => setSearchCategory('things-to-do')}
                        isChecked={searchCategory === 'things-to-do'}
                        text={'Things to do'}
                        textSize={18}
                        iconName="checkcircleo"
                        iconColor="#fff"
                        iconSize={18}
                        buttonDefaultColor={COLORS.secondary}
                        buttonSelectedColor={COLORS.primary}
                        textDefaultColor="#333"
                        textSelectedColor="#fff"
                    />
                    <SimpleSelectButton
                        onPress={() => setSearchCategory('restaurants')}
                        isChecked={searchCategory === 'restaurants'}
                        text={'Restaurants'}
                        textSize={18}
                        iconName="checkcircleo"
                        iconColor="#fff"
                        iconSize={18}
                        buttonDefaultColor={COLORS.secondary}
                        buttonSelectedColor={COLORS.primary}
                        textDefaultColor="#333"
                        textSelectedColor="#fff"
                    />

                    <View style={{
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 50
                    }}>
                        <Button
                            title="Search"
                            color={COLORS.primary}
                        />
                    </View>
                </View>

            )
        }
    }


    return (
        <SafeAreaView style={{ padding: SIZES.padding * 2 }}>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: SIZES.h3 }}>Enter your address</Text>
            </View>
            <View style={{ position: 'relative', width: '100%', height: 200, marginTop: 10 }}>
                <GooglePlacesAutocomplete
                    returnKeyType={'default'}
                    fetchDetails={true}
                    minLength={5}
                    placeholder="Search"
                    textInputProps={{
                        placeholderTextColor: '#32a852',
                        returnKeyType: 'search',
                    }}
                    onPress={(data, details = null) => {

                        const initialCurrentLocation = {
                            streetName: details.vicinity,
                            gps: {
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng
                            }
                        }
                        setLocation(initialCurrentLocation)
                        setAddressSelection(true)

                        // 'details' is provided when fetchDetails = true
                        console.log("address selected")
                        console.log(data, details);
                    }}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        textInput: {
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            flex: 1
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                        listView: { color: 'black', zIndex: 100000 }
                    }}
                />
            </View>

            {showCategorySection()}


        </SafeAreaView>
    )
}

export default Welcome