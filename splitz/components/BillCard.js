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
          return item.id.toString();
        }}
        scrollEnabled={true}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Bill
                billName={item.receipt_name}
                createdBy={"Owner ID: " + item.owner_id}
                createdDays={item.room_code}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default BillCard;
