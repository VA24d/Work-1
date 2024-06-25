<script setup>
import { ref } from 'vue';

const data = ref({
  id: '',
  last_name: '',
  first_name: '',
  dob: '',
  gender: '',
  company: '',
  pin_code: '',
  phone: '',
  email: ''
});

const upload_user = () => {
  if (!verify_data()) {
    console.log('User data not submitted:', data.value);
    return;
  }
  console.log('User data submitted:', data.value);
  clearInterval();
  // You can handle the submission logic here, such as sending data to an API
};

clear_fields = () => {
  data.value.id = '';
  data.value.last_name = '';
  data.value.first_name = '';
  data.value.dob = '';
  data.value.gender = '';
  data.value.company = '';
  data.value.pin_code = '';
  data.value.phone = '';
  data.value.email = '';
};

verify_data = () => {
  let error = document.getElementById('error');
  if (data.value.id === '' || data.value.last_name === '' || data.value.first_name === '' || data.value.dob === '' || data.value.gender === '' || data.value.company === '' || data.value.pin_code === '' || data.value.phone === '' || data.value.email === '') {
    error.innerHTML = 'Please fill in all fields';
    return false;
  } else {
    error.innerHTML = '';
    return true;
  }
};




</script>

<template>
  <form @submit.prevent="upload_user">
    <h2>Basic Details:</h2>
    
    <br>

    <label for="id">ID:</label>
    <input type="text" id="id" name="id" v-model="data.id" required><br>

    <label for="last_name">Last Name:</label>
    <input type="text" id="last_name" name="last_name" v-model="data.last_name" required><br>

    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" name="first_name" v-model="data.first_name" required><br>

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" v-model="data.dob" min="1900-01-01" max="2024-09-13" required><br>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" class="modern-dropdown" v-model="data.gender" required>
      <option value="" disabled>Select gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br>

    <label for="company">Company/Name:</label>
    <input type="text" id="company" name="company" v-model="data.company" required><br>

    <label for="pin_code">Pin code:</label>
    <input type="text" id="pin_code" name="pin_code" v-model="data.pin_code" required><br>

    <label for="phone">Phone: </label>
    <input type="tel" id="phone" name="phone" v-model="data.phone" required><br>

    <label for="email">Email: </label>
    <input maxlength="40" type="email" id="email" name="email" v-model="data.email" required><br>

    <input style="width: 17vw" type="submit" value="Submit">
    <p id="error"></p>
  </form>
</template>

<style scoped>
:root {
  --background-color: #f1f1f1;
  --text-color: #000000;
  --border-color: blue;
  --input-background-color: #797979;
  --input-hover-color: #e0e0e0;
  --input-active-color: #f1f1f1;
  --submit-background-color: rgb(0, 191, 255);
  --submit-hover-color: blue;
}

/* @media (prefers-color-scheme: dark) {
  :root {
    --background-color: #333333;
    --text-color: #ffffff;
    --border-color: #888888;
    --input-background-color: #444444;
    --input-hover-color: #555555;
    --input-active-color: #666666;
    --submit-background-color: #1e90ff;
    --submit-hover-color: #0056b3;
  }
} */

form {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--background-color);
  color: var(--text-color);
}

label {
  font-weight: bold;
  margin-left: 5px;
}

input[type="text"],
input[type="date"],
input[type="tel"],
input[type="email"] {
  width: 20vw;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: var(--input-background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

input[type="text"]:hover,
input[type="date"]:hover,
input[type="tel"]:hover,
input[type="email"]:hover {
  background-color: var(--input-hover-color);
}

input[type="text"]:active,
input[type="date"]:active,
input[type="tel"]:active,
input[type="email"]:active {
  background-color: var(--input-active-color);
  border: 2px solid var(--border-color);
}

input[type="submit"] {
  width: 20vw;
  padding: 5px;
  margin: 0px;
  border-radius: 5px;
  background-color: var(--submit-background-color);
  color: white;
  border: none;
  align-self: center;
}

input[type="submit"]:hover {
  background-color: var(--submit-hover-color);
}

input[type="submit"]:active {
  background-color: var(--submit-hover-color);
  border: 2px solid var(--border-color);
}

select {
  width: 20vw;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: var(--input-background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

select:hover {
  background-color: var(--input-hover-color);
}
</style>
