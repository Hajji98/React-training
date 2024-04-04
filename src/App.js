import React, { Component } from 'react'
import Contacts from './Components/Contacts/Contacts'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  
  render() {

    return (
      <div className='App'>

        <Navbar learbi=" 5"/>
        <Contacts Name="ALI Hajji" Télé="0687442497" />
        <Contacts Name="Najoua Hajji" Télé="0607123717" />
        
      </div>
    )
  }
}
