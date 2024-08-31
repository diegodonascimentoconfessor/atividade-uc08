import React from 'react';
import { View, StyleSheet, Image, Text, Button, Linking, TouchableOpacity } from 'react-native';
import { Product } from '../types/Product';

type Props = {
  product: Product;
};

export const ProductItem = (props: Props) => {
  const openLink = () => {
    const url = props.product.link;

    if (url && url.startsWith('http')) {
      Linking.openURL(url).catch(err => {
        console.error('Failed to open URL:', err);
        alert('Não foi possível acessar o link');
      });
    } else {
      alert('Link inválido');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openLink}>
        <Image
          source={{ uri: props.product.image }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
        <Button title="Comprar" onPress={openLink} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    color: 'red',
    fontSize: 18,
    marginBottom: 10,
  },
});
