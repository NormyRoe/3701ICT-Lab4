{/* Import libraries/Functions */}
import { StyleSheet, Text, View } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';
import Cell from './Cell';



export default function Board() {
  return (
    // Outer Board
    <View style={styles.outer_board}>
      {/* Inner Board */}
      <View style={styles.inner_board}>
        {/* Row 1 */}
        <View style={styles.row}>
          {/* Row 1 - Cell 1 */}
          <Cell value={"O"} />
          {/* Row 1 - Cell 2 */}
          <Cell value={""} />
          {/* Row 1 - Cell 3 */}
          <Cell value={"O"} />
        </View>
        {/* End Row 1 */}
        {/* Row 2 */}
        <View style={styles.row}>
          {/* Row 2 - Cell 1 */}
          <Cell value={"X"} />
          {/* Row 2 - Cell 2 */}
          <Cell value={"X"} />
          {/* Row 2 - Cell 3 */}
          <Cell value={"O"} />
        </View>
        {/* End Row 2 */}
        {/* Row 3 */}
        <View style={styles.row}>
          {/* Row 3 - Cell 1 */}
          <Cell value={"X"} />
          {/* Row 3 - Cell 2 */}
          <Cell value={""} />
          {/* Row 3 - Cell 3 */}
          <Cell value={"O"} />
        </View>
        {/* End Row 3 */}
      </View>
      {/* End Inner Board */}
    </View>
    // End Outer Board
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  outer_board: {
    width: 300,
    height: 300,
    backgroundColor: colors.boardOuter,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_board: {
    width: 270,
    height: 270,
    backgroundColor: colors.boardInner,
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',   
  },
});
