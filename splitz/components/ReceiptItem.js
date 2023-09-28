import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

function ReceiptItem({ itemTitle, quantity, price, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItemTitle, setEditedItemTitle] = useState(itemTitle);
    const [editedQuantity, setEditedQuantity] = useState(quantity.toString());
    const [editedPrice, setEditedPrice] = useState(price);
  
    const handleEditPress = () => {
      setIsEditing(true);
    };
  
    const handleSavePress = () => {
      const updatedItem = {
        itemTitle: editedItemTitle,
        quantity: parseInt(editedQuantity),
        price: editedPrice,
      };
      onUpdate(updatedItem);
      setIsEditing(false);
    };
  
    return (
      <View style={styles.itemBox2}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.itemTitle}
              value={editedItemTitle}
              onChangeText={(text) => setEditedItemTitle(text)}
              editable={true}
            />
            <TextInput
              style={{ alignSelf: 'center' }}
              value={editedQuantity}
              onChangeText={(text) => setEditedQuantity(text)}
              editable={true}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.dollarText}
              value={editedPrice}
              onChangeText={(text) => setEditedPrice(text)}
              editable={true}
            />
            <TouchableOpacity onPress={handleSavePress}>
              <Image style={styles.saveButton} source={require("../assets/save.png")} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.itemTitle}>{editedItemTitle}</Text>
            <Text style={{ alignSelf: 'center' }}>({editedQuantity})</Text>
            <Text style={styles.dollarText}>{editedPrice}</Text>
            <TouchableOpacity onPress={handleEditPress}>
              <Image style={styles.editButton} source={require("../assets/edit.png")} />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    itemBox2: {
      borderRadius: 20,
      backgroundColor: "#E5F3FF",
      height: 75,
      width: 360,
      flexDirection: "row",
      marginTop: 15,
      alignSelf: "center",
      justifyContent: "space-evenly",
      alignContent: "center",
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
      fontSize: 14,
      alignSelf: "center",
      fontWeight: "bold",
    },
    saveButton: {
      height: 30,
      width: 30,
      alignSelf: "center",
      marginTop: 23,
    },
  });
  
export default ReceiptItem;