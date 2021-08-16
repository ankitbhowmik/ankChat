import { StyleSheet } from "react-native";

export const chatCompStyle = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
        alignSelf: "center",
    },
    chatArea: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    lastMessage: {
        height: 30,
        color: "gray",
        overflow: "hidden",
    },

})