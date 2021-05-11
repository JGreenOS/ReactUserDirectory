import React, { Component } from 'react';
import Users from '../components/Users';
import API from '../utils/API';
import './../index.css';

class UserContainer extends Component {
    //holds reponse data state

    state = {
        result: [],
        filter: '',
        filterResultLocation: [],
        showResult: [],
        alpha: false,
    }

    //get data from API
    getUsers = () => {
        API.search()
        .then(res => {
            this.setState({result: res.data.results});
            this.setState({filterResultLocation: res.data.results});
            this.setState({showResult: res.data.results}); 
        })
        .catch(err => console.log(err));
    }

//function to sort by location
    compare = (a, b) => {
        const locationA = a.location.state();
        const locationB = b.location.state();

        let compare = 0;
        if( locationA > locationB) {
            compare = 1;
        } else if(locationA < locationB) {
            compare = -1;
        }
        return compare;
    }

//magic code to sort the array of locations and sort it alphabetically
sortUsers = () => {
    this.setState({showResult: this.state.showResult.sort(this.compare)});
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