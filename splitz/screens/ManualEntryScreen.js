import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import ReceiptItem from '../components/ReceiptItem';

const ManualEntryScreen = () => {
    
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
      ];
    
    const [currentItems, setCurrentItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const [itemIdCounter, setItemIdCounter] = useState(receiptItems.length + 1);
  
    const addNewItem = () => {
      if (itemName && itemPrice) {
        const newItem = {
          itemId: itemIdCounter,
          itemTitle: itemName,
          quantity: itemQuantity ? parseInt(itemQuantity) : 1,
          price: itemPrice,
        };
  
        setItemIdCounter(itemIdCounter + 1);
  
        setCurrentItems([...currentItems, newItem]);
  
        setItemName('');
        setItemQuantity('');
        setItemPrice('');
      } else {
        Alert.alert('Incomplete Information', 'Please fill in all fields.');
      }
    };
  
    const handleItemUpdate = (updatedItem) => {
        const updatedItems = [...currentItems];
        const index = updatedItems.findIndex((item) => item.itemId === updatedItem.itemId);
        
        if (index !== -1) {
          updatedItems[index] = updatedItem;
          setCurrentItems(updatedItems);
        }
      };
  
    const allItems = [...receiptItems, ...currentItems];
  
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always">
            <View style={styles.containerBox}>
              <View style={styles.topButtons}>
                <Pressable onPress={handleOnPress1}><Image source={require("../assets/redo.png")} style={styles.redoButton}></Image></Pressable>
                <Pressable onPress={handleOnPress2}><Image source={require("../assets/exit.png")} style={styles.exitButton}></Image></Pressable>
              </View>
              <View style={styles.newView}>
                <TitleText>Confirm your list of items:</TitleText>
              </View>
              <View>
                <Text style={styles.descriptionText}> Add new items/tip: </Text>
                <View style={styles.itemBox1}>
                  <TextInput
                    value={itemName}
                    onChangeText={(text) => setItemName(text)}
                    placeholder='Item Name'></TextInput>
                  <TextInput
                    value={itemQuantity}
                    onChangeText={(text) => setItemQuantity(text)}
                    placeholder='Quantity'
                    keyboardType='numeric'></TextInput>
                  <TextInput
                    value={itemPrice}
                    onChangeText={(text) => setItemPrice(text)}
                    placeholder='$X.XX'
                    keyboardType='numeric'
                    style={styles.dollarText}></TextInput>
                  <TouchableOpacity onPress={addNewItem}><View style={styles.addButton}><Text style={styles.addSign}>+</Text></View></TouchableOpacity>
                </View>
                <Text style={styles.descriptionText2}> Current items: (scroll for more) </Text>
                <View style={styles.itemBox2}>
                <FlatList
                    data={allItems}
                    keyExtractor={(item) => {
                        return item.itemId.toString();
                    }}
                    scrollEnabled={true}
                    renderItem={({ item }) => {
                        return (
                        <ReceiptItem
                            itemTitle={item.itemTitle}
                            quantity={item.quantity}
                            price={item.price}
                            item={item}
                            onUpdate={handleItemUpdate}
                        />
                        );
                    }}
                    />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.primaryButton}>
                    <ButtonText>Continue</ButtonText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
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
    descriptionText: {
      fontSize: 16,
    },
    descriptionText2: {
      fontSize: 16,
      marginTop: 15,
    },
    itemBox1: {
      borderRadius: 20,
      backgroundColor: "#EEEEEE",
      height: 75,
      width: 360,
      flexDirection: "row",
      marginTop: 15,
      alignSelf: "center",
      justifyContent: "space-evenly",
      alignContent: "center",
    },
    itemBox2: {
      height: "58%",
      width: "100%",
      alignSelf: "center",
      alignContent: "center",
      justifyContent: "center"
    },
    topButtons: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    },
    addButton: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      height: 30,
      width: 30,
      justifyContent: "center",
      alignContent: "center",
      marginTop: 25,
    },
    addSign: {
      alignSelf: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: colors.white,
    },
    dollarText: {
      fontWeight: "bold",
      fontSize: 25,
    },
    tipBox: {
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.black,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 120,
      marginTop: 15,
      marginBottom: 15,
    },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 100,
      width: 355,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
  });
  
  export default ManualEntryScreen;