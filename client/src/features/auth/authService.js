import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3001"})

const logIn = async (formData) => {
    const response = await axios.post(API+"/auth/login", formData)

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.body))
    }

    return response.data
}

const logOut = () => {
    localStorage.removeItem("user")
}

const authService = {
    logIn,
    logOut
}

export default authService