import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import ReceiptItem from '../components/ReceiptItem';

const SplitScreen = () => {
  
    handleOnPress1 = () => {
      console.log("Redo")
    }
  
    handleOnPress2 = () => {
      console.log("Exit")
    }
  
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Image
            style={styles.logo}
            source={require("../assets/splitzofficiallogo.png")}>
          </Image>
        </SafeAreaView>

              <View style={styles.newView}>
                <TitleText>Tap on the items you're paying for:</TitleText>
              </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      justifyContent: "flex-end"
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
    newView: {
      marginTop: 5,
      marginBottom: 25,
    },
    exitButton: {
      height: 35,
      width: 35,
      alignSelf: "flex-end",
    },
    redoButton: {
      height: 25,
      width: 25,
      alignSelf: "flex-end",
      marginRight: 20,
      marginBottom: 5,
    },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 100,
      width: 355,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
  });
  
  export default SplitScreen;