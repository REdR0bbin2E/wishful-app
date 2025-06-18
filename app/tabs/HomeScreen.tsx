import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { LinearGradient } from 'react-native-svg';
import { Button, ButtonText } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";

import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Heading } from "@/components/ui/heading";

import wishReports from '../../assets/DummyJsons/WishReportData.json';
export default function HomeScreen() {
    return (


        <SafeAreaView style={{ flex: 1, backgroundColor: "#181A1C" }}>

            <ScrollView>

                <View style={{ paddingLeft: "3%", flexDirection: "row", marginBottom: "5%", marginTop: "5%" }}>
                    <Text style={{ color: "white", fontSize: 25, fontWeight: "500", marginRight: "10%" }}>Welcome Back, Mayo.</Text>
                    <TouchableOpacity style={{ justifyContent: "center", alignContent: "center", width: 45, height: 45, backgroundColor: "black", borderWidth: 0.5, borderColor: "white", borderRadius: 50, padding: 6, }}>
                        <Ionicons name='mail-unread-outline' color={"white"} size={30} />
                    </TouchableOpacity>
                </View>


                <FlatList data={wishReports}
                    keyExtractor={(item) => item.username}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View>

                        </View>
                    )}
                    renderItem={({ item }) => (

                        <View style={{ marginLeft: 10 }}>
                            <TouchableOpacity>

                                <Box style={styles.wishReportStoryStyling} className="bg-primary-500 p-5">
                                    <View style={styles.wishReportProfilePicStyling}>

                                    </View>
                                </Box>

                            </TouchableOpacity>
                        </View>

                    )}

                />



                <View style={{ marginTop: 40 }}>

                </View>









            </ScrollView>








        </SafeAreaView>



    )


}


const styles = StyleSheet.create({
    wishReportStoryStyling: {
        backgroundColor: "black",
        borderRadius: 12,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 105,
        height: 140,
        borderWidth: 0.5,
        borderColor: "white"



    },
    wishReportProfilePicStyling: {
        borderRadius: 50,
        height: 30,
        width: 30,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "green",
        marginTop: "120%",


    },




});