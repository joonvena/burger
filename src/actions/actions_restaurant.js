import axios from 'axios';
const GET_RESTAURANTS_URL = 'https://7b9gsutr00.execute-api.us-east-1.amazonaws.com/dev/restaurant/getallrestaurants';
const GET_RESTAURANT_BY_ID = 'https://7b9gsutr00.execute-api.us-east-1.amazonaws.com/dev/restaurants';
const POST_RESTAURANT = 'https://7b9gsutr00.execute-api.us-east-1.amazonaws.com/dev/restaurant';
const GET_RESTAURANT_GRADE_AVG = 'https://7b9gsutr00.execute-api.us-east-1.amazonaws.com/dev/getActualAverage';

export function restaurantIsLoading(bool) {
    return {
        type: 'RESTAURANT_IS_LOADING',
        isLoading: bool
    };
}

export function restaurantIsLoadingError(bool) {
    return {
        type: 'GET_RESTAURANT_ERROR',
        hasError: bool
    };
}

export function restaurantIsLoadingSuccess(restaurants) {
    return {
        type: 'GET_RESTAURANT_SUCCESS',
        restaurants
    };
}

export function addingRestaurant(bool) {
    return {
        type: 'ADD_RESTAURANT',
        wasAdded: bool
    };
}

export function restaurantAddError(bool) {
    return {
        type: 'POST_RESTAURANT_ERROR',
        hasError: bool
    };
}

export function restaurantAdded(restaurants) {
    return {
        type: 'POST_RESTAURANT_SUCCESS',
        restaurants
    };
}

export function averageLoaded(average) {
    return {
        type: 'AVERAGE_LOADED_SUCCESS',
        average
    };
}

// Get all restaurants.
export function getAllRestaurants() {
    return (dispatch) => {
        dispatch(restaurantIsLoading(true));
        axios.get(`${GET_RESTAURANTS_URL}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(restaurantIsLoading(false));
                return response;
            })
            .then((restaurants) => 
                dispatch(restaurantIsLoadingSuccess(restaurants)))
            .catch(() =>
                dispatch(restaurantIsLoadingError(true)));
    };
}

// Get one restaurant by id.
export function getRestaurantById(id) {
    return (dispatch) => {
        dispatch(restaurantIsLoading(true));
        axios.get(`${GET_RESTAURANT_BY_ID}/${id}`, id)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(restaurantIsLoading(false));
                return response;
            })
            .then((restaurants) =>
                dispatch(restaurantIsLoadingSuccess(restaurants)))
            .catch(() =>
                dispatch(restaurantIsLoadingError(true)));
    };
}

// Add new restaurant
export function postRestaurant(values) {
    return (dispatch) => {
        dispatch(addingRestaurant(true));
        axios.post(`${POST_RESTAURANT}`, values)
        .then(response => {
            dispatch(addingRestaurant(false));
            return response;
        })
        .then((restaurant) =>
            dispatch(restaurantAdded(restaurant)))
        .catch(() =>
                dispatch(restaurantAddError(true)));
    };
}

// Get average grade of restaurant
export function getRestaurantReviewAverage(id) {
    return (dispatch) => {
        axios.get(`${GET_RESTAURANT_GRADE_AVG}/${id}`, id)
        .then(response => {
            dispatch(averageLoaded(response))
        })
    };
}