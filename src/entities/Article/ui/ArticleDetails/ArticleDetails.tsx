import {memo, useCallback, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import styles from "./ArticleDetails.module.scss";
import EyeIcon from "shared/assets/images/eye-20-20.svg";
import CalendarIcon from "shared/assets/images/calendar-20-20.svg";
import {classNames} from "shared/lib/classNames/classNames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Icon} from "shared/ui/Icon/Icon";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {
    ArticleCodeBlockComponent,
} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {HStack, VStack} from "shared/ui/Stack";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {className, id} = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        default:
            return null;
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id])

    let content;

    if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t("Произошла ошибка при загрузке статьи")}
            />
        )
    } else if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} border={"50%"}/>
                <Skeleton className={styles.title} width={300} height={32}/>
                <Skeleton className={styles.skeleton} width={600} height={24}/>
                <Skeleton className={styles.skeleton} width="100%" height={200}/>
                <Skeleton className={styles.skeleton} width="100%" height={200}/>
            </>
        )
    } else {
        content = (
            <>
                <HStack justify="center" max className={styles.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={styles.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        className={styles.title}
                        title={article?.title}
                        description={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon className={styles.icon} Svg={EyeIcon}/>
                        <Text description={String(article?.views)}/>
                    </HStack>
                    <HStack gap="8">
                        <Icon className={styles.icon} Svg={CalendarIcon}/>
                        <Text description={article?.createdAt}/>
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack gap="16" className={classNames(styles.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});