import '@/global.css';
import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Pressable, Touchable, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function RootLayout() {


    return (

        <GluestackUIProvider>

            <Tabs screenOptions={{
                headerTitle: "", tabBarInactiveTintColor: "grey", tabBarActiveTintColor: "white", headerShown: false, tabBarStyle: {
                    borderTopWidth: 3,
                    borderColor: "black",
                    height: 60,
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingTop: "2%",
                    backgroundColor: "#000000"


                }
            }}>


                <Tabs.Screen name="HomeScreen" options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }} />
                <Tabs.Screen name="ExploreScreen" options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="search1" color={color} size={size} />
                    )
                }} />
                <Tabs.Screen name="UploadScreen" options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 50, backgroundColor: "black", width: 65, height: 65, borderRadius: 50, borderWidth: 0, borderColor: "pink", }}>

                            <Ionicons name="add-circle" size={65} color={"pink"} />


                        </View>
                    )
                }} />
                < Tabs.Screen name="NotificationsScreen" options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" color={color} size={size} />
                    )
                }} />
                < Tabs.Screen name="ProfileScreen" options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    )
                }} />



            </Tabs >

        </GluestackUIProvider>

    );
}