<script setup>
import { userCounterStore } from '../stores/counter'

const counter = userCounterStore()

</script>
<template>
    <h2>
        hi
    </h2>
    <p>{{ counter.count }}</p>
    <button @click="counter.incrementCount">Increment</button>
    <button @click="counter.decrementCount">Decrement</button>
    <p>even he kya: {{ counter.oddOrEven }}</p>
    <input type="text" v-model="counter.count" >
</template>