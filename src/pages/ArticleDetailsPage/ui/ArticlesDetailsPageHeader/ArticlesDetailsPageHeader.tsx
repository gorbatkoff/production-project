import {memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticlesDetailsPageHeader.module.scss";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {getArticleDetailsData} from "entities/Article";
import {getCanEditArticle} from "pages/ArticleDetailsPage";

interface ArticlesDetailsPageHeaderProps {
    className?: string
}

export const ArticlesDetailsPageHeader = memo((props: ArticlesDetailsPageHeaderProps) => {

    const {className} = props;
    const {t} = useTranslation();

    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`)
    }, [article?.id, navigate])

    const canEdit = useSelector(getCanEditArticle)

    return (
        <div className={classNames(styles.ArticlesDetailsPageHeader, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t("Назад к списку")}
            </Button>

            {canEdit && (
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t("Редактировать")}
                </Button>
            )}
        </div>
    );
});