import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default ({ navigation }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    setExpanded(!expanded);
                }}>
                <Text>
                    toque para expandir
                    {"\n"}
                </Text>
            </TouchableOpacity>
            {expanded && (
                <View style={style.tile}>
                    <Text style={{ textAlign: "center" }}>
                        Nome: Gabriel Amaro {"\n"}
                        Curso: Desenvolvimento de sistemas {"\n"}
                        Atividade de Pam III
                    </Text>
                </View>
            )}
        </View>
    )
}
const style = StyleSheet.create({
    tile: {
        //   backgroundColor: 'lightGrey',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});