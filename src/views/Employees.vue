
<script setup>
import axios from 'axios'
import { ref, reactive, onMounted } from 'vue'
const layout = ref("list")
const employees = ref({})
// const newFirstName = ref()
// const newLastName = ref()
// const newEmail = ref()
const newUser = reactive({ firstName: "temp", lastName: "templ", email: "tempe" })

onMounted(() => {
    console.log("Employees present maam")
    getEmployees()
})


function getEmployees() {
    axios.get('http://localhost:8080/api/employees')
        .then(response => {
            employees.value = response.data;
        })
        .catch(error => {
            console.error(error)
        })
}

const razeImgUrl = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLfyZnoEtSYmnFJaLVr_H70uL2sv7u0yAMA&usqp=CAU")

function createEmployee() {
    axios.post('http://localhost:8080/api/create-employee', newUser)
        .then(response => {
            getEmployees()
        })
        .catch(error => {
            console.error(error)
        })
    console.log("sent broo")
}


</script>
<template>
    <h1>EMPLOYEES</h1>
    <div>
        <h2>Add employee</h2>

        <label>First name: </label>
        <input v-model="newUser.firstName"><br>
        <label>Last name: </label>
        <input v-model="newUser.lastName"><br>
        <label>Email: </label>
        <input v-model="newUser.email"><br>
        <button @click="createEmployee">Add Employees</button>

    </div>
    <!-- <div v-for="employee in employees">{{ employee.id }}. {{ employee.firstName }} {{ employee.lastName }}, Email: {{ employee.email }}</div> -->
    <div class="bar">
        <!-- These two buttons switch the layout variable, which causes the correct UL to be shown. -->
        <h2>Dhyan se dekhiye inn chehre ko</h2>
        <div class="buttons">
            <a class="list-icon" v-bind:class="{ 'active': layout == 'list' }" v-on:click="layout = 'list'"></a>
            <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid' }" v-on:click="layout = 'grid'"></a>
        </div>
    </div>

    <ul v-if="layout == 'grid'" class="grid">
        <!-- A view with big photos and no text -->
        <li v-for="employee in employees">
            <RouterLink :to="{
                name: 'EmployeeSingle',
                params: {
                    id: employee.id
                }
            }"><img v-bind:src="razeImgUrl" /></RouterLink>
            <!-- <a v-bind:href="employee.avatar" target="_blank"></a> -->
        </li>
    </ul>

    <ul v-if="layout == 'list'" class="list">
        <!-- A compact view smaller photos and titles -->
        <li v-for="employee in employees">
            <RouterLink :to="{
                name: 'EmployeeSingle',
                params: {
                    id: employee.id
                }
            }">
                <img v-bind:src="razeImgUrl" />
                <p>{{ employee.firstName }} {{ employee.lastName }}</p>
                <p>{{ employee.email }}</p>
            </RouterLink>
        </li>
    </ul>
</template>





<style>
.bar {
    background-color: #5c9bb7;

    background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: linear-gradient(top, #5c9bb7, #5392ad);

    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    width: 580px;
    padding: 10px;
    margin: 45px auto 25px;
    position: relative;
    text-align: right;
    line-height: 0.1;

    display: flex;
}

.buttons {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.bar h2 {
    /* display: inline-block; */
    text-align: left;
}


.bar a {
    background: #4987a1 center center no-repeat;
    width: 32px;
    height: 32px;
    display: inline-block;
    text-decoration: none !important;
    margin-right: 5px;
    border-radius: 2px;
    cursor: pointer;
}

.bar a.active {
    background-color: #c14694;
}

.bar a.list-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=);
}

.bar a.grid-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==);
}

.bar input {
    background: #fff no-repeat 13px 13px;

    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
}


/* Actual lists */
ul.list {
    list-style: none;
    width: 500px;
    margin: 0 auto;
    text-align: left;
}

ul.list li {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
}

ul.list li img {
    width: 120px;
    height: 120px;
    float: left;
    border: none;
}

ul.list li p {
    margin-left: 135px;
    font-weight: bold;
    color: #6e7a7f;
}

/*-------------------------
	Grid layout
--------------------------*/

ul.grid {
    list-style: none;
    width: 570px;
    margin: 0 auto;
    text-align: left;
}

ul.grid li {
    padding: 2px;
    float: left;
}

ul.grid li img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    display: block;
    border: none;
}
</style>
