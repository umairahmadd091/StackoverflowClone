import React,{useEffect} from 'react';
import {
  View,
Image,Dimensions,ActivityIndicator
} from 'react-native';
const {width,height} = Dimensions.get("window");

export function SplashScreen ({navigation}){

    useEffect(()=>{
        setTimeout(() => {
          navigation.replace("App");
      }, 4000);
      },[])
  
  return (
<View>
<Image 
source={{uri:"https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
style={{width:width,height:height}}
/>
    <ActivityIndicator size='large' 
    animating={true}
    color="white"
    style={{marginTop:-330}}
    />
</View>
  );
};