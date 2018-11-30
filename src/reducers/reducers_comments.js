export function commentIsLoading(state = false, action) {
    switch (action.type) {
        case 'COMMENT_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function commentPostError(state = false, action) {
    switch (action.type) {
        case 'POST_COMMENTS_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'POST_COMMENTS_SUCCESS':
            return action.comments;
        default:
            return state;
    }
}