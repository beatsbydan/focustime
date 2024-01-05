import React, {useState} from 'react'
import {View, Text, StyleSheet, Vibration} from 'react-native'
import {ProgressBar} from 'react-native-paper'
import {Countdown} from '../components/Countdown'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'
import {colors} from '../utils/colors'
import {Timing} from './Timing'
import {useKeepAwake} from 'expo-keep-awake'

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = (props) => {
  useKeepAwake()
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    reset()
    props.onTimerEnd(props.focusSubject)
  }
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)
  return(
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}/>
        <View style={{paddingTop: spacing.xxl}}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>
            {props.focusSubject}
          </Text>
        </View>
      </View>
      <View style={{paddingTop:spacing.sm}}>
        <ProgressBar color={colors.progressBar} style={{height: spacing.sm}} progress={progress}/>  
      </View>
      <View style={styles.buttonWrapper}>
        <Timing
          onChangeTime={setMinutes}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? <RoundedButton title={"start"} onPress={()=>setIsStarted(true)}/> :
        <RoundedButton title={"pause"} onPress={()=>setIsStarted(false)}/>}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title={"clear"} size={50} onPress={props.clearSubject}/>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countdown:{
    flex:0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    padding:15,
    justifyContent:'center',
    alignItems:'center',
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task:{
    color: colors.white,
    textAlign: 'center'
  }
})