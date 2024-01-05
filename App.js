import { Text, SafeAreaView, View, StyleSheet, Platform, StatusBar } from 'react-native';
import {colors} from './src/utils/colors'
import {Focus} from './src/features/Focus'
import {Timer} from './src/features/Timer'
import React, {useState} from 'react'
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [currentFocus, setCurrentFocus] = useState(null)
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentFocus ? 
        <>
          <Focus
            addSubject={setCurrentFocus}
          />
          <FocusHistory history={history}/>
        </>
        : 
        <Timer
          focusSubject={currentFocus}
          onTimerEnd={(subject)=>setHistory([...history, subject])}
          clearSubject={()=>setCurrentFocus(null)}
        />  
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Fills up the entire screen
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  }
});
