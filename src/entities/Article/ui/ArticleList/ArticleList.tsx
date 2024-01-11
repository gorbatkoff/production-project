import {HTMLAttributeAnchorTarget, memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import styles from "./ArticleList.module.scss";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../../ui/ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {useTranslation} from "react-i18next";
import {List, ListRowProps, WindowScroller} from "react-virtualized";
import {PAGE_ID} from "widgets/Page/Page";

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

    const {t} = useTranslation();

    const isBig = view === ArticleView.LIST;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles?.length / itemsPerRow)

    const rowRenderer = ({index, isScrolling, key, style}:ListRowProps) => {

        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                    className={styles.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={styles.row}
            >
                {items}
            </div>
        );
    }

    const getSkeletons = (view: ArticleView) => {
        return new Array(view === ArticleView.TILE ? 16 : 6)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton className={styles.card} key={index} view={view}/>
            ))
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <h3>{t("Статьи не найдены")}</h3>
            </div>
        )
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({width, height, registerChild, isScrolling, scrollTop, onChildScroll}) => (
                <div className={classNames(styles.ArticleList, {}, [className, styles[view]])} ref={registerChild}>
                    <List
                        height={height ?? 700}
                        width={width ? width - 80 : 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        autoHeight={true}
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
