import React from "react"; 
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

import { icons, SIZES, COLORS, FONTS } from '../../constants'
import styles from "./style"; 

const RenderTileItem = ({item, navigation, currentLocation}) => (
    <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() => navigation.navigate("Restaurant", {
            item,
            currentLocation
        })}
    >
        {/* Image */}
        <View
            style={{
                marginBottom: SIZES.padding
            }}
        >
            <Image
                source={{uri:item.imageUrl}}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: SIZES.radius
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 50,
                    width: SIZES.width * 0.3,
                    backgroundColor: COLORS.white,
                    borderTopRightRadius: SIZES.radius,
                    borderBottomLeftRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...styles.shadow
                }}
            >
                <Text style={{ ...FONTS.h4 }}>{item.distance}</Text>
            </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.title}</Text>

        <View
            style={{
                marginTop: SIZES.padding,
                flexDirection: 'row'
            }}
        >
            {/* Rating */}
            <Image
                source={icons.star}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.primary,
                    marginRight: 10
                }}
            />
            <Text style={{ ...FONTS.body3 }}>{item.reviewStars}</Text>

            {/* Categories */}
            <View
                style={{
                    flexDirection: 'row',
                    marginLeft: 10
                }}
            >
                {
                    item.category.map((categories) => {
                        return (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={categories}
                            >
                                <Text style={{ ...FONTS.body3 }}>{categories}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                            </View>
                        )
                    })
                }

                {/* Price */}
                {
                    <Text
                        style={{
                            ...FONTS.body3,
                            color:COLORS.darkgray
                        }}
                    >$ {item.price}</Text>
            
                }
            </View>
        </View>
    </TouchableOpacity>
)

export default RenderTileItem;