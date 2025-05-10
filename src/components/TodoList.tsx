import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { Todo } from "../types"
import TodoItem from "./TodoItem"

interface TodoListProps{
    todoList:Todo[],
    onDeleteTodo:(id:string)=>void,
    onToggleTodo:(id:string)=>void
}

const TodoList:React.FC<TodoListProps> = ({todoList,onDeleteTodo,onToggleTodo})=>{
    return (
        <ScrollView style={styles.container}>
            {
                todoList?.map(todo=> <TodoItem key={todo.id} onDelete={()=>onDeleteTodo(todo.id)} todo={todo} onToggle={()=>onToggleTodo(todo.id)}/>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


export default TodoList