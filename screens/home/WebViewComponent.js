import React from 'react';
import { WebView } from 'react-native-webview';

import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image
} from 'react-native';

import { SIZES, FONTS, COLORS, images, icons } from '../../constants'


function RenderWebViewHeader(navigation, source) {
  return (

    <View style={{ flexDirection: 'row', height: 50 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center'
        }}
        onPress={() => {
          navigation.goBack(null)
        }}>

        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            width: '70%',
            height: "100%",
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{source}</Text>
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


const WebViewComponent = ({ route, navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <WebView
        source={{
          uri: route.params.item.url
        }}
        style={{ flex: 1 }}
      />
      {RenderWebViewHeader(navigation, route.params.item.source)}
    </SafeAreaView>
  )
}

export default WebViewComponent;
