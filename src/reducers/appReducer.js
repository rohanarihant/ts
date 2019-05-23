import * as types from '../Utils/constants'
const initialState = {
    customerList:[],
    customerName: 'Rohan'
};


export default (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_NEW_CUSTOMER:
        return {
            ...state,
            customerList: action.customerList
        }
        case types.UPDATE_CUSTOMER:
        return {
            ...state,
            customerName: action.customerName
        }
        default:
        return state
    }
}
