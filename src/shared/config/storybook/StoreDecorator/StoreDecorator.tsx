import {Story} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "features/addCommentForm/model/slice/addCommentFormSlice";
import {articleDetailsPageReducer} from "pages/ArticleDetailsPage/model/slices";
import {profileReducer} from "features/editableProfileCard/model/slice/profileSlice";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
            <StoryComponent/>
        </StoreProvider>
    )
}