import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text} from "shared/ui/Text/Text";

import styles from "./CommentList.module.scss";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from "entities/Comment";

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
            <div className={classNames(styles.CommentList, {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </div>
        );
    }

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={styles.Comment}
                        comment={comment}
                        key={Math.round(Math.random() * 1000)}
                    />
                ))
                : <Text description={t("Комментарии отсутствуют")}/>
            }
        </div>
    );
});