import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { rightHeaderStyle } from './rightHeader.style';

const RightHeader = () => {
    const [headerModalVisible, setHeaderModalVisible] = useState(false);

    return (
        <View style={rightHeaderStyle.container}>
            <Icon name="search" size={18} color="#fff" style={{ marginRight: 18 }} />
            <TouchableOpacity onPress={() => setHeaderModalVisible(true)}>
                <Icon2 name="dots-three-vertical" size={18} color="#fff" />
            </TouchableOpacity>
            <HeaderOptionModal headerModalVisible={headerModalVisible} setHeaderModalVisible={setHeaderModalVisible} />
        </View>
    )
}

const HeaderOptionModal = ({ headerModalVisible, setHeaderModalVisible }) => {
    return (
        <Modal
            animationType="none"
            visible={headerModalVisible}
            transparent={true}
            onRequestClose={() => setHeaderModalVisible(false)}
        >
            <TouchableOpacity style={rightHeaderStyle.wholeScreen} onPressOut={() => setHeaderModalVisible(false)}>
                <TouchableWithoutFeedback style={rightHeaderStyle.modalView}>
                    <View style={[rightHeaderStyle.modalView,]}>
                        <Text style={rightHeaderStyle.optionText}>New group</Text>
                        <Text style={rightHeaderStyle.optionText}>Settings</Text>
                        <Text style={rightHeaderStyle.optionText}>Status privacy</Text>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    )
}

export default RightHeader
