import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions ,TouchableOpacity} from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Bricolage & Réparations:',
    description: 'montage de meubles, petits travaux, peinture…',
    image: require('../assets/les images/brico.jpg'),
  },
  {
    id: '2',
    title: "Ménage & Entretien:",
    description: 'ménage, repassage, nettoyage de vitres…',
    image: require('../assets/les images/menage.jpg'),
  },
  {
    id: '3',
    title: 'Jardinage:',
    description: 'tonte de pelouse, taille de haies, arrosage…',
    image: require('../assets/les images/jardinage.jpg'),
  },
  {
    id: '4',
    title: 'Déménagement/Transport:',
    description: "port de charges, location d'utilitaire…",
    image: require('../assets/les images/demenagemen.jpg'),
  },
  {
    id: '5',
    title: 'Courses & Livraisons:',
    description: 'courses alimentaires, médicaments, petits colis…',
    image: require('../assets/les images/livaison1.jpg'),
  },
  {
    id: '6',
    title: "Garde d'enfants:",
    description: 'baby-sitting, aide aux devoirs…',
    image: require('../assets/les images/baby.jpg'),
  },
  {
    id: '7',
    title: 'Aide aux personnes âgées:',
    description: 'compagnie, courses, ménage…',
    
  },
  {
    id: '8',
    title: 'Soins aux animaux: ',
    description: "garde d'animaux, promenade de chiens…",
    image: require('../assets/les images/puppy kely.jpg'),
  },
  {
    id: '9',
    title: 'Aide administrative:',
    description: 'remplir des papiers, déclarations en ligne…',
    image: require('../assets/les images/demenage1.jpg'),
  },
  {
    id: '10',
    title: 'Événementiel:',
    description: 'serveur, animateur, décoration, aide logistique…',
    image: require('../assets/les images/demenage2.jpg'),
  },
];

const CardList = () => {
  return (
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{gap : 10, paddingHorizontal : 12}}
            contentContainerStyle={{ gap : 10, paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
            return(
                <TouchableOpacity style={styles.button}>
                    <View style={styles.cardImage}>
                        <Image source={item.image} style={styles.image}/>
                     </View>
                    <View style={styles.description}>
		  	            <Text style={styles.Text}>{item.title}</Text>
		  	            <Text>{item.description}</Text>
		            </View>
                </TouchableOpacity>
            );
            }}
        />  
  );
};
const styles= StyleSheet.create({
  button:{
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column',
    backgroundColor:'white',
    height: 300,
    flex:1,
    borderRadius: 20,
	  gap:10,
	  shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
	  overflow:"hidden"
  },
    cardImage:{
	  display: 'flex',
	  alignItems:'flex-start',
	  width: '100%',
  },
  image: {
    width:'100%',
    height:150,
  },
  Text:{
	  fontWeight:"bold",
    fontSize:17,
  },
  description:{
	  display:'flex',
	  alignItems:'flex-start',
	  marginLeft:10,
	  gap:5,
  }
})
export default CardList;