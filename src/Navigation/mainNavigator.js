import IonicIcons from "react-native-vector-icons/Ionicons";
import { Platform, TouchableOpacity } from "react-native";
import { MainScreen, NewPostScreen, PostDetailScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();



const MainNavigator = () => {


    return (
        <Stack.Navigator initialRouteName="Posts">

        <Stack.Screen  
         name="Posts"
        component={MainScreen}
        options={({ navigation }) => ({
          title: "Publicaciones",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
              <IonicIcons name="add-circle-outline" size={25} />
            </TouchableOpacity>
          ),
        })}/>


        <Stack.Screen
            name="NewPost"
            component={NewPostScreen}
            options={{ title: "Nueva publicacion" }}
      />


<Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ title: "Detalles de la publicacion" }}
      />
        </Stack.Navigator>

    )


}

export default MainNavigator