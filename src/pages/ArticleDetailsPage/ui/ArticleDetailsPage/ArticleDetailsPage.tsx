import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {ArticleDetails} from "entities/Article";

import styles from "./ArticleDetailsPage.module.scss";
import {useParams} from "react-router-dom";

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation("articles-details");

    const {id} = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};

export default memo(ArticleDetailsPage)