import React from "react";
import { StyleSheet, View, Text } from "react-native";

function UserTotals({ userName, userTotal, userColor, owner }) {
  const truncateName = (name) => {
    return name.length > 9 ? name.substring(0, 9) + "." : name;
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBox2}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <View
              style={[styles.profile, { backgroundColor: userColor }]}
            ></View>
            <Text style={styles.userNameText}>{truncateName(userName)}</Text>
          </View>
          <Text style={styles.totalText}>
            ${parseFloat(userTotal).toFixed(2)}
          </Text>
        </View>
        {owner === 1 && <Text style={styles.ownerLabel}>OWNER</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profile: {
    borderRadius: 100,
    height: 32,
    width: 32,
    marginRight: 15,
  },

  userNameText: {
    fontSize: 18,
    marginRight: 10,
  },

  totalText: {
    fontSize: 27,
    fontWeight: "400",
  },

  itemBox2: {
    borderRadius: 20,
    backgroundColor: "#E5F3FF",
    height: 65,
    width: "95%",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 5,
    alignSelf: "center",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },

  itemContainer: {
    alignItems: "center",
    marginTop: 2,
  },

  ownerLabel: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    top: -10, // Adjust this value as needed to position "Owner" above the component
    right: 15, // Adjust this value as needed to position "Owner" on the right side of the component
  },
});

export default UserTotals;
