import { GET_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUT } from './ActionTypes'

export const setAccount = account => {
    console.log('account set:', account)
    return {
        type: ADD_ACCOUNT,
        payload: account
    }
}

export const getAccount = () => {
    return {
        type: GET_ACCOUNT
    }
}

export default deleteAccount = () => {
    return {
        type: DELETE_ACCOUT
    }
}