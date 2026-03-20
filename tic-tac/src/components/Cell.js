
{/* Import libraries/Functions */}
import { StyleSheet, Text, View } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function Cell( {value}) {
  return (
    // Cell View
    <View style={styles.cell}>
        {/* Cell Text */}
        <Text style={styles.text}>{value}</Text>
         {/* End Cell Text */}
    </View>
    // End Cell View
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
cell: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textLight,
  },
  });