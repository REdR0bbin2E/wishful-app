import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Router } from 'expo-router';
import React, { useEffect, useState } from 'react';
export default function RootLayout() {

  const router = useRouter();

  router.push('tabs/HomeScreen');

}