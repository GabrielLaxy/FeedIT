import React from 'react';
import {View, Text} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default function TirarFoto(){
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [temPermissao, setTemPermissao] = useState(null); 
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setTemPermissao(status === 'granted');
    })();
  },[]);
  
  if(temPermissao === null){
    return <View/>;
  }
  if(temPermissao === false){
    return <Text>Acesso Negado!</Text>
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Camera 
          style={{ flex: 1 }}
          type={type}
          ref = {camRef}
        >
          <View style ={{flex: 1, backgroundColor:'transparent', flexDirection: 'row'}}>
            <TouchableOpacity 
            style={{position: 'absolute', bottom: 20, left: 20,}}
            onPress = { () => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              );
            }}
            >
              <Text style={{fontSize: 20, marginBottom: 13, color: '#fff'}}>Trocar</Text>
            </TouchableOpacity>
          </View>
        </Camera>

        <TouchableOpacit styles={styles.button} 
        onPress={takePicture}
        >
            <FontAwesome name="camera" size={23} color="#fff"/>
        </TouchableOpacit>
        {capturedPhoto && 
          <Modal 
          animationType="slide" 
          transparant ={false} 
          visible={open}
          > 
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
              <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false)}>
                <FontAwesome name="window-close" size={50} color="#ff0000"/>
              </TouchableOpacity>
            </View>
            <Image 
              style={{width: '100%', height: 300, borderRadius:20}}
              source={{uri: capturedPhoto}}
            />
          </Modal>
        }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  }
});
