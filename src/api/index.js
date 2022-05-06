import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 3000
})


export { Axios }