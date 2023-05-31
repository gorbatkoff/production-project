import {memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {ArticleDetails, ArticleList} from "entities/Article";
import styles from "./ArticleDetailsPage.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import {Text, TextSize} from "shared/ui/Text/Text";
import {CommentList} from "entities/Comment";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getArticleComments} from "../../model/slices/ArticleDetailsCommentsSlice";
import {useDispatch, useSelector} from "react-redux";
import {getArticleCommentsError, getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {Page} from "widgets/Page/Page";
import {getArticleRecommendations} from "../../model/slices/ArticleDetailsPageRecommendationsSlice";
import {getArticleRecommendationsIsLoading} from "../../model/selectors/recommendations";
import {fetchArticlesRecommendations} from "../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations";
import {articleDetailsPageReducer} from "../../model/slices";
import {ArticlesDetailsPageHeader} from "../../ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader";

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesDetailsPage: articleDetailsPageReducer
}


const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {

    const {t} = useTranslation("articles-details");
    const {id} = useParams<{ id: string }>();
    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const commentsError = useSelector(getArticleCommentsError)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)

    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticlesRecommendations())
    })

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
                <ArticlesDetailsPageHeader />

                <ArticleDetails id={id}/>

                <Text
                    size={TextSize.L}
                    title={t("Рекомендуем")}
                    className={styles.commentTitle}
                />
                <ArticleList
                    className={styles.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target={"_blank"}
                />
                <Text
                    size={TextSize.L}
                    title={t("Комментарии")}
                    className={styles.commentTitle}
                />

                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)