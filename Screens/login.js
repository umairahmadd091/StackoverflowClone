import React,{useState} from 'react';
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

const {width,height} = Dimensions.get("window");

export function Login ({navigation}){

  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [Activity,setActivity] = useState(false);

  const login =()=>{
   if(Email && Password != ""){
    setActivity(true);
    fetch('https://localgovt.000webhostapp.com/login.php', {
        "method": "POST",
        headers: 
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
            email : Email,
            pass : Password

        }) 

    })
.then(data=>
  data.json()
)

.then(data2=>{
    data2.res=="Successful"?
    (navigation.replace("Home",{
      email: Email
    })):
    (Alert.alert(data2.res));
    setActivity(false);
  })
.catch(err => {
    console.log(err);
});}
else{
  Alert.alert("Form is Blank");
}
  setEmail("");
  setPassword("");

}
  return (
    <ImageBackground source={{uri:"https://images.pexels.com/photos/2949302/pexels-photo-2949302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
style={styles.bg}
>

<View style={styles.Main}>
 <Text style={styles.heading}>LOGIN</Text>
 
<TextInput placeholder=" Enter Email" 
 onChangeText={text=> setEmail(text)} 
 value={Email} 
 style={styles.textinp}
 />

<TextInput placeholder="Passsword"
onChangeText={text=> setPassword(text)}
value={Password} 
style={styles.textinp}
secureTextEntry={true}
/>

<TouchableOpacity onPress={login}
style={styles.btn} >
   { Activity ? (<ActivityIndicator animating={Activity} size="large" color="white" />):
  ( <Text style={styles.btntext}>LOGIN</Text>)
  }
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("Signup")}
style={styles.link}
>
  <Text style={styles.linktext}>For Registeration! Click Here</Text> 
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
    marginTop:50,
    width:width-20,
    marginTop:height/6,
    backgroundColor:"white",
    borderRadius:30
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
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
    marginTop:20,
    
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
  link:{
    width:200,
    alignSelf:'center',
    marginTop:20,
    marginBottom:20
  },
  linktext:{
    color:'green'
  }

});

