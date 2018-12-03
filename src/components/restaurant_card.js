import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import _ from 'lodash';
import Map from '../components/Map';

export default class restaurant_card extends Component {
  render() {
    return (
         
      <div>
           <div className="uk-grid uk-grid-collapse search_restaurant_section" style={{ 'marginTop': '50px' }} uk-grid>
                    <div className="uk-width-1-4"></div>
                    <div className="uk-width-1-2@s">
                    <div className="uk-width-1-1" style={{'paddingLeft': '5px', 'paddingRight': '5px'}}>
                        {this.props.restaurant_found ? (

                        <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
                       
                        <h3 className="uk-card-title"><Link
                                to={{
                                    pathname: "/restaurants/restaurant",
                                    state: { restaurant: this.props.restaurant }
                                }}
                            >{this.props.restaurant.name}</Link></h3>
                            
                            <div style={{'marginBottom': '20px'}}>
                            <span uk-icon="icon: home; ratio: 1.5"></span>
                            <span className="uk-text-middle" style={{'margin-left': '15px'}}>{this.props.restaurant.address}, {this.props.restaurant.city}</span>
                            </div>

                            <div className="uk-flex-last uk-card-media-right uk-cover-container map_container">
                                            <Map restaurant_address={this.props.restaurant.address} restaurant_city={this.props.restaurant.city}/>
                                            <canvas width="600" height="400"></canvas>
                                        </div>
                       
                            
    
                        </div>

                            
                        ) : (null)}
                    </div>
                    </div>
                    <div className="uk-width-1-4"></div>
                </div>
            </div>
    )
                            
  }
}
