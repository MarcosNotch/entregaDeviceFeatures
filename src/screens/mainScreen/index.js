
import { View, Text, FlatList} from "react-native"

import { useSelector } from "react-redux"
import PostItem from "../../Components/post-item"
import {styles} from "./styles"

const MainScreen = ({navigation}) => {
    
    const posts = useSelector(state => state.post.posts)
    console.warn(posts)


    const renderItem = ({ item }) => {
        console.warn(item)
        return(  <PostItem
            {...item}
            onSelect={() => navigation.navigate("PostDetail", { postId: item.id })}
          />)
  ;
    }

      const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay publicaciones</Text>
        </View>
      );

    return (    
    <View style={styles.container}>

    <FlatList
        style={styles.container}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={ListEmptyComponent}
    />

    </View>
)

}

export default MainScreen