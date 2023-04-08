import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleDetailsPage.module.scss";
import {memo} from "react";

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    );
};

export default memo(ArticleDetailsPage)