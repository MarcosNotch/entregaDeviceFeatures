
import { styles } from "./styles";
import { ImageSelector } from "../../Components";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import {useDispatch} from "react-redux";
import { savePost } from "../../store/post.slice";

const NewPost = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const onHandleChange = (text) => {
        setTitle(text);
      };    

    const onImage = (image) => {
        setImage(image);
    }

    const onHandleSubmit = () => {
        console.log(title)
        dispatch(savePost( title, image));
        navigation.navigate("Posts");
      };

    return (
        <View style={styles.container}>
               <Text style={styles.title}>Titulo</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nuevo ubicacion"
                  onChangeText={onHandleChange}
                  value={title}/>
            <ImageSelector onImage={onImage}/>
            <TouchableOpacity style={styles.button} onPress={onHandleSubmit}>
                <Text>Publicar</Text>
            </TouchableOpacity>
        </View>
    )


}

export default NewPost;