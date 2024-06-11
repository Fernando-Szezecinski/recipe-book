import { Text, View } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";

export default function RecipeList(){
    return (
        <SafeAreaView style={{flex:1, margin:16}}>
            <Header headerText="Hi Fernando..." headerIcon={"bell-o"}/>
            <SearchFilter icon={"search"} planceholder={"what is your favorite recipe?"} />

            <View>
                <Text>Categories</Text>
                {/* https://www.youtube.com/watch?v=JJR60QtgdsM */}
                {/* 19:06 */}
            </View>
        </SafeAreaView>
    );
}