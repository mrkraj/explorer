import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { icons, SIZES, COLORS, FONTS } from '../../constants'
import styles from "./style";

function showOfferOnImage(item) {
    if (item.discount != null && item.discount != "0") {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 50,
                    right: 0,
                    width: SIZES.width * 0.3,
                    backgroundColor: COLORS.primary,
                    borderTopLeftRadius: SIZES.radius,
                    borderBottomRightRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...styles.shadow
                }}
            >
                <Text style={{
                    ...FONTS.h4,
                    color: COLORS.white
                }}>{item.discount}% OFF</Text>
            </View>
        )
    }
}

function showDescription(item) {
    if (item.description != null) {
        return (
            <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
        )
    }
}

function showReviewStars(item) {
    if (item.reviewStars != null) {
        return (
            <><Image
                source={icons.star}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                    marginRight: 10
                }} />
                <Text style={{ ...FONTS.body3 }}>{item.reviewStars} ({item.noOfReviews})</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> | </Text></>
        )
    }
}

function showPromotionDetails(item) {
    if (item.offerTitle != null) {
        return (
            <><Text style={{ ...FONTS.body3 }}>{item.offerTitle}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        flexWrap: 'wrap'

                    }}
                >
                    {item.price != null || item.discountPrice != null && item.discount != "0"? (
                        <Text style={{ ...FONTS.h4, textDecorationLine: 'line-through' }}> {item.value}</Text>) :
                        (<Text style={{ ...FONTS.h4 }}> {item.value}</Text>)
                    }

                    {item.discountPrice != null && item.discount != "0" ? (
                        <Text style={{ ...FONTS.h4, textDecorationLine: 'line-through' }}> {item.price}</Text>) :
                        (<Text style={{ ...FONTS.h4 }}> {item.price}</Text>)
                    }
                    <Text style={{ ...FONTS.h4, color: COLORS.primary }}> {item.discountPrice}</Text>
                    <Text style={{ ...FONTS.h4, color: COLORS.green }}> ({item.discount}%) </Text>
                </View></>
        )
    }
}

function showOpenCloseStatus(item) {
    if (item.openState != null) {
        return (
            <>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> | </Text>
                <Text style={{ ...FONTS.body3 }}>{item.openState}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> | </Text>
                <Text style={{ ...FONTS.body3 }}>{item.closeState}</Text>
            </>
        )
    } else if (item.type == "event") {
        return (
            <>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> | </Text>
                <Text style={{ ...FONTS.body3 }}>{item.date}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                <Text style={{ ...FONTS.body3 }}>{item.time}</Text>
            </>
        )
    }
}


const RenderTileItem = ({ item, navigation, currentLocation}) => (

    <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() => navigation.navigate("WebViewComponent", {
           item:item
        })}
    >
        {/* Image */}
        <View
            style={{
                marginBottom: SIZES.padding
            }}
        >
            <Image
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: SIZES.radius
                }}
            />

            {showOfferOnImage(item)}
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.title}</Text>
        {showDescription(item)}
        <Text style={{ ...FONTS.body4 }}>{item.address}</Text>

        <View
            style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                flexWrap: 'wrap'

            }}
        >
            {/* Rating */}
            {showReviewStars(item)}

            {/*Distance */}
            <Text style={{ ...FONTS.body3 }}>{item.distance}mil</Text>

            {/* Open /Closing */}
            {showOpenCloseStatus(item)}

        </View>

        <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            {showPromotionDetails(item)}
        </View>

    </TouchableOpacity>
)

export default RenderTileItem;