import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  Pressable,
  Keyboard,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  LogBox,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import ReceiptItem from "../components/ReceiptItem";
import ButtonText2 from "../components/ButtonText2";
import GoBackButton from "../components/GoBackButton";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ManualEntryScreen = ({ route }) => {
  const { baseURL } = route.params;

  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

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

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  const initialItems = [...receiptItems];
  const [items, setItems] = useState(initialItems);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");

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

      setItems((prevItems) => [...prevItems, newItem]);

      setItemName("");
      setItemQuantity("");
      setItemPrice("");
    } else {
      Alert.alert("Incomplete Information", "Please fill in all fields.");
    }
  };

  const handleItemUpdate = (updatedItem, itemId) => {
    if (updatedItem === null) {
      setItems((prevItems) =>
        prevItems.filter((item) => item.itemId !== itemId)
      );
    } else {
      const updatedItems = [...items];
      const index = updatedItems.findIndex(
        (item) => item.itemId === updatedItem.itemId
      );

      if (index !== -1) {
        updatedItems[index] = updatedItem;
        setItems(updatedItems);
      }
    }
  };

  handleOnPress1 = () => {
    console.log("Redo");
  };

  handleOnPress2 = () => {
    console.log("Exit");
  };

  handleOnPress3 = () => {
    console.log("Go Split");
    navigation.navigate("Split", { baseURL: baseURL });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.containerBox}>
        <View style={styles.topButtons}>
          <GoBackButton />
          <View>
            <TitleText>Confirm item list:</TitleText>
            <Text style={styles.descriptionText}> Add new items/tip: </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable onPress={handleOnPress1}>
              <Image
                source={require("../assets/redo.png")}
                style={styles.redoButton}
              ></Image>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={styles.itemBox1}>
            <TextInput
              value={itemName}
              onChangeText={(text) => setItemName(text)}
              placeholder="Item Name"
            ></TextInput>
            <TextInput
              value={itemQuantity}
              onChangeText={(text) => setItemQuantity(text)}
              placeholder="Quantity"
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
              placeholder="$X.XX"
              keyboardType="numeric"
              style={styles.dollarText}
            ></TextInput>
            <TouchableOpacity onPress={addNewItem}>
              <View style={styles.addButton}>
                <Text style={styles.addSign}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionText2}>
            {" "}
            Current items: (scroll for more){" "}
          </Text>
          <View style={styles.itemBox2}>
            <KeyboardAwareScrollView
              style={{
                flex: 1,
                backgroundColor: "#f9f9f9",
                margin: 7,
                borderRadius: 20,
              }}
              keyboardShouldPersistTaps="always"
            >
              <FlatList
                data={items}
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
                      onUpdate={(updatedItem) =>
                        handleItemUpdate(updatedItem, item.itemId)
                      }
                    />
                  );
                }}
              />
            </KeyboardAwareScrollView>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={this.handleOnPress3}
            >
              <ButtonText>Continue</ButtonText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <ButtonText2>Share</ButtonText2>
              <Image
                style={styles.share}
                source={require("../assets/share2.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    width: screenWidth,
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
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
  redoButton: {
    height: 25,
    width: 25,
    marginRight: 25,
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
    width: "95%",
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  itemBox2: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
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
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  secondaryButton: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  share: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
});

export default ManualEntryScreen;
