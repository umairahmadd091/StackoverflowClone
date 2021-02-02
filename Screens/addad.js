import React,{useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ImageBackground,
  Picker
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window");

export function AddAd ({navigation}){

    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Activity,setActivity] = useState(false);

  return (
<ImageBackground source={{uri:"https://images.pexels.com/photos/2949302/pexels-photo-2949302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
    style={styles.bg}
    >
<View style={styles.Main}>
 <Text style={styles.heading}>Post An ADs</Text>
 
 <View style={styles.textinp1}>
<Text style={{marginHorizontal:10}}>Select bike Condition</Text>
 <Picker style={{marginTop:-10}}>
  <Picker.Item label="A" value="java" />
  <Picker.Item label="B" value="js" />
</Picker>
</View>

<View style={styles.textinp1}>
<Text style={{marginHorizontal:10}}>Select City</Text>
 <Picker style={{marginTop:-10}}>
  <Picker.Item label="Peshawar" value="java" />
  <Picker.Item label="Kohat" value="js" />
  <Picker.Item label="Lahore" value="js" />
  <Picker.Item label="Islamabad" value="js" />
  <Picker.Item label="Karachi" value="js" />
  <Picker.Item label="Quetta" value="js" />
  <Picker.Item label="Faisalabad" value="js" />
</Picker>
</View>

<View style={styles.textinp1}>
<Text style={{marginHorizontal:10}}>Select bike Company</Text>
 <Picker style={{marginTop:-10}}>
  <Picker.Item label="Honda" value="java" />
  <Picker.Item label="Yamaha" value="js" />
  <Picker.Item label="Suzuki" value="java" />
  <Picker.Item label="Kawasaki" value="js" />
</Picker>
</View>

<View style={styles.textinp1}>
<Text style={{marginHorizontal:10}}>Select bike Type</Text>
 <Picker style={{marginTop:-10}}>
  <Picker.Item label="70" value="java" />
  <Picker.Item label="100" value="js" />
  <Picker.Item label="125" value="java" />
  <Picker.Item label="150" value="js" />
</Picker>
</View>

 <TextInput placeholder="Model" 
 onChangeText={text=> setEmail(text)} 
 value={Email} 
 style={styles.textinp}
 />

<TextInput placeholder="Bike Number" 
 style={styles.textinp}
 />

<TextInput placeholder="Price" 
 style={styles.textinp}
 />

<TextInput placeholder="Mobile Number" 
 style={styles.textinp}
 />

<TextInput placeholder="Description"
onChangeText={text=> setPassword(text)}
value={Password} 
style={styles.textinp}
/>

<TouchableOpacity
style={styles.btn} >
     <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
     <Entypo name="image" size={32} color="white" style={{marginHorizontal:7}} /> 
      <Text style={styles.btntext}>Insert Image</Text>
      </View>
</TouchableOpacity>

<TouchableOpacity
style={styles.btn} >
    { Activity ? (<ActivityIndicator animating={Activity} size="large" color="white" />):
  ( <Text style={styles.btntext}>Submit</Text>)
  }
</TouchableOpacity>

</View>
</ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg:{
    flex:1, 
    resizeMode: "cover",
    alignItems:"center",
  },
  Main:{
    width:width-20,
    marginTop:height/15,
    backgroundColor:"#fff",
    borderRadius:30
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    marginBottom:5,
    color:"#C05F5F"
  },
  textinp:{
      borderWidth:1,
      borderColor:'black',
      height:50,
      borderRadius:20,
     width:width-40,
    alignSelf:'center',
    marginVertical:5,
    marginTop:5,
    
  },
  textinp1:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    borderRadius:20,
   width:width-40,
  alignSelf:'center',
  marginTop:5
},
  btn:{
      width:200,
      height:50,
      borderRadius:25,
      justifyContent:'center',
      alignSelf:'center',
      marginTop:5,
      backgroundColor:"#C05F5F",
      marginBottom:3
  },
  btntext:{
      textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'white'
  },
  link:{
    width:200,
    alignSelf:'center',
    marginTop:20,
    marginBottom:20
  },
  linktext:{
    color:'blue'
  }

});

