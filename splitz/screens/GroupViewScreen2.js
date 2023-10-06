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
import HeadingText from '../components/HeadingText';
import BottomTabNavigator from '../navigators/BottomTabNavigator';

import Bill from '../components/Bill';

const GroupViewScreen2 = () => {
    
  const navigation = useNavigation();

    const userTotals = [
        {
          userId: 1,
          userName: "Sarang Ambalakkat",
          userTotal: parseFloat("101.65"),
          userColor: "#BA4BEF",
        },
        {
            userId: 2,
            userName: "Nikhil Aggarwal",
            userTotal: parseFloat("105.30"),
            userColor:"#6F8DF5",
          },
          {
            userId: 3,
            userName: "Charles Gutcho",
            userTotal: parseFloat("104.61"),
            userColor:"#FFDF8C",
          },
          {
            userId: 4,
            userName: "Kyle Yun",
            userTotal: parseFloat("110.29"),
            userColor:"#FF9473",
          },
          {
            userId: 5,
            userName: "Raymond Dinh",
            userTotal: parseFloat("131.31"),
            userColor:"#6B72AB",
          },
          {
            userId: 6,
            userName: "Tiffany Yau",
            userTotal: parseFloat("0.00"),
            userColor:"#6D1ED4",
          },
      ];

      const totalAmount = userTotals.reduce((acc, user) => acc + parseFloat(user.userTotal), 0);
      const formattedTotals = totalAmount.toFixed(2);


      const groupID = "JK76L1"
      const groupNameInputRef = useRef(null);
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <View style={styles.containerBox}>
            <View style={{justifyContent:"flex-end", alignContent: "flex-end"}}>
                <Text style={{alignSelf:"flex-end", fontSize: 20, fontWeight: "bold", color: colors.primary}}>Group ID: {groupID}</Text>
            </View>
                <View style={{ flexDirection: "row", marginTop: 25, alignContent: "center", alignSelf: "center"}}>
                    <TextInput ref={groupNameInputRef} placeholder= "Group Name" style={styles.billNameInput}></TextInput>
                    <TouchableOpacity onPress={() => groupNameInputRef.current.focus()}><Image style={styles.editButton} source={require("../assets/editButton.png")}></Image></TouchableOpacity>
                </View>
            <View 
            style={{flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginTop: 10}}>
            <TouchableOpacity style={styles.otherBox} onPress={() => navigation.navigate('GroupViewScreen1')}>
                <Text style={styles.otherText}>Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickBox}>
                <Text style={styles.mainText}>Dashboard</Text>
            </TouchableOpacity>
            </View>
            <View style={{justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                    <Text style={{ fontSize: 45, fontWeight: "bold" }}>${formattedTotals}</Text>
                    <Text style={{ fontSize: 22, alignSelf: "center", marginTop: 5 }}>Group Totals</Text>
                </View>
                <View style={styles.itemBox2}>
                <FlatList
                    data={userTotals}
                    style={{ flex:1, marginTop: 5 }}
                    keyExtractor={(user) => user.userId.toString()}
                    scrollEnabled={true}
                    renderItem={({ item }) => (
                        <UserTotals
                        userName={item.userName}
                        userTotal={item.userTotal}
                        userColor={item.userColor}
                        />
                    )}
                />
                </View>
                <TouchableOpacity
                    style={styles.primaryButton}>
                    <ButtonText>Share</ButtonText>
                    <Image style={styles.share} source={require("../assets/share2.png")}></Image>
                  </TouchableOpacity>
            </View>
            <CustomBottomTabBar state={{ routes: [{ name: 'Create/Join' }, { name: 'Manage' }, { name: 'Profile' } ] }} navigation={navigation} />
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
    clickBox: {
        width:110,
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 15,
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
        marginBottom: 15,
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
  
  export default GroupViewScreen2;