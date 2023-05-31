import {HTMLAttributeAnchorTarget, memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import styles from "./ArticleListItem.module.scss";
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from "../../model/types/article";
import {Text} from "shared/ui/Text/Text";
import {Icon} from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/images/eye-20-20.svg";
import {Card} from "shared/ui/Card/Card";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {

    const {className, article, view, target} = props;
    const {t} = useTranslation()

    const types = <Text description={article.type.join(", ")} className={styles.types}/>
    const views = (<>
        <Text description={String(article.views)} className={styles.views}/>
        <Icon Svg={EyeIcon}/>
    </>)

    if (view === ArticleView.LIST) {

        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text title={article.user.username} className={styles.username}/>
                        <Text title={article.createdAt} className={styles.date}/>
                    </div>
                    <Text title={article.title} className={styles.title}/>
                    {types}
                    <img src={article.img} className={styles.img} alt={article.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock}/>
                    )}
                    <div className={styles.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.articles_details + article.id}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("Читать далее")}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.articles_details + article.id}
            className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
        >
            <Card>
                <div className={styles.imageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.img}/>
                    <Text description={article.createdAt} className={styles.date}/>
                </div>

                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text description={article.title} className={styles.title}/>
            </Card>
        </AppLink>
    );
});