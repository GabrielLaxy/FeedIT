import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Config, Exercicios, Home, Tasks, Camera } from '../screens';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import icons
import { AntDesign } from '@expo/vector-icons';
//<AntDesign name="home" size={24} color="black" />
import { Feather } from '@expo/vector-icons';
//Check 
{/* <Feather name="check-square" size={24} color="black" /> */}
//Camera
//<Feather name="camera" size={24} color="black" />
import { FontAwesome5 } from '@expo/vector-icons';
//<FontAwesome5 name="running" size={24} color="black" />

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:true,
  headerTitleAlign: 'center',
  headerTitle: () => (
    <View>
      <Text style={{ color: '#8AC600', fontSize: 28, fontWeight: 'bold' }}>FeedIt</Text>
    </View>
  ),
  tabBarStyle:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,  
    elevation: 0,
    height: 65,
    background: '#5C4B4B'
  }
}

//color: marrom: #5C4B4B
//verde: "#8AC600"
//<Feather name="settings" size={24} color="black" />

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName= 'Home'>
      <Tab.Screen name='Tasks' component={Tasks} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 45,
                height: 45,
                borderRadius: 10,
                backgroundColor: focused ? '#8AC600' : null,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Feather name="check-square" size={24} color={focused ? '#ffff' : '#5C4B4B'} />
              </View>
            </View>
          )
        }} />
        
        <Tab.Screen name = 'Câmera' 
        component={Camera}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 45,
                height: 45,
                borderRadius: 10,
                backgroundColor: focused ? '#8AC600' : null,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Feather name='camera' size={24} color={focused ? '#ffff' : '#5C4B4B'}background/>
              </View>
            </View>
            )
          }
        }}
        />
        <Tab.Screen name = 'Home' 
        component={Home}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 45,
                height: 45,
                borderRadius: 10,
                backgroundColor: focused ? '#8AC600' : null,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <AntDesign name="home" size={30} color={focused ? '#ffff' : '#5C4B4B'}background />
              </View>
            </View>
            )
          }
        }}
        />
        <Tab.Screen name = 'Exercíco' 
        component={Exercicios}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 45,
                height: 45,
                borderRadius: 10,
                backgroundColor: focused ? '#8AC600' : null,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <FontAwesome5 name="running" size={24} color={focused ? '#ffff' : '#5C4B4B'}background />
              </View>
            </View>
            )
          }
        }}
        />
        <Tab.Screen name = 'Configurações' 
        component={Config}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 45,
                height: 45,
                borderRadius: 10,
                backgroundColor: focused ? '#8AC600' : null,
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <Feather name="settings" size={24} color={focused ? '#ffff' : '#5C4B4B'}background />
              </View>
            </View>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< Updated upstream
const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#8AC600',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Routes;
=======
export default function Navigation(){
  const [fontLoaded] = useFonts({
    Poppins_700Bold,
  });
  
  if (!fontLoaded){
    return null;
  };
  return(
      <NavigationContainer>
          
          {/* {<BackgroundMusic/>} */}
          <StackGroup/>
          {/* <TabGroup/> */}
      </NavigationContainer>
  );
}
>>>>>>> Stashed changes
