import React, { Component } from 'react';
import Users from '../components/Users';
import API from '../utils/API.js';
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

//filtering

// filterOver = () => {
//     const filterUser = this.state.filterResultOver;
//     const filteredAgeOver = filterUser.filter(user => user.dob.age >= 21);
//     this.setState({showResult: filteredAgeOver});
// }

// filterUnder = () => {
//     const filterUser = this.state.filterResultUnder;
//     const filteredAgeUnder = filterUser.filter(user => user.dob.age <= 21);
//     this.setState({showResult: filteredAgeUnder});
// }

// filter = () => {
//     const currentFilter = this.state.filter;

//     if(currentFilter === '') {
//         this.filterOver();
//         this.setState({filter: 'filteredAgeOver'});
//     }else if (currentFilter === 'filteredAgeOver') {
//         this.filterUnder();
//         this.setState({filter: 'filteredAgeUnder'});
// } else {
//     this.setState({showResult: this.state.result});
//     this.setState({filter: ''});
// }


filterMale = () => {
    const filterUser = this.state.filterResultMale;
    const filteredMale = filterUser.filter(user => user.gender === "male");
    this.setState({showResult: filteredMale});
}

filterFemale = () => {
    const filterUser = this.state.filterResultFemale;
    const filteredFemale = filterUser.filter(user => user.gender === "female");
    this.setState({showResult: filteredFemale});
}

filter = () => {
    const currentFilter = this.state.filter;

    if(currentFilter === '') {
        this.filterMale();
        this.setState({filter: 'male'});
    }
    else if(currentFilter === 'male') {
        this.filterFemale();
        this.setState({filter: 'female'});
        } 
    else {
    this.setState({showResult: this.state.result});
    this.setState({filter: ''});
}
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
                filterMale={this.filterMale}
                filter={this.filter}
                />
            </div>
        );
    }

}

export default UserContainer;