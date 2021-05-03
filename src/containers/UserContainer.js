import React, { Component } from 'react';
import Users from '../components/Users';
import API from '../utils/API';
import './../index.css';

class UserContainer extends Component {
    //holds reponse data state

    state = {
        result: [],
        filter: '',
        filterResultTimezone: [],
        showResult: [],
        alpha: false,
    }

    //get data from API
    getUsers = () => {
        API.search()
        .then(res => {
            this.setState({result: res.data.results});
            this.setState({filterResultTimezone: res.data.results});
            this.setState({showResult: res.data.results}); 
        })
        .catch(err => console.log(err));
    }

sortUsers = () => {
    this.setState({showResult: this.state.showResult.sort(this.comparison)});
    this.setState({alpha: true})
}

  //need to mount the object to the DOM
    componentDidMount (){
        this.getUsers();
    }


    //render
    render () {
        return (
            <div className="header">
                <Users
                users={this.state.showResult}
                sortUsers={this.sortAlpha}
                filter={this.filter}
                />
            </div>
        );
    }

}

export default UserContainer;