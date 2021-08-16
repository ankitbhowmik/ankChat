import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { commonStyle } from '../../../components/common.style';

const CallScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={[commonStyle.mediumText, { padding: 25, color: "gray" }]}>
                To start calling contacts who have WhatsApp <Icon name="phone" size={20} />
                &nbsp; at the bottom of your screen
            </Text>
        </View>
    )
}

export default CallScreen
