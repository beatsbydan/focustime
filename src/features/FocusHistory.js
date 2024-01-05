import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {colors} from '../utils/colors'
import {fontSizes, spacing} from '../utils/sizes'

export const FocusHistory = ({history}) => {
  if(history.length === 0) return <Text style={styles.title}>We have not focused on anything yet.</Text>

  const renderedItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList
        data={history}
        renderItem={renderedItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex:1
  },
  item:{
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold'
  }
})