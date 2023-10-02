import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import Profile from '../components/Profile';
import UserTotals from '../components/UserTotals';
import ButtonText2 from '../components/ButtonText2';

const GroupView1 = () => {
    
    const userTotals = [
        {
          userId: 1,
          userName: "Sarang Ambalakkat",
          userTotal: parseFloat("35.20"),
          userColor: "#BA4BEF",
          owner: 1,
        },
        {
            userId: 2,
            userName: "Nikhil Aggarwal",
            userTotal: parseFloat("20.54"),
            userColor:"#6F8DF5",
            owner: 0,
          },
          {
            userId: 3,
            userName: "Charles Gutcho",
            userTotal: parseFloat("28.90"),
            userColor:"#FFDF8C",
            owner: 0,
          },
          {
            userId: 4,
            userName: "Kyle Yun",
            userTotal: parseFloat("34.72"),
            userColor:"#FF9473",
            owner: 0,
          },
          {
            userId: 5,
            userName: "Raymond Dinh",
            userTotal: parseFloat("10.00"),
            userColor:"#6B72AB",
            owner: 0,
          },
          {
            userId: 6,
            userName: "Tiffany Yau",
            userTotal: parseFloat("30.26"),
            userColor:"#6D1ED4",
            owner: 0,
          },
      ];

      const billNameInputRef = useRef(null);
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <View style={styles.containerBox}>
                <View style={{ flexDirection: "row", marginTop: 40, alignContent: "center", alignSelf: "center"}}>
                    <TextInput ref={billNameInputRef} placeholder= "Group Name" style={styles.billNameInput}></TextInput>
                    <TouchableOpacity onPress={() => billNameInputRef.current.focus()}><Image style={styles.editButton} source={require("../assets/editButton.png")}></Image></TouchableOpacity>
                </View>
            <View 
            style={{flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginTop: 10,}}>
            <TouchableOpacity style={styles.clickBox}>
                <Text style={styles.mainText}>Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherBox}>
                <Text style={styles.otherText}>Dashboard</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={{alignSelf: "center",backgroundColor:colors.secondary, height:135, width: 270, borderRadius: 20,}}>
                    <Text style={{fontSize:70, fontWeight: "bold", color: colors.white, alignSelf: "center"}}>+</Text>
                    <Text style={{fontSize:25, fontWeight: "bold", color: colors.white, alignSelf: "center"}}>Create New Bill</Text>
                </View>
            </TouchableOpacity>
            </View>
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
    editButton: {
        height: 30,
        width: 30,
    },
    billNameInput: {
        fontSize: 25,
        marginRight: 15,
        fontWeight: "bold",
    },
    itemBox2: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
      },
      primaryButton: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        width: 355,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
      },
      secondaryButton: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.primary,
        width: 355,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
      },
      share: {
        height: 25,
        width: 25,
        marginLeft: 10,
      },
      primaryButton: {
        backgroundColor: colors.primary,
        borderRadius:100,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20,
        marginBottom: 10,
    },
    clickBox: {
        width:80,
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 25,
        color: colors.white,
        fontWeight: "bold",
    },
    otherBox: {
        width:130,
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 25,
    },
    mainText: {
        fontSize:16,
        color: colors.white,
        fontWeight: "bold",
    },
    otherText: {
        fontSize:16,
        color: colors.secondary,
        fontWeight: "bold",
    },
  });
  
  export default GroupView1;