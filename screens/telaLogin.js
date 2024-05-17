import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function TelaLogin({ navigation }) {
    // Carga das fontes deve ser feita antes de qualquer renderização condicional
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
    });

    // Definindo o esquema de validação
    const schema = yup.object({
        email: yup.string().email("Email inválido").required("Informe seu e-mail"),
        senha: yup.string().min(7, "Deve conter 6 letras e um número no mínimo").required("Informe sua senha"),
    });

    // Inicializando useForm hook
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // Função para verificação de login
    function verificaLogin(data) {
        navigation.navigate('cadastro');
    }

    // Verificação de fontes carregadas deve ser a última parte antes do retorno JSX
    if (!fontsLoaded) {
        return null; // Pode retornar um spinner ou outro indicador de carregamento
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>FeedIt</Text>
            <Image source={require('../assets/circDino.png')} style={styles.imagem} />

            
            <View style={styles.containerLogin}>
              <Text style={styles.texto}>Email:</Text>
              <Controller
                  control={control}
                  name='email'
                  render={({ field: { onChange, value } }) => (
                      <TextInput style={ [styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} />
                  )}
              />
              <View style={styles.erro}>
               {errors.email && <Text style={styles.erroMensagem}>{errors.email?.message}</Text>}
              </View>
            </View>
           
            <View style={styles.containerLogin}>  
            <Text style={styles.texto}>Senha:</Text>
            <Controller
                control={control}
                name='senha'
                render={({ field: { onChange, value } }) => (
                    <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} secureTextEntry={true} />
                )}
            />
              <View style={styles.erro}>
              {errors.senha && <Text style={styles.erroMensagem}>{errors.senha?.message}</Text>}
              </View>
            </View> 

            <View style={styles.containerLogin}>
              <TouchableOpacity style={styles.btnEntrar} onPress={handleSubmit(verificaLogin)}>
                  <Text style={styles.btnEntrarText}>ENTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate("cadastro")}>
                  <Text style={styles.btnCadastroText}>CADASTRAR</Text>
              </TouchableOpacity>
            </View> 
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF5',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titulo: {
    marginTop: '10%',
    fontSize: 70,
    color: '#8AC600',
    fontFamily:'Poppins_700Bold',
  },
  imagem: {
    marginTop:'-15%',
    height: 300,
    width: 300
  },
  texto: {
    bottom: '-1%',
    marginLeft:'15%',
    alignSelf:'flex-start',
    fontSize:14,
    color: '#5C4B4B',
    fontFamily:'Poppins_700Bold',
  },
  textInput: {
    marginBottom: '10%',
    backgroundColor: '#BCD8B3',
    height: 65,
    width:'80%',
    borderRadius: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  btnEntrar: {
    marginBottom:'-2%',
    borderRadius: 40,
    backgroundColor: '#79AE00',
    width: '70%',
    height: 65,
    justifyContent: 'center',
    elevation:5,
    shadowColor:'#282828',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btnEntrarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily:'Poppins_700Bold',
  },
  btnCadastro: {
    marginBottom: '10%',
  },
  btnCadastroText: {
    color: '#5C4B4B', 
    textAlign: 'center',
    fontSize: 15,
    fontFamily:'Poppins_700Bold',
  },
});
