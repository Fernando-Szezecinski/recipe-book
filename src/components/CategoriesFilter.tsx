import { ScrollView, StyleSheet, Text, View } from "react-native";
import { categories } from "../constants/Categories";
import { colors } from "../constants/Colors";

export default function CategoriesFilter(){
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index)=> {
                        return (
                            <View style={{
                                backgroundColor: index === 0 ? colors.PRIMARY : colors.LIGHT,
                                marginRight:36,
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical:16,
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 16
                                }}>
                                <Text style={{
                                    color: index === 0 && colors.LIGHT,
                                    fontSize: 18
                                }}>{category.name}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});