import {combineReducers} from 'redux';
import { restaurantIsLoading, restaurantIsLoadingError, restaurantAddError, restaurantAdded, addingRestaurant, restaurants, average }from './reducers_restaurant';
import { commentIsLoading, commentPostError, comments } from './reducers_comments';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    restaurantIsLoading,
    restaurantIsLoadingError,
    restaurantAdded,
    restaurantAddError,
    addingRestaurant,
    restaurants,
    commentIsLoading,
    commentPostError,
    comments,
    average,
    form: formReducer
});