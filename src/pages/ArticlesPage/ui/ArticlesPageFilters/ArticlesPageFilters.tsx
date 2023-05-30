import {memo, useCallback, useMemo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import styles from "./ArticlesPageFilters.module.scss";
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypes,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector
} from "entities/Article";
import {articlePageActions} from "../../model/slice/articlePageSlice";
import {useSelector} from "react-redux";
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView
} from "../../model/selectors/articlesPageSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Input} from "shared/ui/Input/Input";
import {Card} from "shared/ui/Card/Card";
import {SortOrder} from "shared/types";
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce";

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {

    const {className} = props;
    const {t} = useTranslation();
    const view = useSelector(getArticlePageView);

    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    const onChangeOrder = useCallback((sort: SortOrder) => {
        dispatch(articlePageActions.setOrder(sort))
        dispatch(articlePageActions.setPage(1))
        fetchData();
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort))
        dispatch(articlePageActions.setPage(1))
        fetchData();
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData();
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleTypes) => {
        dispatch(articlePageActions.setType(value))
        dispatch(articlePageActions.setPage(1))
        fetchData();
    }, [dispatch, fetchData])

    return (
        <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={styles.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t("Поиск")}/>
            </Card>

            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={styles.tabs}
            />
        </div>
    );
});