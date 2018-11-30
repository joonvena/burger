import React, { Component } from 'react'
import _ from 'lodash';
import {connect} from 'react-redux';

class SearchBox extends Component {

    render() {
        return (
            <div>
                <div class="uk-grid uk-grid-collapse search_restaurant_section" uk-grid>
                                <div class="uk-width-1-4"></div>
                                <div class="uk-width-1-2">
                                        <form class="uk-search uk-search-large uk-width-1-1">

                                                <input class="uk-search-input search_bar" style={{'paddingLeft': '20px'}} type="search" placeholder="Hae ravintolaa..." />
                                            </form>
                                    </div>
                                <div class="uk-width-1-4"></div>
                            </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        hasError: state.restaurantIsLoadingError,
        isLoading: state.restaurantIsLoading
    };
};


export default connect(mapStateToProps)(SearchBox);