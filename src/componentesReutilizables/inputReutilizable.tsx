import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../theme/AppTheme';


//interface - props
interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;   //prop función
    name: string;

}


export const InputReutilizable = ({ placeholder, handleSetValues, 
    name }: Props) => {
  return (
   <View>
       <TextInput
        placeholder={placeholder}
        keyboardType='numeric'
        onChangeText={(value) => handleSetValues(name, value)}
        style={styles.inputText}
      />
   </View>
  )
}


