//Bagay,Japheth Mateo D.//

import React, {useState} from 'react';
import {
  CheckBox,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'; //1.First I import the Checkbox so that I can use it
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
type ItemData = {
  id: string;
  title: string;
};
const DATA = [
  {
    id: '1', 
    title: 'Wash my face',
  },
  {
    id: '2',
    title: 'toothbrush',
  },
  
  {
    id: '3',
    title: 'take my daily does of caffeine',
  },
  {
    id: '4',
    title: 'Eat some breakfast',
  },
  {
    id: '5',
    title: 'Washing Plates',
  },
  {
    id: '6',
    title: 'Scrolling in Social Media',
  },
  {
    id: '7',
    title: 'Taking a look for my notes',
  },
  
  {
    id: '8',
    title: 'Searching some advance lessons',
  },
  {
    id: '9',
    title: 'Take some break and Watch a movie',
  },
  {
    id: '10',
    title: 'Cooking for Lunch',
  },
  {
    id: '11',
    title: 'Buying Necassary ingredients',
  },
  
  {
    id: '12',
    title: 'Watching some documentaries in youtube',
  },
  {
    id: '13',
    title: 'Waiting for the food, then later on serve it',
  },
  {
    id: '14',
    title: 'Taking my Lunch',
  },
  {
    id: '15',
    title: 'Washing Plates again',
  },
  
  {
    id: '16',
    title: 'Searching some advance lessons',
  },
  {
    id: '17',
    title: 'Take some break and Watch a movie',
  },
  {
    id: '18',
    title: 'Taking a bath',
  },
  
  {
    id: '19',
    title: 'Buying some snacks',
  },
  {
    id: '20',
    title: 'Searching possible movies to watch',
  },
  {
    id: '21',
    title: 'Watching Movie or series',
  },
  {
    id: '22',
    title: "After watching movies, I'll take a nap",
  },
  {
    id: '23',
    title: 'Then waking up to cook for Dinner',
  },
  
  {
    id: '24',
    title: 'Eat my Dinner',
  },
  {
    id: '25',
    title: 'Wash the plates',
  },
  {
    id: '26',
    title: 'Go to sleep',
  },
];//6. I change the id cause I encounter a problem when checking the checkbox, when I check the 1st item,it also checked the 5th one, so I'm sure I have id's with same value
//7. Lastly, the Reason why I couldn't include the checkbox within the line of the Item is because of the first TouchableOpacity, when i clicking it, it will only change the color and i couldn't check the checkbox. So, I decided to create a new TouchableOpacity so that I can keep both features.
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const colors = ['#f9c2ff', '#a0d5ff', '#c0ffb7','#ffc0cb','#ffe4e1'];
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>
      {item.title}
      
    </Text>
  </TouchableOpacity>
  //2. I tried to use Checkbox here but it didn't work out because I need to use useState that can only be use inside the App//
);
const App = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const doneCount = Object.values(checkedItems).filter(Boolean).length;
   const notDoneCount = DATA.length - doneCount;//5. both of line 147 and 148 is the computation on how to get the current value of Checked Items
  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item,index}) => {
    const backgroundColor = item.id === selectedId ? 'black' : colors[index % colors.length];
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <TouchableOpacity>
        <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        />
        <CheckBox
          value={checkedItems[item.id] || false}
          onValueChange={() => handleCheck(item.id)}
        /> 
      </TouchableOpacity>
      //3.then I relocate the Checkbox,along with const and logic here, I add another TouchableOpacity in here cause I got an erron when just using <item> and <checkbox>. Note: I use an AI to know the logic when getting the total number of Checked Items
      
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.statusText}>      DONE: {doneCount}                           NOT DONE: {notDoneCount}</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );//4. I add the Text that have DONE and NOT DONE and place it at the upper part of the application. Note {doneCount} and {notDoneCount are just a variable that can display the current value of it}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  statusText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default App;