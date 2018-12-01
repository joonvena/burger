import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';

export default class restaurant_card extends Component {
  render() {
    return (
      <div>

           <div class="uk-grid uk-grid-collapse search_restaurant_section" style={{ 'marginTop': '50px' }} uk-grid>
                    <div class="uk-width-1-4"></div>
                    <div class="uk-width-1-2">
                        {this.props.restaurant_found ? (

                            <Link
                                to={{
                                    pathname: "/restaurants/restaurant",
                                    state: { restaurant: this.props.restaurant }
                                }}
                            >{this.props.restaurant.name}</Link>
                        ) : (null)}
                    </div>
                    <div class="uk-width-1-4"></div>
                </div>
            </div>
    )
  }
}
