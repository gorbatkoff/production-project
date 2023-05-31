import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article, ArticleTypes} from "entities/Article";
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType
} from "../../selectors/articlesPageSelectors";
import {addQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>>(
        "articlePage/fetchArticlesList",
        async (props, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkApi
            const page = getArticlePageNum(getState())
            const limit = getArticlePageLimit(getState())
            const sort = getArticlePageSort(getState())
            const order = getArticlePageOrder(getState())
            const search = getArticlePageSearch(getState())
            const type = getArticlePageType(getState())

            try {
                addQueryParams({sort, order, search, type})
                const response = await extra.api.get<Article[]>("/articles/", {
                    params: {
                        _expand: "user",
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleTypes.ALL ? undefined : type
                    }
                })

                if (!response.data) {
                    throw new Error();
                }

                return response.data
            } catch (error) {
                return rejectWithValue("Error")
            }
        }
    )