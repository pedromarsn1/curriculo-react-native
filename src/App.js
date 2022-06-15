import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import foto from '../assets/pedro.jpg'
import Card from './components/Card/Index';
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
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon size={24} name='github' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon size={24} name='instagram' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon size={24} name='linkedin' />
          </TouchableOpacity>
        </View>
      </View>

      <Card titulo="Formação acadêmica" >

        <Text>Análise e Desenvolvimento de Sistemas (2021-2023) </Text>

      </Card>
      <Card titulo="Esperiências Profissionais">

        <Text>Sophos 7 Sistemas Inteligentes</Text>
        <Text>RM Express</Text>

      </Card>


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

});
