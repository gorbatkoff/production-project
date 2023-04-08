import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticlesPage.module.scss";
import {memo} from "react";

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({className}: ArticlesPageProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(styles.ArticlesPage, {}, [className])}>
            ArticlesPage
        </div>
    );
};

export default memo(ArticlesPage)