import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants"

const Account = ({ route, navigation }) => {
    console.log('inside account')
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: SIZES.h3, marginBottom: 20 }}>What are you looking for near</Text>
        </View>
    )
}

export default Account;