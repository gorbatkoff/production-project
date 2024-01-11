import {memo} from "react";
import {useSelector} from "react-redux";
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageNum,
    getArticlePageView
} from "../../model/selectors/articlesPageSelectors";
import {getArticles} from "../../model/slice/articlePageSlice";
import {ArticleList} from "entities/Article";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {className} = props;

    const {t} = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const page = useSelector(getArticlePageNum);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return <Text theme={TextTheme.ERROR} title={t("Error loading article")} />
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            page={page}
            className={className}
        />
    );
});