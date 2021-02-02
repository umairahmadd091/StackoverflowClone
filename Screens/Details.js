import React,{useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  FlatList, TextInput, Alert, Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window");

export function Details ({navigation,route}){

    const [Data,setData] = useState([]);
    const [comment,setcomment] = useState("");

   const {id} = route.params;
   const {heading} = route.params;
   const {details} = route.params;
   const {postby} = route.params;

  return (
<ImageBackground source={{uri:"https://images.pexels.com/photos/2949302/pexels-photo-2949302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
style={styles.bg}
>
<View style={styles.header}>
<MaterialIcons name="keyboard-backspace" size={32} color="white" style={{marginTop:30,marginLeft:5}}
onPress={()=> navigation.goBack()}
/>
<Text style={styles.headertxt}>Details</Text>
</View>

<View style={styles.Main}>
<Image source={{uri:"https://www.atlashonda.com.pk/wp-content/uploads/2016/02/cd-125-red-30.png"}}
style={{width:width,height:200,alignSelf:"center"}} />

</View>

<View style={styles.card}>
    <Text style={styles.cardtxt}>{heading}</Text>
    <View style={{borderWidth:0.5,borderColor:"black",marginHorizontal:30,marginVertical:5}} />
    <Text style={styles.detailstxt}>Price: {details}</Text>
    <Text style={styles.txt2}>Model: 2020</Text>
    <Text style={styles.txt2}>Bike Number: P-6565</Text>
    <Text style={styles.txt2}>Date: 1-1-2020</Text>
    <Text style={styles.txt2}>Cell: 0312028312</Text>
    <Text style={styles.txt2}>View: 200</Text>
    <Text style={styles.txt2}>City: {postby}</Text>
    <Text style={styles.txt2}>Descriptions: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</Text>
</View>
<TouchableOpacity
style={styles.btn} >
    <Text style={styles.btntext}>BUY NOW</Text>
</TouchableOpacity>

</ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg:{
    flex:1, 
    resizeMode: "cover",
  },
  commentbox:{
    flexDirection:"row",
    marginHorizontal:5,
    justifyContent:"center",
    alignItems:"center"
  },
  card:{
    marginVertical:5,
    width:width-20,
    borderRadius:10,
    alignSelf:'center',
    backgroundColor:"#CCD5D2",
    marginTop:5
  },
  cardtxt:{
    fontSize:25,
    textAlign:'center',
    fontWeight:"bold",
    marginHorizontal:10
  },
  detailstxt:{
    marginHorizontal:10,
    fontSize:18,
    color:"green"
  },
  txt2:{
    marginBottom:3,
    marginHorizontal:10
  },

  header:{
    width:width,
    height:70,
    backgroundColor:"#D37677",
    flexDirection:"row",
    marginTop:20
  },
  headertxt:{
    marginTop:30,
    fontWeight:"bold",
    fontSize:23,
    marginHorizontal:5,
    color:"#fff"
  }, 
  textinp:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    borderRadius:20,
  width:width-100,
  alignSelf:'center',
  marginVertical:5,
  marginTop:20,
  backgroundColor:"#fff"
},
logoutbtn:{
  borderRadius:40,
    width:80,
    height:50,
    borderWidth:1,
    backgroundColor:"#900C3E",
    justifyContent:'center',
    marginHorizontal:5,
    marginTop:10
},
logout:{
  fontWeight:"bold",
  fontSize:12,
  textAlign:"center",
  alignSelf:"center",
  color:"#fff"
},
commenttxt:{
    fontSize:25,
    color:"#fff",
    fontWeight:"bold",
    marginHorizontal:20
},
card2:{
    marginVertical:2,
    width:width-20,
    borderRadius:10,
    alignSelf:'center',
    backgroundColor:"#CCD5D2",
  },
  cardtxt2:{
    fontSize:15,
    fontWeight:"bold",
    marginHorizontal:10,
    marginVertical:5
  },
  detailstxt2:{
    marginHorizontal:5,
    fontSize:15,
    paddingBottom:5
  },
  Main:{
    width:width,
    height:200,
    backgroundColor:"#94B4D6",
  },
  btn:{
    width:200,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:5,
    backgroundColor:"#C05F5F"
},
btntext:{
    textAlign:'center',
      fontSize:16,
      fontWeight:'bold',
      color:'white'
},
});

