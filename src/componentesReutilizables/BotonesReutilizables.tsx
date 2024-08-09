import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';


//interface - props
interface Props {
 textButton: string
 namePag:string
}



export const BotonesReutilizables = ({textButton,namePag}:Props) => {

  //hook usenavigation: permitir navegar de una pantalla a otra  
const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigation.dispatch(CommonActions.navigate({name:namePag}))}
    style={styles.button}>
    <Text style={styles.buttonText}>{textButton}</Text>
</TouchableOpacity>
  )
}

