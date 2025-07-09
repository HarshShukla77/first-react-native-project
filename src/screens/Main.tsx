import { StyleSheet, Text, View,Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

type Item = {
  id: number | Date;
  name: string;
  stock: number;
  unit: string;
};
const  datai: Item[]= [
 { id: 1, name: "Wheat", stock: 5, unit: "kg" },
  { id: 2, name: "Rice", stock: 12, unit: "kg" },
  { id: 3, name: "Sugar", stock: 30, unit: "kg" },
  { id: 4, name: "Salt", stock: 20, unit: "kg" },
  { id: 5, name: "Oil", stock: 7, unit: "litre" },
  { id: 6, name: "Lentils", stock: 9, unit: "kg" },
  { id: 7, name: "Flour", stock: 45, unit: "kg" },
]

const Main = ({navigation}:any) => {
  const  [view,setView]=useState(0)
  const [data,setData] = useState(datai)
  return (
    <View style={styles.container}  >
        <Text style={styles.title}>Dashoard</Text>
        <View style={styles.buttonContainer} >
          <Pressable  style={[styles.button,view ===0 ? {backgroundColor:"green"} : null ]} onPress={()=>setView(0)} >
            <Text style={[styles.btnText,view===0 ? {color:"white"}: null]}  >ALL Items</Text>
          </Pressable>
            <Pressable  style={[styles.button,view ===1 ? {backgroundColor:"green"} : null ]}  onPress={()=>setView(1)} >
            <Text style={[styles.btnText,view===1 ? {color:"white"}: null]} >Low Stock</Text>
          </Pressable>
            <Pressable  style={[styles.button,view ===2 ? {backgroundColor:"green"} : null ]}  onPress={()=>setView(2)} >
            <Text style={[styles.btnText,view===2 ? {color:"white"}: null]} >Create</Text>
          </Pressable>
        </View>
           {view===0 && <AllItems data={data} ></AllItems>}
          {view===1 && <AllItems data={data.filter(item=>item.stock<=10)}  ></AllItems>}
          {view===2 && <CreateScreen data={data} setData={setData} ></CreateScreen>}
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    
    width:"100%",
    height:"100%",
    padding:"4%",
 
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"#333"
  },buttonContainer:{
        flexDirection:"row",
        gap:10,
        marginVertical:10
  },btnText:{
     color:"green",
     fontWeight:"400",
     fontSize:12
  },button:{
   paddingVertical:3.5,
   paddingHorizontal:10,
   borderRadius:50,
   borderWidth:0.8,
   borderColor:"green"
  }
})