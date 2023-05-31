import {HTMLAttributeAnchorTarget, memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import styles from "./ArticleList.module.scss";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../../ui/ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {useTranslation} from "react-i18next";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    page?: number;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {

    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
        target
    } = props;

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
                target={target}
            />
        )
    }

    const {t} = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <h3>{t("Статьи не найдены")}</h3>
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}

        </div>
    );
});