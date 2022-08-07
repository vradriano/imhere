import { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Participant } from '../components/Participant'

export default function Home() {
  const [participants, setParticipants] = useState(['Vitor'])

  function handleParticipantAdd() {
    if(participants.includes('Vitor')) {
      Alert.alert('Participante Existe', "Já existe um participante com esse nome na nossa lista!")
    }

    setParticipants(prevState => [...prevState, 'Joana'])
  }

  function handleParticipantRemove( name: string ) {
    Alert.alert('Remover', `Você realmente deseja remover o usuário ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        ListEmptyComponent={() => (<Text style={styles.listEmptyText}>Sua lista está vazia!</Text>)}
      />
      
    </View>
  )
}