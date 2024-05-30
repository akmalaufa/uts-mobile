import { Image, StyleSheet, Platform, View, Text, Button, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'#808836', width:'100%', height:'100%'}}>
      <View style={{backgroundColor:'black', width:'100%', height: 100, flexDirection:'row'}}>
          <View>
            <Image source={require('@/assets/images/Fotopribadi.png')} style={{width: 80, height: 80, marginTop:7}}></Image>
          </View>
          <View>
            <Text style={{color:'white', fontWeight:'bold', marginTop:50}}>Akmal Aufa Alim</Text>
            <Text style={{color:'white', fontWeight:'bold'}}>1152200033</Text>
          </View>
      </View>
      <View>
          <View style={{marginTop:20}}>
            <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold'}}>Welcome</Text>
            <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold'}}>To</Text>
            <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>MBMC</Text>
          </View>
          <View>
            <Link href={{pathname: '/details/workout'}} style={{margin: "auto", marginTop:25}}>
              <View style={{width:120, height:120, backgroundColor:'white', borderRadius:10, marginTop:20, overflow:'hidden'}}>
                <Image source={require('@/assets/images/Weightgain.png')} style={{width:'100%', height:'100%'}}></Image>
              </View>
            </Link>
            <Link href={{pathname: '/details/workout'}} style={{textAlign:'center', marginTop:5, fontWeight:'bold'}}>Menurunkan Berat Badan</Link>
          </View>
          <View>
            <Link href={{pathname: '/details/bodybuilding'}} style={{margin: "auto", marginTop:25}}>
                <View style={{width:120, height:120, backgroundColor:'white', borderRadius:10, margin:'auto', marginTop:30, overflow:'hidden'}}>
                  <Image source={require('@/assets/images/otot.png')} style={{width:'100%', height:'100%'}}></Image>
                </View>
            </Link>
            <Link href={{pathname: '/details/bodybuilding'}} style={{textAlign:'center', marginTop:5, fontWeight:'bold'}}>Membentuk Otot</Link>
          </View>
          <View>
            <Link href={{pathname: '/details/fitness'}} style={{margin: "auto", marginTop:25}}>
              <View style={{width:120, height:120, backgroundColor:'white', borderRadius:10, margin:'auto', marginTop:30, overflow:'hidden'}}>
                <Image source={require('@/assets/images/fitness.jpg')} style={{width:'100%', height:'100%'}}></Image>
              </View>
            </Link>
            <Link href={{pathname: '/details/fitness'}} style={{textAlign:'center', marginTop:5, fontWeight:'bold'}}>Menjaga Kebugaran Tubuh</Link>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
