import { View, StyleSheet, Image, Text, Button, Linking, } from "react-native";
import { Product } from "../types/Product";

type Props = {
  product: Product;
};

export const ProductItem = (props: Props) => {
  const cesta = () => {
    // URL do site do produto
    const url = props.product.link;
    
    // Abrindo a URL usando o Linking
    Linking.openURL(url).catch(err => {
      console.error("Failed to open URL:", err);
      alert("Não foi possível acessar o link");
    });
  };

  return (
    <View style={styles.container}>
      <Image
        // Chamando imagem remota
        source={{ uri: props.product.image }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
        <Button title="Comprar" onPress={cesta} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
});

