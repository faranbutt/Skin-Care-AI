import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { homeStyles } from "../stylessheets/homeStyles";
import { useFonts, Belleza_400Regular } from "@expo-google-fonts/belleza";
const logoImage = require("../../assets/images/logo2.jpg");
export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Belleza_400Regular,
  });

  return (
   <View style={homeStyles.container}>
    <View style={homeStyles.logoContainer} >
      <Image source={logoImage} alt="logo" style={homeStyles.logo}  />
    </View>
    <View style={homeStyles.formContainer}>
      <View style={homeStyles.titleContainer} >
        <Text style={homeStyles.title}>Skin Care AI</Text>
      </View>
      <View style={homeStyles.emailContainer} >
        <View>
          <Text style={homeStyles.email} >Email</Text>
          <TextInput style={homeStyles.emailInput} placeholder="faranbutt@gmail.com" />
        </View>
        <View>
          <Text style={homeStyles.email} >Password</Text>
          <TextInput style={homeStyles.emailInput} placeholder="**********" />
        </View>
      </View>
    </View>
   </View>
  );
}
