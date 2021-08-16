import React from 'react';
import { View, Image, Text, TouchableNativeFeedback, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { commonStyle } from '../common.style';
import { chatCompStyle } from './chat-comp.style';

const ChatArea = ({ image, username, lastMessage, style = {}, type = "chat", onPress }) => {
    return (
        <TouchableNativeFeedback onPress={onPress ? onPress : () => { }}>
            <View style={[chatCompStyle.chatArea, { ...style }]}>
                <TouchableOpacity onPress={() => Alert.alert("hello")}>
                    <View style={{ position: "relative" }} >
                        <Image style={[chatCompStyle.avatar]} source={require("../../assets/user.jpg")} height={100} width={100} />
                        {type === "add-status" && <Icon name="plus-circle" color="#32CD32" size={24} style={{ position: "absolute", top: 30, right: 10 }} />}
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={[commonStyle.blackText, commonStyle.boldText, commonStyle.mediumText]}>{username}</Text>
                    <Text style={chatCompStyle.lastMessage}>{lastMessage}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ChatArea
