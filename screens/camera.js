import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

export default function TirarFoto() {
  const camRef = useRef(null);
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      if (!permission) {
        await requestPermission();
      }
    })();
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Por favor, precisamos de permição de acesso a sua câmera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  async function takePicture() {
    if (camRef.current) {
      const photo = await camRef.current.takePictureAsync({base64: true});
      console.log(photo);
      setCapturedPhoto(photo.uri);
      setOpen(true);
      enviarParaOBack(photo.base64);
    }
  }

  async function enviarParaOBack(imagemBase64) {
    const url = 'http://seu-backend.com/enviar-imagem';
  
    try {
      const response = await axios.post(url, {
        imagem: imagemBase64
      });
      console.log('Imagem enviada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <CameraView style={{ flex: 1 }} facing={facing} ref={camRef}>
        <Text style={styles.text1}>
          Alimente o
        </Text>
        <Text style={styles.text2}>
          Dino
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
      </CameraView>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={50} color="#ff0000" />
            </TouchableOpacity>
            <Image style={styles.capturedImage} source={{ uri: capturedPhoto }} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#121212',
    marginBottom: '20%',
    borderRadius: 40,
    height: 65,
    width:65,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  closeButton: {
    margin: 10,
  },
  capturedImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  text1: {
    fontSize: 34,
    color: 'white',
    fontFamily:'Poppins_700Bold',
    marginLeft:'8%',
    marginTop:'8%',
  },
  text2: {
    fontSize: 34,
    color: 'white',
    fontFamily:'Poppins_700Bold',
    marginLeft:'8%',
  },
});
