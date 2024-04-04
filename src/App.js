import React, { Component } from 'react'
import Contacts from './Components/Contacts/Contacts'
import Navbar from './Components/Navbar/Navbar'

export default class App extends Component {

  
  render() {

    return (
      <div className='App'>
        
        <Navbar/>
        <Contacts/>
        
      </div>
    )
  }
}
