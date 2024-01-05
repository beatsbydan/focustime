import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import {colors} from '../utils/colors'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes' 

export const Focus = (props) => {
  const [text, setText] = useState("")
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on ?"
          value={text}
          onChangeText={setText}
        />
        <View style={styles.button}>
          <RoundedButton
            title={"+"}
            size={50}
            onPress={() => props.addSubject(text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  button:{
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row'
  }
})