import { StyleSheet } from "react-native";

export const commonStyle = StyleSheet.create({
    blackText: {
        color: "black",
    },
    smallText: {
        fontSize: 12,
    },
    mediumText: {
        fontSize: 16,
    },
    boldText: {
        fontWeight: "bold"
    },
    sectionConatiner: {
        padding: 5,
        height: 30,
        justifyContent: "center",
        backgroundColor: "#D3D3D3",
    },
    sectionContainerText: {
        fontSize: 15,
        color: "#696969",
    },
    flexRowAlignCenter: {
        flexDirection: "row",
        alignItems: "center"
    }
})