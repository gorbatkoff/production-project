import {createEntityAdapter, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {Comment} from "entities/Comment";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchCommentsByArticleId} from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
    ArticleDetailsPageRecommendationsSchema
} from "../types/ArticleDetailsPageRecommendationsSchema";
import {Article} from "entities/Article";
import {fetchArticlesRecommendations} from "pages/ArticleDetailsPage/model/services/fetchArticlesRecommendations/fetchArticlesRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDetailsPage?.recommendations || recommendationsAdapter.getInitialState())

const articleDetailsPageRecommendationsSlice = createSlice({
    name: "articleDetailsPageRecommendationsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesRecommendations.fulfilled, (
                    state,
                    action
                ) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                })

            .addCase(fetchArticlesRecommendations.rejected, (state,
                action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    },
});

export const {reducer: articleDetailsPageRecommendationsReducer} = articleDetailsPageRecommendationsSlice;