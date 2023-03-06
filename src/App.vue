<script setup>
import { useRouter } from 'vue-router';
import Employees from './views/Employees.vue';
import TimePass from './views/TimePass.vue'
import Todo from './views/Todo.vue'

const router = useRouter()

function stepTo(step) {
  router.go(step)
}
function pushTo(route) {
  router.push(route)
}
</script>

<template>
  <div v-show="false">
    <div>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'Users' }">Users</RouterLink>
    </div>
    <p>
      <button @click="stepTo(-1)">Go back 1 step</button>
      <button @click="stepTo(1)">Go forward 1 step</button>
    </p>
    <RouterView></RouterView>
  </div>
  <div v-show="false">
    <TimePass></TimePass>
  </div>
  <div v-show="false">
    <Todo></Todo>
  </div>
  <div>
    <Employees></Employees>
  </div>
</template>
