import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import {ArticleDetailsSchema} from "entities/Article";
import {
    ArticleDetailsCommentsSchema,
    ArticleDetailsPageRecommendationsSchema,
    ArticlesDetailsPageSchema
} from "pages/ArticleDetailsPage";
import {AddCommentFormSchema} from "features/addCommentForm";
import {ArticlePageSchema} from "pages/ArticlesPage";
import {ScrollSaveSchema} from "features/scrollSave/model/types/scrollSave";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: ScrollSaveSchema;

    // Асинхронные редьюсеры
    profile?: ProfileSchema;
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePage?: ArticlePageSchema;
    articlesDetailsPage?: ArticlesDetailsPageSchema; // Сгруппрированный редьюсер
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}