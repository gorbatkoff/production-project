import {StateSchema} from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articlesDetailsPage?.recommendations?.isLoading
}
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articlesDetailsPage?.recommendations?.error
}