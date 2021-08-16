import React from 'react';
import { View, FlatList } from 'react-native';
import AvatarWithDetail from '../../../components/Chat/AvatarWithDetail';

const data = [
    { id: 1, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
    { id: 2, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
    { id: 3, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
    { id: 4, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
    { id: 5, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
    { id: 6, image: "../../assets/user.jpg", username: "Ankit Bhowmik", lastMessage: "This is your last message" },
];

const ChatScreen = (props) => {
    const goToMessageScreen = () => props.navigation.navigate("Message");

    return (
        <FlatList
            data={data}
            contentContainerStyle={{ padding: 2 }}
            renderItem={({ item }) => (<AvatarWithDetail {...item} onPress={goToMessageScreen} />)}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ChatScreen
