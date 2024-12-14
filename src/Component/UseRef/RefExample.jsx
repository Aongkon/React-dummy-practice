import React, { Component, createRef } from "react";

export default class RefExample extends Component {

    constructor(props) {
        super(props)
        this.userNameRef = createRef()
        this.state = {}
    }
    
    
     handleSubmit = (event) =>{
        event.preventDefault()//submit er jonno preventDefault use kora lage
        console.log(this.userNameRef.current.value)
        this.userNameRef.current.style.background = "green"
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form_div">
          <label htmlFor="userName">User Name:</label>
          <input type="text" id="helloInput" ref={this.userNameRef}></input>
        </div>

        <div className="form_div">
          <label htmlFor="password">Password:</label>
          <input type="password" id="helloInput"></input>
        </div>

        <button type="submit">Save</button>
      </form>
    );
  }
}

//Ref directly dom k manupolate kore

//tbe eta khob kom korai vhalo karon eta directly chole ashe ja dom er performance komia dey slow kaj kore
