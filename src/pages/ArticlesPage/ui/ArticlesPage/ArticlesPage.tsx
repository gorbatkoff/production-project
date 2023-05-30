import {classNames} from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";
import {memo, useCallback} from "react";
import {ArticleList} from "entities/Article";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePageReducer, getArticles} from "../../model/slice/articlePageSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    getArticlePageIsLoading,
    getArticlePageNum,
    getArticlePageView
} from "../../model/selectors/articlesPageSelectors";
import {Page} from "widgets/Page/Page";
import {fetchNextArticlesPage} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {initArticlesPage} from "../../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageFilters} from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlePage: articlePageReducer
}

const ArticlesPage = ({className}: ArticlesPageProps) => {

    const dispatch = useAppDispatch();
    const page = useSelector(getArticlePageNum);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);

    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    // Получаем статьи используя Entity Adapter
    const articles = useSelector(getArticles.selectAll);
    // Диспатчим получение списка статей
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    page={page}
                    className={styles.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)