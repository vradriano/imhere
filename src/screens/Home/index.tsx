import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'

import { Participant } from '../components/Participant'

export default function Home() {
  const participants = ['Vitor', 'Joana', 'Rodrigo', 'Diego', 'Letícia', 'Eduardo', 'João', 'Maria', 'Álvaro', 'Valdir'];

  function handleParticipantAdd() {
    console.log('oi')
  }

  function handleParticipantRemove( name: string ) {
    console.log( `You have clicked on removed button and removed ${name}` )
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
      
      <ScrollView showsVerticalScrollIndicator={false} >
        {
          participants.map(participant => (
            <Participant
            key={participant}
            name={participant} 
            onRemove={() => handleParticipantRemove(participant)} 
            />
          ))
        }
      </ScrollView>
    </View>
  )
}