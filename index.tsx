import React, { JSX } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  FlatList, 
  Image, 
  ScrollView, 
  ListRenderItem 
} from 'react-native';

type CarPart = {
  id: string;
  name: string;
};

export default function CarPartsScreen(): JSX.Element {
  const carParts: CarPart[] = [
    { id: '1', name: 'Transmission' },
    { id: '2', name: 'Radiator' },
    { id: '3', name: 'Alternator' },
    { id: '4', name: 'Fuel Injector' }
  ];

  const renderItem: ListRenderItem<CarPart> = ({ item }) => (
    <Text style={styles.item}>{item.name}</Text>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CAR ENGINE COMPONENTS</Text>
      <Text style={styles.subtitle}>
        Explore key engine components and their basic functions.
      </Text>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/6d/6c/cc/6d6ccc2d10a83c2098f02d58cb73b77f.jpg' }}
        style={styles.image}
      />
      <Text style={styles.caption}>
        Above is an image showing various engine components.
      </Text>

      <View style={styles.listWrapper}>
        <FlatList
          data={carParts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.description}>
          The list above shows essential engine parts using FlatList.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Learn More"
          onPress={() => alert('More info coming soon!')}
          color="#006400"
        />
      </View>
      <Text style={styles.buttonText}>
        Tap the button to see more information.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    flexGrow: 1
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    color: '#ddd',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 10,
    marginBottom: 10
  },
  caption: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20
  },
  listWrapper: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20
  },
  item: {
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    paddingVertical: 8
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#444'
  },
  buttonContainer: {
    width: 150,
    marginBottom: 10
  },
  buttonText: {
    color: '#aaa',
    textAlign: 'center'
  }
});