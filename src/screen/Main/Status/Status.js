import React from 'react';
import { FlatList, Text, View } from 'react-native';

import AvatarWithDetail from '../../../components/Chat/AvatarWithDetail';
import { commonStyle } from '../../../components/common.style';


const data = [
    { id: 1, image: "../../assets/user.jpg", username: "Alexander", lastMessage: "47 minutes ago" },
    { id: 2, image: "../../assets/user.jpg", username: "AB devilers", lastMessage: "Yesterday 12:45 PM" },
];

const StatusScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 90 }}>
                <AvatarWithDetail username="My status" lastMessage="Tap to add status update" type="add-status" />
            </View>
            <View style={{ flex: 1 }}>
                <View style={commonStyle.sectionConatiner}>
                    <Text style={[commonStyle.smallText, { color: "gray" }]}>Viewed update</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <AvatarWithDetail {...item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default StatusScreen
