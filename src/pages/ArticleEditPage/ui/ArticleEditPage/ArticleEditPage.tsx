import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ArticleEditPage.module.scss";
import {Page} from "widgets/Page/Page";
import {useParams} from "react-router-dom";

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {

    const {className} = props;
    const {t} = useTranslation();

    const {id} = useParams<{ id: string }>()

    const isEdit = Boolean(id)

    return (
        <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
            {isEdit ? t("Создание статьи с ID = ") + id : t("Создание новой статьи") }
        </Page>
    );
});

export default ArticleEditPage