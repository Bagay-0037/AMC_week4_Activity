import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wash my face',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'toothbrush',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take my daily does of caffeine',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d73',
    title: 'Eat some breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Washing Plates',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Scrolling in Social Media',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
    title: 'Taking a look for my notes',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Searching some advance lessons',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d76',
    title: 'Take some break and Watch a movie',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bu',
    title: 'Cooking for Lunch',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
    title: 'Buying Necassary ingredients',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Watching some documentaries in youtube',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29d60',
    title: 'Waiting for the food, then later on serve it',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2859',
    title: 'Taking my Lunch',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f40',
    title: 'Washing Plates again',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29tub',
    title: 'Searching some advance lessons',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29dcv',
    title: 'Take some break and Watch a movie',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fht',
    title: 'Taking a bath',
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29ght',
    title: 'Buying some snacks',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e29djk',
    title: 'Searching possible movies to watch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e28tu',
    title: 'Watching Movie or series',
  },
  {
    id: '58694a0f-3d2o-471f-bd96-145571e2fkr',
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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
const colors = ['#f9c2ff', '#a0d5ff', '#c0ffb7','#ffc0cb','#ffe4e1'];
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item,index}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : colors[index % colors.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;