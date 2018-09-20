import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {updateUser, apiRequest} from './actions/users-actions';
import {createSelector } from 'reselect';




class App extends Component {

  
    constructor(props) {
      super(props);

      this.onUpdateUser = this.onUpdateUser.bind(this);
      this.onUpdateUser2 = this.onUpdateUser2.bind(this);
    }
// componentDidMount() {
//   this.props.onApiRequest();
// }
    onUpdateUser() {
      this.props.onUpdateUser("Chomik")
  }
  onUpdateUser2(e) {
    this.props.onUpdateUser2(e.target.value)
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {this.onUpdateUser}>Update user</button>
        <div></div>
        <div>
        <input onChange = {this.onUpdateUser2} />
        <div>  {this.props.user}</div>
        
        </div>
        
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
);
const userSelector = createSelector(
  state => state.user,
  user=> user
);
const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
);

//PRZED INSTALACJA RESELECT
//lapiemy propsy z index.js jako drugi arg
// const mapStateToProps = (state, props)=> {
//   console.log("props ", props);
//   return {
//     products: state.products,
//    user: state.user,
//    userPlusProp: `${state.user} - ${props.randomProps}`

//   }
// };

const mapActionsToProps = {
  
  onUpdateUser: updateUser,
  onUpdateUser2: updateUser,
  onApiRequest: apiRequest
 
}


// BEFORE INSTALATION OF REDUX THUNK
// const mapActionsToProps = (dispatch,props)=> {
//   console.log(props)

//   return bindActionCreators({
//   onUpdateUser: updateUser,
//   onUpdateUser2: updateUser
//  },dispatch);
// }

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log("mergeProps ",propsFromState, propsFromDispatch, ownProps);
// return{};

// }
export default connect(mapStateToProps,mapActionsToProps)(App)
