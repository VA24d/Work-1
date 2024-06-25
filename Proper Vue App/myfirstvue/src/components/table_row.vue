<script setup>
import { ref } from 'vue'
</script>

<template>
    <tr v-for="user in data" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.dob }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.company }}</td>
        <td>{{ user.pin_code }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td>
            <button @click="edit_user(user.id)" title="Click to Edit"><img src="./icons/tool.svg" alt="Edit"></button>
        </td>
        <td>
            <button @click="delete_user_confirm(user.id)" title="Click to Delete"><img src="./icons/trash-2.svg"
                    alt="Delete"></button>
            <fieldset :id="'popup' + user.id" class="popup">
                Are you sure you want to delete this user?
                <button @click="delete_user(user.id)">Yes</button>
                <button @click="clear_popup(user.id)">No</button>
            </fieldset>
        </td>
    </tr>
</template>

<style scoped>
</style>