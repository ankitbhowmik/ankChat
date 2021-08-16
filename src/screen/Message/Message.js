import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, ImageBackground, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import SingleMessage from '../../components/Message/SingleMessage';
import { messageStyle } from './message.style';
import { commonStyle } from '../../components/common.style';

const messages = [
    { id: "0", type: "in", message: "This is message in sdfn askdfkjasdf asdfklajs kfjlaksjf lasjdflasjklfasljf lsjflkas jdflksldkfj laksdjflka sjdfljafsdk jflsadfkl asdklfjlka sdfjls fasjkh fkjashdfjkh ", time: "10:06 PM" },
    { id: "1", type: "out", message: "This is message out ", time: "11:00 PM" },
]

const MessageScreen = () => {
    return (
        <View style={messageStyle.messageContainer}>
            <ImageBackground
                source={require("../../../assets/messageBackground.png")} style={StyleSheet.absoluteFillObject}
            />
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <SingleMessage {...item} />}
            />
            <View style={commonStyle.flexRowAlignCenter}>
                <View style={messageStyle.messageInput}>
                    <View style={commonStyle.flexRowAlignCenter}>
                        <TouchableOpacity>
                            <Icon name="smile" size={18} color="black" style={messageStyle.messageIcon} />
                        </TouchableOpacity>
                        <TextInput placeholder="Type a message" style={{ flex: 1 }} />
                        <TouchableOpacity>
                            <Icon name="paperclip" size={18} color="black" style={messageStyle.messageIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon2 name="camera" size={18} color="black" style={messageStyle.messageIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={messageStyle.mic}>
                    <Icon2 name="microphone" size={20} color="white" />
                </View>
            </View>
        </View>
    )
}

export default MessageScreen
