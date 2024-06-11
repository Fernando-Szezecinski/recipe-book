import { Text, View } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList(){
    return (
        <SafeAreaView style={{flex:1, margin:16}}>
            <Header headerText="Hi Fernando..." headerIcon={"bell-o"}/>
            <SearchFilter icon={"search"} planceholder={"what is your favorite recipe?"} />

            <View style={{marginTop: 22}}>
                <Text style={{fontSize:22, fontWeight: "bold"}}>Categories</Text>
                <CategoriesFilter />
            </View>

            <View style={{marginTop: 22}}>
                <Text style={{fontSize:22, fontWeight: "bold"}}>Recipes</Text>
                <RecipeCard />
            </View>
        </SafeAreaView>
    );
}