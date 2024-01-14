import React, { useState, useEffect, useRef, useContext } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import ButtonText from "../components/ButtonText";
import Profile from "../components/Profile";
import UserTotals from "../components/UserTotals";
import ButtonText2 from "../components/ButtonText2";
import { userTotalsMapToArray, getTotalAmount } from "../utils/utils";
import { AxiosContext } from "../axiosCaller";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const BillTotalScreen = ({ route }) => {
  const { receipt } = route.params;
  const navigation = useNavigation();
  const axiosCaller = useContext(AxiosContext);
  const billNameInputRef = useRef(null);
  const [receiptWithItems, setReceiptWithItems] = useState({});
  const [totalsRevealed, setTotalsRevealed] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [userTotalsMap, setUserTotalsMap] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotals = () => {
    // Initialize an object to hold the totals for each user
    var userTotals = {};
    var currTotalPrice = 0;
    setTotalsRevealed(true);

    // Iterate over each item
    receiptWithItems.items.forEach((item) => {
      // Only divide the cost if there are users associated with the item
      if (item.users.length > 0) {
        // Determine the cost per user for this item
        let costPerUser = item.item_cost / item.users.length;
        currTotalPrice += item.item_cost;

        // Add this cost to each user's total
        item.users.forEach((user) => {
          if (userTotals[user.id]) {
            userTotals[user.id] += costPerUser;
          } else {
            userTotals[user.id] = costPerUser;
          }
        });
      }
    });

    return {
      userTotalsList: userTotals,
      userTotalPrice: currTotalPrice,
    };
  };

  const handleFinishSplitting = () => {
    const { userTotalsList, userTotalPrice } = calculateTotals();
    setUserTotalsMap(userTotalsList);
    setTotalPrice(userTotalPrice);

    console.log("Total Price: ", userTotalPrice);

    const user_total_price = {
      item_id_list: [],
      user_total_cost: userTotalPrice,
    };
    axiosCaller
      .post(
        "/receipts/" + receipt.room_code + "/select-items/" + receipt.id,
        user_total_price
      )
      .then((response) => {
        // Update the displayed values with the updated data
        if (response.data == true) {
          Alert.alert("Success!");
        }
      })
      .catch((error) => {
        console.log("Error", error);
        Alert.alert("Error", "Could not finish splitting.");
      });
  };

  const getActiveUsers = (receipt_items) => {
    const activeUsers = [];
    const activeUsersIds = [];
    receipt_items.forEach((item) => {
      item.users.forEach((user) => {
        if (!activeUsersIds.includes(user.id)) {
          activeUsers.push(user);
          activeUsersIds.push(user.id);
        }
      });
    });
    return activeUsers;
  };

  const renderItem = ({ item }) => {
    let user_cost = totalsRevealed ? userTotalsMap[item.id] : "XX.XX";
    console.log("totalsRevealed: ", userTotalsMap[item.id]);
    return <UserTotals userName={item.name} userTotal={`${user_cost}`} />;
  };

  const handleSendRequests = () => {
    Alert.alert(
      "Send Requests",
      "Are you sure you want to send requests to your friends?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            axiosCaller.get("/room/" + receipt.room_code).then((response) => {
              console.log(JSON.stringify(response.data, null, 2));
              data_res = response.data;

              navigation.navigate("MainStack", {
                screen: "GroupDetails", // Specify the initial route name
                params: {
                  screen: "GroupInfo",
                  params: { room: data_res }, // Pass the room parameter to the initial route
                },
              });
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    axiosCaller
      .get("/receipts/" + receipt.room_code + "/receipt/" + receipt.id)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
        data_res = response.data;
        setReceiptWithItems(data_res);

        active_users = getActiveUsers(data_res.items);
        console.log("Active Users: ", active_users);
        setActiveUsers(active_users);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              ref={billNameInputRef}
              value={receipt.receipt_name}
              placeholder="Name this Bill!"
              style={styles.billNameInput}
            ></TextInput>
            <TouchableOpacity onPress={() => billNameInputRef.current.focus()}>
              <Image
                style={styles.editButton}
                source={require("../assets/editButton.png")}
              />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/exit.png")}
              style={styles.exitButton}
            ></Image>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 45, fontWeight: "bold" }}>
            ${totalsRevealed ? totalPrice : "XX.XX"}
          </Text>
          <Text style={{ fontSize: 22, alignSelf: "center", marginTop: 5 }}>
            Bill Total
          </Text>
        </View>
        <View style={styles.itemBox2}>
          <FlatList
            data={activeUsers}
            style={{ flex: 1, marginTop: 5 }}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
            renderItem={renderItem}
          />
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Total Active Splitters: {activeUsers.length}
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleFinishSplitting}
        >
          <ButtonText>Finish Splitting</ButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.secondaryButton,
            { borderColor: totalsRevealed ? colors.primary : colors.grey },
          ]}
          onPress={handleSendRequests}
          disabled={!totalsRevealed}
        >
          <ButtonText2>Send Requests</ButtonText2>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    padding: 15,
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
  editButton: {
    height: 30,
    width: 30,
  },
  billNameInput: {
    fontSize: 25,
    marginRight: 3,
    fontWeight: "bold",
  },
  itemBox2: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    maxWidth: 400,
    height: 45,
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
    width: "100%",
    maxWidth: 400,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  grey: {
    color: "#cccccc", // Replace with the color that fits your design
  },
});

export default BillTotalScreen;
