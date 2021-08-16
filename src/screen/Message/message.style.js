import { StyleSheet, Dimensions } from "react-native";

export const messageStyle = StyleSheet.create({
    message: {
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: "row",
        paddingHorizontal: 10,
        borderColor: "#d3d3d3",
        maxWidth: Dimensions.get("window").width / 1.5,
    },
    chatMessage: {
        fontSize: 14,
        paddingRight: 30
    },
    chatTime: {
        fontSize: 11,
        opacity: 0.5,
        marginLeft: "auto",
        alignSelf: "flex-end",
    },
    messageIn: {
        backgroundColor: "#fff",
        marginRight: "auto"
    },
    messageOut: {
        marginLeft: "auto",
        backgroundColor: "#dcf8c6",
    },
    messageContainer: {
        flex: 1,
        padding: 5
    },
    messageInput: {
        flex: 1,
        padding: 10,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: "#D3D3D3",
        backgroundColor: "#FFFAFA",
    },
    mic: {
        width: 45,
        height: 45,
        marginLeft: 4,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#128C7E"
    },
    messageIcon: {
        opacity: .5,
        paddingHorizontal: 10,
    }
})
