import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export const useUser = defineStore('users', {
  state: () => {
    const router = useRouter()
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
      const url = 'http://localhost:9000/user-add'

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
        router.push('/')
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const loginForm = reactive({
      username: '',
      password: '',
    })

    const loginUser = async () => {
      const url = 'http://localhost:9000/user-login';

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
          body: JSON.stringify(data),
          credentials: 'include'
        });

        if (response.status !== 200) {
          throw new Error('Failed to login user');
        } else {
          console.log(response.status)
          router.push('/home');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const logoutUser = async () => {
      const url = 'http://localhost:9000/user-logout';
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include'
      })

      if (response.status === 200) {
        router.push('/')
      } else {
        throw new Error('Failed to logout user')
      }
    };

    const directChats = ref([
      {
        id: '',
        sender: '',
        receiver: '',
      }
    ])

    const directChatForm = reactive({
      receiver: '',
    })

    const addDirectChat = async () => {
      const url = 'http://localhost:9000/direct-chat-add';

      const sender = sessionStorage.getItem('username');

      const data = {
        sender,
        receiver: directChatForm.receiver,
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        })

        if (!response.ok) {
          throw new Error('Failed to add direct chat')
        }
        directChats.value.push({id: '', sender: sender, receiver: directChatForm.receiver});
        console.log(data)
        router.push('/home')
      } catch (error) {
        console.error('Error:', error)
      }
    }

    return {
      users,
      userForm,
      addUser,
      loginForm,
      loginUser,
      logoutUser,
      directChats,
      directChatForm,
      addDirectChat
    }
  }
})