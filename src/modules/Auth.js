import axios from 'axios';

const apiUrl = "https://ca-cooper-api-2019.herokuapp.com/api/v1"

const authenticate = async (email, password) => {
  const path = `${apiUrl}/auth/sign_in`

  try {
    let response = await axios.post(path, { email: email, password: password })
    sessionStorage.setItem(
      "current_user",
      JSON.stringify({ id: response.data.data.id, email: response.headers["uid"] })
    )
    sessionStorage.setItem(
      "credentials",
      JSON.stringify({
        uid: response.headers["uid"],
        client: response.headers["client"],
        accessToken: response.headers["access-token"],
        expiry: response.headers["expiry"]
      })
    )
    return { authenticated: true }
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] }
  }


}

export { authenticate }