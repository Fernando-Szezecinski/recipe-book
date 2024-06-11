import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Welcome({navigation}){
    return (
        <View style={{flex:1, alignItems:'center'}} >
            <Image 
                source={require("../../assets/images/welcome2.png")}
                style={{
                    // opacity:0.5, 
                    // backgroundColor: 'rgba(52, 52, 52, alpha)',
                    height:300,
                    width:300,
                    marginTop:150
                }}
                />
            <Text style={{
                    color: "#f96163",
                    fontSize: 22,
                    fontWeight: "bold"
                }}>40k+ Premium Recipes</Text>
            <Text
                style={{
                    fontSize:42,
                    fontWeight: "bold",
                    color: "#3c444c",
                    marginTop: 44,
                    marginBottom:40
                }}
            >Cook like a Chef</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("RecipeList")}
            style={{
                backgroundColor: "#f96163", 
                borderRadius:18,
                paddingVertical:18,
                width: "80%",
                alignItems: "center"
                }}>
                <Text
                    style={{fontSize: 18, color: "#fff", fontWeight: "700"}}
                >Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
}