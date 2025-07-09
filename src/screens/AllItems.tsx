import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
type Item = {
  id: number| Date;
  name: string;
  stock: number;
  unit: string;
};

type Props = {
  data: Item[];
  

};
const AllItems = ({data}:Props) => {
  return (
    <View>
      <View style={styles.Headcontainer} >
        <Text style={styles.headingText}  >Items</Text>
        <Text  style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList data={data} 
      keyExtractor={(item)=>item.id.toString()}  
      renderItem={({item}) =>(
        <View style={[styles.itemContainer,{backgroundColor:item.stock<20 ? "#FFCCCC":"#D7F6BFFF"}]} >
         <Text style={styles.itemText}  >{item.name}</Text>
        <Text  style={styles.itemText}>{item.stock}</Text>
        </View>
      ) }
      contentContainerStyle={{gap:10}}
      
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  Headcontainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:15,
      paddingVertical:10
  },
  headingText:{
    fontWeight:"500",
    fontSize:14
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    padding:10,
    borderRadius:10,
    paddingVertical:10
  },
  itemText:{
    fontWeight:"400",
    fontSize:14

  }
})