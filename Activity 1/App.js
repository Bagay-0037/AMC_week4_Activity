import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wash my face',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'toothbrush',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take my daily does of caffeine',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Eat some breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Washing Plates',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Scrolling in Social Media',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Taking a look for my notes',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Searching some advance lessons',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Take some break and Watch a movie',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cooking for Lunch',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Buying Necassary ingredients',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching some documentaries in youtube',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Waiting for the food, then later on serve it',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Taking my Lunch',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Washing Plates again',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Searching some advance lessons',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Take some break and Watch a movie',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Taking a bath',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Buying some snacks',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Searching possible movies to watch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching Movie or series',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: "After watching movies, I'll take a nap",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Then waking up to cook for Dinner',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eat my Dinner',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Wash the plates',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d72',
    title: 'Go to sleep',
  },

  

];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;