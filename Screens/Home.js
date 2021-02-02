import React,{useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window");

export function Home ({navigation,route}){

    const [Data,setData] = useState([]);

useEffect(()=>{
     fetch('https://localgovt.000webhostapp.com/adsshow.php', {
        "method": "GET"
})

.then(data=>
  data.json()
)

.then(data2=>{
    setData(data2.res);
    console.log(data2.res);
})
.catch(err => {
    console.log(err);
});
})

  return (
<ImageBackground source={{uri:"https://images.pexels.com/photos/2949302/pexels-photo-2949302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
style={styles.bg}
>
<View style={styles.header}>
<Entypo name="menu" size={32} color="white" style={{marginTop:28,marginLeft:5}} />
<Text style={styles.headertxt}>Home</Text>
<FontAwesome name="search" size={32} color="white" style={{marginTop:28,marginLeft:160}} />
<MaterialCommunityIcons name="logout" size={32} color="white" style={{marginTop:28,marginLeft:20}}
onPress={()=> navigation.replace("App")}
/>
</View>

<View style={{flexDirection:"row",justifyContent:"center"}}>

  </View>
<View style={styles.Main}>

  <FlatList style={{marginTop:10}}
data={Data}
renderItem={({item})=>
<TouchableOpacity onPress={()=> navigation.navigate("details",{
  heading: item.name,
  details: item.price,
  postby: item.city,
  id: item.id
})}>

<View style={styles.card}>
  <View style={{flexDirection:'row'}}>
<View>
  <Image source={{uri:'https://i.pinimg.com/736x/cc/cb/5a/cccb5a1d4f1f1dd10f58b96d485ce703.jpg'}} style={styles.img} />
</View>
<View>
<Text style={styles.cardtxt} numberOfLines={1}>{item.name}</Text>
<Text style={styles.detailstxt} numberOfLines={1}>PKR-{item.price}</Text>
<Text style={styles.txt2}>{item.city}</Text>
</View>

</View>
</View>
</TouchableOpacity>
}
keyExtractor={(item)=> item.id}
/>
</View>
</ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg:{
    flex:1, 
    resizeMode: "cover",
  },
 
  card:{
    marginVertical:5,
    width:width-20,
    height:90,
    alignSelf:'center',
    backgroundColor:"#CCD5D2"
  },
  cardtxt:{
    fontSize:20,
    textAlign:'center',
    fontWeight:"bold",
    marginHorizontal:10,
    marginVertical:5
  },
  detailstxt:{
    marginHorizontal:10,
    fontSize:15,
    fontWeight:"bold",
    marginVertical:5,
    color:"green"
  },
  txt2:{
    marginVertical:5,
    marginHorizontal:10
  },

  header:{
    width:width,
    height:70,
    backgroundColor:"#D37677",
    flexDirection:'row',
    marginTop:20
  },
  headertxt:{
    marginTop:30,
    fontWeight:"bold",
    fontSize:23,
    marginHorizontal:10,
    color:"#fff"
  },
  btn:{
    width:200,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:20,
    backgroundColor:"#C05F5F"
},
btntext:{
    textAlign:'center',
      fontSize:16,
      fontWeight:'bold',
      color:'white'
},
  img:{
    width:100,
    height:90,
  }
});

