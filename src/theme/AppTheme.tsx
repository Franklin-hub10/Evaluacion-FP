import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    //titulos

    containerTitle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      color: 'white',
      fontSize: 50,
      marginTop: '20%',
      alignContent: 'center',
      justifyContent: 'center'
    },


    //botones de accion
    containerButtons: {
      backgroundColor: 'gray',
      width: '90%',
      height: '60%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginLeft: '5%',
      flexDirection: 'row',
      flexWrap: 'wrap',



    },
    button: {
      width: '45%',
      height: '30%',
      margin: 5,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: '15%',
      alignSelf: 'center',
    },

    buttonText: {
      color: 'orange',
      fontSize: 20

    },


    //imagenenes de fondo
    imagen: {
      alignSelf: 'center',
      width: '100%',
      height: '95%',
      alignItems: 'center',
    },
    temas: {
      color: 'blue',
      fontSize: 30,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },

    //inputs
 

    inputText: {
      height: 50,
      borderColor: '#ffffff',  // Contorno blanco
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 15,  // Espacio entre los inputs
      paddingHorizontal: 10,
      color: '#000000',  // Letra negra
      backgroundColor: '#ffffff',  // Fondo blanco dentro del TextInput
    },


    resultText:{
      color:'white'
    }





  });
