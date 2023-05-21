import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";
import { getArticleDetailsData } from "entities/Article";
import {fetchCommentsByArticleId} from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>>(
        "articleDetails/addCommentForArticle",
        async (text, thunkApi) => {
            const {
                extra,
                dispatch,
                rejectWithValue,
                getState
            } = thunkApi

            const userData = getUserAuthData(getState()); // Получем 1 раз и
            // не подписываемся на изменения
            const article = getArticleDetailsData(getState()); // Получем 1 раз
            // и не подписываемся на изменения

            if (!userData || !text || !article) {
                return rejectWithValue("No Data!")
            }

            try {
                const response = await extra.api.post<Comment>("/comments/", {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                })

                if (!response.data) {
                    throw new Error()
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data
            } catch (error) {
                console.log(error)
                return rejectWithValue("Error")
            }
        }
    )