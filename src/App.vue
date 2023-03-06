<script setup>
import { useRouter } from 'vue-router';
import Employees from './views/Employees.vue';
import TimePass from './views/TimePass.vue'
import Todo from './views/Todo.vue'
import { useDark, useToggle } from "@vueuse/core"
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const router = useRouter()

function stepTo(step) {
  router.go(step)
}
function pushTo(route) {
  router.push(route)
}

const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});

const toggleDark = useToggle(isDark);

</script>

<template>
  <div v-show="true">
    <div>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'Users' }">Users</RouterLink> |
      <RouterLink :to="{ name: 'Employees' }">Employees</RouterLink>
      <div>
        <button v-if="isDark" @click="toggleDark()">Light Mode</button>
        <button v-if="!isDark" @click="toggleDark()">Dark Mode</button>
      </div>
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
</template>

<style>
[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}

[theme="custom-light"] {
  background: #fff;
  color: #16171d;
}
</style>
