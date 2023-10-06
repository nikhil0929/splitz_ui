import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

export default function CustomBottomTabBar({ state, navigation }) {
    const getIcon = (routeName) => {
        switch (routeName) {
            case 'Create/Join': return 'account-plus';  // Replace with your preferred icon
            case 'Manage': return 'folder-account';    // Replace with your preferred icon
            case 'Profile': return 'account-circle';   // Replace with your preferred icon
            default: return 'box';
        }
    };

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.tabItem} 
                    onPress={() => navigation.navigate(route.name)}
                >
                    <MaterialCommunityIcons name={getIcon(route.name)} size={24}  color={state.index === index ? colors.primary : 'gray'}/>
                    <Text style={{ color: state.index === index ? colors.primary : 'gray' }}>{route.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        backgroundColor: '#fff',  // Set the background color of the tab bar
        borderTopWidth: 1,
        borderTopColor: '#ddd',   // Adding a border to the top (optional)
        color: colors.primary,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        color: colors.primary
    },
});