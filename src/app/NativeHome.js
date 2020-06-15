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
      Button ,

} from 'react-native'
import { Router } from '@reach/router';

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


const NativeHome = (props) => {
  myRef = React.createRef();
    var _tvEventHandler = null;
   const [selectedItem, setSelectedItem] = useState(0);


  const [selectedItemMenu, setSelectedItemMenu] = useState(0);

  const [play, setplay] = useState(true);
  const [focusable,setFocusable ] = useState(false)
  const [menuFocus,setmenuFocus ] = useState(false)


  const RETURN_KEY = 8;
  const VIDEO = 2

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
        setFocusable(true)
      } else if(evt && evt.eventType === 'up') {
        // onUP()
        setmenuFocus(false)

      } else if(evt && evt.eventType === 'left') {
        // onLeft()
        setmenuFocus(true)
      } else if(evt && evt.eventType === 'down') {
        // onDown()
        setmenuFocus(false)

      }
      else if(evt && evt.eventType === 'select') {
        // onPlay()
        // console.log(play)
   
       }
       else if (evt.keyCode === RETURN_KEY) {
        setFocus('menu');
        console.log(evt.keyCode)
       }
       else if  (evt.keyCode === VIDEO) {
        setFocus('video');
       }
       else if(evt && evt.eventType === 'playPause') {
       onPlay()
       console.log(play)
  

      }
      // else if (evt.eventType === "focus") {
      //   myRef.current.props.onFocus();
      //   console.log( myRef.current.props.onFocus())
      // }
  
      // else if (evt.eventType === "blur") {
      //   myRef.current.props.onBlur();
      // }
      else{
        // console.log(evt)
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2D353D' }}>
         

        <ScrollView
          
            style={{ backgroundColor: '#2D353D' }}
        >
    
            <View style={{
                flexDirection: 'row',
                height: 50,
                backgroundColor: '#2D353D',
                marginTop: 17,
                marginLeft: 20,
                justifyContent: 'space-between',
                flex: 1,
    
            }}>
    
    
       
    
    
    
            <View style={{
                flexDirection: 'row',
                height: 50,
                backgroundColor: '#2D353D',
                justifyContent: 'space-between',
                flex: 1,
    
            }}>
                
            
    
            </View>
       
    
            </View>
            <View style={{flexDirection:"row"}}>
             <View >
                <Menu focusKey="menu" focused={menuFocus} navigation={props.navigation} />
             </View>
            
                 
            
             
    
            {/* videos */}
           <View >
           <Swiper 
            style={styles.wrapper} showsButtons={true}
              // index={selectedItem}
              width={null}
              removeClippedSubviews={false}
              height={width * 96 / 336}
              dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
              activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
              paginationStyle={{ bottom: 10 }}
              loop={false}
            >
            <TouchableOpacity style={styles.slide1}focusable={focusable} >
            <VideoPlayer
         
               focusKey="video"
               source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
               paused={play }   
               resizeMode={ 'contain' }  
               playInBackground={ false }
               navigator={props.navigator}

    
               
            />
    
            </TouchableOpacity>
            <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            </View>
           </Swiper>

           </View>
             
                
                
          </View>  
            
    
           
      
      
       
            <Text style={styles.text_login}> About player battlegrounds </Text>
    
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#2D353D',
                flex: 1,
    
            }}>
              
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: '#2D353D',
    
                }}>
                    <Text style={styles.textmega}> MegalGaming</Text>
    
    
    
                    <TouchableOpacity
                        style={styles.submit}
                        underlayColor='#fff'>
                        <Text style={styles.submitText}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.followers}> 6831 Followers</Text>
    
            </View>
    
    
            <Text style={styles.text_login}> GENERAL RULES:</Text>
            <Text style={styles.details} >
                Registration is open for players in Saudi Arabia (citizens and residents) to play online
    {"\n"}
                • Strictly follow the timings. All matches must be played as scheduled.
    {"\n"}
                • Players who are late for more than 5 minutes will be disqualified.
    {"\n"}
    
                • Players are requested to maintain the decorum at all times. They should not engage in any gesture that may be taken as offensive, abusive, insulting or mocking by other players, tournament officials or anybody else.
    {"\n"}
                • Players are requested to maintain the decorum at all times. They should not engage in any gesture that may be taken as offensive, abusive, insulting or mocking by other players, tournament officials or anybody else.
    {"\n"}
                • Players should not incite other players to engage in any inappropriate or offensive behavior.
    {"\n"}
                • Insults or inappropriate behavior within comments or other means for contacting a player will result in disqualification.
    {"\n"}
                • All rules are open to an administrator’s interpretation and will have the final say on any rulings. Rules may be changed by the administrators at any time.
    
    
    </Text>
    
            <Text style={styles.text_login}> TOURNAMENT RULES:</Text>
            <Text style={styles.details} >
                Players must play on phones and tablets only{"\n"}
                • All matches will be played on Erangel Map.
    
    {"\n"}
                • Players will participate in two matches during qualifiers round, and three matches during finals round.
    
    {"\n"}
                • Team roster cannot be changed during the tournament.
    
    {"\n"}
                • All matches will be TPP.
    
    {"\n"}
                • Tournament will be played in Squads.
    
    {"\n"}
                • Players must submit a screenshot and put their results after each match on Kafu.
    
    {"\n"}
                • Matches and score submission must be done as scheduled.
    
    </Text>
    
    
    
            <Text style={styles.text_login}> TOURNAMENT STRUCTURE:</Text>
            <Text style={styles.details} >
                Teams will be distributed to groups.
    
    {"\n"}
                • Each group will play 2 matches during qualifiers stage.
    
    
    {"\n"}
                • Teams will play 3 matches during final stage to determine the winners.
    
    </Text>
    
    
    
            <Text style={styles.text_login}> PRIZE-POOL DISTRIBUTION:</Text>
            <Text style={styles.details} >
                1ST Place 35,000 SAR
    
    
    {"\n"}
                2nd Place 20,000 SAR
    
    
    
    {"\n"}
                3rd Place 10,000 SAR
    
    
    {"\n"}
                4th Place 5,000 SAR
    
    {"\n"}
                Total: 70,000 SAR
    </Text>
    
    
            <Text style={styles.text_login}> CONTACTS:</Text>
            <Text style={styles.details} >
                Facebook: KafuGames
    
    {"\n"}
                Twitter: KafuGames
    
    
    
    
    {"\n"}
                Email: contact@kafugames.com
    
    
    
    {"\n"}
                Twitch: To be announced
    
    
    {"\n"}
                Discord: To be announced
    
    </Text>
    
    
    
        </ScrollView>
    </SafeAreaView>

    )
}

export default NativeHome


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
    wrapper: { padding:10},
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