import React, { useState } from 'react'
import { Button, StatusBar, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { InputReutilizable } from '../componentesReutilizables/inputReutilizable';



export const Screens4 = () => {

  const [values, setValues] = useState({
    campo1: '',
    campo2: ''
  });
  const [result, setResult] = useState<string | null>(null);

  const handleSetValues = (name: string, value: string) => {
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };


  };
  return (
    <View>
      <StatusBar backgroundColor='black' />

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Validacion</Text>
      </View>
      <View>
        <InputReutilizable
          placeholder="Campo 1: número"
          name="campo1"
          handleSetValues={handleSetValues}
        />
        <InputReutilizable
          placeholder="Campo 2: número"
          name="campo2"
          handleSetValues={handleSetValues}
        />
      </View>
      <View>
        <Button title="Calcular" onPress={compareNumbers} />
        {result && <Text style={styles.resultText}>{result}</Text>}

      </View>

    </View>


  )
}


