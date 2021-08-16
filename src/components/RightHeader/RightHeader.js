import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { rightHeaderStyle } from './rightHeader.style';

const RightHeader = () => {
    const [showOption, setShowOption] = useState(false);

    return (
        <View style={rightHeaderStyle.container}>
            {
                showOption
                    ? <TouchableOpacity onPress={() => setShowOption(false)}>
                        <View style={rightHeaderStyle.dropdown}>
                            <Text>Settings</Text>
                            <Text>Status Privacy</Text>
                            <Text>New Group</Text>
                            <Text>Settings</Text>
                            <Text>Status Privacy</Text>
                            <Text>New Group</Text>
                            <Text>Settings</Text>
                            <Text>Status Privacy</Text>
                            <Text>New Group</Text>
                            <Text>Settings</Text>
                            <Text>Status Privacy</Text>
                            <Text>New Group</Text>
                        </View>
                    </TouchableOpacity>
                    : <>
                        <Icon name="search" size={18} color="#fff" style={{ marginRight: 18 }} />
                        <TouchableOpacity onPress={() => setShowOption(true)}>
                            <Icon2 name="dots-three-vertical" size={18} color="#fff" />
                        </TouchableOpacity>
                    </>
            }

        </View>
    )
}

export default RightHeader
