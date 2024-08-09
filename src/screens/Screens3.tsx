import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { BotonesReutilizables } from '../componentesReutilizables/BotonesReutilizables';
import { styles } from '../theme/AppTheme';


export const Screens3 = () => {
  return (
    <View>
    <StatusBar backgroundColor='black' />
    <View>
    <Image
        source={require('../../assets/Image2.jpg')} 
        style={styles.imagen}
      />
 <Text style={styles.temas}>Paisaje </Text>
    </View>
</View>
  )
}


