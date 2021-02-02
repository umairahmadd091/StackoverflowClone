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

export function AddPost ({navigation,route}){

    const [Head,setHead] = useState("");
    const [Desc,setDesc] = useState("");
    const [Activity,setActivity] = useState(false);
    const {email} = route.params;

    const register =()=>{
        if(Desc && Head == ""){
            Alert.alert("Input Something");
        }else{
        fetch('https://localgovt.000webhostapp.com/addpost.php', {
            "method": "Post",
             headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
                  email: email,
                  details: Desc,
                  heading: Head
    
            }) 
    })
    
    .then(data=>
      data.json()
    )
    .then(data2=>{
        data2.res?Alert.alert("Post Added"):Alert.alert("Something went wrong");
        navigation.navigate("Home");
    })
    .catch(err => {
        console.log(err);
    });
    }
     }
  
  return (
<ImageBackground source={{uri:"https://images.pexels.com/photos/3201478/pexels-photo-3201478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
    style={styles.bg}
    >
<View style={styles.header}>
<Text style={styles.headertxt}>Programmer Room</Text>
</View>

<View style={styles.Main}>
 <Text style={styles.heading}>ADD POST</Text>
 
 <TextInput placeholder="Add Heading of Post" 
 onChangeText={text=> setHead(text)} 
 value={Head} 
 style={styles.textinp}
 />

 <TextInput placeholder="Add Description" 
 onChangeText={text=> setDesc(text)} 
 value={Desc} 
 style={{...styles.textinp, lineHeight:20,textAlignVertical:"top",paddingRight:20,height:90}}
 />

<TouchableOpacity onPress={register}
style={styles.btn} >
    { Activity ? (<ActivityIndicator animating={Activity} size="large" color="white" />):
  ( <Text style={styles.btntext}>Add Post</Text>)
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
    marginTop:height/10,
    backgroundColor:"#C6C6C6",
    borderRadius:30
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  },
  textinp:{
      borderWidth:1,
      borderColor:'black',
      height:50,
      borderRadius:20,
    width:width-40,
    alignSelf:'center',
    marginVertical:5,
    marginTop:10,
  },
  header:{
    width:width,
    height:80,
    backgroundColor:"#D37677",
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
      backgroundColor:"#007C7C",
      marginBottom:20
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