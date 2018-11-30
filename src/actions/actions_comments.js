import axios from 'axios';
const POST_COMMENT_URL = 'https://7b9gsutr00.execute-api.us-east-1.amazonaws.com/dev/restaurant/addcomment';

export function commentIsLoading(bool) {
    return {
        type: 'COMMENT_IS_LOADING',
        isLoading: bool
    };
}

export function commentPostError(bool) {
    return {
        type: 'POST_COMMENTS_ERROR',
        hasError: bool
    };
}

export function commentPostedSuccess(comments) {
    return {
        type: 'POST_COMMENTS_SUCCESS',
        comments
    };
}

// Get restaurant comments by id
export function postComment(values) {
    return (dispatch) => {
        axios.post(`${POST_COMMENT_URL}`, values)
        .then(response => {
            dispatch(commentPostedSuccess(response))
        })
        .catch(() =>
                dispatch(commentPostError(true)));
    };
}
