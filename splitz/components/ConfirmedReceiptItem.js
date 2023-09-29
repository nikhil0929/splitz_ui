import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native';

import Profile from './Profile';

function ConfirmedReceiptItem({ itemTitle, quantity, price, onPress, isSelected, showProfile, userName }) {
  
  const [truncateItemTitle, setTruncateItemTitle] = useState(true);

  // Determine the display text based on whether it should be truncated or not
  const displayItemTitle = truncateItemTitle
    ? itemTitle.length > 10
      ? itemTitle.slice(0, 10) + '...'
      : itemTitle
    : itemTitle;

  // Toggle truncation when the user presses on the itemTitle
  const toggleTruncate = () => {
    setTruncateItemTitle((prevTruncate) => !prevTruncate);
  };

    return (
      <TouchableWithoutFeedback onPress={() => onPress()}>
      <View style={[styles.itemBox2, isSelected && styles.selectedItem]}>
        <View>
          <View style={{flexDirection: "row", alignSelf: "flex-start", marginLeft: 25, marginTop: 13,}}>
          <TouchableWithoutFeedback onPress={toggleTruncate}>
        <Text style={styles.itemTitle}>{displayItemTitle}</Text>
        </TouchableWithoutFeedback>
        <Text>({quantity})</Text>
        </View>
        <Text style={styles.priceFont}>{price}</Text>
        </View>
        <View style={styles.verticalLine}></View>
        {showProfile && (
          <View style={styles.profileContainer}>
            <Profile userName={userName}/>
          </View>
        )}
      </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    itemBox2: {
      borderRadius: 20,
      backgroundColor: "#E5F3FF",
      height: 90,
      width: 360,
      flexDirection: "row",
      marginTop: 10,
      alignSelf: "center",
      alignContent: "center",
      flexDirection: "row"
    },
    dollarText: {
      fontWeight: "bold",
      fontSize: 25,
      alignSelf: "center"
    },
    editButton: {
      height: 30,
      width: 30,
      alignSelf: "center",
      marginTop: 23,
    },
    itemTitle: {
      fontSize: 17,
      alignSelf: "flex-start",
      fontWeight: "bold",
      marginRight: 10,
    },
    saveButton: {
      height: 30,
      width: 30,
      alignSelf: "center",
      marginTop: 23,
    },
    priceFont: {
      fontSize: 28,
      alignSelf: "flex-start",
      fontWeight: "bold",
      marginLeft: 25,
      marginTop: 8,
    },
    verticalLine: {
      height: "80%",
      width: 2,
      backgroundColor: "#D9D9D9",
      margin: 10,
    },
    selectedItem: {
      backgroundColor: "#BA4BEF",
    },
  });
  
export default ConfirmedReceiptItem;