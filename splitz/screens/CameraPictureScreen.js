import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Pressable, Text, Alert, TouchableOpacity } from 'react-native';
import { Camera, CameraType, requestCameraPermissionsAsync, getCameraPermissionsAsync } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import CameraButton from '../components/CameraButton';

const CameraPictureScreen= ({route}) => {

    const picture = route.params.picture

    return (
        <View style={styles.container}>
           <SafeAreaView>
            <Image
                style={styles.logo}
                source={require("../assets/splitzofficiallogo.png")}>
            </Image>
            </SafeAreaView> 
        <View style={styles.containerBox}>
                <Pressable onPress={this.handleOnPress4}><Image source={require("../assets/exit.png")}style={styles.exitButton}></Image></Pressable>
                <Image source={{picture}}></Image>
            </View>
            </View>  
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.secondary,
        alignContent:"center",
        justifyContent:"flex-end"
    },
    logo: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        justifyContent:"center",
        alignContent:"center",
        width: "40%",
        height: 50,
        alignSelf:"flex-start",
    },
    containerBox: {
        flex:1,
        backgroundColor: colors.white,
        alignContent:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        paddingTop:15,
    },
    exitButton: {
        height: 35,
        width: 35,
        alignSelf:"flex-end",
    },
    pictureStyle: {
        flex: 1,
    }

})

export default CameraPictureScreen;