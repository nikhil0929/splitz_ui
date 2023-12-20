import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AxiosContext } from "../axiosCaller";
import { getTotalAmount, userTotalsMapToArray } from "../utils/utils";

function parseUserTotals(currentBill) {
  let userTotals = new Map();

  for (const item of currentBill.items) {
    userCost = parseFloat(item.item_cost / item.users.length);
    for (const user of item.users) {
      if (userTotals.has(user.id)) {
        userTotals.set(user.id, {
          name: user.name,
          username: user.username,
          total_cost: userTotals.get(user.id).total_cost + userCost,
        });
      } else {
        userTotals.set(user.id, {
          name: user.name,
          username: user.username,
          total_cost: userCost,
        });
      }
    }
  }

  return userTotals;
}

function Bill({ currentBill }) {
  const axiosCaller = useContext(AxiosContext);
  const navigation = useNavigation();
  const { id, room_code, receipt_name, owner_id } = currentBill;
  // Truncate function
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleClick = () => {
    axiosCaller
      .get("/receipts/" + room_code + "/receipt/" + id)
      .then((response) => {
        console.log("/receipts/" + room_code + "/receipt/" + id);
        console.log("Response");
        console.log(response.data);
        user_totals = parseUserTotals(response.data);
        navigation.navigate("GroupDetailsStack", {
          screen: "BillUserTotals", // Specify the initial route name
          params: {
            userTotals: userTotalsMapToArray(user_totals),
            receiptName: receipt_name,
            navigation: navigation,
          }, // Pass the room parameter to the initial route
        });
      })
      .catch((error) => {
        console.log("/receipts/" + room_code + "/receipt/" + id);
        console.log("Error", error);
      });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick();
      }}
    >
      <View style={styles.itemBox2}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            textDecorationLine: "underline",
            alignSelf: "center",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          {receipt_name}
        </Text>
        <Text style={{ fontSize: 15, alignSelf: "center" }}>
          {truncate(owner_id, 20)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemBox2: {
    borderRadius: 20,
    backgroundColor: "#E5F3FF",
    height: 140,
    width: 130,
    marginTop: 15,
    marginRight: 10,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Bill;
