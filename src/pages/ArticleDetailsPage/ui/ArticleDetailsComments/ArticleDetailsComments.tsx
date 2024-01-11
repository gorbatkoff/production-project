import {memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text, TextSize} from "shared/ui/Text/Text";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import {CommentList} from "entities/Comment";
import {useDispatch, useSelector} from "react-redux";
import {getArticleComments} from "../../model/slices/ArticleDetailsCommentsSlice";
import {getArticleRecommendations} from "../../model/slices/ArticleDetailsPageRecommendationsSlice";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {VStack} from "shared/ui/Stack";

interface ArticleDetailsCommentsProps {
  className?: string
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {className, id} = props;
    const {t} = useTranslation();

    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    return (
        <VStack gap="16" className={classNames("", {}, [className])}>
            <Text
                size={TextSize.L}
                title={t("Комментарии")}
            />

            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </VStack>
    );
});