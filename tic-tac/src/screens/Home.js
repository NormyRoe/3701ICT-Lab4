{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

{/* Import components from src folder */}
import Title from '../components/Title';
import TButton from '../components/TButton';
import Board from '../components/Board';
import colors from '../constants/colors';



export default function Home( {navigation}) {
  return (
    <View style={styles.container}>
      {/* Table Section */}
      <View style={styles.table}>
        {/* Title Section */}
        <View style={ {width: "100%", paddingHorizontal: 20} }>
          <Title text = "Tic Tac Toe App!" />
        </View>
        {/* End Title Section */}
        <StatusBar style="auto" />
        {/* Outer Board */}
        <Board />        
        {/* End Outer Board */}
        {/* Add buttons to bottom of screen */}
        <View style = {styles.buttonRow}>
          {/* Rules Button */}
          <View>
              <TButton text = "Rules" onPress={() => navigation.navigate("Rules")} />
          </View>
          {/* End Rules Button */}
          {/* Credits Button */}
          <View>
              <TButton text = "Credits" onPress={() => navigation.navigate("Credits")} />
          </View>
          {/* End Credits Button */}
        </View>
        {/* End of buttons at bottom of screen */}
      </View>
      {/* End Table Section */}
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    flex: 1,
    backgroundColor: colors.tableBackground,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },  
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,              // modern RN supports gap!
  },
});
