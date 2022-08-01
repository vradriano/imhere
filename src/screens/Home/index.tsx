import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    console.log('oi')
  }

  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        React Native
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="numeric" 
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}