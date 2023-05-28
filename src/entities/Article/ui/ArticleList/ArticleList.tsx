import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleList.module.scss";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../../ui/ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getArticlePageHasMore} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import {Text} from "shared/ui/Text/Text";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    page: number;
}

export const ArticleList = memo((props: ArticleListProps) => {

    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
        page,
    } = props;

    const {t} = useTranslation();

    const hasMore = useSelector(getArticlePageHasMore);

    const getSkeletons = (view: ArticleView) => {
        return new Array(view === ArticleView.TILE ? 16 : 6)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton className={styles.card} key={index} view={view}/>
            ))
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={styles.card}
                key={article.id}
            />
        )
    }

    const dispatch = useAppDispatch();

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}

            {hasMore && view !== ArticleView.TILE && (
                <Button theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={() => {
                        dispatch(fetchArticlesList({
                            page: page + 1
                        }))
                    }}
                >
                    Загрузить ещё
                </Button>
            )}

        </div>
    );
});