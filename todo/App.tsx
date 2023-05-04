import React, {useState} from 'react';
import { SafeAreaView, Text, View, TextInput, Slider, TouchableOpacity, Alert } from 'react-native';
import { NativeBaseProvider, Divider, Center, Box, VStack, HStack, Checkbox, IconButton, Icon } from 'native-base';
import styles from './styles';
import { Feather, Entypo } from '@expo/vector-icons';

export default function App() {
  const initstate = [{
    title: '緊急程度: 2 | week2 HW',
    isCompleted: false
  }
];
  const [inputValue, setInputValue] = React.useState("");
  const [range, setRange] = useState(0);
  const [list, setlist] = useState(initstate); // todolist
  const Addtodo = title => {
    if(title === ''){
      Alert.alert('請輸入代辦事項');
      return;
    }
    else{
      setlist(prevList => {
        return [...prevList, {
          title: "緊急程度: " + Math.floor(range) + " | " + title,
          isCompleted: false
        }];
      });
    }
  };
  const handleDelete = index => {
    setlist(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };
  const handleStatusChange = index => {
    setlist(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };
  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>My Todo</Text>

      <Text style={styles.text}>{Math.floor(range)}</Text>

      <Slider
        style={{width: 200, height: 50}}
        minimumValue={0}
        maximumValue={2}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#FFFFFF"
        onValueChange={(value)=>setRange(value)}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          onChangeText={v => setInputValue(v)}
          value={inputValue}
          placeholder="輸入代辦"
          placeholderTextColor={"#003f5c"}
        />
      </View>

      <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            Addtodo(inputValue);
            setInputValue("");
          }} />

      <Divider my="6" h="0.5" />

      <Center w="100%">
      <Box maxW="250" w="100%">
          <VStack space={3}>
          {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                 
                <Checkbox 
                  isChecked={item.isCompleted} 
                  onChange={() => handleStatusChange(itemI)} 
                  value={item.title}>
                </Checkbox>

                 <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
               color: item.isCompleted ? "gray.400" : "coolGray.800"
             }} _dark={{
               color: item.isCompleted ? "gray.400" : "coolGray.50"
             }} onPress={() => handleStatusChange(itemI)}>
                   {item.title}
                 </Text>
                 
                 <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
               </HStack>)}
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
    </NativeBaseProvider>
  );
}