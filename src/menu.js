import React, { useEffect ,useState} from 'react';
import { Text, View } from 'react-native';
import { Icon, Button, getScaledValue, useNavigate, useOpenDrawer, StyleSheet } from 'renative';
import { initNavigation, withFocusable , onBecameFocused} from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasHorizontalMenu, hasWebFocusableUI } from './theme';

if (hasWebFocusableUI) {
    initNavigation({
        debug: false,
        visualDebug: true,
        nativeMode: true
    });
}

export const DrawerButton = (props) => {
    const openDrawer = useOpenDrawer(props);

    return (
        <Icon
            iconFont="ionicons"
            iconName="md-menu"
            iconColor={Theme.color3}
            size={Theme.iconSize}
            style={themeStyles.icon}
            onPress={() => {
                openDrawer('Drawer');
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingTop: getScaledValue( 40),
        paddingLeft: getScaledValue( 40),
        // width: Theme.menuWidth,
        height: Theme.menuHeight,
        alignItems: 'flex-start',
        // borderRightWidth: getScaledValue( 1),
        borderBottomWidth: getScaledValue( 0),
        borderColor: Theme.color5,
        flexDirection: 'column'
    },
    
    button: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 0,
        marginTop: getScaledValue(20),
        maxWidth: getScaledValue(400),
        minWidth: getScaledValue(50),
        borderWidth: 0
    },
    focusable:{
        backgroundColor:"green",
    },
    buttonText: {
        fontFamily: 'TimeBurner',
        color: '#62DBFB',
        fontSize: getScaledValue(20)
    },
    focusedBorder: {
        borderWidth: 6,
        borderColor: Theme.color3,
        backgroundColor: 'white'
      }
});

const Menu = (props) => {
    const navigate = useNavigate(props);
    const [active, setActive] = useState(true);
    const [menu1, setMenu1] = useState (props.focused)
    const [menu2, setMenu2] = useState (false)
    const [menu3, setMenu3] = useState (false)


    handleFocus = () =>setMenu1(true)

    // if (hasWebFocusableUI) {
    //     useEffect(() => {
    //     setMenu1(props.focused)       
    //  }, []);
    // }

    return (
        <View style={styles.container}>

            <Button 
                to="/"
                title="Home"
                iconFont="ionicons"
                focused={menu1||props.focused}
                className="focusable"
                iconName="md-home"
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={[styles.button]}
                textStyle={styles.buttonText}
                onFocus={() => {setMenu1(true)}}
                onBlur={() => {setMenu1(false)}}
                onPress={() => {
                    props.navigation.navigate('Home');
                }}
                onEnterPress={() => {
                    props.navigation.navigate('Home');
                }}
            />
            
            <Button
                to="my-page"
                title="My Page"
                iconFont="ionicons"
                iconName="md-book"
                className="focusable"
                focused={menu2}
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={[styles.button]}
                textStyle={styles.buttonText}
                onFocus={() => {setMenu2(true)}}
                onBlur={() => {setMenu2(false)}}
                onPress={() => {
                    props.navigation.navigate('Test');
                }}
                onEnterPress={() => {
                    props.navigation.navigate('Test');
                }}
            />
            <Button
                to="modal"
                title="My Modal"
                iconFont="ionicons"
                className="focusable"
                iconName="ios-albums"
                iconColor={Theme.color3}
                iconSize={Theme.iconSize}
                style={[styles.button]}
                focused={menu3}
                onFocus={() => {setMenu3(true)}}
                onBlur={() => {setMenu3(false)}}
                textStyle={styles.buttonText}
                onPress={() => {
                   props.navigation.navigate('modal');
                }}
                onEnterPress={() => {
                    props.navigation.navigate('modal');
                }}
            />
        </View>
    );
};

export default (hasWebFocusableUI ? withFocusable()(Menu) : Menu);
