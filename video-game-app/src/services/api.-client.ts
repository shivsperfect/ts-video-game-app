import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b1818281ee314e06bcb859e8c87e494b'
    }
})


