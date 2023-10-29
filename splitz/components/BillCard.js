import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Bill from "./Bill";
import { useNavigation } from "@react-navigation/native";

function BillCard({ bills }) {
  const navigation = useNavigation();

  return (
    <View style={{ flexdirection: "row" }}>
      <FlatList
        data={bills}
        keyExtractor={(item) => {
          return item.billId.toString();
        }}
        scrollEnabled={true}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Bill
                billName={item.billName}
                createdBy={item.createdBy}
                createdDays={item.createdDays}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default BillCard;
