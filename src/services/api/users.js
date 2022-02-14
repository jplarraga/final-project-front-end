import axios from "axios";

//const url = `${process.env.REACT_APP_URL_API}/users`
const url = `https://back-end-bank-app.herokuapp.com/api/v1/users`

export const addUser = async (user) => {

    try {
      const response = await axios.post(`${url}`, user)

      return response.data
    } catch (error) {
      return error
    }
  }