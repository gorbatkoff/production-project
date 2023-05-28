import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {articlePageActions} from "pages/ArticlesPage/model/slice/articlePageSlice";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {getArticlePageInited} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

export const initArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        "articlePage/initArticlesPage",
        async (_, thunkApi) => {
            const {
                getState,
                dispatch
            } = thunkApi;

            const inited = getArticlePageInited(getState())

            if (!inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1
                }))
            }
        }
    )