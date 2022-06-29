
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

const RenderHeader = ({ currentLocation, handleSort }) => {

    const [filterOverlayVisible, setFilterOverlayVisible] = useState(false);
    const toggleFilterOverlay = () => { setFilterOverlayVisible(!filterOverlayVisible) };

    const [inviteOverlayVisible, setInviteOverlayVisible] = useState(false);
    const toggleInviteOverlay = () => { setInviteOverlayVisible(!inviteOverlayVisible) };

    const [sortChoice, setChoice] = useState('relevance');
    const sortOption = (sortChoice) => {
        console.log(sortChoice)
        setChoice(sortChoice)
    }

    const updateSorting = () => {
        { toggleFilterOverlay() }
        { handleSort(sortChoice) }
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
                onPress={toggleFilterOverlay}
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

            <Overlay isVisible={filterOverlayVisible} onBackdropPress={toggleFilterOverlay}>
                <View style={{
                    width: 300,
                    height: 300,
                    borderRadius: SIZES.radius
                }}>
                    <TouchableOpacity onPressIn={toggleFilterOverlay}>
                        <Image
                            source={icons.close}
                            resizeMode="contain"
                            style={{
                                alignSelf: 'flex-end',
                                width: 20,
                                height: 20
                            }}
                        />
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
                onPress={toggleInviteOverlay}
            >
                <Image
                    source={icons.addperson}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>

            <Overlay isVisible={inviteOverlayVisible} onBackdropPress={toggleInviteOverlay}>
                <View style={{
                    width: 300,
                    height: 300,
                    borderRadius: SIZES.radius
                }}>
                    <TouchableOpacity onPressIn={toggleInviteOverlay}>
                        <Image
                            source={icons.close}
                            resizeMode="contain"
                            style={{
                                alignSelf: 'flex-end',
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: SIZES.h3 }}>===TODO===</Text>
                    <Text style={{ fontSize: SIZES.h3 }}>Invite your friends to go with you.</Text>
                    <Text style={{ fontSize: SIZES.body3 }}>Personalize the lists based on common interest of the people selected.</Text>
                    <Text style={{ fontSize: SIZES.body3 }}>Send Invite Email to people selected with locaiton and time details.</Text>

                </View>

            </Overlay>
        </View>
    )
}

export default RenderHeader;