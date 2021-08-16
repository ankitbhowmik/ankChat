import React from 'react';
import { View, Text } from "react-native";
import { messageStyle } from '../../screen/Message/message.style';

const SingleMessage = ({ message, time, type }) => {
    const messageType = type === "in" ? messageStyle.messageIn : messageStyle.messageOut;

    return (
        <View style={[messageStyle.message, messageType]}>
            <Text style={messageStyle.chatMessage}>{message}</Text>
            <Text style={messageStyle.chatTime}>{time}</Text>
        </View>
    )
}

export default SingleMessage
