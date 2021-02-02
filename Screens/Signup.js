import React,{useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {width,height} = Dimensions.get("window");

export function Signup ({navigation}){

    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Activity,setActivity] = useState(false);

    const register =()=>{

        if(Password && Name && Email != ""){
            setActivity(true);
         fetch('https://localgovt.000webhostapp.com/signup.php', {
             "method": "POST",
             headers: 
             {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(
             {
                 pass : Password,
                 email: Email,
                 name: Name
     
             }) 
     
         })
     .then(data=>
       data.json()
     )
     
     .then(data2=>{
         if(data2.res == "true"){
            Alert.alert("Registration Successful");
            navigation.navigate("login");
         }else{
            Alert.alert("Email already registered!");
         }
         setActivity(false);
     })
     .catch(err => {
         console.log(err);
     });}
     else{
       Alert.alert("Form is Blank");
     }

     }
  
  return (
<ImageBackground source={{uri:"https://images.pexels.com/photos/2949302/pexels-photo-2949302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
    style={styles.bg}
    >
<View style={styles.Main}>
 <Text style={styles.heading}>Sign up</Text>
 
 <TextInput placeholder="Name" 
 onChangeText={text=> setName(text)} 
 value={Name} 
 style={styles.textinp}
 />

 <TextInput placeholder="Email" 
 onChangeText={text=> setEmail(text)} 
 value={Email} 
 style={styles.textinp}
 />

<TextInput placeholder="CNIC" 
 style={styles.textinp}
 />

<TextInput placeholder="Mobile" 
 style={styles.textinp}
 />

<TextInput placeholder="Address" 
 style={styles.textinp}
 />

<TextInput placeholder="Passsword"
onChangeText={text=> setPassword(text)}
value={Password} 
style={styles.textinp}
secureTextEntry={true}
/>

<TouchableOpacity
style={styles.btn} >
     <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
     <Entypo name="image" size={32} color="white" style={{marginHorizontal:7}} /> 
      <Text style={styles.btntext}>Insert Image</Text>
      </View>
</TouchableOpacity>

<TouchableOpacity onPress={register}
style={styles.btn} >
    { Activity ? (<ActivityIndicator animating={Activity} size="large" color="white" />):
  ( <Text style={styles.btntext}>SignUp</Text>)
  }
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("login")}
style={styles.link}
>
  <Text style={styles.linktext}>Already Registered! Click Here</Text>
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
    marginBottom:10,
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
  btn:{
      width:200,
      height:50,
      borderRadius:25,
      justifyContent:'center',
      alignSelf:'center',
      marginTop:10,
      backgroundColor:"#C05F5F",
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

