import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from "../../model/types/Comment";
import {VStack} from "shared/ui/Stack";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;

}

export const CommentList = memo((props: CommentListProps) => {

    const {className, isLoading, comments} = props;
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={Math.round(Math.random() * 1000)}
                    />
                ))
                : <Text description={t("Комментарии отсутствуют")}/>
            }
        </VStack>
    );
});