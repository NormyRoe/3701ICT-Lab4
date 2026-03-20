{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function TButton( {text, onPress}) {
  return (    
    /* Adding a pressable button */
    <Pressable 
      style={styles.button}
      onPress = {onPress}
      >
        <Text style={styles.button_text}>
          {text}
        </Text>      
    </Pressable>
    /* End Adding a pressable button */
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
  },
  button_text: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: "bold",
  },
});
