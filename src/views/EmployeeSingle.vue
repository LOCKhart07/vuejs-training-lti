<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({ id: String })

const employee = ref({})
onMounted(() => {
    console.log("Single employee present maam")
    axios.get(`http://localhost:8080/api/employees/${props.id}`)
        .then(response => {
            employee.value = response.data;
        })
        .catch(error => {
            console.error(error)
        })
})

</script>


<template>
    <div>
        <div>
            {{ employee.id }}. {{ employee.firstName }}{{ employee.lastName }}
        </div>
        <div>
            {{ employee.email }}
        </div>
    </div>
</template>