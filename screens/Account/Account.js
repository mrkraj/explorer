import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../../constants"

const Account = ({ route, navigation }) => {
    console.log('inside account')
    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: SIZES.h3, marginBottom: 20 }}>TODO Account page </Text>
            </View>
        </SafeAreaView>
    )
}

export default Account;