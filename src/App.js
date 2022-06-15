import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import foto from '../assets/pedro.jpg'
import Icon, { Github } from 'react-native-vector-icons/Feather'

export default function App() {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/pedro-nascimento-481b171b7/')
        break
      case 'github':
        Alert.alert('https://github.com/pedromarsn1')
        break
      case 'instagram':
        Alert.alert('https://www.instagram.com/pedromarsn/')
        break
    }
  }

  return (

    <View style={styles.page}>
      <View style={styles.container_cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>PEDRO NASCIMENTO</Text>
        <Text style={styles.funcao}>Intern Developer at Sophos7</Text>
        <View style={styles.redes_sociais}>
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
            <Icon size={24} name='github' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('instagram')}>
            <Icon size={24} name='instagram' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
            <Icon size={24} name='linkedin' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.card_title}>Experiência Profissional</Text>
          </View>
          <View style={styles.card_content}>
            <Text>Sophos7 Sistemas de Gestão</Text>
            <Text>RM Express</Text>
          </View>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.card_title}>Formação acadêmica</Text>
          </View>
          <View style={styles.card_content}>
            <Text>Análise e Desenvolvimento de Sistemas (2021-2023) </Text>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',

  },
  foto: {
    marginTop: 50,
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nome: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: 'bold',
  },
  funcao: {
    marginBottom: 10,
    color: '#939393'
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 15
  },
  card: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
    width: '50%'

  },
  card_content: {
    marginTop: 10,
    color: '939393'
  },
  card_header: {

  },
  card_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});
