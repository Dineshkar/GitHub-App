import React, { Component } from "react";
import Users from "./components/users/Users";
import Navbar from "./components/Layout/Navbar";
import Search from "./components/users/search";
import axios from 'axios';
import "./App.css";


class App extends Component {

  state = {
    users:[],
    loading:false
  }

  async componentDidMount() {
    this.setState({ loading:true})

    const res = await axios.get('https://api.github.com/users')

    this.setState({users:res.data,loading:false});
  };

  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({users:res.data.items,loading:false});
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <div className ='container'>
      <Search searchUsers = {this.searchUsers}/>
        <Users loading = {this.state.loading} users = {this.state.users} />
      </div>
      </div>

    );
  }
}

export default App;
