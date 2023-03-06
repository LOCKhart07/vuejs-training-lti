<script setup>
import { reactive } from 'vue'


const users = reactive([
    { id: 1, name: 'Ulala' },
    { id: 2, name: 'goooo' },
    { id: 3, name: 'toooo' },
    { id: 4, name: 'nooo' },
    { id: 5, name: 'broo' },
])
</script>

<template>
    <h2>users page</h2>
    <p v-for="user in users" :key="user.id">
        <RouterLink :to="{
            name: 'UserSingle',
            params: {
                id: user.id
            }
        }">
            ({{ user.id }}) {{ user.name }}
        </RouterLink>
    </p>
</template>