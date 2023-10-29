import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Group from "./Group";

function GroupCard({ groups }) {
  const navigation = useNavigation();
  return (
    <View style={{ flexdirection: "row" }}>
      <FlatList
        data={groups}
        keyExtractor={(item) => {
          return item.groupId.toString();
        }}
        scrollEnabled={true}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("GroupDetails")}
            >
              <Group
                groupName={item.groupName}
                groupAmount={item.groupAmount}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default GroupCard;
