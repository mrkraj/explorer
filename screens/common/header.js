
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
} from "react-native";

import { Overlay } from "react-native-elements";
import SimpleSelectButton from 'react-native-simple-select-button';
import { icons, SIZES, COLORS, FONTS } from '../../constants';

const RenderHeader = (currentLocation) => {

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => { setVisible(!visible) };

    const [sortChoice, setChoice] = useState('relevance');
    const sortOption = (sortChoice) => {
        console.log(sortChoice)
        setChoice(sortChoice)
    }

    const updateSorting = () => {
        { toggleOverlay() }
        console.log('Update the sorting for', sortChoice)
    }

    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={toggleOverlay}
            >
                <Image
                    source={icons.filter}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={{
                    width: 300,
                    height: 300,
                    borderRadius: SIZES.radius
                }}>
                    <TouchableOpacity onPress={toggleOverlay}>
                        <Text style={{ position: 'absolute', height: 50, right: 0 }}>x</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: SIZES.h3 }}>Sort by</Text>

                    <View>
                        <SimpleSelectButton
                            onPress={() => sortOption('relevance')}
                            isChecked={sortChoice === 'relevance'}
                            text={'relevance'}
                            textSize={14}
                            iconName="checkcircleo"
                            iconColor="#fff"
                            iconSize={14}
                            buttonDefaultColor={COLORS.secondary}
                            buttonSelectedColor={COLORS.primary}
                            textDefaultColor="#333"
                            textSelectedColor="#fff"
                        />
                        <SimpleSelectButton
                            onPress={() => sortOption('distance')}
                            isChecked={sortChoice === 'distance'}
                            text={'distance'}
                            textSize={14}
                            iconName="checkcircleo"
                            iconColor="#fff"
                            iconSize={14}
                            buttonDefaultColor={COLORS.secondary}
                            buttonSelectedColor={COLORS.primary}
                            textDefaultColor="#333"
                            textSelectedColor="#fff"
                        />
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        width: "40%",
                        right: 0
                    }}>
                        <Button
                            onPress={updateSorting}
                            title="Update"
                            color={COLORS.primary}
                            accessibilityLabel="Update the Item Order based on the sort option."
                        />
                    </View>


                </View>

            </Overlay>


            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '70%',
                        height: "80%",
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default RenderHeader;