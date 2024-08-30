import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, FlatList,Button } from 'react-native';
import { list } from './data';
import { ProductItem } from './componets/produtc-Item';
import { Product } from './types/Product';
import { useState } from 'react';





export default function App() {
  const [areaShow, setAreaShow] = useState(false);

  const mostrar = () => {
   setAreaShow(!areaShow)
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Button title='Apareça / desapareça' onPress={mostrar}/>
      {areaShow === true && <View style={styles.area}>
        <Text style={styles.areaTXT}>Area Secreta</Text>
      </View> }


      <Image 
        source={require('./assets/lojav.jpg')}
        resizeMode='cover'
        style={styles.loja}
      />
      <View style={styles.area}>
        <Text style={styles.h1}>Produtos</Text>
        <FlatList
          data={list}
          renderItem={({ item }: { item: Product }) => (<ProductItem product={item} />)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loja: {
    width: '100%',
    height: 120,
  },
  area: {
    padding: 10,
    flex: 1,
  },
  h1: {
    fontSize: 14,
    marginBottom: 10,
  },

  areaTXT:{
    
  }
});
