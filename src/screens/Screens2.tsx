import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'



export const Screens2 = () => {
  return (
    <View>
    <StatusBar backgroundColor='black' />


    <View>
     
 <Image
        source={require('../../assets/Image1.jpg')} 
        style={styles.imagen}
      />

    </View>
    <Text style={styles.temas}>Paisaje </Text>

</View>
  )
}


