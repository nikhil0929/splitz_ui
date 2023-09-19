import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Pressable, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType, requestCameraPermissionsAsync, getCameraPermissionsAsync } from "expo-camera"
import * as MediaLibrary from "expo-media-library"


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import CameraButton from '../components/CameraButton';

const CameraScreen= ({navigation}) => {

    const [type, setType] = useState(CameraType.back);
    const [flashMode, setFlashMode] = useState("off");
    const cameraRef = useRef()
    const [pictureUri, setPictureUri] = useState("");

    const switchFlashMode = () =>
        setFlashMode(flashMode === "off" ? "on" : "off");

    const takePicture = async () => {
        const {uri, width, height} =  await cameraRef?.current.takePictureAsync();
        setPictureUri(uri);
        console.log(uri);
        navigation.navigate("CameraPictureScreen", {picture: (uri)})
    };

    useEffect(() => {
        requestPermissions()
    }, []);

    const requestPermissions = async() => {
        await requestCameraPermissionsAsync();
    };

    const getPermissions = async() => {
        const cameraPermission = await getCameraPermissionsAsync();

        return cameraPermission.granted;
    };

    if (!getPermissions()) {
        return Alert.alert("Camera Access Required","Please go to your phone settings to provide camera access to splitz.",
        [{text: "Got it" }]
        );
    }

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
                <Camera ref = {cameraRef} style={styles.camera} type={type} flashMode={flashMode}>
                </Camera>
                <View style={styles.cameraButtons}>
                    <View style = {{marginRight: 48,}}></View>
                    <TouchableOpacity onPress = {takePicture}><Image style={styles.cameraIcons} source={require("../assets/circle.png")}/></TouchableOpacity>
                    <TouchableOpacity onPress={switchFlashMode}><Image style={styles.cameraIcons} source={flashMode === "off" ? require("../assets/flashicon.png"):require("../assets/flashon.png")}/></TouchableOpacity>
                </View>
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
    camera: {
        flex: 1,
        borderRadius:20,
    },
    cameraButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        bottom: 0,
        flex: 0.12,
        backgroundColor: colors.secondary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    cameraIcons: {
        height: 50,
        width: 50,
        marginTop: 12,
    },

})

export default CameraScreen;