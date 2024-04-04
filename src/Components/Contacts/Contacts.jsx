import React, { Component } from 'react'

 class Contacts extends Component {
  render() {

    const{ Name,Télé} = this.props;
    
    return (
      <div>
        <h1>
          Contacts
        </h1>
        <ul>
          <li>{Name} </li>
          <li>{Télé} </li>
        </ul>
      </div>
    )
  }
  
}
export default Contacts;
