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

// Lista de produtos com URLs de redirecionamento
export const list: Product[] = [
    {
        id: 1,
        image: "https://www.sadia.com.br/assets/images/_/products/dca974f6f4be28deeda644c8ddc617e76c52bcf1.webp",
        name: "Mandioca Aipim Macaxeira",
        price: 20.00,
        link: "https://www.sadia.com.br/produtos/mandioca-aipim-macaxeira",
    },
    {
        id: 2,
        image: "https://www.sadia.com.br/assets/images/_/products/d9dd0eec5efa6eae92104939a17ff3ecebfd2f4b.webp",
        name: "Nuggets de Legumes Sadia Veg&Tal",
        price: 13.90,
        link: "https://www.sadia.com.br/produtos/nuggets-de-legumes-sadia-vegtal",
    },
    {
        id: 3,
        image: "https://acdn.mitiendanube.com/stores/001/323/634/products/spavegano_sabliq_barra_geldental_amorahibisco_deslavanda__physalis1-bc2c62a04e86ff488316281934513376-640-0.webp",
        name: "Kit Limpeza",
        price: 11.00,
        link: "https://www.example.com/kit-limpeza",
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/61DBEfRwb4L._AC_SX679_.jpg",
        name: "Sora Carne Moída Vegetal Multigrãos Vegano 200G",
        price: 16.00,
        link: "https://www.example.com/sora-carne-moida",
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/I/71-EXUnxEXL.__AC_SX300_SY300_QL70_ML2_.jpg",
        name: "Konjac Massa MF Macarrão Espaguete Zero Carboidrato",
        price: 18.89,
        link: "",
    },
    {
        id: 6,
        image: "https://m.media-amazon.com/images/I/61ORVUgVf9L._AC_SX679_.jpg",
        name: "Pasta de Castanha",
        price: 25.90,
        link: "https://www.example.com/pasta-de-castanha",
    },
    {
        id: 7,
        image: "https://m.media-amazon.com/images/I/51dPAULaniL.__AC_SX300_SY300_QL70_ML2_.jpg",
        name: "Óleo Vegetal",
        price: 19.00,
        link: "https://www.example.com/oleo-vegetal",
    },
    {
        id: 8,
        image: "https://m.media-amazon.com/images/I/51+kpFa7g0L._AC_SX569_.jpg",
        name: "Proteína Vegana",
        price: 99.00,
        link: "https://www.example.com/proteina-vegana",
    },
    {
        id: 9,
        image: "https://www.saboremgraos.com.br/prateleiras/manteiga-de-coco-200ml-copra-produto-vegano",
        name: "Manteiga de Coco",
        price: 19.00,
        link: "https://www.example.com/manteiga-de-coco",
    },
    {
        id: 10,
        image: "https://m.media-amazon.com/images/I/71jM8qZW6pL.__AC_SX300_SY300_QL70_ML2_.jpg",
        name: "Mãe Terra Granola Tradicional Zero Açúcares 800 g",
        price: 27.90,
        link: "https://www.example.com/granola-mae-terra",
    },
    {
        id: 11,
        image: "https://m.media-amazon.com/images/I/51TFWQo3RFL._AC_SX679_.jpg",
        name: "Salchicha Vegetal",
        price: 28.00,
        link: "https://www.example.com/salchicha-vegetal",
    },
    {
        id: 12,
        image: "https://images.tcdn.com.br/img/img_prod/757549/leite_de_coco_copra_200ml_copra_1250_1_0f3d9198efc6c3b559cab30e708f630a.png",
        name: "Leite de Coco",
        price: 7.20,
        link: "https://www.example.com/leite-de-coco",
    },
    {
        id: 13,
        image: "https://images.tcdn.com.br/img/img_prod/757549/pasta_de_amendoim_com_pedacos_de_amendoim_crocante_integral_1_005kg_select_987_1_63a66b2d85a974645367952b76069abd.jpg",
        name: "Pasta de Amendoim",
        price: 34.00,
        link: "https://www.example.com/pasta-de-amendoim",
    },
    {
        id: 14,
        image: "https://images.tcdn.com.br/img/img_prod/757549/abacaxi_glaceado_pedacos_importado_granel_100g_576_1_20201214002450.jpg",
        name: "Abacaxi Glaceado",
        price: 10.00,
        link: "https://www.example.com/abacaxi-glaceado",
    },
    {
        id: 15,
        image: "https://www.saboremgraos.com.br/chas-ervas/cha-verde-importado-granel-100g",
        name: "Chá Verde",
        price: 5.60,
        link: "https://www.example.com/cha-verde",
    },
    {
        id: 16,
        image: "https://images.tcdn.com.br/img/img_prod/757549/cha_preto_granel_100g_1873_1_4aa54577f5c65fdfc1006180f21f7767.jpg",
        name: "Chá Preto",
        price: 5.90,
        link: "https://www.example.com/cha-preto",
    },
    {
        id: 17,
        image: "https://images.tcdn.com.br/img/img_prod/757549/flocao_de_milho_zero_gluten_2323_1_36e209a4251bceda47bcf005d057ae72.jpg",
        name: "Flocão de Milho",
        price: 1.50,
        link: "https://www.saboremgraos.com.br/farinaceos/flocao-de-milho-zero-gluten",
    },
    {
        id: 18,
        image: "https://images.tcdn.com.br/img/img_prod/757549/aveia_farinha_sem_gluten_200g_vitalin_1897_1_a43451ca332181e3fa58bd8a6b35229d.jpg",
        name: "Farinha de Aveia",
        price: 7.00,
        link: "https://www.example.com/farinha-de-aveia",
    },
    {
        id: 19,
        image: "https://images.tcdn.com.br/img/img_prod/757549/colageno_zmc_trio_tipo1_tipoll_verisol_vital_pro_400g_100_natural_sem_gluten_sabor_neutro_2443_1_dff60919d330a2ee6c59aa5b9d43a073.jpg",
        name: "Colágeno em Pó",
        price: 55.00,
        link: "https://www.example.com/colageno-em-po",
    },
    {
        id: 20,
        image: "https://images.tcdn.com.br/img/img_prod/757549/flocos_de_arroz_sem_gluten_granel_100g_2018_1_20190715120901.jpg",
        name: "Flocos de Arroz",
        price: 6.00,
        link: "https://www.example.com/flocos-de-arroz",
    },
];
