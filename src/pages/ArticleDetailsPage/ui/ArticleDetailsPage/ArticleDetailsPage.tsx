import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {ArticleDetails} from "entities/Article";
import styles from "./ArticleDetailsPage.module.scss";
import {useParams} from "react-router-dom";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {Page} from "widgets/Page/Page";
import {articleDetailsPageReducer} from "../../model/slices";
import {ArticlesDetailsPageHeader} from "../../ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader";
import {VStack} from "shared/ui/Stack";
import {ArticleRecommendationsList} from "features/articleRecommendationsList";
import {ArticleDetailsComments} from "../../ui/ArticleDetailsComments/ArticleDetailsComments";

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesDetailsPage: articleDetailsPageReducer
}


const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation("articles-details");
    const {id} = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16">
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)