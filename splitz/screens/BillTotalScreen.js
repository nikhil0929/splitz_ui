import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import ConfirmedReceiptItem from '../components/ConfirmedReceiptItem';
import Profile from '../components/Profile';

const BillTotalScreen = () => {
    
    const receiptItems = [
        {
          itemId: 1,
          itemTitle: "Spaghetti",
          quantity: 1,
          price: "12.60",
        },
        {
          itemId: 2,
          itemTitle: "White Claws",
          quantity: 4,
          price: "32.00",
        },
        {
          itemId: 3,
          itemTitle: "BBQ Chicken Pizza",
          quantity: 1,
          price: "20.00",
        },
        {
          itemId: 4,
          itemTitle: "Water",
          quantity: 4,
          price: "0.00",
        },
        {
        itemId: 5,
        itemTitle: "Tip",
        quantity: 1,
        price: "15.00",
        },
        {
        itemId: 6,
        itemTitle: "Tax",
        quantity: 1,
        price: "10.00",
        },
      ];
  
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Image
            style={styles.logo}
            source={require("../assets/splitzofficiallogo.png")}>
          </Image>
        </SafeAreaView>
          <ScrollView>
            <View style={styles.containerBox}>
            </View>
          </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      justifyContent: "flex-end",
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
    
  });
  
  export default BillTotalScreen;