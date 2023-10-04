import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import Profile from '../components/Profile';
import UserTotals from '../components/UserTotals';
import ButtonText2 from '../components/ButtonText2';
import HeadingText from '../components/HeadingText';


const ProfileScreen = () => {
    
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerBox}>
            <Text style={{marginBottom: 5, color:"black", fontSize:26, alignSelf: "center", fontWeight: "bold"}}>My Profile</Text>
            <View>
                <View style={styles.profilePicture}></View>
                <Text style={styles.nameText}>Kyle Yun</Text>
                <Text style={styles.nameText2}>@kylexyun</Text>
            </View>
            <ScrollView>
                <TitleText>Full Name:</TitleText>
                <View style={{flexDirection: "row"}}>
                    <TextInput defaultValue= "Kyle Yun" style={styles.entryBox}></TextInput>
                    <TouchableOpacity><Image style={styles.go} source={require("../assets/go.png")}></Image></TouchableOpacity>
                </View>
                <TitleText>Username:</TitleText>
                <View style={{flexDirection: "row"}}>
                    <TextInput defaultValue= "@kylexyun" style={styles.entryBox}></TextInput>
                    <TouchableOpacity><Image style={styles.go} source={require("../assets/go.png")}></Image></TouchableOpacity>
                </View>
                <TitleText>Phone Number:</TitleText>
                <View style={{flexDirection: "row"}}>
                    <TextInput defaultValue= "+1 (408) 691-9112" style={styles.entryBox}></TextInput>
                    <TouchableOpacity><Image style={styles.go} source={require("../assets/go.png")}></Image></TouchableOpacity>
                </View>
                <TitleText>Email:</TitleText>
                <View style={{flexDirection: "row"}}>
                    <TextInput style={styles.entryBox}></TextInput>
                    <TouchableOpacity><Image style={styles.go} source={require("../assets/go.png")}></Image></TouchableOpacity>
                </View>
                <TitleText>Preferred method of payment:</TitleText>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:18, marginTop: 15,}}>Venmo</Text>
                    <View style={{flexDirection: "row", alignItems: "center",}}>
                        <Image style={styles.icons} source={require("../assets/venmo.png")}></Image>
                        <Text style={{color: "#008CFF", fontWeight: "500", fontSize: 18, marginLeft: 10, textDecorationLine: "underline", marginTop: 12}}>Connect your Venmo</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:18, marginTop: 15,}}>Zelle</Text>
                    <View style={{flexDirection: "row", alignItems: "center",}}>
                        <Image style={styles.icons} source={require("../assets/zelle.png")}></Image>
                        <Text style={{color: "#6D1ED4", fontWeight: "500", fontSize: 18, marginLeft: 10, textDecorationLine: "underline", marginTop: 12}}>Connect your Zelle</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:18, marginTop: 15,}}>Bank Account</Text>
                    <View style={{flexDirection: "row", alignItems: "center",}}>
                        <Image style={styles.icons} source={require("../assets/plaid2.png")}></Image>
                        <Text style={{color: "black", fontWeight: "500", fontSize: 18, marginLeft: 10, textDecorationLine: "underline", marginTop: 12}}>Connect with Plaid</Text>
                    </View>
                </View>
            </ScrollView>
            </View>
            </TouchableWithoutFeedback>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      flex: 1,
    },
    logo: {
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      justifyContent: "center",
      alignContent: "center",
      width: "40%",
      height: 50,
      alignSelf: "flex-start",
    },
    containerBox: {
      flex: 1,
      backgroundColor: colors.white,
      alignContent: "center",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30,
      paddingTop: 30,
    },
    profilePicture: {
        backgroundColor: "orange",
        height: 70,
        width: 70,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 10,
    },
    nameText: {
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 10,
    },
    nameText2: {
        fontSize: 14,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    entryBox: {
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        width: 270,
        borderColor: "#CFCFCF",
        marginTop: 15,
        padding: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    go: {
        height: 40,
        width: 40,
        marginLeft: 15,
        alignSelf: "center",
        marginTop: 20,
    },
    icons: {
        height: 30,
        width: 30,
        alignSelf: "center",
        marginTop: 15,
    },
    plaidIcon: {
        height: 50,
        width: 50,
        alignSelf: "center",
        marginTop: 15,
    },
  });
  
  export default ProfileScreen;