
import {StyleSheet} from "react-native";
import {COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    loader:{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems : "center"
    },
    webviewStyle:{
        flex: 1,
        alignContent: 'center',
        width: 500,
        height: 600
    }
})