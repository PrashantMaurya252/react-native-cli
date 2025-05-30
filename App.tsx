// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import {StyleSheet, Text, View} from 'react-native';
import TodoInput from './src/components/TodoInput';
import {useState} from 'react';
import TodoList from './src/components/TodoList';
import {Todo} from './src/types';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/RootNavigator';
import RootNavigation from './src/screens/RootNavigation';
import {ThemeProvider} from './src/context/ThemeContext';
import ReduxRootNavigation from './src/redux-navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   Button,
//   Image,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Basic from './src/components/Basic';
// import TextInputComponent from './src/components/TextInput';
// import ScrollViewComponent from './src/components/ScrollView';
// import StylingDemo from './src/components/Styling';
// import FlexLayout from './src/components/FlexLayout';
// import Touchable from './src/components/Touchable';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   /*
//    * To keep the template simple and small we're adding padding to prevent view
//    * from rendering under the System UI.
//    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
//    * https://github.com/AppAndFlow/react-native-safe-area-context
//    *
//    * You can read more about it here:
//    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
//    */
//   const safePadding = '5%';

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView contentContainerStyle={styles.scrollViewContent} nestedScrollEnabled={true}>
//       <Basic/>
//       <TextInputComponent/>
//       <ScrollViewComponent/>
//       <StylingDemo/>
//       <FlexLayout/>
//       <Touchable/>
//       </ScrollView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   container: {
//     marginBottom: 20,
//   },
//   scrollViewContent: {
//     padding: 20,
//   },
// });

// export default App;

// Todo App -----------------------------------------------------------------------------

// function App(): React.JSX.Element {
//   const [todoList, setTodoList] = useState<Todo[]>([]);

//   const deleteTodo = (id: string) => {
//     console.log(id);
//     setTodoList(todoList.filter(item => item.id !== id));
//   };

//   const toggleTodo = (id: string) => {
//     console.log(id);
//     setTodoList(
//       todoList?.map(item =>
//         item.id === id
//           ? {
//               ...item,
//               completed: !item.completed,
//             }
//           : item,
//       ),
//     );
//   };

//   const editTodo = (id: string, newText: string) => {
//     console.log(id,newText,'from app.tsx');
//     setTodoList(
//       todoList?.map(item=>item.id === id ? {
//         ...item,
//         text:newText,
//       }:item)
//     )
//   };

//   const addTodo = (text: string) => {
//     setTodoList([
//       ...todoList,
//       {
//         id: Date.now().toString(),
//         text,
//         completed: false,
//       },
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Todo App</Text>
//       <TodoInput onAddTodo={addTodo} />

//       <TodoList
//         onDeleteTodo={deleteTodo}
//         onToggleTodo={toggleTodo}
//         onEditTodo={editTodo}
//         todoList={todoList}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// Navigation ---------------------------------------------------------------------------
// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// components,animation, reanimation
// function App(): React.JSX.Element {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <RootNavigation />
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// }

// redux
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ReduxRootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default App;
