import React, { Component } from 'react';
import Users from '../components/Users';
import API from '../utils/API.js';
import './../index.css';

class UserContainer extends Component {
    //holds reponse data state

    state = {
        result: [],
        filter: '',
        filterOver: [],
        filterUnder: [],
        showResult: [],
        alpha: true,  
    };


    //get data from API
    getUsers = () => {
        API.search()
        .then(res => {
            this.setState({result: res.data.results});
            this.setState({filterUnder: res.data.results});
            this.setState({filterOver: res.data.results});
            this.setState({showResult: res.data.results}); 
        })
        .catch(err => console.log(err));
    }


  //sorting
    comparison = (a, b) => {
    const userA = a.name.last.toLowerCase(), userB = b.name.last.toLowerCase();
        const comparison = 0;

    if(userA > userB) {
    // eslint-disable-next-line no-const-assign
    comparison = 1;
        } else if (userA < userB) {
    // eslint-disable-next-line no-const-assign
    comparison = -1;
        } 
        return comparison;
    }

// //sort the array
    sortUsers = () => {
     this.setState({showResult: this.state.showResult.sort(this.comparison)});
        this.setState({alpha: false})
        }
    
// //reverse alpha order sort
    comparisonR = (a, b) => {
        const userA = a.name.last.toLowerCase(), userB = b.name.last.toLowerCase();
        let comparison = 0;
        
        if(userA < userB) {
            comparison = 1;
        } else if (userA > userB) {
            comparison = -1;
        } 
        return comparison *-1;
        }
    sortUsersRev = () => {
        this.setState({showResult: this.state.showResult.sort(this.comparisonR)});
        this.setState({alpha: true})
    }

sortUsers = () => {
    if(this.state.alpha === 'true') {
        this.sortUsers();
    } else {
        this.sortUsersRev();
    }
}

//filters

filterOver = () => {
    const filterUser = this.state.filterOver;
    const filterResultOver = filterUser.filter(user => user.dob.age > 33);
    this.setState({showResult: filterResultOver});
}
filterUnder = () => {
    const filterUser = this.state.filterUnder;
    const filterResultUnder = filterUser.filter(user => user.dob.age < 33);
    this.setState({showResult: filterResultUnder});
}

filter = () => {
    const currentFilter = this.state.filter;

    if (currentFilter === '') {
        this.filterOver();
        this.setState({filter:'filterOver'});
    } else if (currentFilter === 'filterOver') {
        this.filterUnder();
        this.setState({filter:'filterUnder'});
    } else {
        this.setState({showResult: this.state.result});
        this.setState({filter: ''});
    }};


componentDidMount(){
    this.getUsers();
}

    
render() {
    return (
            <div className="header">
            <Users users={this.state.showResult}
            sortUsers={this.sortUsers}
            filterOver={this.filterOver}
            filter={this.filter}
            />
            </div>
    )
    }
}
export default UserContainer;