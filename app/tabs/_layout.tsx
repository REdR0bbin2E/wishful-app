import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Pressable, Touchable, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function RootLayout() {

    const colorScheme = useColorScheme();

    return (


        <Tabs screenOptions={{
            headerTitle: "", tabBarActiveTintColor: "black", headerShown: false, tabBarStyle: {
                borderTopWidth: 1,
                borderColor: "black",
                height: 60,
                justifyContent: "space-around",
                alignItems: "center",
                paddingTop: "2%",


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
                    <View style={{ marginBottom: 50, backgroundColor: "white", width: 75, height: 75, borderRadius: 50, borderWidth: 1 }}>
                        <Ionicons name="add-circle" color={"pink"} size={75.5} style={{}} />

                    </View>
                )
            }} />
            <Tabs.Screen name="NotificationsScreen" options={{
                title: "",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications-outline" color={color} size={size} />
                )
            }} />
            <Tabs.Screen name="ProfileScreen" options={{
                title: "",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="user" color={color} size={size} />
                )
            }} />



        </Tabs>
    );
}