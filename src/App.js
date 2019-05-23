import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateCustomer, addNewCustomer } from './actions/appActions';

class App extends Component {
  addNewObj = e => {
    let { customerList, customerName, addNewCustomer} = this.props;
    customerList.push(customerName);
    addNewCustomer(customerList)
  }
  handleChange = e => {
    let {value,name} = e.target;
    this.props.updateCustomer(value)
  }
  render(){
    let {customerList, customerName} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <ul style={{color:'#fff'}}>
            {customerList && customerList.map(cust => (
              <li>{cust}</li>
            ))}
          </ul>
          
        </header>
        <input type="text" name="customerName" value={customerName} onChange={this.handleChange} />
        <button onClick={this.addNewObj}>Add Customer</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    customerList : state.appReducer.customerList,
    customerName : state.appReducer.customerName
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  updateCustomer,
  addNewCustomer
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(App);
