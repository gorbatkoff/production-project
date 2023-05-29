import {classNames} from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";
import {memo, useCallback} from "react";
import {ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlePageActions, articlePageReducer, getArticles} from "../../model/slice/articlePageSlice";
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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    // Получаем статьи используя Entity Adapter
    const articles = useSelector(getArticles.selectAll);
    // Диспатчим получение списка статей
    useInitialEffect(() => {
        dispatch(initArticlesPage())
    })

    const onChangeView = (view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    page={page}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage)