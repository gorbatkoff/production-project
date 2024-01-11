import {classNames} from "shared/lib/classNames/classNames";

import {memo, useCallback} from "react";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePageReducer} from "../../model/slice/articlePageSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Page} from "widgets/Page/Page";
import {fetchNextArticlesPage} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {ArticlesPageFilters} from "../ArticlesPageFilters/ArticlesPageFilters";
import {ArticleInfiniteList} from "../ArticleInfiniteList/ArticleInfiniteList";

import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlePage: articlePageReducer
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={styles.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)