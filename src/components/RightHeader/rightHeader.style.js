import { Dimensions, StyleSheet } from "react-native";

export const rightHeaderStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    modalView: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 2,
        alignItems: "flex-start",
        shadowColor: "#000",
        marginLeft: "auto",
    },
    wholeScreen: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    optionText: {
        marginVertical: 12,
        fontSize: 16,
    }
})