// //

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, FlatList } from 'react-native';
// import { Card, FAB } from 'react-native-paper';

// function BlogList({ navigation }) {
//   const [data, setdata] = useState([]);

//   const fetchData = () => {
//     fetch('http://192.168.0.107:3000/get', {
//       method: 'GET',
//     })
//       .then((resp) => resp.json())
//       .then((blog) => {
//         setdata(blog);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Remove data from the dependency array

//   const clickedItem = (data) => {
//     navigation.navigate('ViewBlog', { data: data });
//   };

//   const renderData = (item) => {
//     return (
//       <Card style={styles.cardStyle}>
//         <Text style={{ fontSize: 23 }} onPress={() => clickedItem(item)}>
//           {item.title}
//         </Text>
//         <Text style={styles.bodyStyle} numberOfLines={3}>{item.body}</Text>
//         <Text style={styles.dateStyle}>Created on {item.date}</Text>
//       </Card>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           return renderData(item);
//         }}
//         keyExtractor={(item) => `${item.id}`}
//       />
//       <FAB
//         style={styles.fab}
//         small={false}
//         icon="plus"
//         theme={{ colors: { accent: 'green' } }}
//         onPress={() => navigation.navigate('CreateBlog')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cardStyle: {
//     margin: 10,
//     padding: 10,
    
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//   },
//   dateStyle: {
//     position: 'relative',
//     top: 5,
//     right: 0,
//     bottom: 0,
//     color: 'white',
//     margin: 5
//   },
//   bodyStyle: {
//     fontSize: 16,
//     color: 'white',
//     marginVertical: 5,
//   },
// });

// export default BlogList;


//same images

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native';
// import { Card, FAB } from 'react-native-paper';
// import Blog1 from "../assets/Blog1.jpg";

// function BlogList({ navigation }) {
//   const [data, setdata] = useState([]);

//   const fetchData = () => {
//     fetch('http://192.168.0.107:3000/get', {
//       method: 'GET',
//     })
//       .then((resp) => resp.json())
//       .then((blog) => {
//         setdata(blog);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetchData();
//     const unsubscribe = navigation.addListener('focus', () => {
//       fetchData(); // Fetch data when the screen comes into focus
//     });
//     return unsubscribe;
//   }, [navigation]); // Use navigation as a dependency

//   const clickedItem = (data) => {
//     navigation.navigate('ViewBlog', { data: data });
//   };

//   const renderData = (item) => {
//     return (
//       <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
//         <ImageBackground
//           source={Blog1}
//           style={styles.backgroundImage}
//         >
//           <View style={styles.overlay}>
//             <Text style={styles.titleText}>{item.title}</Text>
//             <Text style={styles.bodyStyle} numberOfLines={3}>{item.body}</Text>
//         <Text style={styles.dateStyle}>Created on {item.date}</Text>
//           </View>
//         </ImageBackground>
//         {/* <Text style={styles.bodyStyle} numberOfLines={4}>{item.body}</Text>
//         <Text style={styles.dateStyle}>Created on {item.date}</Text> */}
//       </Card>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           return renderData(item);
//         }}
//         keyExtractor={(item) => `${item.id}`}
//       />
      
//       <FAB
//         style={styles.fab}
//         small={false}
//         icon="plus"
//         onPress={() => navigation.navigate('CreateBlog')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cardStyle: {
//     margin: 10,
//     padding: 10,
//     borderRadius: 10,
//     overflow: 'hidden', 
//     backgroundColor:'white'// Clip the overflow
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'green'
//   },
//   dateStyle: {
//     position: 'relative',
//     top: 5,
//     right: 0,
//     bottom: 0,
//     color: 'white',
//     margin: 5
//   },
//   bodyStyle: {
//     fontSize: 16,
//     color: 'white',
//     marginVertical: 5,
//   },
//   backgroundImage: {
//     width: '100%', // Take the entire width of the card
//     height: 200, // Fixed height or adjust accordingly
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
//     justifyContent: 'center',
//     alignItems: 'justify',
//   },
//   titleText: {
//     fontSize: 22,
//     color: 'white',
//   },
// });

// export default BlogList;


//diffrent images

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native';
import { Card, FAB } from 'react-native-paper';

function BlogList({ navigation }) {
  const [data, setdata] = useState([]);

  const fetchRandomImage = () => {
    const imageSources = [
      require('../assets/img1.jpg'),
      require('../assets/img2.jpg'),
      require('../assets/img3.jpg'),
      require('../assets/img4.jpg'),
      require('../assets/img5.png'),
      require('../assets/img6.png'),
      require('../assets/img7.png'),
    ];
  
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomImage = imageSources[randomIndex];
  
    return randomImage;
  };
  
  

  const fetchData = () => {
    fetch('http://192.168.0.100:3000/get', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((blog) => {
        // Add random image source to each blog item
        const blogWithImages = blog.map(item => ({
          ...item,
          image: fetchRandomImage(),
        }));
        setdata(blogWithImages);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData(); // Fetch data when the screen comes into focus
    });
    return unsubscribe;
  }, [navigation]); // Use navigation as a dependency

  const clickedItem = (data) => {
    navigation.navigate('ViewBlog', { data: data });
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
        <ImageBackground
          source={item.image}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyStyle} numberOfLines={3}>{item.body}</Text>
            <Text style={styles.dateStyle}>Created on {item.date}</Text>
          </View>
        </ImageBackground>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => navigation.navigate('CreateBlog')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'green',
  },
  dateStyle: {
    position: 'relative',
    top: 5,
    right: 0,
    bottom: 0,
    color: 'white',
    margin: 10,
  },
  bodyStyle: {
    fontSize: 16,
    color: 'white',
    margin: 10,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'justify',
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight:'bold',
    margin:10,
    textAlign:'auto'
  },
});

export default BlogList;
