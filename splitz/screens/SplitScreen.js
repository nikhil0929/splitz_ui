import React, { useState, useEffect, useContext } from "react";
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
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  LogBox,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import ConfirmedReceiptItem from "../components/ConfirmedReceiptItem";
import Profile from "../components/Profile";
import GoBackButton from "../components/GoBackButton";
import { AxiosContext } from "../axiosCaller";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SplitScreen = ({ route }) => {
  console.log("SplitScreen");
  const { receipt_items, receipt } = route.params;
  const axiosCaller = useContext(AxiosContext);
  const navigation = useNavigation();

  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [otherUserSelectedItems, setOtherUserSelectedItems] = useState({});
  const userName = "RD";

  const handleItemPress = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems((prevSelectedItems) => {
        return prevSelectedItems.filter((itemId) => itemId !== item.id);
      });
    } else {
      setSelectedItems((prevSelectedItems) => {
        return [...prevSelectedItems, item.id];
      });
    }

    setIsProfileVisible(selectedItems.length > 0);
  };

  const getItemNamesByIds = (itemIds) => {
    return receipt_items
      .filter((item) => itemIds.includes(item.id))
      .map((item) => item.item_name);
  };

  confirmSelectedItems = () => {
    const user_selected_items = {
      item_id_list: selectedItems,
      user_total_cost: 0,
    };
    axiosCaller
      .post(
        "/receipts/" + receipt.room_code + "/select-items/" + receipt.id,
        user_selected_items
      )
      .then((response) => {
        // Update the displayed values with the updated data
        if (response.data == true) {
          Alert.alert("Items Selected Successfully!");
          navigation.navigate("BillTotal", { receipt: receipt });
        } else {
          Alert.alert("Error", "Item could not be added.");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerBox}>
          <View style={styles.topButtons}>
            <GoBackButton />
          </View>
          <View style={styles.newView}>
            <TitleText>Tap on the items you're paying for:</TitleText>
          </View>
          <View>
            <View style={styles.itemBox2}>
              <FlatList
                data={receipt_items}
                keyExtractor={(item) => {
                  return item.id;
                }}
                scrollEnabled={true}
                renderItem={({ item }) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => handleItemPress(item)}
                    >
                      <ConfirmedReceiptItem
                        itemTitle={item.item_name}
                        quantity={item.item_quantity}
                        price={item.item_cost}
                        onPress={() => handleItemPress(item)}
                        isSelected={selectedItems.includes(item.id)}
                        showProfile={selectedItems.includes(item.id)}
                        userName={userName}
                      />
                    </TouchableWithoutFeedback>
                  );
                }}
              />
            </View>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.descriptionText}>Selected items:</Text>
            <View style={styles.selectedItemsContainer}>
              <FlatList
                data={selectedItems.map((itemId) =>
                  receipt_items.find((item) => item.id === itemId)
                )}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Text style={styles.itemText}>
                    {`${item.item_name} (x${item.item_quantity})`}
                  </Text>
                )}
                ListEmptyComponent={
                  <Text style={styles.itemText}>No items selected</Text>
                }
              />
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={confirmSelectedItems}
            >
              <ButtonText>Continue</ButtonText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    screenWidth: screenWidth,
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
    marginBottom: 10,
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
  itemBox2: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 300,
    width: "100%",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  profile: {
    borderRadius: 100,
    height: 45,
    width: 45,
    alignSelf: "center",
    backgroundColor: "#BA4BEF",
    justifyContent: "center",
    alignItems: "center",
  },

  personTotal: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
  },
  totalText: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 5,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "black",
    marginVertical: 15,
    marginTop: 20,
  },
  profileText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    marginLeft: 10,
  },
  itemText: {
    fontSize: 13,
    marginVertical: 2,
    marginLeft: 10,
    // Add any additional styling you want for the item text here
  },
  selectedItemsContainer: {
    maxHeight: 100, // Set a maximum height for the container
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SplitScreen;
