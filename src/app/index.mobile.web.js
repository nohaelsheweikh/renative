import React , { useEffect, useState, useContext }from 'react';
import {
    StyleSheet, ScrollView, SafeAreaView, View, Text, Image, TextInput, CheckBox,
    TouchableOpacity, TVEventHandler,FlatList

} from 'react-native'
// import InlineImage from './src/InlineImage'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
   var _tvEventHandler = null;
   const [selectedItem, setSelectedItem] = useState(0);

    // const { navigation } = props

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
        onRight()
      } else if(evt && evt.eventType === 'up') {
        console.log('up')
      } else if(evt && evt.eventType === 'left') {
        onLeft()
      } else if(evt && evt.eventType === 'down') {
        console.log('down')
      }
      //  else if(evt && evt.eventType === 'playPause') {
      //   cmp.restartGame();
      // }
    });
  }
  useEffect(() => {
    
   console.log(selectedItem)
  
  }, [selectedItem]);
  const onRight = () =>{
    //   if(selectedItem<5){
        setSelectedItem(selectedItem => selectedItem + 1 )
        console.log(selectedItem)

    //   }else{
    //     setSelectedItem(selectedItem => selectedItem )
    //     console.log(selectedItem)

    //   }

   }
   const onLeft = () =>{
    //    if(selectedItem>0){
        setSelectedItem(selectedItem => selectedItem - 1 )
        console.log(selectedItem)

    //    }
    //    else{
        setSelectedItem(selectedItem => selectedItem )
        console.log(selectedItem)

    //   }

}
  _disableTVEventHandler =() =>{
    if (this._tvEventHandler) {
      _tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }
  
  const handleSelect = (item)=>{
      setSelectedItem(item.id)
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


              
               {/* <Image
                  style={styles.header}
                  source={require('')}
                  /> */}
                
                {/* <Image
                  style={styles.background_header}
                  source={require('./assets/Path.png')}
                  /> */}
                   <FlatList
                    horizontal
                    initialScrollIndex={selectedItem}
                    data={DATA}
                    ref={(e) => this.DATA = e}
                    renderItem={( {item, index} ) => (
                        <TouchableOpacity
                            hasTVPreferredFocus
                            index={selectedItem}
                            key={ selectedItem}
                            onPress={() => {
                            console.log(item.name)
                                // props.navigation.navigate('HomeScreen')
                            }}
                            onPress={() => handleSelect(item)}
                            
                            >
                            <View style={styles.view_over}>
                                    <Text
                                    style={selectedItem === item.id ?  
                                        styles.selected : styles.notSelected}
                                   >{item.name}</Text>
                            </View>
                        </TouchableOpacity>         
            
            // <View key={ item.id} style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            //   <Button  hasTVPreferredFocus onPress={()=>console.log(item.id)} title={`button${item.id}`} style={{backgroundColor:'red'}}/>
            // </View>

          )}
          //Setting the number of column
        //   numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />

                </View>



                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    backgroundColor: '#2D353D',
                    justifyContent: 'space-between',
                    flex: 1,

                }}>
                    {/* <Image
                  style={styles.image_chat}
                  source={require('./src/assets/Chat.png')}
                  />
              <Image
                  style={styles.header}
                  source={require('./src/assets/Chat.png')}
                  /><Image
                  style={styles.image_notification}
                  source={require('./src/assets/Chat.png')}
                  /> */}

                </View>
                <Text style={styles.text_login}> About player battlegrounds </Text>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#2D353D',
                    flex: 1,

                }}>
                    {/* <Image
                  style={styles.mega_image}
                  source={require('./src/assets/Chat.png')}
                  /> */}
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


                {/* <Image
              style={styles.image_logo}
             source={require('./src/assets/Chat.png')}
          /> */}

                {/* <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 1000, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                  onPress={() => {
                      // props.navigation.navigate('HomeScreen')
                  }}>
                  <View style={styles.tourmnent}
                  >
                      <Text style={{ color: 'white', fontSize: 14 }}>Join Tournament</Text>
                  </View>
              </TouchableOpacity>
              </View> */}

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

})

