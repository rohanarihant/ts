// @flow
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {updateCustomer} from './actions/appActions';
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const mockStore = configureStore();
const store = mockStore();
import * as types from './Utils/constants';
import * as actions from './actions/appActions';
import reducer from './reducers/appReducer';
 configure({ adapter: new Adapter() });
describe('select_actions', () => {
  it('test update customer action to test', () => {
    const customerName = 'rohan'
    const expectedAction = {
      type: types.UPDATE_CUSTOMER,
      customerName
    }
    expect(actions.updateCustomer(customerName)).toEqual(expectedAction)
  })
});
describe('select_reducers', () => {
  let wrapper ;
  let store = {customerList:[],customerName: 'Rohan'}
  it('should return the initial state', () => {
   expect(reducer(undefined,{})).toEqual(
     {
      customerName : 'Rohan',
      customerList : []
     }
   )
  })
  it('should test the update customer', () => {
    expect(
      reducer([], {
        type: types.UPDATE_CUSTOMER,
        customerName: 'Arihant'
      })
    ).toEqual(
      {
        
        customerName : 'Arihant'
      }
    )
})
beforeEach(()=>{
  wrapper = shallow(<App store={store} />)
})
    it('test the dumb comp render',()=>{
      expect(wrapper.length).toEqual(1);
    })
   })
  //  expect(reducer([],{
  //    type: types.UPDATE_CUSTOMER,
  //    customerName: 'Arihant'
  //  })).toEqual(
  //    {
  //      customerList : [],
  //      customerName : 'Arihant'
  //    }
  //  )
  // })


  // configure({ adapter: new Adapter() });
// // import * as AppService from './AppService';
//   describe('test actions',()=>{
// const initialState = {customerList:[],
//   customerName: ''};
// const mockStore = configureStore()
// let store, app
// beforeEach(()=>{
//   store = mockStore(initialState)
//   app = shallow(<App store={store} /> )  
// })
// it('renders Create-React-App logo', () => {
//   expect(app.length).toEqual(1);
//   // expect(app.find('header')).toHaveLength(1);
// });

// if('check add and update customer actions',()=>{
//     const customerName = updateCustomer('rohan');
//     expect(customerName).toEqual({type : types.UPDATE_CUSTOMER,
//       customerName : 'rohan'})

//     });
// })

