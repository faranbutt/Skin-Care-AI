import { View,Text,ImageBackground,Image, FlatList,StyleSheet} from "react-native";
import { products } from "../utils/asset";
interface Product {
    id: number;
    name: string;
    urll: any;
  }
  
export default function Products(){
    
    const renderItem = ({ item}:{item:Product}) => (
            <View style={styles.itemContainer}>
          <Image source={item.urll} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.name}</Text>
         
        </View>
    
        );
        
    return (
        <ImageBackground source={require('../../assets/images/cover.jpg')} 
        style={{ flex: 1 }}>
        <View style={{flex:1}}>
            <View style={{width:'100%',height:'20%',backgroundColor:'#07BBFF',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{ fontFamily: 'Belleza_400Regular',fontSize:30}}>Recommended Products</Text>
            </View>
            <View style={{width:'100%',height:'80%'}}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Set the number of columns for the grid
                contentContainerStyle={styles.grid}
     />
            </View>
        </View>
        </ImageBackground>
    );

}const styles = StyleSheet.create({
    grid: {
      padding: 10,
    },
    itemContainer: {
      flex: 1,
      margin: 5,
      backgroundColor: '#FAF8F6',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    itemImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    itemText: {
      marginTop: 10,
      fontSize: 16,
      fontFamily: 'Belleza_400Regular',
    },
  });