import axios from "axios"

export const api = axios.create({
    baseURL:"https://capstone-group2.herokuapp.com"
})