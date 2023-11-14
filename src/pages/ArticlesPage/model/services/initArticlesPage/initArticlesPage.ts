import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {articlePageActions} from "../../slice/articlePageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";
import {getArticlePageInited} from "../../selectors/articlesPageSelectors";
import {SortOrder} from "shared/types";
import {ArticleSortField, ArticleTypes} from "entities/Article";

export const initArticlesPage = createAsyncThunk<void,
    URLSearchParams,
    ThunkConfig<string>>(
        "articlePage/initArticlesPage",
        async (searchParams, thunkApi) => {
            const {
                getState,
                dispatch
            } = thunkApi;

            const inited = getArticlePageInited(getState())

            if (!inited) {
                const sortFromUrl = searchParams.get("sort");
                const searchFromUrl = searchParams.get("search");
                const orderFromUrl = searchParams.get("order");
                const typeFromUrl = searchParams.get("type");

                if (orderFromUrl) {
                    dispatch(articlePageActions.setOrder(orderFromUrl as SortOrder))
                }
                if (searchFromUrl) {
                    dispatch(articlePageActions.setSearch(searchFromUrl as string))
                }
                if (sortFromUrl) {
                    dispatch(articlePageActions.setSort(sortFromUrl as ArticleSortField))
                }

                if (typeFromUrl) {
                    dispatch(articlePageActions.setType(typeFromUrl as ArticleTypes))
                }

                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({}))
            }
        }
    )