import { StyleSheet, Text, View } from 'react-native';
import Blog_list from './components/Blog_list';
import Create_Blog from './components/Create_Blog';
import View_Blog from './components/View_Blog';
import Edit_Blog from './components/Edit_Blog';
import Contants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="BlogList">
      <Stack.Screen name="BlogList" component={Blog_list} />
      <Stack.Screen name="CreateBlog" component={Create_Blog} />
      <Stack.Screen name="ViewBlog" component={View_Blog} />
      <Stack.Screen name="EditBlog" component={Edit_Blog} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Contants.statusBarHeight,
  },
});

