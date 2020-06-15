/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useEffect, useState, useContext }from 'react';
import {
    StyleSheet, 
    ScrollView,
     SafeAreaView,
     View,
      Text,
      Image,
      TextInput,
      CheckBox,
      TouchableOpacity,
      TVEventHandler,FlatList,
      Dimensions,
      Button 

} from 'react-native'
import { Router } from '@reach/router';
import Root from './Root'
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';

// import InlineImage from './src/InlineImage'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper'
import { setKeyMap, withFocusable} from '@noriginmedia/react-spatial-navigation';
import Menu from '../menu'


import { NavigationContainer, getStateFromPath, useLinking } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

const { width } = Dimensions.get("window");
// initNavigation()


export default function App() {
   var _tvEventHandler = null;
   const [selectedItem, setSelectedItem] = useState(0);


  const [selectedItemMenu, setSelectedItemMenu] = useState(0);

  const [play, setplay] = useState(true);

  const DATA =[
    {id:0 ,name:"Matches"},
    {id:1 ,name:"News"},
    {id:2 ,name:"Standings"},
    {id:3 ,name:"Media"},
    {id:4 ,name:"More"},


]

    
 // set initial config
 useEffect(() => {
    _enableTVEventHandler();
   
    return () => {
        _disableTVEventHandler();
    };
  }, []);
  
  _enableTVEventHandler =() =>{
    _tvEventHandler = new TVEventHandler();
    _tvEventHandler.enable(this, function(cmp, evt) {
      if (evt && evt.eventType === 'right') {
        // onRight()
      } else if(evt && evt.eventType === 'up') {
        // onUP()
      } else if(evt && evt.eventType === 'left') {
        // onLeft()
      } else if(evt && evt.eventType === 'down') {
        // onDown()
      }
      else if(evt && evt.eventType === 'select') {
        onPlay()
        console.log(play)
   
       }
       else if(evt && evt.eventType === 'playPause') {
       onPlay()
       console.log(play)
  
      }
    });
  }
  useEffect(() => {
    
   setplay(play)
  
  }, [play]);
  const onRight = () =>{
      if(selectedItem<3){
        setSelectedItem(selectedItem => selectedItem + 1 )
        console.log(selectedItem)
  
      }else{
        setSelectedItem(selectedItem => selectedItem )
        console.log(selectedItem)
  
      }
  
      
   }
   const onUP= () =>{
    if(selectedItemMenu>0){
      setSelectedItem(selectedItem => selectedItem - 1 )
      console.log(selectedItem)
  
    }else{
      setSelectedItemMenu(selectedItem => selectedItem+1 )
      console.log(selectedItem)
  
    }
  
  
    
  }
  
  const onDown= () =>{
    if(selectedItemMenu<DATA.length){
      setSelectedItem(selectedItem => selectedItem + 1 )
      console.log(selectedItem)
  
    }else{
      setSelectedItemMenu(selectedItem => selectedItem-1 )
      console.log(selectedItem)
  
    }
  
  
    
    
  }
   const onPlay = () => setplay(!play);
  
   
  
  const onLeft = () =>{
        //  if(selectedItem>0){
        //   setSelectedItem(selectedItem => selectedItem - 1 )
        //   console.log(selectedItem)
  
        //  }
        //  else{
        //   setSelectedItem(selectedItem => selectedItem )
        //   console.log(selectedItem)
  
        // }
        // navigation.openDrawer();
  
  
  }
    _disableTVEventHandler =() =>{
      if (this._tvEventHandler) {
        _tvEventHandler.disable();
        delete this._tvEventHandler;
      }
    }
    
  
    const handleSelect = (item)=>{
      setSelectedItemMenu(item.id)
      console.log('slected',item.name)
  
  
  }
    // console.log('hello abdo')
    return (
       <Root/>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#2D353D'
    },
    selected:{
    color:'#000',
     fontSize: 15, fontWeight: 'bold' 
    },
    notSelected:{
        color:'#fff',
        fontSize: 15, fontWeight: 'bold' 
    },
    text_login: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 10,
        marginTop: 30,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        marginLeft: 15
    },
    details: {
        color: '#ffffff',
        fontSize: 16,
        marginRight: 10,
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    textmega: {
        color: '#ffffff',
        fontSize: 19,
        marginRight: 22,
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: 23
    },
    followers: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 50,
        marginRight: 30,
        alignSelf: 'flex-start',
    },
    text_remember: {
        color: '#808A95',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
        alignSelf: 'flex-start',
        marginLeft: 23
    },
    text_forget: {
        color: '#808A95',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10,
        marginTop: 34,
        alignSelf: 'center',
        marginLeft: 23
    },
    text_social: {
        color: '#ffffff',
        fontSize: 14,
        marginRight: 10,
        marginTop: 3,
        fontFamily: 'Lato Regular',
        alignSelf: 'flex-start',
        marginLeft: 23
    },
    text_or: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 40,
        fontWeight: 'bold',
        marginRight: 10,
        alignSelf: 'center',
        marginLeft: 23
    },
    textInputStyle: {
        color: 'white',
        color: '#ffffff',
        fontSize: 14,
        marginRight: 21,
        textAlign: "center",
        textAlignVertical: "center",
        marginTop: 3,
        alignSelf: 'flex-start',
        marginLeft: 23
    },

    view_name: {
        color: '#1A1D2E',
        width: 376,
        height: 49,
        marginTop: 40,
        borderRadius: 5,
        backgroundColor: '#1A1D2E'
    },
    view_password: {
        color: '#1A1D2E',
        width: 376,
        height: 49,
        marginTop: 26,
        borderRadius: 5,
        backgroundColor: '#1A1D2E'

    },
    Check_style: {
        color: '#1A1D2E',
        width: 376,
        height: 49,
        marginTop: 26,
        borderRadius: 5,
        backgroundColor: '#1A1D2E'
    },
    view_toutchableopacity: {
        backgroundColor: '#2D353D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 100,
        height: 47
    },
    tourmnent: {
        backgroundColor: '#DD1D29',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 278,
        marginBottom: 130,
        height: 47
    },

    view_over: {
        backgroundColor: '#2D353D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 100,
        height: 47
    },

    view_toutchableopacity_Signup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 19,
        width: 69,
        height: 24,
        marginBottom: 108
    },
    view_forgetpassword: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 43,
        width: 180,
        height: 18,
        marginBottom: 34
    },

    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    image_chat: {
        width: 30,
        height: 30,
        marginTop: 9,
        marginLeft: 15
    },
    image_logo: {
        width: 423,
        height: 200,
        alignSelf: 'center',

    },
    header: {
        width: 50,
        height: 50,
        alignSelf: 'center',

    }, 
    background_header: {
        width: 250,
        height: 20,
        alignSelf: 'center',

    },image_notification: {
        width: 30,
        height: 30,
        marginRight: 15,
        marginTop: 10
    },
    submit: {
        marginLeft: 22,
        paddingTop: 5,
        marginTop: 9,
        paddingBottom: 5,
        width: 100,
        backgroundColor: '#2D353D',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
    mega_image: {
        width: 85,
        height: 85,
        marginTop: 9,
        marginLeft: 15
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }

})