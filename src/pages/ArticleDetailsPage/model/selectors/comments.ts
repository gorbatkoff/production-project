import {StateSchema} from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.isLoading;
}
export const getArticleCommentsError = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.error;
}