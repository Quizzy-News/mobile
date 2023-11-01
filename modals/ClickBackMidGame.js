import { Pressable, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors, Buttons, Typography, Containers } from "../styles";

const ClickBackMidGame = ( { navigation }) => {
    
    const [ yesButtonActive, setYesButtonActive ] = useState(false);
    const [ noButtonActive, setNoButtonActive ] = useState(false);

    return (
        <View style={styles.screen}>
            {/* Modal Text */}
             <Text style={styles.text}>
                Are you sure you want to go back?
                {"\n"}
                Your game for the day will reset.
             </Text>
            
            {/* Button: Yes, go back  */}
            <Pressable 
                style={yesButtonActive ? styles.buttonActive : styles.button}
                
                onPressIn= {() => {
                    setYesButtonActive(true);
                    
                }}
                onPressOut= {() => {
                    setYesButtonActive(false);
                    navigation.navigate("Home"); 
                    // TODO: Ensure that score is resetting to 0 when redirected to home
                }}
            >
            <Text style={styles.text}>Yes, go back.</Text>
            </Pressable>
            
            {/* Button: No, continue playing  */}
            <Pressable 
                style={noButtonActive ? styles.buttonActive : styles.button}
                
                onPressIn= {() => {
                    setNoButtonActive(true);
                }}
                onPressOut= {() => {
                    setNoButtonActive(false);
                    navigation.goBack();
                }}
            >
            <Text style={styles.text}>No, continue playing!</Text>
            </Pressable>

        </View>
    );
}

export default ClickBackMidGame;


const styles = StyleSheet.create({
    screen: {
        ...Colors.backgroundColors.lightPurple,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        ...Colors.fontColors.gray4,
        ...Typography.body1,
        padding: 10,
    },
    button: {
        ...Colors.backgroundColors.white,
        ...Buttons.button,
        margin: 10,
        borderBottomWidth: 5,
        borderColor: Colors.shadowColors.gray1,
        //    elevation:30,
        //  shadowRadius: 15,
        //  shadowOffset : { width: 1, height: 13},
         
        },
        pressableArea:{
        flexDirection:"row",
        justifyContent: 'center',
         alignItems: 'center',
        width:"100%",
        height:"100%"
     
        }
    ,
    buttonActive: {
        ...Colors.backgroundColors.white,
        ...Buttons.buttonActive,
        margin: 10
    }
});