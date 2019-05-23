import React from 'react';

import * as types from '../Utils/constants';

export const updateCustomer = (newName) => {
    return{
        type : types.UPDATE_CUSTOMER,
        customerName : newName
    }
}
export const addNewCustomer = (customerList) => {
    return{
        type : types.ADD_NEW_CUSTOMER,
        customerList : customerList
    }
}