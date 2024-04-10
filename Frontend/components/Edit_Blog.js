// import React ,{useState} from 'react'
// import { View,Text,StyleSheet } from 'react-native'
// import { TextInput,Button } from 'react-native-paper';
// function Edit_Blog(props) {

//     const data=props.route.params.data;
//     const [title,settitle]=useState(data.title);
//     const [body,setbody]=useState(data.body);

//     const updateData=()=>{
//         fetch(`http://192.168.0.107:3000/update/${data.id}`, {

//             method:'PUT',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({title:title,body:body})
//         })
//         .then(resp=>resp.json())
//         .then(data=>{
//             props.navigation.navigate('BlogList',{data:data})
//         })
//         .catch(error =>console.log(error))
//     }
    

//   return (
//     <View>
//       <TextInput style={styles.inputStyle}
//         label="Title"
//         value={title}
//         mode="outlined"
//         onChangeText={text=>settitle(text)}
//       />
//        <TextInput style={{margin:10}}
//         label="Description"
//         value={body}
//         mode="outlined"
//         multiline
//         numberOfLines={10}
//         onChangeText={text=>setbody(text)}
//       />
//       <Button style={{margin:10}}

//         icon="update"
//         mode="contained"
//         onPress={updateData}

//       >Update Blog</Button>
//     </View>
//   ) 
// }

// const styles=StyleSheet.create({
//     inputStyle:{       
//         margin:10,
//         marginTop:20
//     }
// })

// export default Edit_Blog


import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Edit_Blog(props) {
  const data = props.route.params.data;
  const [title, settitle] = useState(data.title);
  const [body, setbody] = useState(data.body);
  const [numberOfLines, setNumberOfLines] = useState(1);

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Calculate the number of lines based on contentHeight
    const newNumberOfLines = Math.max(1, Math.ceil(contentHeight / 20)); // Adjust 20 based on your font size and line height
    setNumberOfLines(newNumberOfLines);
  };

  const updateData = () => {
    fetch(`http://192.168.0.100:3000/update/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, body: body })
    })
      .then(resp => resp.json())
      .then(data => {
        props.navigation.navigate('BlogList', { data: data });
      })
      .catch(error => console.log(error));
  }

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.inputStyle}
          label="Title"
          value={title}
          mode="outlined"
          onChangeText={text => settitle(text)}
          theme={{ colors: { primary: 'green' } }} 
        />
        <TextInput
          style={{ margin: 10 }}
          label="Description"
          value={body}
          mode="outlined"
          multiline
          numberOfLines={numberOfLines}
          onChangeText={(text) => setbody(text)}
          onContentSizeChange={(e) =>
            handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
          }
          theme={{ colors: { primary: 'green' } }} 
        />
        <Button
          style={{ margin: 10 ,backgroundColor:'green'}}
          icon="update"
          mode="contained"
          onPress={updateData}
        >Update Blog</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    margin: 10,
    marginTop: 20,
    fontWeight:'bold'
  }
});

export default Edit_Blog;
