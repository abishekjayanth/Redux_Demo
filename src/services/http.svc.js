import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export const get = (endpoint) =>  instance.get(endpoint).then(resp => resp.data)
export const post = (endpoint, body) =>  instance.post(endpoint, body)