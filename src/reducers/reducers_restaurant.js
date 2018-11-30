export function restaurantIsLoading(state = false, action) {
    switch (action.type) {
        case 'RESTAURANT_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function restaurantIsLoadingError(state = false, action) {
    switch (action.type) {
        case 'GET_RESTAURANT_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function addingRestaurant(state = false, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return action.wasAdded;
        default:
            return state;
    }
}

export function restaurantAddError(state = false, action) {
    switch (action.type) {
        case 'POST_RESTAURANT_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function restaurantAdded(state = [], action) {
    switch (action.type) {
        case 'POST_RESTAURANT_SUCCESS':
            return action.restaurants;
        default:
            return state;
    }
}

export function restaurants(state = [], action) {
    switch (action.type) {
        case 'GET_RESTAURANT_SUCCESS':
            return action.restaurants;
        default:
            return state;
    }
}

export function average(state = [], action) {
    switch (action.type) {
        case 'AVERAGE_LOADED_SUCCESS':
            return action.average;
        default:
            return state;
    }
}
