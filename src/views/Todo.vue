<template>
    <h1>TODOTODOTODO</h1>
    <form @submit.prevent="todos.addTodo(newTodo)">
        <label for="todoNewText">New Todo Item: </label>
        <input v-model="newTodo">
        <button>Add todo</button>
    </form>
    <div v-for="todo in todos.todos" :key="id">
        {{ todo }}<button @click="todos.removeToDo(id)">Nikal</button>
    </div>
</template>



<script setup>

import { todoStore } from '../stores/todos'
import { ref, onMounted } from 'vue'
const todos = todoStore()
let id = 0
const newTodo = ref()

onMounted(() => console.log("Todo present maam"))

</script>