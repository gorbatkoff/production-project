import {createEntityAdapter, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {Article, ArticleTypes, ArticleView} from "entities/Article";
import {ArticlePageSchema} from "../types/articlePageSchema";
import {fetchArticlesList} from "../services/fetchArticlesList/fetchArticlesList";
import {ARTICLEVIEW_LOCALSTORAGE_KEY} from "shared/const/localStorage";
import {ArticleSortField} from "entities/Article";
import {SortOrder} from "shared/types";

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
        _inited: false,
        limit: 9,
        order: "asc",
        search: "",
        sort: ArticleSortField.CREATED,
        type: ArticleTypes.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload

            localStorage.setItem(ARTICLEVIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setType: (state, action: PayloadAction<ArticleTypes>) => {
            state.type = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLEVIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 3 : 9;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if(action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(
                fetchArticlesList.fulfilled, (
                    state,
                    action
                ) => {
                    state.isLoading = false;
                    state.hasMore = action.payload.length >= state.limit;

                    if (action.meta.arg.replace) {
                        articlesAdapter.setAll(state, action.payload);
                    } else {
                        articlesAdapter.addMany(state, action.payload);
                    }
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