
export const loginRequest = (email, password) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        email, password
    }
})
export const loginSuccess = (authToken) => ({
    type: "LOGIN_SUCCESS",
    payload: {
        authToken
    }
})

export const loginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: {
        error
    }
})


