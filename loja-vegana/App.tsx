import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { list } from './data';
import { ProductItem } from './componets/produtc-Item';
import { Product } from './types/Product';
import { useState } from 'react';

export default function App() {
  const [areaShow, setAreaShow] = useState(false);
  const [precoShow, setPrecoShow] = useState(false);

  const mostrar = () => {
    setAreaShow(!areaShow);
  };

  const mostrarPrecos = () => {
    setPrecoShow(!precoShow);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TouchableOpacity style={styles.botao} onPress={mostrar}>
        <Text style={styles.botaoTexto}>Apareça / desapareça</Text>
      </TouchableOpacity>
      {areaShow && (
        <View style={styles.area}>
          <Text style={styles.areaTXT}>Área Secreta</Text>
        </View>
      )}

      <Image 
        source={require('./assets/lojav.jpg')}
        resizeMode='cover'
        style={styles.loja}
      />

      <View style={styles.area}>
        <Text style={styles.h1}>Produtos</Text>
        <TouchableOpacity style={styles.botao} onPress={mostrarPrecos}>
          <Text style={styles.botaoTexto}>Mostrar/Esconder Preços</Text>
        </TouchableOpacity>
        <FlatList
          data={list}
          renderItem={({ item }: { item: Product }) => (
            <ProductItem product={item} mostrarPreco={precoShow} />
          )}
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
  areaTXT: {
    // Estilos para a área secreta
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
