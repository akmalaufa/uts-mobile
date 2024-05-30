import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, ImageBackground } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <View style={{width: "100%", height: "100%"}}>
      <ImageBackground source={require('@/assets/images/batik2.jpg')} style={{width: "100%", height: "100%", alignItems:'center'}}>
        <Image source={require('@/assets/images/Fotopribadi.png')} style={{width: 390, height: 390, marginTop:90}}></Image>
        <Text style={{color:'black', fontSize:30}}>Akmal Aufa Alim</Text>
        <Text style={{color:'black', fontSize:30}}>1152200033</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
