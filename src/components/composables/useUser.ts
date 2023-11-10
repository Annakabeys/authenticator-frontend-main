import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'

export const useUser = defineStore('users', {
  state: () => {
    const users = ref([
      {
        id: '',
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        password: ''
      }
    ])

    onMounted(() => {
      const url = 'http://localhost:9000/'

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok.')
          }
          return res
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log('Error:', error)
        })
    });

    const userForm = reactive({
      firstName: '',
      middleName: '',
      lastName: '',
      username: '',
      password: '',
    })

    const addUser = async () => {
      const url = 'http://localhost:9000/employee-add'

      const data = {
        firstName: userForm.firstName,
        middleName: userForm.middleName,
        lastName: userForm.lastName,
        username: userForm.username,
        password: userForm.password
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if (!response.ok) {
          throw new Error('Failed to add user')
        }
        users.value.push({id: '', firstName: userForm.firstName, middleName: userForm.middleName, lastName: userForm.lastName, username: userForm.username, password: userForm.password});
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const loginForm = reactive({
      username: '',
      password: '',
    })

    const loginUser = async () => {
      const url = 'http://localhost:9000/employee-login';

      const data = {
        username: loginForm.username,
        password: loginForm.password
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('Failed to login user');
        }

        const result = await response.json();

        if (result.username) {
          sessionStorage.setItem('username', result.username);

          window.location.href = '/home';
          console.log('Login successful');
          console.log(sessionStorage.getItem);
        } else {
          throw new Error('Invalid response format');
        }

      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      users,
      userForm,
      addUser,
      loginForm,
      loginUser,
    }
  }
})