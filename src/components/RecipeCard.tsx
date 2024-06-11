import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { recipeList } from "../constants/RecipeList";
import { colors } from "../constants/Colors";
//https://www.youtube.com/watch?v=JJR60QtgdsM
//31:26


export default function RecipeCard(){
    return (
        <View>
            <FlatList data={recipeList}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => 
            <View style={{
                backgroundColor: colors.LIGHT,
                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 16,
                                borderRadius:16,
                                marginTop:16,
                                alignItems:'center',
                                paddingHorizontal: 8,
                                paddingVertical: 26
                }}>
                <Image  
                style={{
                    width: 150,
                    height: 150,
                    resizeMode: "center"
                }}
                source={{
                    uri: item.image,
                  }}
                />
                <Text>{item.name}</Text>
            </View> 
            
            }/>
        </View>
    );
}

const styles = StyleSheet.create({});