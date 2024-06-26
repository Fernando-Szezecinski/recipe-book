import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({headerText, headerIcon}){
    return (
        <View style={{flexDirection: "row"}}>
            <Text style={{flex:1, fontSize:22, fontWeigth: "bold"}}>{headerText}</Text>
            <FontAwesome name={headerIcon} size={24} color="#f96163"/>
        </View>
    );
}

const styles = StyleSheet.create({});