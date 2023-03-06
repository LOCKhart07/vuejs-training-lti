import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'


export const todoStore = defineStore({
    id: 'todos',
    state: () => ({
        todos: useLocalStorage('todos[]', [])
    }),
    actions: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        removeToDo(indexOfElementToRemove) {
            this.todos.splice(indexOfElementToRemove, 1)
        }
    }
})