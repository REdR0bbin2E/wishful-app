import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Pressable, Touchable, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {

    const statusBarStyle = Platform.OS === 'ios' ? 'auto' : 'auto';

    return (


        <Tabs screenOptions={{
            headerTitle: "", headerShown: false, headerRight: () => (
                <View>
                    <TouchableOpacity>

                        <Ionicons name="settings-outline" size={24} color="blue" />

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="key" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),

        }}>


            <Tabs.Screen name="HomeScreen" options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="ExploreScreen" options={{
                title: "Explore",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="compass" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="UploadScreen" options={{
                title: "",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="add-circle" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="MessagesScreen" options={{
                title: "Messages",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubbles-outline" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="ProfileScreen" options={{
                title: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" color={color} size={size} />
                )
            }} />



        </Tabs>




    );
}