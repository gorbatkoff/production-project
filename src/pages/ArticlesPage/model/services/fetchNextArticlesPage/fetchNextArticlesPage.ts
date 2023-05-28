import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageLimit,
    getArticlePageNum
} from "../../selectors/articlesPageSelectors";
import {articlePageActions} from "../../slice/articlePageSlice";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        "articlePage/fetchNextArticlesPage",
        async (_, thunkApi) => {
            const {
                getState,
                dispatch
            } = thunkApi;

            const hasMore = getArticlePageHasMore(getState())
            const page = getArticlePageNum(getState())
            const limit = getArticlePageLimit(getState())
            const isLoading = getArticlePageIsLoading(getState())

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1))
                dispatch(fetchArticlesList({
                    page: page + 1
                }))
            }

        }
    )