
export const signUpRequest = (name,email, password) => ({
    type: 'SIGNUP_REQUEST',
    payload: {
        name, email, password
    }
})
export const signUpSuccess = (authToken) => ({
    type: "SIGNUP_SUCCESS",
    payload: {
        authToken
    }
})

export const signUpError = (error) => ({
    type: "SIGNUP_ERROR",
    payload: {
        error
    }
})