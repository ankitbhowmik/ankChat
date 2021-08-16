import React from 'react';
import { View, Image, Text, Dimensions } from "react-native";
import { chatCompStyle } from './chat-comp.style';

const Avatar = ({ image }) => {
    return (
        <View style={chatCompStyle.chatArea}>
            <Image style={chatCompStyle.avatar} defaultSource={require("../../assets/user.jpg")} source={require("../../assets/user.jpg")} height={100} width={100} />
            <View>
                <Text>Username</Text>
                <Text style={{ overflow: "hidden", height: 30 }}>Last message sadj kfasjl jlkasjfl ajklflaks lkjsadflj ljadlsj lsadjfl lasjf lasdlj lsadjfl jflj aljfla sjlfja ljfla jlajsdfljs ldfja sldfjsalddfj ljdslf lsadfj lj</Text>
            </View>
        </View>
    )
}

export default Avatar
