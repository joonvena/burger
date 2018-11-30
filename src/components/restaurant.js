import React, { Component } from 'react'

export default class Restaurant extends Component {

    state={
        restaurant: this.props.location.state.restaurant
    }
    componentDidMount(){
    
    }

//Tähän sitten sitä smooth UI:ta

  render() {
    return (
      <div>
        <p>{this.state.restaurant.name}</p>
        <p>{this.state.restaurant.address}</p>
        <p>{this.state.restaurant.phone}</p>
      </div>
    )
  }
}
