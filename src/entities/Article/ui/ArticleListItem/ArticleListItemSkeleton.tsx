import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./ArticleListItem.module.scss";
import {ArticleView} from "../../model/types/article";
import {Card} from "shared/ui/Card/Card";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
    className?: string,
    view: ArticleView,
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {

    const {className, view} = props;

    if (view === ArticleView.LIST) {

        return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
                <Card>
                    <div className={styles.header}>
                        <Skeleton width={30} height={30} border={"50%"}/>
                        <Skeleton width={80} height={16} className={styles.username}/>
                    </div>
                    <Skeleton width={150} height={24} className={styles.title}/>
                    <Skeleton height={250} className={styles.img}/>
                    <div className={styles.footer}>
                        <Skeleton height={30} width={90}/>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
            <Card>
                <div className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img}/>
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16} className={styles.title}/>
            </Card>
        </div>
    );
});