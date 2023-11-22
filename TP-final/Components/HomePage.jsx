import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import Upload from './Upload';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigation.navigate("Camera");
            }}>
                <Ionicons style={styles.icon} name="camera" size={120} color="black" /></Pressable>
            <Upload style={styles.icon} />
            <Pressable onPress={() => {
                navigation.navigate("QR");
            }}>
                <Ionicons style={styles.icon} name="qr-code-outline" size={120} color="black" /></Pressable>
                <Pressable onPress={() => {
                navigation.navigate("PushNotification");
            }}>
                <AntDesign name="contacts" size={120} color="black" /></Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    icon: {
        marginBottom: 30
    }
});

export default HomePage;