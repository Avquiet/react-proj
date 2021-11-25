import { apiUrl } from "../../utils/constants";

export const REQUEST_ARTICLES_LOADING = "REQUEST::ARTICLES_LOADING";
export const REQUEST_ARTICLES_SUCCESS = "REQUEST::ARTICLES_SUCCESS";
export const REQUEST_ARTICLES_FAILURE = "REQUEST::ARTICLES_FAILURE";

export const getArticlesLoading = () => ({
    type: REQUEST_ARTICLES_LOADING,
});

export const getArticlesSucces = (articles) => ({
    type: REQUEST_ARTICLES_SUCCESS,
    payload: articles
});

export const getArticlesFailure = (err) => ({
    type: REQUEST_ARTICLES_FAILURE,
    payload: err
});


export const getArticles = () => async (dispatch) => {
    dispatch(getArticlesLoading())

    try {
        const response = await fetch(apiUrl);
        console.log(response);

        if (!response.ok) {
            throw new Error('failed');
        }

        const result = await response.json();
        dispatch(getArticlesSucces(result));

    } catch(err) {
        console.warn(err);
        dispatch(getArticlesFailure(err.message));
    }
}