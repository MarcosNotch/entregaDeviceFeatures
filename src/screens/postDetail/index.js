import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const PostDetail = ({ navigation, route }) => {
  const { postId } = route.params;

  const post = useSelector((state) => state.post.posts.find((post) => post.id === postId));

  console.warn(post)

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: post.imageUri }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{post.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PostDetail;
