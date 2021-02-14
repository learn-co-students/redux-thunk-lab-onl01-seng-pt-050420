import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
 
class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    console.log(this.props.catPics) 
=======
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";

class App extends Component {   

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }
  
  render() {
    console.log(this.props.catPics)
>>>>>>> 76d9776789db8e5b32f34b536bccaff9d2f7672c
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* missing component */}
      </div>
    );
  }
}
<<<<<<< HEAD
 
const mapStateToProps = state => {
=======

const mapStateToProps = (state) => {
>>>>>>> 76d9776789db8e5b32f34b536bccaff9d2f7672c
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
<<<<<<< HEAD
 
const mapDispatchToProps = dispatch => {
=======

const mapDispatchToProps = (dispatch) => {
>>>>>>> 76d9776789db8e5b32f34b536bccaff9d2f7672c
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App)
=======

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
>>>>>>> 76d9776789db8e5b32f34b536bccaff9d2f7672c
