import React from 'react';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='container'>
    
      <NavBar />

      <UserContainer />
    </div>
  );
}

export default App;
