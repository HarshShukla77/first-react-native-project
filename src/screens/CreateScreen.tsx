import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
type Item = {
  id: number | Date;
  name: string;
  stock: number;
  unit: string;
};
type Props = {
  data: Item[];
  setData:React.Dispatch<React.SetStateAction<Item[]>>;
};
const CreateScreen = ({data,setData}:Props) => {
    const [itemName,setItemName] = useState('');
    const [isEdit,setisEdit] = useState(false)
    const [stock,setStock] = useState('')
    const [editItemId,seteditItemId] =useState<number | Date | null>(null)
const deleteHandler =(itemId:any)=>{
  setData(data.filter((item)=>item.id!==itemId))
}
const editHandler=(item:Item)=>{
  setisEdit(true)
  setItemName(item.name)
  seteditItemId(item.id)

}
    const addItemHandler =()=>{
      const newItem ={
        id:Date.now(),
        name:itemName,
        stock:parseInt(stock),
        unit:'kg'
      }
      setData([...data,newItem])
      setItemName('')
      setStock('')
      setisEdit(false)
    }

    const upDateItem =()=>{
         setData(data.map((item)=>(
          item.id===editItemId ? {...item,name:itemName,stock: parseInt(stock)}:item
         )))
         setItemName('')
         setStock('')
    }
  return (
    <View  style={styles.container}  >
     <TextInput placeholder='Enter an Item Name...' 
     placeholderTextColor="#999"
     style={styles.input}
     value={itemName}
     onChangeText= {(item)=>setItemName(item)}
     />
        <TextInput placeholder='Enter an Stock amount..' 
     placeholderTextColor="#999"
     style={styles.input}
     value={stock}
     onChangeText= {(item)=>setStock(item)}
     />
     <Pressable style={styles.button} onPress={()=>isEdit  ? upDateItem():  addItemHandler()} >
        <Text style={styles.btnText} >{isEdit ? 'Edit Item in Stock':'Add Item in the Stock'}</Text>
     </Pressable>
    <View>
         <View style={styles.Headcontainer} >
         
           <Text  style={styles.headingText}>All items in the stock</Text>
         </View>
         <FlatList data={data} 
         keyExtractor={(item)=>item.id.toString()}  
         renderItem={({item}) =>(
           <View style={[styles.itemContainer,{backgroundColor:item.stock<20 ? "#FFCCCC":"#D7F6BFFF"}]} >
            <Text style={styles.itemText}  >{item.name}</Text>
         
           <View style={{flexDirection:"row",gap:20}} > 
              <Text  style={styles.itemText}>{item.stock}</Text>
             <Pressable  onPress={()=>{
             editHandler(item)
              }} > 
              <Text style={styles.itemText}  >Edit</Text>
              </Pressable>
          <Pressable onPress={()=>deleteHandler(item.id)} >
             <Text  style={styles.itemText}>Delete</Text>
          </Pressable>
             </View>
           </View>
         ) }
         contentContainerStyle={{gap:10}}
         
         />
       </View>
    </View>
  )
}
export default CreateScreen

const styles = StyleSheet.create({
    container:{
        paddingVertical:"4%",
        gap:10
    },
    input:{
        borderWidth:1.5,
        borderColor:"#D7F6BFFF",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:17
    },button:{
       backgroundColor:"#CABFEEFF",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:7,
        justifyContent:"center",
        alignItems:"center"
    },
    btnText:{
        color:"white",
        fontSize:15,
        fontWeight:"800"
    },
     Headcontainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:15,
      paddingVertical:10
  },
  headingText:{
    fontWeight:"500",
    fontSize:14,
    color:"black"
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
    fontSize:14,
   

  }
})