import {createEntityAdapter, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {Article, ArticleView} from "entities/Article";
import {ArticlePageSchema} from "pages/ArticlesPage";
import {fetchArticlesList} from "../services/fetchArticlesList/fetchArticlesList";
import {ARTICLEVIEW_LOCALSTORAGE_KEY} from "shared/const/localStorage";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState())

const articlesPageSlice = createSlice({
    name: "articlesPageSlice",
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
        page: 1,
        hasMore: true,
        _inited: false
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload

            localStorage.setItem(ARTICLEVIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLEVIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 3 : 9;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled, (
                    state,
                    action: PayloadAction<Article[]>
                ) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                    state._inited = true
                })

            .addCase(fetchArticlesList.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload
                })
    },
});

export const {reducer: articlePageReducer} = articlesPageSlice;
export const {actions: articlePageActions} = articlesPageSlice;