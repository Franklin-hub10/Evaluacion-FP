import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { BotonesReutilizables } from '../componentesReutilizables/BotonesReutilizables';
import { styles } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';


const Screens1 = () => {


//hook usenavigation: permitir navegar de una pantalla a otra  
const navigation = useNavigation();


  return (
    <View >
    <StatusBar backgroundColor='black' />
    <View style={styles.containerTitle}>
     <Text style={styles.titleText}>Bienvenido</Text>
    </View>
    <View style= {styles.containerButtons} >
      <BotonesReutilizables textButton='Ver imagen 1'
      namePag ='Imagen1' />
      <BotonesReutilizables textButton='Ver imagen 2' 
        namePag ='Imagen2'/>
      <BotonesReutilizables textButton='>='
        namePag ='Calculo1'/>
      <BotonesReutilizables textButton='<=' 
        namePag ='Calculo2'/>

    </View>

</View>
  )
}

export default Screens1
