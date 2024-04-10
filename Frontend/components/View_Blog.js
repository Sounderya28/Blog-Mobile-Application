import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
function View_Blog(props) {
  const data = props.route.params.data;

  const deleteData=(data)=>{
    fetch(`http://192.168.0.100:3000/delete/${data.id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
    },
    })
    .then(data=>{
      props.navigation.navigate('BlogList')
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={{ fontSize: 25 ,fontWeight:'bold'}}>{data.title}</Text>
        <Text style={{ fontSize: 20, marginTop: 20 }}>{data.body}</Text>
        <Text style={{ fontSize: 15, marginTop: 25 ,color:'gray'}}>Created on {data.date}</Text>
        <View style={styles.btnStyle}>
          <Button style={{backgroundColor:'green'}}
            icon="update"
            mode="contained"
            onPress={()=>props.navigation.navigate('EditBlog',{data:data})}
          >
            Edit Blog
          </Button>
          <Button style={{backgroundColor:'green'}}
            icon="delete"
            mode="contained"
            onPress={()=>deleteData(data)}
          >
            Delete Blog
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    margin: 10,
  },
  btnStyle:{
    flexDirection:"row",
    justifyContent:"space-around",
    margin:15,
    padding:10
  }
});

export default View_Blog;
