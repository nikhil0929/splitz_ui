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
          return item.id;
        }}
        scrollEnabled={true}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log("Item: ", item);
                navigation.navigate("GroupDetailsStack", {
                  screen: "GroupDetails", // Specify the initial route name
                  params: { room: item }, // Pass the room parameter to the initial route
                });
              }}
            >
              <Group
                groupName={item.room_name}
                groupAmount={item.num_members}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default GroupCard;
