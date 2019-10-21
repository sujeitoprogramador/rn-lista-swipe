import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

import ListItem from './src/ListItem';

export default function App() {

  const tarefas = [
    {id: '1', tarefa: 'Comprar Doritos'},
    {id: '2', tarefa: 'Estudar React Native'},
    {id: '3', tarefa: 'Estudar JavaScript'},
    {id: '4', tarefa: 'Se inscrever no canal'},
  ];

  return (
    <View style={styles.container}>

      <FlatList
      data={tarefas}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => (
        <ListItem
        data={item}
        handleLeft={()=> alert('Tarefa concluida com sucesso!')}
        handleRight={ ()=> alert('Tarefa foi excluida!')}
        />
      )}
      ItemSeparatorComponent={ () => <Separator/> }
      />

    </View>
  );
}


const Separator = () => <View style={{flex:1, height:1, backgroundColor: '#DDD'}}></View>

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF'
  }
});