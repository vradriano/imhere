import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

export default function Home() {
  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.eventName}>
        Vitor Ricardo Adriano
      </Text>

      <Text style={styles.eventDate}>
        React Native
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        keyboardType="numeric" // Sempre que o usuário clicar no input, o teclado que irá aparecer é o numerico.
      />
    </View>
  )
}